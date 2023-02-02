// Plugins
import vue from "@vitejs/plugin-vue";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// Utilities
import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
    // base: process.env.NODE_ENV === 'production' ? '/firmasdigitales' : '/',
    // base: process.env.NODE_ENV === "production" ? "./" : "/",
    base: '/firmas-autonort/',
    plugins: [
        vue({
            template: {
                transformAssetUrls,
            },
        }),
        // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
        vuetify({
            autoImport: true,
        }),
    ],
    build: {
        rollupOptions: {
            output: {
                chunkFileNames: "assets/js/[name]-[hash].js",
                entryFileNames: "assets/js/[name]-[hash].js",

                assetFileNames: ( {name} ) => {
                    if (/\.(gif|jpeg|png|svg)$/.test(name ?? "")) {
                        return "assets/images/[name]-[hash][extname]";
                    }

                    if (/\.css$/.test(name ?? "")) {
                        return "assets/css/[name]-[hash][extname]";
                    }

                    // default value
                    // ref: https://rollupjs.org/guide/en/#outputassetfilenames
                    return "assets/[name]-[hash][extname]";
                },
            },
        },
    },
    define: { "process.env": {} },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
        },
        extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"],
    },
    server: {
        port: 3000,
    },
    preview: {
        port: 8080,
    }
});
