import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

// https://vite.dev/config/
// vite.config.js


export default defineConfig({
  root: './src',
  plugins: [react()] 
})
