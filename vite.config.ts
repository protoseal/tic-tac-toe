/// <reference types="vitest" />
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "path"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [tailwindcss(), react()],
  test: {
    globals: true,
    coverage: { provider: "v8" },
    include: ["src/**/*.test.ts"],
  },
  resolve: {
    alias: {
      "00_app": path.resolve(__dirname, "src/00_app"),
      "01_pages": path.resolve(__dirname, "src/01_pages"),
      "02_widgets": path.resolve(__dirname, "src/02_widgets"),
      "03_features": path.resolve(__dirname, "src/03_features"),
      "04_entities": path.resolve(__dirname, "src/04_entities"),
      "05_shared": path.resolve(__dirname, "src/05_shared"),
    },
  },
})
