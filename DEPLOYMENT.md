# OptiLogix Deployment Guide

## Quick Deployment Options

### Frontend (Vercel/Netlify)

**Vercel:**
1. Push code to GitHub
2. Import project on Vercel
3. Set root directory to `frontend`
4. Build command: `npm run build`
5. Output directory: `dist`
6. Add environment variables in Vercel dashboard

**Netlify:**
1. Connect GitHub repo
2. Base directory: `frontend`
3. Build command: `npm run build`
4. Publish directory: `frontend/dist`

### Backend Services (Render/Railway)

**Payment Backend (Node.js):**
- Root directory: `backend`
- Build command: `npm install`
- Start command: `npm start`
- Add environment variables (Razorpay keys)

**AI Chatbot (Python):**
- Root directory: `backendOmni`
- Build command: `pip install -r requirements.txt`
- Start command: `python index.py`

**Email Service (Python):**
- Root directory: `email_backend`
- Build command: `pip install -r requirements.txt`
- Start command: `python app.py`

**TrackSmart Backend (Node.js):**
- Root directory: `tracksmart_backend`
- Build command: `npm install`
- Start command: `node index.js`

## Environment Variables

### Payment Backend (backend/)
```
NODE_ENV=production
PORT=5055
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

### TrackSmart Backend (tracksmart_backend/)
```
PORT=3001
```

### AI Chatbot Backend (backendOmni/)
```
PORT=5000
PYTHON_VERSION=3.11.0
```

### Email Service Backend (email_backend/)
```
PORT=5002
SENDER_EMAIL=your-email@gmail.com
SENDER_PASSWORD=your_gmail_app_password
```

### Frontend (Vercel)
```
# Firebase Config
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=G-XXXXXXXXXX

# Backend URLs (Replace with your Render URLs)
VITE_BACKEND_URL=https://your-payment-backend.onrender.com
VITE_TRACKSMART_API_URL=https://your-tracksmart.onrender.com
VITE_BECKN_API_URL=https://your-tracksmart.onrender.com
VITE_AI_CHATBOT_URL=https://your-ai-chatbot.onrender.com
VITE_EMAIL_SERVICE_URL=https://your-email-service.onrender.com

# Other APIs
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_key
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
VITE_YOUR_GMAIL=your-email@gmail.com
```

## Live Demo

After deployment, update README.md with your live links:
- Frontend: https://your-app.vercel.app
- Backend API: https://your-backend.onrender.com
