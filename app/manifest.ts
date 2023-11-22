import { MetadataRoute } from "next";
import icon from "./icon.svg";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "SATSAT-AI",
		short_name: "SATSAT-Ai",
		description:
			"SATSAT AI is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
		start_url: "/",
		display: "standalone",
		background_color: "#050d0a",
		theme_color: "#fff",
		icons: [
			{
				src: icon,
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
