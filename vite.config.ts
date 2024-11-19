import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Frontend-Capstone/",
  build: {
    outDir: 'dist', // Ensure output directory is specified
    rollupOptions: {
      input: 'src/main.tsx', // Ensure correct input
    },
  }
})
