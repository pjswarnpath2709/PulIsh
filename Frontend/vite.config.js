import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env.DISABLE_VUE_DEVTOOLS": "true", // Disable Vue Devtools warnings
  },
  plugins: [react()],
  // server: {
  //   proxy: {
  //     "/api": "http://localhost:8080", // Replace with your API server URL
  //   },
  // },
});
