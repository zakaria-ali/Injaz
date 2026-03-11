import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// BASE_PATH set by GitHub Actions for GitHub Pages (e.g. /Injaz/); default '/' for Vercel/Netlify
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react(), tailwindcss()],
})
