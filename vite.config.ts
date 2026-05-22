import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const lastModified = 'Fri, 22 May 2026 00:00:00 GMT'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GEO rationale: local preview sends the same Last-Modified value as the visible project dates and JSON-LD dateModified values.
  server: {
    headers: {
      'Last-Modified': lastModified,
    },
  },
  preview: {
    headers: {
      'Last-Modified': lastModified,
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          icons: ['react-icons/fa6', 'react-icons/fa'],
          email: ['@emailjs/browser'],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react-icons/fa6', 'react-icons/fa'],
  },
})
