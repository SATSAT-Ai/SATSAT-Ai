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

	const {
		hideChatSidebar,
		setHideChatSidebar,
		setConversations,
		setIsOldConversation,
	} = useContext(ChatContext);

	useLayoutEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768 || window.innerWidth < 1025) {
				setHideChatSidebar(true);
			} else {
				setHideChatSidebar(false);
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
			id: "csdrfdferwwefrefrsfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348fdf3",
			active: false,
		},
		{
			id: "csdrfdfeerswrswersfer",
			title: "Monthly spending trends3",
			timestamp: "34i2348df3",
			active: false,
		},
		{
			id: "csdrfdferwe7rfsfer",
			title: "Monthly spending trends4",
			timestamp: "34i2348df3",
			active: false,
		},
		{
			id: "csdrfdfedfdsrwesghfghrsfer",
			title: "Monthly spending trends5",
			timestamp: "34i2348df3",
			active: false,
		},
		{
			id: "csdrfdferwegwerhfgdhrsfer",
			title: "Monthly spending trends6",
			timestamp: "34i2348df3",
			active: false,
		},
		{
			id: "csdrfdferwwereghfgshrsfer",
			title: "Monthly spending trends7",
			timestamp: "34i2348df3",
			active: false,
		},
		{
			id: "csdrfdferwegyerhfghfrsfer",
			title: "Monthly spending trends8",
			timestamp: "34i2348df3",
			active: false,
		},
		{
			id: "csdrfdferwjjyegwerhsfghrsfer",
			title: "Monthly spending trends9",
			active: false,
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwwere43545eghfghrsfer",
			title: "Monthly spending trends10",
			active: false,
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyerrbdsfhffghrsfer",
			active: false,
			title: "Monthly spending trends11",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyewerwerrebhfghrsfer",
			active: false,
			title: "Monthly spending trends12",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyewerrrbhffghrsfer",
			active: false,
			title: "Monthly spending trends13",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbehfghrsfer",
			active: false,
			title: "Monthly spending trends14",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbh3fg5345hrsfer",
			active: false,
			title: "Monthly spending trends15",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf345fsd3ghrsfer",
			title: "Monthly spending trends16",
			active: false,
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3453f345ghrsfer",
			title: "Monthly spending trends17",
			active: false,
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeew345rrrbfshf345345ghrsfer",
			title: "Monthly spending trends18",
			timestamp: "34i2348df3",
			active: false,
		},
		{
			id: "csdrfdferwegyeewrrrbh1233fdff345345ghrsfer",
			title: "Monthly spending trends19",
			active: false,
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3455345gfhrsfer",
			title: "Monthly spending trends20",
			active: false,
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf345534ss3d5ghrsfer",
			active: false,
			title: "Monthly spending trends21",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhhdf33455345ghrsfer",
			title: "Monthly spending trends22",
			active: false,
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeew3rrrbhf3455345hdsghrsfer",
			active: false,
			title: "Monthly spending trends23",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewrrrrbhf3455345hdfghrsfer",
			title: "Monthly spending trends24",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrb3hf3455345gsdfhrsfer",
			active: false,
			title: "Monthly spending trends25",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewrfrrrbhf3455345yuygsdfhrsfer",
			title: "Monthly spending trends26",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewrrfsrbhf3455345gs345fdfhrsfer",
			title: "Monthly spending trends27",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbfhf3455345gsdf32fhrsfer",
			active: false,
			title: "Monthly spending trends28",
			timestamp: "34i2348df3",
		},
		{
			active: false,
			id: "csdrfdferwegyeewrrrbhfs3455345gsdfk8hrsfer",
			title: "Monthly spending trends29",
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

	return (
		<aside
			className={` bg-[#071f07] shadow-md py-3 transition-transform duration-500 fixed lg:static h-full top-0 right-0  ${
				hideChatSidebar ? "translate-x-full" : "translate-x-0"
			}`}
		>
			<div className=" overflow-auto gap-4 px-2 flex flex-col h-full justify-between">
				<div className="flex sticky px-5 justify-between w-full items-center gap-5">
					<div
						tabIndex={0}
						onClick={() => setHideChatSidebar(true)}
						className=" active:scale-[1.06] cursor-pointer my-5 md:my-0 w-fit p-1 rounded-md"
					>
						<MdClose color="white" size={25} />
					</div>
					<Link
						onClick={() => setConversations([])}
						href="/dashboard/chat"
						className="flex border-white text-text-normal font-medium border hover:bg-brand-green text-white active:scale-[1.02] ease-linear transition-colors xl:border-brand-green px-4 py-2 rounded-xl w-fit items-center gap-5"
					>
						<FaPlus size={25} color="white" />
						New Chat
					</Link>
				</div>
				<div
					className={`flex flex-col h-[600px] overflow-auto w-full px-2 custom-scroll  gap-2 `}
				>
					{chats.map((chat) => {
						return (
							<SingleChat
								key={chat.id}
								pathname={pathname}
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
