import TransactionsClientPage from "@/components/TransactionsClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SATSAT-AI Transactions",
};

const Page = () => {
	return <TransactionsClientPage />;
};

export default Page;
