import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      include: 'src/**/*.tsx',
      jsxRuntime: 'classic'
    })
  ],
  server: { port: 3000 },
  publicDir: 'public',
  optimizeDeps: {
    include: ['react', '@emotion/styled']
  }
});
