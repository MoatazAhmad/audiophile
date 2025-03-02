import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import viteImagemin from "vite-plugin-imagemin";
import { imagetools } from "vite-imagetools";
import font from "vite-plugin-font";

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    tailwindcss(),
    imagetools(), // process image queries first
    viteImagemin({ webp: { quality: 75 } }), // then optimize images
    font.vite({
      scanFiles: ["src/**/*.{vue,js,jsx,ts,tsx}"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  base: "/audiophile/",
});
