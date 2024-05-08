import { Metadata } from "next";
import TransactionsClientPage from "../(components)/TransactionsClientPage";
import axios from "axios";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export const metadata: Metadata = {
	title: "SatSat-Ai Transactions",
};

const apiUrl = process.env.SATSATAI_MS_STATEMENT;
const getUserTransactions = async () => {
	const session = await getServerSession(options);

	if (session && session.user.access_token) {
		try {
			const response = axios.get(
				`${apiUrl}/api/mobile-money-transactions/index`, //?per_page=1
				{
					headers: {
						Authorization: `Bearer ${session.user.access_token}`,
					},
				}
			);
			const data = await (await response).data;
			return data;
		} catch (error: any) {
			console.log(error);
		}
	}
};
const Page = async () => {
	// const transactions = await getUserTransactions();
	// console.log(transactions);
	return <TransactionsClientPage />;
};

export default Page;
