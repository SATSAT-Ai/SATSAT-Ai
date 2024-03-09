import { MetadataRoute } from "next";
import icon from "./icon.svg";

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: "SatSat-Ai",
		short_name: "SatSat AI",
		description:
			"SatSat AI is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
		start_url: "/",
		display: "standalone",
		background_color: "#050d0a",
		theme_color: "#fff",

		icons: [
			{
				src: icon?.src,
				purpose: "maskable" || "any",
				sizes: "any",
				type: "image/x-icon",
			},
		],
	};
}
