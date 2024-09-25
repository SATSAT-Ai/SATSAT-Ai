import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "SatSat Ai",
		lang: "en-US",
		short_name: "SatSat Ai",
		description:
			"SatSat AI is an all-in-one artificial intelligence platform...",
		start_url: "/",
		display: "standalone",
		background_color: "#050d0a",
		theme_color: "#000000",
		scope: "/",
		screenshots: [
			{
				src: "/manifest-signin.jpg",
				sizes: "640x320",
				type: "image/jpg",
			},
			{
				src: "/manifest-home.jpg",
				sizes: "1440x600",
				type: "image/jpg",
			},
		],
		icons: [
			{
				src: "/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				src: "/icon-256x256.png",
				sizes: "256x256",
				type: "image/png",
			},
			{
				src: "/icon-384x384.png",
				sizes: "384x384",
				type: "image/png",
			},
			{
				src: "/icon-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	};
}
