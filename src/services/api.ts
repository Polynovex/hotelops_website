// Configure API base URL - can be updated to point to backend
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

interface DemoRequest {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  hotelSize: string;
  message: string;
}

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

class ApiService {
  private baseURL: string;
  private authToken: string | null = null;

  constructor() {
    this.baseURL = API_BASE_URL;
  }

  /**
   * Submit a demo request
   * When backend is available, this will POST to the backend
   * Falls back to localStorage if backend is not available
   */
  async submitDemoRequest(data: DemoRequest): Promise<ApiResponse<{ id: string }>> {
    try {
      // Try to send to backend if available
      try {
        const response = await fetch(`${this.baseURL}/demo-requests`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(this.authToken && { 'Authorization': `Bearer ${this.authToken}` }),
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`Backend error: ${response.status}`);
        }

        const result = await response.json();
        return {
          success: true,
          data: result,
        };
      } catch (backendError) {
        // Fall back to localStorage if backend is not available
        console.info('Backend not available, storing locally');
        const id = `demo_${Date.now()}`;
        const storedData = localStorage.getItem('demoRequests');
        const demoRequests = storedData ? JSON.parse(storedData) : [];
        
        demoRequests.push({
          id,
          ...data,
          createdAt: new Date().toISOString(),
        });
        
        localStorage.setItem('demoRequests', JSON.stringify(demoRequests));
        return {
          success: true,
          data: { id },
        };
      }
    } catch (error) {
      console.error('Error submitting demo request:', error);
      return {
        success: false,
        error: 'Failed to submit demo request. Please try again.',
      };
    }
  }

  /**
   * Get all demo requests (for admin dashboard)
   */
  async getDemoRequests(): Promise<ApiResponse<DemoRequest[]>> {
    try {
      const response = await fetch(`${this.baseURL}/demo-requests`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          ...(this.authToken && { 'Authorization': `Bearer ${this.authToken}` }),
        },
      });

      if (!response.ok) {
        throw new Error(`Backend error: ${response.status}`);
      }

      const data = await response.json();
      return {
        success: true,
        data: data,
      };
    } catch (error) {
      // Fallback to localStorage
      const storedData = localStorage.getItem('demoRequests');
      const demoRequests = storedData ? JSON.parse(storedData) : [];
      return {
        success: true,
        data: demoRequests,
      };
    }
  }

  /**
   * Update API base URL dynamically
   */
  setBaseURL(url: string): void {
    this.baseURL = url;
  }

  /**
   * Get current API base URL
   */
  getBaseURL(): string {
    return this.baseURL;
  }

  /**
   * Add authorization token
   */
  setAuthToken(token: string): void {
    this.authToken = token;
  }
}

export const apiService = new ApiService();
export type { DemoRequest, ApiResponse };
