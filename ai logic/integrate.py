from flask import Flask, request, jsonify, render_template_string, send_from_directory
from openai import OpenAI
import re
import smtplib
import dns.resolver
import json
import os
import time
from werkzeug.utils import secure_filename
import tempfile
import uuid
from flask_cors import CORS


app = Flask(__name__)

CORS(app, origins="http://localhost:3000")
# Initialize OpenAI clients
try:
    ollama_client = OpenAI(
        base_url="http://localhost:11434/v1",
        api_key="ollama"
    )
    try:
        models = ollama_client.models.list()
        print("Successfully connected to Ollama API.")
    except Exception as e:
        print(f"Failed to connect to Ollama API: {str(e)}")
        ollama_client = None
except Exception as e:
    print(f"Failed to configure Ollama API: {str(e)}")
    ollama_client = None


openai_client = OpenAI()

model = "qwen2.5:3b"

audio_dir = os.path.join("static", "audio")
os.makedirs(audio_dir, exist_ok=True)

HTML_TEMPLATE = '''
<!DOCTYPE html>
<html>
<head>
    <title>Sales Partner Finder</title>
    <style>
        body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
        #chat-container { border: 1px solid #ccc; border-radius: 10px; padding: 20px; }
        #messages { height: 400px; overflow-y: auto; margin-bottom: 20px; }
        .message { margin: 10px 0; padding: 10px; border-radius: 5px; }
        .user { background: #e3f2fd; margin-left: 20%; }
        .bot { background: #f5f5f5; margin-right: 20%; }
        #progress { margin-top: 10px; color: #666; }
        #record-button { margin-left: 10px; }
        #record-button.recording { background-color: red; color: white; }
    </style>
</head>
<body>
    <div id="chat-container">
        <div id="messages"></div>
        <input type="text" id="user-input" placeholder="Type your message...">
        <button onclick="sendMessage()">Send</button>
        <button id="record-button" onclick="toggleRecording()">🎤 Record</button>
        <div id="progress"></div>
    </div>

    <script>
        let threadId = null;
        let mediaRecorder;
        let audioChunks = [];

        async function initializeChat() {
            try {
                const response = await fetch('/start', { method: 'POST' });
                const data = await response.json();
                threadId = data.thread_id;
                addBotMessage(data.initial_message);
            } catch (error) {
                console.error('Error initializing chat:', error);
            }
        }

        async function sendMessage() {
            const input = document.getElementById('user-input');
            const messagesDiv = document.getElementById('messages');
            
            if (!input.value.trim()) return;
            
            messagesDiv.innerHTML += `<div class="message user">${input.value}</div>`;
            const userInput = input.value;
            input.value = '';
            
            try {
                const response = await fetch('/chat', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ thread_id: threadId, message: userInput, is_voice: false })
                });
                const data = await response.json();
                addBotMessage(data.response, data.audio_url);
                
                if (data.progress) {
                    document.getElementById('progress').textContent = data.progress;
                }
                
                if (data.response.includes('🚀')) {
                    showSummary();
                }
            } catch (error) {
                console.error('Error sending message:', error);
            }
        }

        function addBotMessage(text, audio_url) {
            const messagesDiv = document.getElementById('messages');
            messagesDiv.innerHTML += `<div class="message bot">${text}</div>`;
            if (audio_url) {
                const audio = new Audio(audio_url);
                audio.play();
            }
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }

        async function showSummary() {
            try {
                const response = await fetch(`/summarize/${threadId}`);
                const summary = await response.text();
                alert(`Potential Partner Characteristics:\n\n${summary}`);
                
                const researchResponse = await fetch(`/research?query=${encodeURIComponent(summary)}`);
                const researchData = await researchResponse.json();
                
                if (researchData.status === 'success') {
                    alert(`Found ${researchData.count} companies:\n\n${JSON.stringify(researchData.companies, null, 2)}`);
                } else {
                    alert('Research failed: ' + researchData.message);
                }
            } catch (error) {
                console.error('Error in summary:', error);
            }
        }

        async function toggleRecording() {
            const recordButton = document.getElementById('record-button');
            if (mediaRecorder && mediaRecorder.state === 'recording') {
                mediaRecorder.stop();
                recordButton.textContent = '🎤 Record';
                recordButton.classList.remove('recording');
            } else {
                try {
                    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                    mediaRecorder = new MediaRecorder(stream);
                    audioChunks = [];

                    mediaRecorder.ondataavailable = event => audioChunks.push(event.data);
                    mediaRecorder.onstop = async () => {
                        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                        const formData = new FormData();
                        formData.append('audio', audioBlob, 'recording.wav');

                        try {
                            const response = await fetch('/transcribe', {
                                method: 'POST',
                                body: formData
                            });
                            const data = await response.json();

                            if (data.transcription) {
                                sendVoiceMessage(data.transcription);
                            } else {
                                alert('Transcription failed: ' + data.error);
                            }
                        } catch (error) {
                            alert('Transcription error: ' + error.message);
                        }
                    };

                    mediaRecorder.start();
                    recordButton.textContent = '⏹️ Stop';
                    recordButton.classList.add('recording');
                } catch (error) {
                    alert('Error accessing microphone: ' + error.message);
                }
            }
        }

        async function sendVoiceMessage(transcription) {
            const messagesDiv = document.getElementById('messages');
            messagesDiv.innerHTML += `<div class="message user">${transcription}</div>`;

            try {
                const response = await fetch('/chat', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({ thread_id: threadId, message: transcription, is_voice: true })
                });
                const data = await response.json();
                addBotMessage(data.response, data.audio_url);

                if (data.progress) {
                    document.getElementById('progress').textContent = data.progress;
                }

                if (data.response.includes('🚀')) {
                    showSummary();
                }
            } catch (error) {
                console.error('Error sending voice message:', error);
            }
        }

        window.onload = initializeChat;
    </script>
</body>
</html>
'''

class Agent:
    def __init__(self, name, model, instructions):
        self.name = name
        self.model = model
        self.instructions = instructions

    def run(self, message):
        system_message = self.instructions
        try:
            if ollama_client is None:
                return {"content": "Ollama API not available.", "company_info": {}}

            response = ollama_client.chat.completions.create(
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
Company Name: Official registered name
Email: Valid corporate email address
Phone: Valid phone number with country code

Optional Fields (include if available):
Address: Physical business address
Field: Industry/Service category (e.g., IT Services, Manufacturing)
Description: Brief overview (30-50 words)

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

@app.route('/')
def home():
    return render_template_string(HTML_TEMPLATE)

@app.route('/start', methods=['POST'])
def start_conversation():
    try:
        thread = openai_client.beta.threads.create()
        return jsonify({
            "thread_id": thread.id,
            "initial_message": "🌟 Welcome! Let's find your perfect partners!\n\nFirst, what's your company name?"
        })
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/chat', methods=['POST'])
def handle_chat():
    data = request.json
    thread_id = data.get('thread_id')
    user_message = data.get('message')
    is_voice = data.get('is_voice', False)
    
    if not thread_id or not user_message:
        return jsonify({"error": "Missing required parameters"}), 400
        
    try:
        openai_client.beta.threads.messages.create(
            thread_id=thread_id,
            role="user",
            content=user_message
        )
        run = openai_client.beta.threads.runs.create(
            thread_id=thread_id,
            assistant_id=ASSISTANT_ID
        )
        while True:
            run_status = openai_client.beta.threads.runs.retrieve(
                thread_id=thread_id,
                run_id=run.id
            )
            if run_status.status in ['completed', 'failed', 'cancelled']:
                break
            time.sleep(1)
        messages = openai_client.beta.threads.messages.list(thread_id=thread_id)
        last_message = messages.data[0].content[0].text.value
        messages_list = openai_client.beta.threads.messages.list(thread_id=thread_id).data
        user_messages_count = len([m for m in messages_list if m.role == 'user'])
        total_fields = 10
        
        response_data = {
            "response": last_message,
            "progress": user_messages_count
        }
        if is_voice:
            try:
                speech_file_name = f"{uuid.uuid4()}.mp3"
                speech_file_path = os.path.join("static", "audio", speech_file_name)
                speech_response = openai_client.audio.speech.create(
                    model="tts-1",
                    voice="alloy",
                    input=last_message
                )
                speech_response.stream_to_file(speech_file_path)
                audio_url = f"/static/audio/{speech_file_name}"
                response_data["audio_url"] = audio_url
            except Exception as e:
                print(f"Error generating audio: {e}")
        return jsonify(response_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/transcribe', methods=['POST'])
def transcribe_audio():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400
    audio_file = request.files['audio']
    try:
        with tempfile.NamedTemporaryFile(delete=False, suffix='.wav') as temp_file:
            audio_path = temp_file.name
            audio_file.save(audio_path)
        with open(audio_path, 'rb') as file:
            transcription = openai_client.audio.transcriptions.create(
                model="whisper-1",
                file=file
            )
        os.remove(audio_path)
        return jsonify({"transcription": transcription.text})
    except Exception as e:
        if os.path.exists(audio_path):
            os.remove(audio_path)
        return jsonify({"error": str(e)}), 500

@app.route('/summarize/<thread_id>')
def generate_summary(thread_id):
    try:
        messages = openai_client.beta.threads.messages.list(thread_id=thread_id)
        conversation = "\n".join([m.content[0].text.value for m in messages.data[::-1]])
        response = openai_client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[{
                "role": "user",
                "content": f"""From this conversation:
                {conversation}
                
                Extract the characteristics of the potential partners the user would like to work with and format them as a single line of text with '+' as separator, like 'IT+services+in+berlin'. Include:
                - Industry/sector (e.g., IT)
                - Capabilities/expertise (e.g., services)
                - Location (e.g., in+berlin)
                - Size/scale (if mentioned, e.g., medium)
                - Any other specific traits (if mentioned)
                Replace spaces with nothing and use lowercase for consistency. If a characteristic is not mentioned, skip it but maintain the '+' separator where applicable. Do not include the user's own organization details or unrelated information."""
            }]
        )
        summary_text = response.choices[0].message.content.strip()
        print(f"Generated summary: {summary_text}")
        return jsonify({"summary": summary_text}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/research', methods=['POST'])
def company_research():
    if request.method == 'OPTIONS':
        # Handle preflight request manually if needed
        response = jsonify({"status": "ok"})
        response.headers.add('Access-Control-Allow-Origin', 'http://localhost:3000')
        response.headers.add('Access-Control-Allow-Methods', 'GET, OPTIONS')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type, Accept')
        return response, 200
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

@app.route('/static/audio/<filename>')
def serve_audio(filename):
    return send_from_directory(audio_dir, filename)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)