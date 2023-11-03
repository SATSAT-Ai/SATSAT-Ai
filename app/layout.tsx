import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.scss";
import { SATSATmetadata } from "@/utils/metadata";

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
			<body className={roboto.className}>{children}</body>
		</html>
	);
}
