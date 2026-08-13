# Backend Integration Guide

## Overview

Your HotelOpX frontend is completely standalone and ready to connect with the `hotelopsx-backend` Express server when you're ready.

## Current State

### Frontend Works Without Backend ✅
- All pages display beautifully
- Demo form stores data in localStorage
- No external dependencies
- Perfect for UI/UX development

### When Backend is Available
- Demo form sends data to Express API
- Same code, automatic routing
- No frontend code changes needed

## Integration Steps

### 1. Start Your Backend

```bash
cd ../hotelopsx-backend
npm install
npm run dev
```

Your backend should run on: `http://localhost:5000`

### 2. Verify Backend Endpoints

Your Express backend needs these endpoints:

#### POST /api/demo-requests
**Purpose**: Submit a new demo request

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+234 800 000 0000",
  "companyName": "My Hotel",
  "hotelSize": "medium",
  "message": "I'm interested in a demo"
}
```

**Response**:
```json
{
  "success": true,
  "data": {
    "id": "demo_12345",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+234 800 000 0000",
    "companyName": "My Hotel",
    "hotelSize": "medium",
    "message": "I'm interested in a demo",
    "createdAt": "2026-01-26T10:30:00Z"
  }
}
```

#### GET /api/demo-requests
**Purpose**: Retrieve all demo requests (for admin dashboard)

**Response**:
```json
{
  "success": true,
  "data": [
    {
      "id": "demo_12345",
      "name": "John Doe",
      "email": "john@example.com",
      "createdAt": "2026-01-26T10:30:00Z"
    }
  ]
}
```

### 3. Configure Frontend

Create `.env` file in frontend:

```env
VITE_API_URL=http://localhost:5000/api
```

Or keep empty to use localhost:5000 by default.

### 4. Restart Frontend

```bash
# In frontend directory
npm run dev
```

### 5. Test Integration

1. Open `http://localhost:5173`
2. Go to Contact page
3. Fill out demo request form
4. Submit
5. Check your backend logs - data should be received

### 6. Verify Data Persistence

- Backend should log the received data
- Data should be saved in your database
- Refresh page - form should clear
- Previous requests stored in database (not localStorage)

## How It Works

### API Service Flow

```typescript
// Frontend submits form
await apiService.submitDemoRequest(formData)
    ↓
// Service tries to reach backend
POST http://localhost:5000/api/demo-requests
    ↓
// If successful: 
Save to database (via backend)
    ↓
// If failed (backend down):
Fallback to localStorage
```

### Zero Code Changes Required

The same code works in both scenarios:
- **With Backend**: Data persisted in database
- **Without Backend**: Data persisted in localStorage

## Advanced Configuration

### Custom API URL

You can change API URL at runtime:

```typescript
import { apiService } from './services/api';

// Change backend URL
apiService.setBaseURL('http://your-production-api.com/api');
```

### Authentication

When you add authentication:

```typescript
// Set JWT token after login
apiService.setAuthToken('your-jwt-token');
```

All subsequent requests will include:
```
Authorization: Bearer your-jwt-token
```

## Error Handling

The frontend automatically handles errors:

1. **Backend responds with error**: User sees error message
2. **Backend unreachable**: Falls back to localStorage with warning
3. **Network timeout**: User sees friendly error

## Deployment

### Frontend to Production

```bash
npm run build
# Upload dist/ folder to your hosting
```

### Backend Connection

Update production `.env`:
```env
VITE_API_URL=https://api.hotelops.com/api
```

## Troubleshooting

### "Failed to fetch from backend"
- ✅ Check backend is running
- ✅ Check `.env` URL is correct
- ✅ Check CORS is enabled on backend

### Data not saving in database
- ✅ Check `/api/demo-requests` endpoint exists
- ✅ Check request format matches
- ✅ Check response format includes `success` and `data`

### Still using localStorage after backend connected
- ✅ Clear browser cache
- ✅ Check `.env` file is saved
- ✅ Restart frontend server
- ✅ Check backend logs for errors

## Example Backend Endpoint (Express)

```typescript
// POST /api/demo-requests
router.post('/demo-requests', async (req, res) => {
  try {
    const { name, email, phone, companyName, hotelSize, message } = req.body;
    
    // Save to database
    const demoRequest = await DemoRequest.create({
      name,
      email,
      phone,
      companyName,
      hotelSize,
      message,
      createdAt: new Date(),
    });
    
    res.json({
      success: true,
      data: demoRequest,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
});
```

## Next Steps

1. ✅ Verify your backend endpoints match the spec
2. ✅ Configure frontend `.env`
3. ✅ Test form submission
4. ✅ Verify data in database
5. ✅ Deploy to production

## Support

If you need help:
1. Check backend logs for incoming requests
2. Check browser console (F12) for frontend errors
3. Verify network tab shows requests being sent
4. Check response format matches spec

Your frontend is ready for production! 🚀
