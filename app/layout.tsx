import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { SATSATmetadata } from "@/utils/metadata";
import NextTopLoader from "nextjs-toploader";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["400", "500", "700", "900"],
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
					showSpinner={true}
					color="#29a173"
					initialPosition={0.04}
					crawlSpeed={300}
					height={3}
					crawl={true}
					easing="ease"
					speed={200}
					shadow="0 0 10px #29a173,0 0 5px #29a173"
				/>
				{children}
			</body>
		</html>
	);
}
