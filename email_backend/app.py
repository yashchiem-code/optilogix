from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

app = Flask(__name__)
CORS(app) # Enable CORS for all origins

# Load email credentials from environment variables
SENDER_EMAIL = os.environ.get('SENDER_EMAIL')
SENDER_PASSWORD = os.environ.get('SENDER_PASSWORD')

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.get_json()
    if not data:
        return jsonify({'status': 'error', 'message': 'Invalid JSON'}), 400

    receiver_email = data.get('receiver_email')
    subject = data.get('subject')
    body = data.get('body')

    if not all([receiver_email, subject, body]):
        return jsonify({'status': 'error', 'message': 'Missing required email parameters'}), 400

    # For demo/hackathon: If credentials not configured, return mock success
    if not SENDER_EMAIL or not SENDER_PASSWORD:
        print(f"⚠️ Email credentials not configured. Running in DEMO MODE.")
        print(f"📧 Mock Email:")
        print(f"   To: {receiver_email}")
        print(f"   Subject: {subject}")
        print(f"   Body: {body[:100]}...")
        return jsonify({
            'status': 'success', 
            'message': 'Email sent successfully (demo mode)',
            'demo_mode': True
        }), 200

    msg = MIMEMultipart()
    msg['From'] = SENDER_EMAIL
    msg['To'] = receiver_email
    msg['Subject'] = subject
    msg.attach(MIMEText(body, 'plain'))

    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(SENDER_EMAIL, SENDER_PASSWORD)
        server.sendmail(SENDER_EMAIL, receiver_email, msg.as_string())
        print("Email sent successfully!")
        return jsonify({'status': 'success', 'message': 'Email sent successfully!'}), 200
    except Exception as e:
        print(f"Error sending email: {e}")
        # Fallback to demo mode on error
        print(f"📧 Falling back to demo mode")
        return jsonify({
            'status': 'success', 
            'message': 'Email logged (demo mode - SMTP failed)',
            'demo_mode': True,
            'smtp_error': str(e)
        }), 200
    finally:
        if 'server' in locals() and server:
            server.quit()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002)