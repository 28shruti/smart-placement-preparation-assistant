from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
import google.generativeai as genai
import json
import os

load_dotenv()

app = Flask(__name__)
CORS(app)

# Load API key
GOOGLE_API_KEY = os.environ.get("GOOGLE_API_KEY")

if not GOOGLE_API_KEY:
    raise Exception(
        "❌ GOOGLE_API_KEY is missing. Add it to your environment variables."
    )

# Configure Gemini API
genai.configure(api_key=GOOGLE_API_KEY)


@app.route("/company-ai", methods=["POST"])
def company_ai():
    try:
        data = request.get_json()

        company = data.get("company", "").strip()

        if not company:
            return jsonify({
                "error": "Company name required"
            }), 400

        prompt = f"""
Generate a company preparation guide for {company}.

Return ONLY valid JSON.

The JSON must have exactly these fields:

{{
    "study_material": [],
    "courses": [],
    "certifications": [],
    "interview_questions": [],
    "jobs": []
}}

Rules:
- study_material should contain useful study topics and resources.
- courses should contain relevant courses.
- certifications should contain relevant certifications.
- interview_questions should contain relevant interview questions.
- jobs should contain relevant job roles.
- Every field must be an array.
- Do not use Markdown.
- Do not use ```json.
- Do not add explanations.
- Return valid JSON only.
"""

        # Gemini model
        model = genai.GenerativeModel("models/gemini-2.5-flash")

        # Generate AI response
        response = model.generate_content(
            prompt,
            generation_config={
                "temperature": 0.2,
                "response_mime_type": "application/json"
            }
        )

        # Debug output
        print("\n🔵 RAW RESPONSE OBJECT:")
        print(response)

        print("\n🟢 RESPONSE TEXT:")
        print(response.text)

        # Get response text
        raw_response = response.text.strip()

        # Remove Markdown code fences if Gemini adds them
        if raw_response.startswith("```"):
            raw_response = raw_response.replace("```json", "")
            raw_response = raw_response.replace("```", "")
            raw_response = raw_response.strip()

        # Convert AI response into JSON
        try:
            json_data = json.loads(raw_response)

        except json.JSONDecodeError as json_err:

            print("\n❌ JSON PARSE ERROR:")
            print(json_err)

            print("\n❌ RAW AI RESPONSE:")
            print(raw_response)

            return jsonify({
                "error": "AI returned invalid JSON",
                "raw": raw_response
            }), 500

        # Send JSON back to React
        return jsonify(json_data)

    except Exception as e:

        print("\n🔥 INTERNAL SERVER ERROR:")
        print(e)

        return jsonify({
            "error": str(e)
        }), 500


@app.route("/")
def home():
    return "Backend is running!"


if __name__ == "__main__":
    print("🚀 Starting Flask backend...")
    app.run(
        host="127.0.0.1",
        port=5000,
        debug=True
    )