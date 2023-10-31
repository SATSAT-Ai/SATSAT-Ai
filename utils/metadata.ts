import logo from "../public/satsat-logo.svg";
import icon from "../public/satsat-logo.svg";
import openGraphImage from "../public/prompt-page-large.jpg";

export const SATSATmetadata = {
	title: "SATSAT-Ai",
	description:
		"SATSAT Ai is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
	applicationName: "SATSAT Ai",
	icons: icon,

	authors: [
		{ name: "Kamasah Dickson", url: "" },
		{ name: "Emmanuel Jean Kamasah", url: "" },
	],
	keywords: ["Nextjs", "React", "Server components"],
	creator: "Kamasah Dickson",

	openGraph: {
		title: "SATSAT-Ai",
		type: "website",
		emails: ["kamasahdickson@gmail.com"],
		siteName: "SATSAT-Ai",
		description:
			"SATSAT Ai is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
		images: [logo, openGraphImage],
	},
	twitter: {
		card: "summary_large_image",
		title: "SATSAT-Ai",
		description:
			"SATSAT Ai is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
		images: [openGraphImage as unknown as string],
		creator: "@jeanlinux",
	},

	alternates: {
		canonical: process.env.WEBSITE_URL,
		languages: {
			"en-US": "/en-US",
		},
	},
};
