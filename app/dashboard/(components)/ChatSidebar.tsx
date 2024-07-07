"use client";

import { useContext, useLayoutEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import { ChatContext } from "@/context/ChatContext";
import Link from "next/link";
import ChatsOptions from "./ChatsOptions";
import SingleChat from "./SingleChat";

const ChatSidebar = () => {
	const pathname = usePathname();

	const { hideChatSidebar, setHideChatSidebar, setIsOldConversation } =
		useContext(ChatContext);

	useLayoutEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768 || window.innerWidth < 1025) {
				setHideChatSidebar(true);
			} else {
				setHideChatSidebar(true);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [setHideChatSidebar]);

	const [chats, setChats] = useState([
		{
			id: "csdrfdfsssfer",
			title: "Monthly spending trends1",
			timestamp: "34i2d3483",
			active: false,
		},

		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
	]);
	//fetch chats

	return (
		<aside
			className={` bg-brand-green/20 shadow-md py-3 transition-all duration-300 text-nowrap fixed lg:static h-full top-0 right-0  ${
				hideChatSidebar ? "w-0" : "w-72"
			}`}
		>
			<div className=" overflow-clip gap-4 px-2 flex flex-col h-full">
				<div className="flex px-5 justify-between w-full items-center gap-5">
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
				<div
					className={`flex overflow-x-clip grow flex-col overflow-y-auto w-full px-2 custom-scroll gap-2 `}
				>
					{chats.map((chat) => {
						return (
							<SingleChat
								key={chat.id}
								pathname={pathname!}
								chat={chat}
								setIsOldConversation={setIsOldConversation}
							/>
						);
					})}
				</div>
				<ChatsOptions chats={chats} />
			</div>
		</aside>
	);
};

export default ChatSidebar;
