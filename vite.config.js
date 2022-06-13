import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Usualmente no se modifica a menos que instales algun plugin de Vite
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
