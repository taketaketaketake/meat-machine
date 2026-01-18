// src/components/react/auth/AuthForm.jsx
import React, { useState } from 'react';
import { api } from '@/lib/api/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

// Google Icon SVG Component
const GoogleIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 48 48">
    <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"></path>
    <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691z"></path>
    <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.222 0-9.618-3.319-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"></path>
    <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C39.999 36.657 44 30.833 44 24c0-1.341-.138-2.65-.389-3.917z"></path>
  </svg>
);

export default function AuthForm({ defaultMode = 'signUp' }) {
  const [isSignUp, setIsSignUp] = useState(defaultMode === 'signUp');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setError('');

    try {
      if (isSignUp) {
        // Sign Up
        await api.post('/auth/register', {
          email,
          password,
          username,
        });
        setMessage('Account created successfully! Please check your email to verify.');
      } else {
        // Sign In
        await api.post('/auth/login', {
          email,
          password,
        });
        // On successful login, redirect the user
        window.location.href = '/creator/dashboard';
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    // Redirect to backend OAuth endpoint
    const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3000';
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-xl border border-gray-800">
      <h2 className="text-2xl font-bold text-white mb-2">{isSignUp ? 'Create an Account' : 'Sign In'}</h2>
      <p className="text-gray-400 mb-6">
        {isSignUp ? 'Join the community to start creating.' : 'Welcome back!'}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {isSignUp && (
          <div>
            <Label htmlFor="username">Username</Label>
            <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="mt-1" />
          </div>
        )}
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="mt-1" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="mt-1" />
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? 'Processing...' : (isSignUp ? 'Sign Up' : 'Sign In')}
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-700"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="bg-gray-900 px-2 text-gray-500">OR</span>
        </div>
      </div>

      <div>
        <Button variant="outline" onClick={handleGoogleSignIn} disabled={loading} className="w-full">
          <GoogleIcon />
          <span className="ml-2">{isSignUp ? 'Sign up with Google' : 'Sign in with Google'}</span>
        </Button>
      </div>

      {message && <p className="mt-4 text-center text-green-400">{message}</p>}
      {error && <p className="mt-4 text-center text-red-400">{error}</p>}

      <div className="mt-6 text-center">
        <button onClick={() => setIsSignUp(!isSignUp)} className="text-sm text-pink-400 hover:underline">
          {isSignUp ? 'Already have an account? Sign In' : 'Need an account? Sign Up'}
        </button>
      </div>
    </div>
  );
}
