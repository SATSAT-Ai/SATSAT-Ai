import { MetadataRoute } from "next";
const WEBSITE_URL = process.env.WEBSITE_URL || "http://localhost:3000";

type changeFrequency =
	| "always"
	| "hourly"
	| "daily"
	| "weekly"
	| "monthly"
	| "yearly"
	| "never";

export default function sitemap(): MetadataRoute.Sitemap {
	const changeFrequency = "monthly" as changeFrequency;
	const routes = [
		"",
		"/about",
		"/features",
		"/contact",
		"/signin",
		"/signup",
		"/choose-your-pricing",
		"/scan-documents",
		"/extract-insights",
		"/features/statement-scan",
		"/features/fraud-detection",
		"/features/insights-to-financial-documents",
		"/features/client-profile-management",
		"/features/ai-chatbot",
		"/developers",
		"/developers/webhooks",
		"/developers/api/authentication",
		"/developers/api-reference",
		"/dashboard",
		"/dashboard/transactions",
		"/dashboard/transactions/categories",
		"/dashboard/transactions/budget",
		"/dashboard/transactions/upload",
		"/dashboard/transactions/chat",
		"/dashboard/transactions/invoice",
		"/dashboard/transactions/invoice/receipts",
	].map((route) => ({
		url: `${WEBSITE_URL}${route}`,
		lastModified: new Date(),
		changeFrequency,
		priority: 1,
	}));
	return [...routes];
}
