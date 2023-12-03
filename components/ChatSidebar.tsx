/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useContext, useLayoutEffect } from "react";
import { AppContext } from "@/context/AppContext";
import { FaPlus } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import FetchedCharts from "./FetchedCharts";

const ChatSidebar = () => {
	const pathname = usePathname();

	const { hideChatSidebar, setHidChatSidebar } = useContext(AppContext);

	useLayoutEffect(() => {
		if (typeof window !== "undefined" && window.innerWidth < 768) {
			setHidChatSidebar(true);
		} else {
			setHidChatSidebar(false);
		}
	}, []);

	return (
		<aside
			className={` bg-[#051305] py-2 fixed lg:static  xl:bg-white/10 h-screen top-0 right-0  ${
				hideChatSidebar ? "hidden" : "block"
			}`}
		>
			<div className=" overflow-auto px-2 flex flex-col h-full justify-between">
				<div className="flex sticky py-2 px-5 justify-between w-full items-center gap-5">
					<div
						tabIndex={0}
						onClick={() => setHidChatSidebar(true)}
						className=" active:scale-[1.06] focus:bg-brand-green cursor-pointer my-5 md:my-0 hover:bg-brand-green w-fit p-1 rounded-md"
					>
						<MdClose color="white" size={25} />
					</div>
					<button
						type="button"
						className="flex border-white text-text-normal font-medium border hover:bg-brand-green text-white active:scale-[1.02] ease-linear transition-colors xl:border-brand-green px-4 py-2 rounded-xl w-fit items-center gap-5"
					>
						<FaPlus size={25} color="white" />
						New Chat
					</button>
				</div>
				<FetchedCharts pathname={pathname} />
			</div>
		</aside>
	);
};

export default ChatSidebar;
