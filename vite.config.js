import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/bharatquiz/'   // 👈 repo ka naam yaha likhna
})