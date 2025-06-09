import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enable listening on all interfaces, including Wi-Fi
    // port: 3000, // Optionally specify the port (default is 3000)
    // open: true, // Automatically open the browser
  },
});
