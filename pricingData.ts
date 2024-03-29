export const pricingData = [
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
			"Scan 20 pages monthly",
			"Insights",
			"Access to API",
			"$0.5 per extra page scan",
		],
		price: "$10/Month",
		annualPrice: "$60/Annual",
	},
	{
		id: "plus",
		category: "plus",
		privileges: [
			"Scan 50 pages monthly",
			"Insights",
			"Access to API",
			"Access to chatbot",
			"$0.5 per extra page scan",
		],
		price: "$20/Month",
		annualPrice: "$120/Annual",
	},
	{
		id: "Enterprise",
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
