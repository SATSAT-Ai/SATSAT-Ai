import { Metadata } from "next";
import ChatMain from "../(components)/ChatMain";
import ChatSidebar from "../(components)/ChatSidebar";
import ChatSidebarEnterprise from "@/app/dashboard-enterprise/(components)/ChatSidebarEnterprise";

export const metadata: Metadata = {
	title: "SatSat-Ai Chat with your financial data",
};

const page = () => {
	return (
		<div className="h-full flex overflow-clip">
			<ChatMain />
			<ChatSidebar />
		</div>
	);
};

export default page;
