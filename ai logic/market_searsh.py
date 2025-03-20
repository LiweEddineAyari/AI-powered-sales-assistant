from googlesearch import search
from openai import OpenAI
import requests
import re
import time
import smtplib
import dns.resolver
import json
# Initialize OpenAI client for Ollama
try:
    client = OpenAI(
        base_url="http://localhost:11434/v1",
        api_key="ollama"  # Placeholder for Ollama
    )
    # Test the connection by making an actual API call
    try:
        models = client.models.list()
        print("Successfully connected to Ollama API.")
    except Exception as e:
        print(f"Failed to connect to Ollama API: {str(e)}")
        client = None  # Disable Ollama if connection fails
except Exception as e:
    print(f"Failed to configure Ollama API: {str(e)}")
    client = None

# Define the model to be used
model = "qwen2.5:3b"

# -------------------------------
# Define Agent Class
# -------------------------------

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
                max_tokens=400  # Add max_tokens to limit response size
            )
            content = response.choices[0].message.content
            print(f"DEBUG: AI Response for {self.name}: {content}")  # Debug output

            company_info = self.extract_company_info(content)

            return {
                "content": content,
                "company_info": company_info
            }
        except Exception as e:
            error_message = f"Error calling Ollama: {str(e)}"
            print(error_message)
            return {"content": error_message, "company_info": {}}

    def extract_company_info(self, content):
        """Extract company name, email, and phone from the content."""
        company_name = None
        email = None
        phone = None
        companies = []
        
        # Split content into company entries based on a separator (e.g., "Company Name:")
        entries = re.split(r"(Company Name:)", content, flags=re.IGNORECASE)
        
        # Iterate through the entries, extracting information for each company
        for i in range(1, len(entries), 2):
            entry = entries[i] + entries[i + 1] if i + 1 < len(entries) else entries[i]  # Ensure the separator is included
            
            # Extract company name
            name_match = re.search(r"Company Name:\s*([^\n]+)", entry, re.IGNORECASE)
            company_name = name_match.group(1).strip() if name_match else None
            
            # Extract email
            email_match = re.search(r"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}", entry)
            email = email_match.group(0) if email_match else None
            
            # Extract phone number
            phone_match = re.search(r"\+?[0-9][0-9\s\-\(\)]{7,}", entry)
            phone = phone_match.group(0) if phone_match else None
            
            # Append extracted information to the list of companies
            if company_name or email or phone:
                companies.append({
                    "name": company_name,
                    "email": email,
                    "phone": phone
                })
        return companies

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
            print(f"Error: {e}")
            return False
# -------------------------------
# Define Research Agent
# -------------------------------

research_agent = Agent(
    name="CompanyResearchAgent",
    model=model,
    instructions="""
    You are a web research agent designed to find companies based on a location and service type.
    Your goal is to identify and extract at least ten company names, email addresses, and phone numbers and they need to be real and exists its important.
    
    When you find a company, extract:
    - Company Name: The name of the company that is available publicly
    - Email: The contact email address that is available publicly and should exist in the real life
    - Phone: The contact phone number that is available publicly
    
    Present your findings for each company like this:
    
    Company Name: [Company Name]
    Email: [Email Address]
    Phone: [Phone Number]
    
    Try your best to find at least 40 real companies with their real  name,mail and phone number i want the 3 fields name,mail and phone to be present and not null . focus on finding the companies from the internet with their name,mail and phine pls , its important to give me that list with real data 
    """

    
)

# -------------------------------
# Define Swarm Class
# -------------------------------

class Swarm:
    def __init__(self, agents=None):
        self.agents = agents or {}
        
    def add_agent(self, agent_name, agent):
        self.agents[agent_name] = agent
        
    def run(self, query):
        results = {}
        
        research_result = research_agent.run(query)
        print(f"DEBUG: Research Result: {research_result['content']}")  # Debug output
        
        if "company_info" in research_result:
            companies = research_result["company_info"]
            results["companies"] = companies
        else:
            results["research"] = research_result["content"]

        return results

# -------------------------------
# Main Execution
# -------------------------------

def main():
    swarm = Swarm()
    swarm.add_agent("research", research_agent)
    
    print("Company Research Swarm")
    print("---------------------")
    
    while True:
        query = input("\nEnter your search query (or 'quit' to exit): ")
        if query.lower() == 'quit':
            break
        
        complete_companies = []
        
        while len(complete_companies) < 5:
            print("\nProcessing query...")
            try:
                results = swarm.run(query)
                
                if "companies" in results:
                    companies = results["companies"]
                    for company in companies:
                        if company.get('name') and company.get('email') and company.get('phone'):
                            company['name'] = re.sub(r'[^a-zA-Z0-9\s-]', '', company['name'])
                            phone = company.get('phone', '')
                            company['phone'] = re.sub(r'[()\s\n-]', '', phone) if phone else None                           
                            complete_companies.append(company)
                    
                    if len(complete_companies) < 5:
                        print(f"Found {len(complete_companies)} complete companies so far. Trying again...")
                else:
                    print("No company information found. Trying again...")
                    
            except Exception as e:
                print(f"Error: {str(e)}")
                print("Trying again...")
        
        if complete_companies:
            print("\nCompany Information:")
            for i, company in enumerate(complete_companies, 1):
                print(f"\nCompany {i}:")
                print(f"  Name: {company.get('name', 'Not found')}")
                print(f"  Email: {company.get('email', 'Not found')}")
                print(f"  Phone: {company.get('phone', 'Not found')}")
            with open('companiesSaved.json', 'w') as json_file:
                json.dump(complete_companies, json_file, indent=4)
            print("\nCompany data saved to 'companiesSaved.json'.")  
            break  
        else:
            print("No complete company information found.")

if __name__ == "__main__":
    main()

