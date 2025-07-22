import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  site: 'https://meat-platform.vercel.app', // Add your site URL
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We'll handle this in our global.css
    })
  ],
  output: 'server', // Changed from 'hybrid' to 'server'
  adapter: vercel(), // Updated from deprecated serverless import
  vite: {
        resolve: {
            alias: {
              '@': fileURLToPath(new URL('./src', import.meta.url)),
              '@/components': fileURLToPath(new URL('./src/components', import.meta.url)),
              '@/lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
              '@/types': fileURLToPath(new URL('./src/types', import.meta.url)),
            }
          },
    define: {
      'process.env.SUPABASE_URL': JSON.stringify(process.env.PUBLIC_SUPABASE_URL),
      'process.env.SUPABASE_ANON_KEY': JSON.stringify(process.env.PUBLIC_SUPABASE_ANON_KEY),
    }
  }
});