import ChatSidebar from "@/components/ChatSidebar";
import { Metadata } from "next";
import ChatMain from "@/components/ChatMain";

export const metadata: Metadata = {
	title: "SATSAT-AI Chat with your financial data",
};

const page = () => {
	return (
		<div className="h-full flex overflow-clip">
			<div className="flex flex-[3] w-full flex-col">
				<ChatMain />
			</div>
			<ChatSidebar />
		</div>
	);
};

export default page;
