// src/components/react/auth/SignUpForm.jsx
import React, { useState } from 'react';
import { api } from '@/lib/api/client';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await api.post('/auth/register', {
        email,
        password,
      });
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (success) {
    return <p>Account created! Please check your email to verify.</p>;
  }

  return (
    <form onSubmit={handleSignUp}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Signing Up...' : 'Sign Up'}
      </button>
      {error && <p>{error}</p>}
    </form>
  );
}
