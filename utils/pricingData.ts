import { IPrices } from "@/interface/interface";

export const pricingData: IPrices[] = [
	{
		id: "free",
		category: "free",
		privileges: ["Upload and scan documents", "Scan 50 free pages", "Insights"],
		price: "FREE",
		annualPrice: "FREE",
	},
	{
		id: "pro",
		category: "pro",
		privileges: [
			"Scan first 50 pages (free)",
			"Scan 25 pages monthly",
			"Insights",
			"Access to API",
			"$0.10 per extra page scan",
		],
		price: "$4.99/Month",
		annualPrice: "$29.99/Annual",
	},
	{
		id: "plus",
		category: "plus",
		privileges: [
			"Scan first 50 pages (free)",
			"Scan 50 pages monthly",
			"Insights",
			"Access to API",
			"Access to chatbot",
			"$0.10 per extra page scan",
		],
		price: "$9.99/Month",
		annualPrice: "$59.99/Annual",
	},
	{
		id: "enterprise",
		category: "enterprise",
		privileges: [
			"Upload and scan documents",
			"Insights",
			"Access to API",
			"Access to chatbot",
			"Client Management",
			"Custom Branding",
			"Dedicated Support",
		],
		price: "Let's Talk",
		annualPrice: "Let's Talk",
	},
];
