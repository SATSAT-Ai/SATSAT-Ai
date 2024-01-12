import ChatSidebar from "@/components/ChatSidebar";
import ToggleSidebars from "@/components/ToggleSidebars";
import { Metadata } from "next";
import ChatMain from "@/components/ChatMain";

export const metadata: Metadata = {
	title: "SATSAT-AI Chat with your financial data",
};

const page = () => {
	return (
		<>
			<div className="flex h-full overflow-clip justify-between">
				<div className="flex flex-[3] h-full overflow-hidden w-full flex-col">
					<ToggleSidebars />
					<ChatMain />
				</div>
				<ChatSidebar />
			</div>
		</>
	);
};

export default page;
