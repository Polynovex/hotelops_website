# HotelOps Frontend - Standalone Setup

This is the premium frontend for HotelOps, built with React, TypeScript, and Tailwind CSS. It's now completely standalone and can be viewed without backend integration.

## Features

- ✅ **Removed Supabase Dependencies** - No backend required to view the frontend
- ✅ **No Bolt AI References** - Completely standalone
- ✅ **Material UI Ready** - Prepared for Material UI integration where needed
- ✅ **Premium Theme** - Beautiful, modern design with advanced animations
- ✅ **API Service Layer** - Ready for backend integration with Express API
- ✅ **Local Storage Fallback** - Demo requests are stored locally until backend is available

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Setup

Create a `.env` file (or copy from `.env.example`):

```bash
cp .env.example .env
```

Update with your backend API URL (optional):

```env
VITE_API_URL=http://localhost:5000/api
```

### 3. Run Development Server

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

## Architecture

### Directory Structure

```
src/
├── components/           # Reusable React components
├── pages/               # Page components
├── services/            # API services
│   └── api.ts          # Central API service
├── theme/              # Theme configuration
│   └── premium.ts      # Premium theme settings
└── lib/                # Utilities (supabase.ts removed)
```

### API Service

The frontend includes a standalone `ApiService` that:

1. **Attempts backend connection** - Tries to connect to your Express API
2. **Falls back to localStorage** - If backend is unavailable, stores data locally
3. **Ready for integration** - When you connect the backend, it will automatically use it

#### Usage Example:

```typescript
import { apiService } from '../services/api';

// Submit demo request
const response = await apiService.submitDemoRequest({
  name: 'John Doe',
  email: 'john@example.com',
  phone: '+234...',
  companyName: 'My Hotel',
  hotelSize: 'medium',
  message: 'Interested in demo',
});

if (response.success) {
  console.log('Request submitted:', response.data);
} else {
  console.error('Error:', response.error);
}
```

## Backend Integration

### Connecting to hotelopsx-backend

When you're ready to connect to the Express backend:

1. **Start your backend server**:
   ```bash
   cd ../hotelopsx-backend
   npm run dev
   ```

2. **Update environment variable**:
   ```env
   VITE_API_URL=http://localhost:5000/api
   ```

3. **Create API endpoints** that match the service:

   - `POST /api/demo-requests` - Submit demo request
   - `GET /api/demo-requests` - Retrieve all demo requests

4. **The service will automatically route to backend**

### Expected Backend Response Format

```json
{
  "success": true,
  "data": {
    "id": "demo_123456789",
    "name": "John Doe",
    "email": "john@example.com",
    "createdAt": "2026-01-26T10:30:00Z"
  }
}
```

## Removed Dependencies

### Supabase
- **Removed from**: `package.json`, `src/lib/supabase.ts`
- **Replacement**: Local storage with API service layer
- **Status**: Frontend now works without Supabase

### Bolt AI References
- **Removed from**: `index.html`, `.bolt/` directory
- **Status**: No references to Bolt.new remaining

## Premium Theme Features

The theme system includes:

- **Color Palette** - Professional blues, teals, and accent colors
- **Shadows** - Layered shadow system for depth
- **Gradients** - Beautiful gradient combinations
- **Typography** - Carefully selected font scales
- **Spacing** - Consistent spacing system
- **Transitions** - Smooth animations and transitions

Usage:

```typescript
import { premiumTheme, cardVariants, gradientBg } from '../theme/premium';

// Apply theme colors
className={`${gradientBg.primary}`}

// Use card variants
className={cardVariants.elevated}

// Access theme colors
backgroundColor: premiumTheme.colors.primary
```

## Material UI Integration

Material UI is installed and ready to use:

```bash
npm install @mui/material @emotion/react @emotion/styled
```

Example usage:

```tsx
import { Button, Card, Box } from '@mui/material';

<Box sx={{ backgroundColor: 'background.default' }}>
  <Button variant="contained">Click Me</Button>
</Box>
```

## Development Tips

### Running Tests

```bash
npm run typecheck
```

### Linting

```bash
npm run lint
```

### Code Quality

- TypeScript enabled for type safety
- ESLint configured for code quality
- Tailwind CSS for styling
- React 18.3 with hooks

## Standalone Usage

The frontend is completely standalone and can be:

1. **Viewed locally** without any backend
2. **Deployed to static hosting** (Vercel, Netlify, etc.)
3. **Used for development** while backend is being built
4. **Integrated** with any Express backend later

## Features Ready for Development

- Demo request form (stores locally)
- Contact page (stores locally)
- Product showcase
- Pricing display
- About page with company info
- Navigation between pages

## Next Steps

1. ✅ Frontend is ready to view and customize
2. 🔄 Connect your hotelopsx-backend Express API
3. 🎨 Customize theme colors in `src/theme/premium.ts`
4. 🛠️ Add Material UI components as needed
5. 🚀 Deploy to production

## Support

For questions about the frontend structure or theme customization, check:
- `src/theme/premium.ts` - Theme configuration
- `src/services/api.ts` - API service documentation
- Component files for implementation examples

## License

Proprietary - Polynovex Limited © 2026
