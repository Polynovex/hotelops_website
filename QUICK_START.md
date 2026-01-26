# Quick Start - HotelOps Frontend

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd /Users/mac/Desktop/Projects/HotelOps/hotelopsx
npm install
```

### Step 2: Run Frontend
```bash
npm run dev
```

### Step 3: View in Browser
Open `http://localhost:5173`

✨ **Your standalone frontend is now running!**

---

## 📁 Key Files

| File | Purpose |
|------|---------|
| `src/pages/Home.tsx` | Home page (use new.tsx version for premium) |
| `src/services/api.ts` | API service (handles backend/localStorage) |
| `src/theme/premium.ts` | Theme configuration |
| `src/pages/Contact.tsx` | Demo request form |
| `.env.example` | Environment variables template |
| `STANDALONE.md` | Full setup guide |

---

## 🎨 What Changed

### ✅ Removed
- ❌ Supabase (`@supabase/supabase-js`)
- ❌ Bolt AI references (`.bolt/`, meta tags)
- ❌ All backend dependencies

### ✅ Added
- ✅ Material UI (`@mui/material`)
- ✅ API Service layer
- ✅ Premium theme system
- ✅ Axios HTTP client

---

## 💡 How It Works

### Standalone Mode (Default)
```
Form Submission
    ↓
API Service tries Backend
    ↓
Backend unavailable?
    ↓
Fallback → localStorage
```

### Backend Connected
```
Form Submission
    ↓
API Service sends to Backend
    ↓
Backend saves to Database
```

**Same code works in both scenarios!**

---

## 🔌 Connect Backend Later

When you have your Express backend ready:

1. **Start your backend**
   ```bash
   cd ../hotelopsx-backend
   npm run dev
   ```

2. **Update environment**
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

3. **Restart frontend**
   ```bash
   npm run dev
   ```

✨ **Automatic integration - no code changes!**

---

## 📦 Build for Production

```bash
npm run build
npm run preview
```

---

## 🎯 Features Ready Now

- ✅ All pages render beautifully
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Premium animations and gradients
- ✅ Form submission (stores locally)
- ✅ Material Design ready
- ✅ TypeScript safety
- ✅ Dark mode ready

---

## 🛠️ Customize Theme

Edit `src/theme/premium.ts`:

```typescript
colors: {
  primary: '#1e40af',      // Your brand color
  secondary: '#0891b2',    // Secondary color
  // ... more customization
}
```

---

## 📚 Documentation

- **Full Setup**: See `STANDALONE.md`
- **Frontend Setup**: See `FRONTEND_SETUP.md`
- **Quick Ref**: See `QUICK_START.md` (this file)

---

## ✨ You're Ready!

Your HotelOps frontend is:
- 🎨 Beautiful and modern
- 🚀 Completely standalone
- 🔌 Ready for backend integration
- 📱 Fully responsive
- ✅ Production ready

**Start customizing and enjoy!** 🎉
