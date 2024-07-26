import { IPrices } from "@/interface/interface";

export const pricingData: IPrices[] = [
	{
		id: "free",
		category: "free",
		privileges: ["Upload and scan documents", "Scan 20 free pages", "Insights"],
		price: "FREE",
		annualPrice: "FREE",
	},
	{
		id: "pro",
		category: "pro",
		privileges: [
			"Scan 25 pages monthly",
			"Insights",
			"Access to API",
			"$0.25 per extra page scan",
		],
		price: "$10",
		annualPrice: "$60",
	},
	{
		id: "plus",
		category: "plus",
		privileges: [
			"Scan 50 pages monthly",
			"Insights",
			"Access to API",
			"Access to chatbot",
			"$0.25 per extra page scan",
		],
		price: "$20",
		annualPrice: "$120",
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
