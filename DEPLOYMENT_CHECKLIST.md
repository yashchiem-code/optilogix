# OptiLogix Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Code Preparation
- [x] All hardcoded localhost URLs replaced with environment variables
- [x] `.env.example` file created for reference
- [x] `gunicorn` added to Python backend requirements
- [ ] Code pushed to GitHub

### 2. Backend Deployments (Render.com)

#### Payment Backend
- [ ] Create Web Service on Render
- [ ] Root Directory: `backend`
- [ ] Build: `npm install`
- [ ] Start: `npm start`
- [ ] Add env vars: `RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`, `NODE_ENV=production`, `PORT=5055`
- [ ] Copy deployed URL: `https://_____.onrender.com`

#### TrackSmart Backend (BECKN)
- [ ] Create Web Service on Render
- [ ] Root Directory: `tracksmart_backend`
- [ ] Build: `npm install`
- [ ] Start: `node index.js`
- [ ] Add env var: `PORT=3001`
- [ ] Copy deployed URL: `https://_____.onrender.com`

#### AI Chatbot Backend
- [ ] Create Web Service on Render
- [ ] Root Directory: `backendOmni`
- [ ] Runtime: Python 3
- [ ] Build: `pip install -r requirements.txt`
- [ ] Start: `gunicorn --bind 0.0.0.0:$PORT index:app`
- [ ] Add env vars: `PORT=5000`, `PYTHON_VERSION=3.11.0`
- [ ] Copy deployed URL: `https://_____.onrender.com`

#### Email Service Backend
- [ ] Create Web Service on Render
- [ ] Root Directory: `email_backend`
- [ ] Runtime: Python 3
- [ ] Build: `pip install -r requirements.txt`
- [ ] Start: `gunicorn --bind 0.0.0.0:$PORT app:app`
- [ ] Add env vars: `PORT=5002`, `SENDER_EMAIL`, `SENDER_PASSWORD` (Gmail app password)
- [ ] Copy deployed URL: `https://_____.onrender.com`

### 3. Firebase Setup
- [ ] Create Firebase project
- [ ] Enable Authentication (Email/Password)
- [ ] Add authorized domain (your Vercel URL)
- [ ] Copy all Firebase config values

### 4. Frontend Deployment (Vercel)

#### Initial Setup
- [ ] Import GitHub repo to Vercel
- [ ] Root Directory: `frontend`
- [ ] Build: `npm run build`
- [ ] Output: `dist`

#### Environment Variables
Add all these to Vercel:
- [ ] All Firebase config vars (7 vars)
- [ ] All backend URLs (5 vars)
- [ ] Google Maps API key
- [ ] Razorpay keys
- [ ] EmailJS config
- [ ] Your Gmail

#### Deploy & Test
- [ ] Click "Deploy"
- [ ] Wait for deployment to complete
- [ ] Copy Vercel URL
- [ ] Add Vercel URL to Firebase authorized domains

### 5. Final Testing
- [ ] Frontend loads without white screen
- [ ] Authentication works (sign up/login)
- [ ] Payment gateway works
- [ ] Dock dispatcher loads data
- [ ] Email notifications work
- [ ] AI chatbot responds

### 6. Update README
- [ ] Add live demo link
- [ ] Add screenshots/demo video
- [ ] Update installation instructions

## 🚀 Quick Deploy Commands

```bash
# 1. Commit all changes
git add .
git commit -m "Fix: Replace hardcoded URLs with environment variables"
git push origin main

# 2. Deploy backends on Render (via dashboard)
# 3. Deploy frontend on Vercel (auto-deploys from GitHub)
# 4. Update Vercel env vars with Render URLs
# 5. Redeploy frontend
```

## 📝 Notes

- Free tier Render services sleep after 15 min inactivity
- First request after sleep takes 30-60 seconds
- Keep all backend URLs handy for frontend env vars
- Test each service individually before full integration

## 🆘 Troubleshooting

**White screen on frontend:**
- Check browser console for errors
- Verify Firebase config in Vercel
- Check if domain is authorized in Firebase

**Backend not responding:**
- Check Render logs
- Verify environment variables
- Ensure service is not sleeping (free tier)

**CORS errors:**
- Update backend CORS config with your Vercel URL
- Redeploy backend after changes
