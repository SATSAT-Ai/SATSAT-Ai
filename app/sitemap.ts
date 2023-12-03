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
	const changeFrequency = "weekly" as changeFrequency;
	const routes = [
		"",
		"/about",
		"/features",
		"/contact",
		"/signin",
		"/signup",
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
