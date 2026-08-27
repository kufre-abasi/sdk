import { defineConfig } from "vite";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default defineConfig({
    assetsInclude: ['**/*.wasm'],
    optimizeDeps: {
        exclude: ["@provablehq/wasm",],
    },
    server: {
        headers: {
            "Cross-Origin-Opener-Policy": "same-origin",
            "Cross-Origin-Embedder-Policy": "require-corp",
        },
    },
});
