"use client";

import { useContext, useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { usePathname } from "next/navigation";
import { ChatContext } from "@/context/ChatContext";
import Link from "next/link";
import ChatsOptions from "./ChatsOptions";
import SingleChat from "./SingleChat";
import { cn } from "@/lib/utils";
import { ArrowRightToLine, PanelRight } from "lucide-react";
import { Tooltip } from "react-tooltip";
import { AppContext } from "@/context/AppContext";

const ChatSidebar = () => {
	const pathname = usePathname();

	const { hideChatSidebar, setHideChatSidebar, setIsOldConversation } =
		useContext(ChatContext);
	const { hideSidebar, setHideSidebar } = useContext(AppContext);

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
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewfsrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
	]);
	//fetch chats

	//hideChatSide on mobile when sidebar is toggled open
	useEffect(() => {
		if (window.innerWidth < 768 || window.innerWidth < 1140) {
			if (!hideChatSidebar && !hideSidebar) {
				setHideChatSidebar(true);
			}
		}
	}, [hideChatSidebar, hideSidebar, setHideChatSidebar]);

	//hide sidebar on mobile when sidebar is open and chatSidebar is being closed
	const handleHideChatSidebar = () => {
		if (window.innerWidth < 768 || window.innerWidth < 1140) {
			if (!hideSidebar) {
				setHideChatSidebar(false);
				setHideSidebar(true);
			}
		}
		setHideChatSidebar(false);
	};

	return (
		<div className="flex items-start">
			<button
				id="chatSidebar-chevron-show"
				onClick={handleHideChatSidebar}
				type="button"
				className={cn(
					" absolute right-1 z-20 hover:bg-[#071f07] hover:border-white/20 p-2 top-3 border hover:border-brand-green bg-brand-green/30  hover:bg-brand-green/40 border-white/20 rounded-md",
					{ " md:hidden": !hideChatSidebar }
				)}
			>
				<PanelRight color="white" size={20} />
				<Tooltip
					variant="light"
					anchorSelect="#chatSidebar-chevron-show"
					place="right"
					content="Show ChatSidebar"
					className="hidden md:flex"
				/>
			</button>
			<aside
				className={` shadow-md z-20 bg-[#071f07] border-l  py-3 transition-all duration-300 text-nowrap fixed lg:static h-full top-0 right-0  ${
					hideChatSidebar ? "w-0 border-white/0" : "w-72 border-white/20"
				}`}
			>
				<div className=" overflow-clip gap-4 px-2 flex flex-col h-full">
					<div className="flex px-5 justify-between w-full items-center gap-5">
						<button
							type="button"
							id="chatSidebar-chevron-hide"
							tabIndex={0}
							className={cn(
								"ml-2 z-10 border border-brand-green bg-brand-green/30 rounded-md md:mx-auto md:mx-full hover:bg-brand-green/40 p-1 w-fit rounded-md`"
							)}
							onClick={() => setHideChatSidebar(true)}
						>
							<ArrowRightToLine size={20} className="text-white " />
							<Tooltip
								variant="light"
								anchorSelect="#chatSidebar-chevron-hide"
								place="right"
								content="Hide ChatSidebar"
								className={cn("hidden md:flex", {
									"md:hidden": hideChatSidebar,
								})}
							/>
						</button>
						<Link
							href="/dashboard/chat"
							className="flex border-white text-text-normal font-medium border hover:bg-brand-green text-white active:scale-[1.02] ease-linear transition-colors xl:border-brand-green px-4 py-2 rounded-xl w-fit items-center gap-5"
						>
							<FaPlus size={25} color="white" />
							New Chat
						</Link>
					</div>
					<div
						className={`flex overflow-x-clip grow flex-col overflow-y-auto w-full px-2 [scrollbar-width:thin] gap-2 `}
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
		</div>
	);
};

export default ChatSidebar;
