import React, { useState } from 'react';

// Main Newsletter Sign-Up Component
export default function NewsletterSignUp({
  titleLine1 = "Get the Best of AI,",
  titleLine2 = "Delivered.",
  description = "Join our weekly newsletter for a curated roundup of the most inspiring creations, creator spotlights, and breaking AI tool news."
}) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle', 'loading', 'success', 'error'

  const handleSubmit = (event) => {
    event.preventDefault();
    setStatus('loading');
    console.log('Subscribing with email:', email);

    // Placeholder for your actual subscription logic (e.g., API call)
    // In a real app, you would replace this with a fetch request to your backend.
    setTimeout(() => {
      if (email.includes('@')) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    }, 1500);
  };

  return (
    <section className="py-20 bg-gray-900 rounded-2xl border border-gray-800">
      <div className="max-w-2xl mx-auto text-center px-4">
        <div className="text-5xl mb-4" aria-hidden="true">💌</div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          {titleLine1} <span style={{ backgroundImage: 'linear-gradient(to right, #ec4899, #d946ef)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>{titleLine2}</span>
        </h2>
        <p className="text-lg text-gray-400 mt-4 mb-8">
          {description}
        </p>

        {status === 'success' ? (
          <div className="text-center text-lg font-semibold text-green-400 bg-green-500/10 py-4 rounded-lg">
            Thanks for subscribing! 🎉
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                className="flex-auto w-full px-5 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500 disabled:opacity-50"
                placeholder="your.email@example.com"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="flex-none inline-flex items-center justify-center px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg shadow-lg hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-pink-500 transition-colors duration-200 disabled:bg-pink-800 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {status === 'error' && (
                <p className="text-xs text-red-400 mt-2">
                    Please enter a valid email address.
                </p>
            )}
            <p className="text-xs text-gray-500 mt-4">
              No spam, ever. Unsubscribe in a single click.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
