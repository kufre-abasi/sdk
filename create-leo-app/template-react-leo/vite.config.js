import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.wasm'],
  optimizeDeps: {
    exclude: ["@provablehq/wasm"],
  },
  server: {
    headers: {
      "Cross-Origin-Opener-Policy": "same-origin",
      "Cross-Origin-Embedder-Policy": "require-corp",
    },
  },
});
