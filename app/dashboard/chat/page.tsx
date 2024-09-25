import { Metadata } from "next";
import ChatMain from "../(components)/ChatMain";
import ChatSidebar from "../(components)/ChatSidebar";
import { spaceGrotesk } from "@/fonts/fonts";

export const metadata: Metadata = {
	title: "SatSat-Ai Chat with your financial data",
};

const page = () => {
	return (
		<div
			className={`h-full overflow-y-auto flex overflow-clip ${spaceGrotesk.className}`}
		>
			<ChatMain />
			<ChatSidebar />
		</div>
	);
};

export default page;
