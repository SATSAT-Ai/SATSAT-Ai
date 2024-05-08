import type { Metadata } from "next";
import "./globals.scss";
import NextTopLoader from "nextjs-toploader";
import "react-tooltip/dist/react-tooltip.css";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import { options } from "./api/auth/[...nextauth]/options";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import QueryProvider from "@/components/QueryProvider";
import { SatSatAiMetadata } from "@/utils/metadata";
import { roboto } from "@/fonts/fonts";

export const metadata: Metadata = SatSatAiMetadata;

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
			</body>
		</html>
	);
}
