// src/lib/api/client.ts
// API client for communicating with Fastify backend using session cookies + CSRF

const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3000'

// CSRF token storage
let csrfToken: string | null = null

class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.name = 'ApiError'
    this.status = status
  }
}

async function handleResponse<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const text = await res.text()
    let message = text
    try {
      const json = JSON.parse(text)
      message = json.message || json.error || text
    } catch {
      // keep text as message
    }
    throw new ApiError(message, res.status)
  }

  // Handle empty responses
  const text = await res.text()
  if (!text) return {} as T
  return JSON.parse(text)
}

// Fetch CSRF token from backend - call on app init or after login
export async function fetchCsrfToken(): Promise<string> {
  const res = await fetch(`${API_URL}/api/csrf-token`, {
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
    },
  })
  const data = await handleResponse<{ csrfToken: string }>(res)
  csrfToken = data.csrfToken
  return csrfToken
}

// Get the current CSRF token (fetches if not available)
export async function getCsrfToken(): Promise<string> {
  if (!csrfToken) {
    return fetchCsrfToken()
  }
  return csrfToken
}

// Set CSRF token directly (used when token comes from login/register response)
export function setCsrfToken(token: string): void {
  csrfToken = token
}

// Clear CSRF token (call on logout)
export function clearCsrfToken(): void {
  csrfToken = null
}

// Build headers for mutation requests (POST/PATCH/DELETE)
async function getMutationHeaders(includeContentType = true): Promise<HeadersInit> {
  const token = await getCsrfToken()
  const headers: HeadersInit = {
    'Accept': 'application/json',
    'x-csrf-token': token,
  }
  if (includeContentType) {
    headers['Content-Type'] = 'application/json'
  }
  return headers
}

export const api = {
  async get<T = unknown>(path: string): Promise<T> {
    const res = await fetch(`${API_URL}${path}`, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
      },
    })
    return handleResponse<T>(res)
  },

  // POST without CSRF - only for login/register which don't require CSRF
  async postPublic<T = unknown>(path: string, data?: unknown): Promise<T> {
    const res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
    })
    return handleResponse<T>(res)
  },

  async post<T = unknown>(path: string, data?: unknown): Promise<T> {
    const headers = await getMutationHeaders()
    const res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      credentials: 'include',
      headers,
      body: data ? JSON.stringify(data) : undefined,
    })
    return handleResponse<T>(res)
  },

  async put<T = unknown>(path: string, data: unknown): Promise<T> {
    const headers = await getMutationHeaders()
    const res = await fetch(`${API_URL}${path}`, {
      method: 'PUT',
      credentials: 'include',
      headers,
      body: JSON.stringify(data),
    })
    return handleResponse<T>(res)
  },

  async patch<T = unknown>(path: string, data: unknown): Promise<T> {
    const headers = await getMutationHeaders()
    const res = await fetch(`${API_URL}${path}`, {
      method: 'PATCH',
      credentials: 'include',
      headers,
      body: JSON.stringify(data),
    })
    return handleResponse<T>(res)
  },

  async delete<T = unknown>(path: string): Promise<T> {
    const headers = await getMutationHeaders(false)
    const res = await fetch(`${API_URL}${path}`, {
      method: 'DELETE',
      credentials: 'include',
      headers,
    })
    return handleResponse<T>(res)
  },

  // For file uploads - sends FormData instead of JSON
  async upload<T = unknown>(path: string, formData: FormData): Promise<T> {
    const token = await getCsrfToken()
    const res = await fetch(`${API_URL}${path}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'x-csrf-token': token,
        // Don't set Content-Type - browser will set it with boundary for FormData
      },
      body: formData,
    })
    return handleResponse<T>(res)
  },
}

export { ApiError }
