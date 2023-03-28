import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { pdf } from "@progress/kendo-drawing";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      external: [kendo - react - pdf],
    },
  },
});
