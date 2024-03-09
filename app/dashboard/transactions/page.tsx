import { Metadata } from "next";
import TransactionsClientPage from "../(components)/TransactionsClientPage";

export const metadata: Metadata = {
	title: "SatSat-Ai Transactions",
};

const Page = () => {
	return <TransactionsClientPage />;
};

export default Page;
