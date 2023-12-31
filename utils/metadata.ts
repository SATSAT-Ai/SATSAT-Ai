import icon from "../public/satsat-logo.svg";
import openGraphImage from "../public/prompt-page-large.jpg";
import { Metadata } from "next";

export const SATSATmetadata: Metadata = {
	title: "SATSAT-AI",
	description:
		"SATSAT AI is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
	applicationName: "SATSAT AI",
	icons: [icon],

	authors: [
		{ name: "Kamasah Dickson", url: "" },
		{ name: "Emmanuel Jean Kamasah", url: "" },
	],
	keywords: ["Nextjs", "React", "Server components", "SATSAT-AI"],
	creator: "Kamasah Dickson",

	openGraph: {
		title: "SATSAT-AI",
		type: "website",
		emails: ["kamasahdickson@gmail.com"],
		siteName: "SATSAT-AI",
		description:
			"SATSAT AI is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
		images: [openGraphImage, icon],
	},

	twitter: {
		card: "summary_large_image",
		title: "SATSAT-AI",
		description:
			"SATSAT AI is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
		images: [openGraphImage as unknown as string],
		creator: "@jeanlinux",
	},
	metadataBase: new URL(process.env.WEBSITE_URL as string),

	alternates: {
		canonical: process.env.WEBSITE_URL,
		languages: {
			"en-US": "/en-US",
		},
	},
};
