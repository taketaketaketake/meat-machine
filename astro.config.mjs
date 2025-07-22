import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
  site: 'https://meat-platform.netlify.app', // Update to Netlify URL
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false, // We'll handle this in our global.css
    })
  ],
  output: 'server', // Server-side rendering
  adapter: netlify(), // Use Netlify adapter
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