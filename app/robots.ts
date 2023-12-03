import { MetadataRoute } from "next";

const WEBSITE_URL = process.env.WEBSITE_URL || "http://localhost:3000";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			disallow: "/private/",
		},
		sitemap: `${WEBSITE_URL}/sitemap.xml`,
	};
}
