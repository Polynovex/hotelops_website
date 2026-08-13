# HotelOpX Frontend - Premium Website

Modern, beautiful hotel management platform frontend built with React, TypeScript, and Tailwind CSS.

## ✨ Features

- 🎨 **Premium Material Design Theme** - Beautiful, modern UI with advanced animations
- 🚀 **Completely Standalone** - Works without backend (frontend-only viewing)
- 🔌 **API Service Layer** - Ready for Express backend integration
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎯 **No Supabase** - Removed all Supabase dependencies
- 🏢 **No Bolt References** - Completely independent
- 💾 **Local Storage** - Demo requests stored locally until backend connects

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

See [STANDALONE.md](./STANDALONE.md) for detailed setup instructions and backend integration guide.

## Project Structure

```
src/
├── components/       # Reusable components
├── pages/           # Page components (Home, About, Products, etc.)
├── services/        # API service layer
├── theme/           # Premium theme configuration
└── App.tsx          # Main application component
```

## Technology Stack

- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **Material UI** - Optional premium components
- **Axios** - HTTP client

## Key Files

- `src/services/api.ts` - API service (fallback to localStorage)
- `src/theme/premium.ts` - Theme configuration
- `src/pages/Contact.tsx` - Demo request form
- `STANDALONE.md` - Detailed setup guide

## Environment Variables

Create `.env` file:

```env
VITE_API_URL=http://localhost:5000/api
```

## Standalone vs Backend Integration

### Standalone (Current)
- Frontend works without backend
- Demo requests stored in localStorage
- Perfect for development and design

### With Backend
- Connect to hotelopsx-backend Express API
- Demo requests sent to database
- Full data persistence

See [STANDALONE.md](./STANDALONE.md#backend-integration) for integration instructions.

## License

Proprietary - Polynovex Limited © 2026
