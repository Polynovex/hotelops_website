// Configure API base URL - can be updated to point to backend
/**
 * Vite inlines VITE_* at build time. If the variable was missing when this
 * bundle was built, the localhost fallback ships to production and every
 * request hits the *visitor's own machine* — which is exactly how the contact
 * form silently failed before. Falling back is fine on localhost; anywhere
 * else it is a build misconfiguration and should be loud.
 */
const resolveApiBase = () => {
  const configured = import.meta.env.VITE_API_URL;
  if (configured) {
    return configured;
  }

  const isLocal =
    typeof window !== 'undefined' &&
    /^(localhost|127\.0\.0\.1|\[::1\])$/.test(window.location.hostname);

  if (!isLocal) {
    console.error(
      '[api] VITE_API_URL was not set when this site was built, so requests ' +
        'would go to localhost. Set it in .env.production (or the host env) ' +
        'and REBUILD — setting it without rebuilding has no effect.'
    );
  }

  return 'http://localhost:3000/api';
};

const API_BASE_URL = resolveApiBase();

interface DemoRequest {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  hotelSize: string;
  message: string;
  /** NDPR: explicit, unbundled consent captured at submission. */
  consentGiven: boolean;
  consentText?: string;
  marketingOptIn?: boolean;
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
        const response = await fetch(`${this.baseURL}/public/demo-requests`, {
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
        // Previously this swallowed the failure, wrote the lead to the
        // visitor's own localStorage, and still reported success — so every
        // submission was lost with the sender believing it had gone through.
        // A queued copy is kept for diagnostics, but the caller is now told
        // the truth so the UI can offer an alternative contact route.
        console.error('[api] Demo request failed to reach the backend', backendError);

        try {
          const pending = JSON.parse(localStorage.getItem('pendingDemoRequests') || '[]');
          pending.push({ ...data, failedAt: new Date().toISOString() });
          localStorage.setItem('pendingDemoRequests', JSON.stringify(pending));
        } catch {
          // Storage unavailable (private mode) — nothing further to do.
        }

        return {
          success: false,
          error:
            'We could not submit your request. Please email hello@hotelopsx.com or try again shortly.',
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
