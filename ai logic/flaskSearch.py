from flask import Flask, request, jsonify
from openai import OpenAI
import re
import smtplib
import dns.resolver
import json

# Initialize Flask aphp
app = Flask(__name__)

# Initialize OpenAI client for Ollama
try:
    client = OpenAI(
        base_url="http://localhost:11434/v1",
        api_key="ollama"  # Placeholder for Ollama
    )
    try:
        models = client.models.list()
        print("Successfully connected to Ollama API.")
    except Exception as e:
        print(f"Failed to connect to Ollama API: {str(e)}")
        client = None
except Exception as e:
    print(f"Failed to configure Ollama API: {str(e)}")
    client = None

# Define the model to be used
model = "qwen2.5:3b"

class Agent:
    def __init__(self, name, model, instructions):
        self.name = name
        self.model = model
        self.instructions = instructions

    def run(self, message):
        system_message = self.instructions

        try:
            if client is None:
                return {"content": "Ollama API not available. Cannot proceed.", "company_info": {}}

            response = client.chat.completions.create(
                model=self.model,
                messages=[
                    {"role": "system", "content": system_message},
                    {"role": "user", "content": message}
                ],
                temperature=0.7,
                max_tokens=600
            )
            content = response.choices[0].message.content
            print(f"DEBUG: AI Response for {self.name}: {content}")

            company_info = self.extract_company_info(content)
            return {"content": content, "company_info": company_info}
        
        except Exception as e:
            error_message = f"Error calling Ollama: {str(e)}"
            print(error_message)
            return {"content": error_message, "company_info": {}}

    def extract_company_info(self, content):
        companies = []
        entries = re.split(r"(Company Name:)", content, flags=re.IGNORECASE)
        
        for i in range(1, len(entries), 2):
            entry = entries[i] + (entries[i+1] if i+1 < len(entries) else '')
            
            # Extract all fields
            name_match = re.search(r"Company Name:\s*(.+?)(?=\n\w+:|$)", entry, re.IGNORECASE | re.DOTALL)
            email_match = re.search(r"Email:\s*(.+?)(?=\n\w+:|$)", entry, re.IGNORECASE | re.DOTALL)
            phone_match = re.search(r"Phone:\s*(.+?)(?=\n\w+:|$)", entry, re.IGNORECASE | re.DOTALL)
            address_match = re.search(r"Address:\s*(.+?)(?=\n\w+:|$)", entry, re.IGNORECASE | re.DOTALL)
            field_match = re.search(r"Field:\s*(.+?)(?=\n\w+:|$)", entry, re.IGNORECASE | re.DOTALL)
            desc_match = re.search(r"Description:\s*(.+?)(?=\n\w+:|$)", entry, re.IGNORECASE | re.DOTALL)

            company_data = {
                "name": name_match.group(1).strip() if name_match else None,
                "email": email_match.group(1).strip() if email_match else None,
                "phone": phone_match.group(1).strip() if phone_match else None,
                "address": address_match.group(1).strip() if address_match else None,
                "field": field_match.group(1).strip() if field_match else None,
                "description": desc_match.group(1).strip() if desc_match else None
            }

            if company_data["name"] and company_data["email"] and company_data["phone"]:
                companies.append(company_data)
                
        return companies

    @staticmethod
    def verifymail(email):
        try:
            domain = email.split('@')[1]
            mx_records = dns.resolver.resolve(domain, 'MX')
            mx_host = str(mx_records[0].exchange)
            server = smtplib.SMTP()
            server.connect(mx_host)
            server.helo()
            server.mail('test@yourdomain.com')
            code, message = server.rcpt(email)
            server.quit()
            return code == 250
        except Exception as e:
            print(f"Email verification error: {e}")
            return False

research_agent = Agent(
    name="CompanyResearchAgent",
    model=model,
    instructions="""
    You are a web research agent designed to find companies based on location and service type.
    Extract and format the following information for each company:
    
    Required Fields:
    - Company Name: Official registered name
    - Email: Valid corporate email address
    - Phone: Valid phone number with country code
    
    Optional Fields (include if available):
    - Address: Physical business address
    - Field: Industry/Service category (e.g., IT Services, Manufacturing)
    - Description: Brief overview (30-50 words)
    
    Format each entry exactly like this:
    
    Company Name: [Full Company Name]
    Email: [contact@company.com]
    Phone: [+CountryCode Number]
    Address: [Street, City, Country]
    Field: [Primary Industry]
    Description: [Brief company description]
    
    Find at least 40 real companies with valid contact information.
    Prioritize accuracy of required fields over quantity of optional fields.
    """
)

class Swarm:
    def __init__(self, agents=None):
        self.agents = agents or {}
        
    def add_agent(self, agent_name, agent):
        self.agents[agent_name] = agent
        
    def run(self, query):
        results = {}
        research_result = research_agent.run(query)
        
        if "company_info" in research_result:
            results["companies"] = research_result["company_info"]
        else:
            results["research"] = research_result["content"]
        return results



@app.route('/research', methods=['GET'])
def company_research():
    query = request.args.get('query')
    if not query:
        return jsonify({"error": "Missing query parameter"}), 400
    
    swarm = Swarm()
    swarm.add_agent("research", research_agent)
    complete_companies = []
    
    while len(complete_companies) < 5:
        try:
            results = swarm.run(query)
            if "companies" in results:
                for company in results["companies"]:
                    if all(company.get(field) for field in ['name', 'email', 'phone']):
                        # Clean data
                        company['name'] = re.sub(r'[^a-zA-Z0-9\s-]', '', company['name'])
                        company['phone'] = re.sub(r'[^\d+]', '', company['phone'])
                        complete_companies.append(company)
                
                if len(complete_companies) < 5:
                    print(f"Collected {len(complete_companies)} valid companies...")
            else:
                print("No companies found in attempt...")
                
        except Exception as e:
            print(f"Processing error: {str(e)}")
    
    if complete_companies:
        with open('companiesSaved.json', 'w') as f:
            json.dump(complete_companies, f, indent=2)
        return jsonify({
            "status": "success",
            "query": query,
            "count": len(complete_companies),
            "companies": complete_companies
        })
    else:
        return jsonify({
            "status": "error",
            "message": "No complete company profiles found after multiple attempts"
        }), 404





if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)