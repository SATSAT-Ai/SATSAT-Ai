import { MetadataRoute } from "next";
const WEBSITE_URL = process.env.WEBSITE_URL || "localhost:3000";

type changeFrequency =
	| "always"
	| "hourly"
	| "daily"
	| "weekly"
	| "monthly"
	| "yearly"
	| "never";

export default function sitemap(): MetadataRoute.Sitemap {
	const changeFrequency = "daily" as changeFrequency;
	const routes = [
		"",
		"/about",
		"/features",
		"/contact",
		"/login",
		"/signup",
		"/developers",
	].map((route) => ({
		url: `${WEBSITE_URL}${route}`,
		lastModified: new Date(),
		changeFrequency,
		priority: 1,
	}));
	return [...routes];
}
