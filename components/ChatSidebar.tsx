/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useContext, useLayoutEffect } from "react";
import { FaPlus } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import FetchedCharts from "./FetchedCharts";
import { ChatContext } from "@/context/ChatContext";
import Link from "next/link";

const ChatSidebar = () => {
	const pathname = usePathname();

	const { hideChatSidebar, setHideChatSidebar } = useContext(ChatContext);

	useLayoutEffect(() => {
		if (typeof window !== "undefined" && window.innerWidth < 768) {
			setHideChatSidebar(true);
		} else {
			setHideChatSidebar(false);
		}
	}, []);

	return (
		<aside
			className={` bg-[#071f07] shadow-md py-2 transition-transform duration-500 fixed lg:static h-screen top-0 right-0  ${
				hideChatSidebar ? "translate-x-full" : "translate-x-0"
			}`}
		>
			<div className=" overflow-auto px-2 flex flex-col h-full justify-between">
				<div className="flex sticky py-2 px-5 justify-between w-full items-center gap-5">
					<div
						tabIndex={0}
						onClick={() => setHideChatSidebar(true)}
						className=" active:scale-[1.06] cursor-pointer my-5 md:my-0 w-fit p-1 rounded-md"
					>
						<MdClose color="white" size={25} />
					</div>
					<Link
						href="/dashboard/chat"
						className="flex border-white text-text-normal font-medium border hover:bg-brand-green text-white active:scale-[1.02] ease-linear transition-colors xl:border-brand-green px-4 py-2 rounded-xl w-fit items-center gap-5"
					>
						<FaPlus size={25} color="white" />
						New Chat
					</Link>
				</div>
				<FetchedCharts pathname={pathname} />
			</div>
		</aside>
	);
};

export default ChatSidebar;
