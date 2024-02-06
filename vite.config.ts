import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import dyndateplugin from './dyndateplugin';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dyndateplugin()],
});
