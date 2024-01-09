import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";
import { SATSATmetadata } from "@/utils/metadata";
import NextTopLoader from "nextjs-toploader";
import "react-tooltip/dist/react-tooltip.css";
import { Toaster } from "react-hot-toast";
import { getServerSession } from "next-auth";
import SessionProvider from "@/components/SessionProvider";
import { options } from "./api/auth/[...nextauth]/options";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["200", "300", "400", "500", "600", "700", "900"],
	// roboto weight: ["300", "400", "500", "700", "800", "900"],
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
			<body className={montserrat.className}>
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
				<SessionProvider session={session}>{children}</SessionProvider>
			</body>
		</html>
	);
}
