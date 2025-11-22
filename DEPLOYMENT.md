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

### Backend
```
RAZORPAY_KEY_ID=your_key
RAZORPAY_KEY_SECRET=your_secret
PORT=5000
```

### Frontend
```
VITE_API_URL=https://your-backend.onrender.com
VITE_BECKN_API_URL=https://your-tracksmart.onrender.com
```

## Live Demo

After deployment, update README.md with your live links:
- Frontend: https://your-app.vercel.app
- Backend API: https://your-backend.onrender.com
