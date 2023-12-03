import ChatSidebar from "@/components/ChatSidebar";
import ToggleSidebars from "@/components/ToggleSidebars";
import { Metadata } from "next";
import TelegramIcon from "@mui/icons-material/Telegram";

import ChatMain from "@/components/ChatMain";

export const metadata: Metadata = {
	title: "SATSAT-AI Chat with your financial data",
};

const page = () => {
	return (
		<div className="flex h-full justify-between">
			<div className="flex  flex-[3] h-screen overflow-hidden w-full flex-col">
				<ToggleSidebars />
				{
					<ChatMain />

					// <div className=" flex flex-col h-full items-center justify-center px-3">
					// 	<h1 className="text-white text-text-40 text-center sm:text-text-60">
					// 		SATSAT AI
					// 	</h1>
					// 	<div className="text-white mt-10 max-w-xs md:max-w-full">
					// 		<h2 className="font-medium mx-auto w-fit xl:mr-auto xl:w-full">
					// 			Chat suggestions
					// 		</h2>
					// 		<div className="flex justify-center flex-wrap gap-5">
					// 			<div className="flex flex-col gap-5">
					// 				<button type="button" className="border border-white py-2 px-4 text-text-12 sm:text-text-normal hover:bg-brand-green/20 active:scale-[1.01] rounded-3xl">
					// 					Total income for the past quarter
					// 				</button>
					// 				<button type="button"className="border border-white py-2 px-4 text-text-12 sm:text-text-normal hover:bg-brand-green/20 active:scale-[1.01] rounded-3xl">
					// 					Total income for the past quarter
					// 				</button>
					// 			</div>
					// 			<div className="flex flex-col gap-5">
					// 				<button type="button" className="border border-white py-2 px-4 text-text-12 sm:text-text-normal hover:bg-brand-green/20 active:scale-[1.01] rounded-3xl">
					// 					Total income for the past quarter
					// 				</button>
					// 				<button type="button" className="border border-white py-2 px-4 text-text-12 sm:text-text-normal hover:bg-brand-green/20 active:scale-[1.01] rounded-3xl">
					// 					Total income for the past quarter
					// 				</button>
					// 			</div>
					// 		</div>
					// 	</div>
					// </div>
				}
				<div className="text-white sticky bottom-0 p-5  ">
					<div className="bg-[#071f07] rounded-lg max-w-3xl mx-auto">
						<div
							tabIndex={0}
							className="flex  w-full mt-auto border border-white items-center p-1 justify-between rounded-lg px-2 gap-5"
						>
							<textarea
								rows={1}
								className="w-full text-text-normal placeholder:text-white outline-none bg-brand-green border-none h-auto bg-transparent"
								placeholder="Enter your message..."
							/>

							<TelegramIcon
								tabIndex={0}
								fontSize="large"
								className="active:scale-[1.02]"
								color="inherit"
								aria-hidden="false"
							/>
						</div>
					</div>
				</div>
			</div>
			<ChatSidebar />
		</div>
	);
};

export default page;
