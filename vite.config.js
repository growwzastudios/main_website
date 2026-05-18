import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  server: {
    historyApiFallback: true,
  },

  build: {
    // Raise the warning limit (some showcase images are intentionally large)
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        // Split vendor chunks so they can be cached separately & loaded in parallel
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },

    // Inline assets smaller than 8 KB (icons, tiny svgs) as base64
    assetsInlineLimit: 8192,

    // Enable CSS code splitting (already default in Vite, but explicit)
    cssCodeSplit: true,

    // Enable source maps for production debugging if needed (set false to skip)
    sourcemap: false,
  },
})

