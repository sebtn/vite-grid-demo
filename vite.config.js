import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// alias: [{ find: "@", replacement: resolve(__dirname, "./src") }],
// src: './src'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, './src/components'),
    }
  }
});
