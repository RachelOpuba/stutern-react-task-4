import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  // base: "/stutern-react-task-4",
  plugins: [react()],
  // server: {
  //    host: 'localhost',
  //   port: 3000,
  // },
});
