import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Alias from 'vite-plugin-alias'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Alias({
      useConfig: true,
      useTypescript: true,
    })
  ],
});
