import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint2";
import svgr from "vite-plugin-svgr";

export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    plugins: [
      react(),
      !isProd && eslint({ include: ["src/**/*.{ts,tsx,js,jsx}"] }),
      svgr({ include: "**/*.svg?react" }),
    ].filter(Boolean),
    build: {
      outDir: "dist",
      sourcemap: !isProd,
      minify: isProd,
    },
    server: {
      port: 3000,
      host: "localhost",
      proxy: {
        "/api": {
          target: process.env.VITE_API_URL || "http://localhost:5000/api",
          changeOrigin: true,
        },
      },
    },
  };
});
