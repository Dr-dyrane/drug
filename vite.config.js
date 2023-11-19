import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			manifest: {
				name: "Dyrane Drug Dose Calculator",
				short_name: "drug",
				description: "Calculate drug doses.",
        start_url: '/',
				theme_color: "#1d4ed8",
				background_color: "#f8fafc",
        display: 'standalone',
        icons: [
          {
            src: '/drug.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/drug.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
			},
		}),
	],
});
