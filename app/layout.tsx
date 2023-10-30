import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";

const roboto = Roboto({
	subsets: ["latin", "greek"],
	weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
	title: "SATSAT-Ai",
	description:
		"SATSAT Ai is an all-in-one artificial intelligence platform that combines cutting-edge AI technology to query your financial data with natural language.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
