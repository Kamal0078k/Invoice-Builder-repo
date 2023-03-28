import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import { fileURLToPath } from "node:url";
import { pdf } from "@progress/kendo-drawing";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 1600,
    rollupOptions: {
      external: [
        "@progress/kendo-react-pdf",
        fileURLToPath(new URL("src/Components/Preview.jsx", import.meta.url)),
        /node_modules/,
      ],
    },
  },
});
