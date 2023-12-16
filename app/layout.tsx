import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { SATSATmetadata } from "@/utils/metadata";
import NextTopLoader from "nextjs-toploader";
import "react-tooltip/dist/react-tooltip.css";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "700", "800", "900"],
});

export const metadata: Metadata = SATSATmetadata;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={poppins.className}>
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
				{children}
			</body>
		</html>
	);
}
