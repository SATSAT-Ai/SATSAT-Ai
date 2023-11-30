import TransactionsPageClient from "@/components/TransactionsPageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SATSAT-AI Transactions",
};

const Page = () => {
	return <TransactionsPageClient />;
};

export default Page;
