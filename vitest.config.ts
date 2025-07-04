import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  
  return {
    plugins: [react()],
    test: {
      environment: 'jsdom',
      setupFiles: ['__tests__/setup.ts'],
      globals: true,
      env: env, // Load environment variables
      coverage: {
        reporter: ['text', 'json', 'html'],
        exclude: [
          'node_modules/',
          '__tests__/',
          'e2e/',
          '**/*.d.ts',
          '**/*.config.*',
          'src/env.d.ts'
        ],
        thresholds: {
          global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '@/components': resolve(__dirname, './src/components'),
        '@/lib': resolve(__dirname, './src/lib'),
        '@/types': resolve(__dirname, './src/types'),
      }
    }
  };
});