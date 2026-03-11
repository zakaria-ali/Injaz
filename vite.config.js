import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// GitHub Actions: always use /Injaz/ for GitHub Pages. Else use BASE_PATH or root.
export default defineConfig({
  base: process.env.GITHUB_ACTIONS === 'true' ? '/Injaz/' : (process.env.BASE_PATH || '/'),
  plugins: [react(), tailwindcss()],
})
