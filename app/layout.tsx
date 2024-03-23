import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { SATSATmetadata } from "@/utils/metadata";
import NextTopLoader from "nextjs-toploader";
import "react-tooltip/dist/react-tooltip.css";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import { options } from "./api/auth/[...nextauth]/options";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import QueryProvider from "@/components/QueryProvider";

const roboto = Roboto({
	subsets: ["latin", "greek"],
	weight: ["300", "400", "500", "700", "900"],
});

export const metadata: Metadata = SATSATmetadata;

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(options);

	return (
		<html lang="en">
			<body className={`antialiased ${roboto.className}`}>
				<NextTopLoader
					showSpinner={false}
					color="#29a173"
					initialPosition={0.04}
					crawlSpeed={300}
					height={2}
					crawl={true}
					easing="ease"
					speed={350}
					shadow="0 0 10px #29a173,0 0 5px #29a173"
				/>
				<Toaster />
				<SessionProvider session={session}>
					<QueryProvider>{children}</QueryProvider>
				</SessionProvider>
				<Analytics />
				<SpeedInsights />

				{(process.env.NODE_ENV === "development" ||
					process.env.VERCEL_ENV === "preview") && (
					// eslint-disable-next-line @next/next/no-sync-scripts
					<script
						data-project-id="GLPrneePhCAk9RjsxlqzKFhqmFSZsxCazvgjc38s"
						data-is-production-environment="false"
						src="https://snippet.meticulous.ai/v1/meticulous.js"
					/>
				)}
			</body>
		</html>
	);
}
