import icon from "../public/satsat-logo.svg";
import openGraphImage from "../public/prompt-page-large.jpg";
import { Metadata } from "next";

export const SATSATmetadata: Metadata = {
	title: "SatSat-Ai",
	description:
		"SatSat AI is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
	applicationName: "SatSat AI",
	icons: [icon],

	authors: [
		{ name: "Kamasah Dickson", url: "" },
		{ name: "Emmanuel Jean Kamasah", url: "" },
	],
	keywords: [
		"scan financial documents",
		"financial insights",
		" Ai in finance",
		"SatSat-Ai",
	],
	creator: "Kamasah Dickson",

	openGraph: {
		title: "SatSat-Ai",
		type: "website",
		emails: ["kamasahdickson@gmail.com"],
		siteName: "SatSat-Ai",
		description:
			"SatSat AI is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
		images: [openGraphImage, icon],
	},

	twitter: {
		card: "summary_large_image",
		title: "SatSat-Ai",
		description:
			"SatSat AI is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
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
