# Deployment Guide

## Prerequisites
- GitHub account
- Vercel account (free)
- Render account (free)

---

## Part 1: Deploy Backend to Render

### Step 1: Prepare Backend for Deployment

1. Make sure `backend/package.json` has the start script:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

### Step 2: Push to GitHub

```bash
# Initialize git (if not already done)
git init
git add .
git commit -m "Initial commit"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### Step 3: Deploy on Render

1. Go to [render.com](https://render.com) and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** `portfolio-backend` (or any name)
   - **Root Directory:** `backend`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free

5. Add Environment Variables:
   - Click "Environment" tab
   - Add these variables:
     ```
     EMAIL_USER=your-email@gmail.com
     EMAIL_PASS=your-gmail-app-password
     RECEIVER_EMAIL=shrutild67@gmail.com
     PORT=5000
     ```

6. Click "Create Web Service"

7. Wait for deployment (5-10 minutes)

8. **Copy your backend URL** (e.g., `https://portfolio-backend-xxxx.onrender.com`)

---

## Part 2: Update Frontend with Backend URL

### Step 1: Update Contact Component

1. Open `frontend/src/components/Contact.jsx`

2. Find this line (around line 33):
```javascript
const response = await axios.post('http://localhost:5000/api/contact', formData);
```

3. Replace with your Render backend URL:
```javascript
const response = await axios.post('https://portfolio-backend-xxxx.onrender.com/api/contact', formData);
```

4. Save the file

5. Commit changes:
```bash
git add .
git commit -m "Update backend URL for production"
git push
```

---

## Part 3: Deploy Frontend to Vercel

### Step 1: Prepare Frontend

Make sure `frontend/package.json` has build script:
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in

2. Click "Add New..." → "Project"

3. Import your GitHub repository

4. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `frontend`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`

5. Click "Deploy"

6. Wait for deployment (2-5 minutes)

7. Your site is live! 🎉

---

## Part 4: Custom Domain (Optional)

### For Vercel (Frontend):
1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

### For Render (Backend):
1. Go to your service settings
2. Click "Custom Domains"
3. Add your domain
4. Update DNS records

---

## Important Notes

### Free Tier Limitations

#### Render (Backend):
- Spins down after 15 minutes of inactivity
- First request after inactivity takes ~30-60 seconds (cold start)
- 750 hours/month free

**Solution:** Use a service like [UptimeRobot](https://uptimerobot.com) to ping your backend every 10 minutes

#### Vercel (Frontend):
- No cold starts
- Unlimited bandwidth
- 100GB bandwidth/month

### CORS Configuration

If you get CORS errors, make sure your `backend/server.js` has:

```javascript
app.use(cors({
  origin: ['https://your-vercel-domain.vercel.app', 'http://localhost:5173'],
  credentials: true
}));
```

---

## Testing After Deployment

### 1. Test Frontend
- Visit your Vercel URL
- Check all sections load correctly
- Test theme toggle
- Check responsive design on mobile

### 2. Test Contact Form
- Fill out the contact form
- Submit
- Check if you receive an email
- If not, check Render logs for errors

### 3. Check Render Logs
1. Go to Render dashboard
2. Click your service
3. Go to "Logs" tab
4. Look for any errors

---

## Troubleshooting

### Backend Not Responding
**Problem:** Contact form not working

**Solutions:**
1. Check if backend is running (visit `YOUR_BACKEND_URL/api/health`)
2. Check Render logs for errors
3. Verify environment variables are set correctly
4. Make sure EMAIL_USER and EMAIL_PASS are correct

### CORS Errors
**Problem:** Browser console shows CORS error

**Solution:**
Update CORS configuration in `backend/server.js`:
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || '*'
}));
```

Add `FRONTEND_URL` environment variable in Render

### Resume Not Downloading
**Problem:** Resume download gives 404

**Solution:**
- Make sure `resume.pdf` is in `frontend/public/`
- Rebuild and redeploy frontend

### Animations Not Working
**Problem:** Framer Motion animations not showing

**Solution:**
- Clear browser cache
- Check browser console for errors
- Verify Framer Motion is installed

---

## Environment Variables Checklist

### Backend (Render)
- [ ] EMAIL_USER
- [ ] EMAIL_PASS
- [ ] RECEIVER_EMAIL
- [ ] PORT=5000

### Frontend (Vercel)
- [ ] No environment variables needed (all static)

---

## Post-Deployment Checklist

- [ ] Frontend deployed successfully
- [ ] Backend deployed successfully
- [ ] Contact form works
- [ ] Email received when form submitted
- [ ] All links work (GitHub, LinkedIn, Email)
- [ ] Resume downloads correctly
- [ ] Theme toggle works
- [ ] Mobile responsive
- [ ] All animations work
- [ ] No console errors

---

## Updating Your Portfolio

### To Update Content:
1. Make changes locally
2. Test locally (`npm run dev`)
3. Commit and push to GitHub
4. Vercel and Render will auto-deploy

### To Update Backend URL:
1. Update in `frontend/src/components/Contact.jsx`
2. Commit and push
3. Wait for Vercel to redeploy

---

## Cost Summary

- **Render (Backend):** $0/month (Free tier)
- **Vercel (Frontend):** $0/month (Free tier)
- **GitHub:** $0/month (Free tier)
- **Domain (Optional):** ~$10-15/year

**Total:** FREE (or $10-15/year with custom domain)

---

## Support

If you encounter issues:
1. Check Render logs
2. Check browser console
3. Review environment variables
4. Test API health endpoint

---

**Congratulations! Your portfolio is now live! 🎉**

Share your portfolio:
- Update LinkedIn with portfolio link
- Add to GitHub profile README
- Share on social media
- Add to resume

