import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { SATSATmetadata } from "@/utils/metadata";

import NextTopLoader from "nextjs-toploader";

const roboto = Roboto({
	subsets: ["latin", "greek"],
	weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = SATSATmetadata;

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
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
