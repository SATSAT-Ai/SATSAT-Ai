"use client";

import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { TbLayoutSidebarLeftExpand } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { Ichat } from "@/interface";
import { PiChatCircleTextFill } from "react-icons/pi";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface IChatCollections {
	chatCollections: Ichat[];
}

const ChatSidebar = () => {
	const pathname = usePathname();
	//fetch chats

	const chats: Ichat[] = [
		{
			id: "csdrfdfsfer",
			title: "Monthly spending trends1",
			timestamp: "34i23483",
		},
		{
			id: "csdrfdferwwerersfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdfeerwrwersfer",
			title: "Monthly spending trends3",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwe7rsfer",
			title: "Monthly spending trends4",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdfedfdsrweghfghrsfer",
			title: "Monthly spending trends5",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegwerhfghrsfer",
			title: "Monthly spending trends6",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwwereghfghrsfer",
			title: "Monthly spending trends7",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyerhfghrsfer",
			title: "Monthly spending trends8",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwjjyegwerhfghrsfer",
			title: "Monthly spending trends9",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwwere43545ghfghrsfer",
			title: "Monthly spending trends10",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyerrbdsfhfghrsfer",
			title: "Monthly spending trends11",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyewerwerrbhfghrsfer",
			title: "Monthly spending trends12",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyewerrrbhfghrsfer",
			title: "Monthly spending trends13",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhfghrsfer",
			title: "Monthly spending trends14",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhfg5345hrsfer",
			title: "Monthly spending trends15",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3453ghrsfer",
			title: "Monthly spending trends16",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf345345ghrsfer",
			title: "Monthly spending trends17",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeew345rrrbhf345345ghrsfer",
			title: "Monthly spending trends18",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbh12f345345ghrsfer",
			title: "Monthly spending trends19",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3455345ghrsfer",
			title: "Monthly spending trends20",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf345534sd5ghrsfer",
			title: "Monthly spending trends21",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhhdf3455345ghrsfer",
			title: "Monthly spending trends22",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3455345hdsghrsfer",
			title: "Monthly spending trends23",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3455345hdfghrsfer",
			title: "Monthly spending trends24",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3455345gsdfhrsfer",
			title: "Monthly spending trends25",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3455345yuygsdfhrsfer",
			title: "Monthly spending trends26",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3455345gs345fdfhrsfer",
			title: "Monthly spending trends27",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3455345gsdf32fhrsfer",
			title: "Monthly spending trends28",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3455345gsdfk8hrsfer",
			title: "Monthly spending trends29",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyeewrrrbhf3455345gssdf23dfhrsfer",
			title: "Monthly spending trends30",
			timestamp: "34i2348df3",
		},
	];

	const { hideChatSidebar, setHidChatSidebar } = useContext(AppContext);

	return (
		<aside
			className={` bg-[#051305] py-2 fixed md:static  xl:bg-white/10 h-screen top-0 right-0  ${
				hideChatSidebar ? "hidden" : "block"
			}`}
		>
			<div className=" overflow-auto px-2 flex flex-col h-full justify-between">
				<div className="flex sticky py-2 px-5 justify-between w-full items-center gap-5">
					<div
						tabIndex={0}
						onClick={() => setHidChatSidebar(true)}
						className="focus:bg-brand-green cursor-pointer my-5 md:my-0 hover:bg-brand-green w-fit p-1 rounded-md"
					>
						<TbLayoutSidebarLeftExpand color="white" size={25} />
					</div>
					<button
						type="button"
						className="flex border-white text-text-normal font-medium border hover:bg-brand-green text-white active:scale-[1.02] ease-linear transition-colors xl:border-brand-green px-4 py-2 rounded-xl w-fit items-center gap-5"
					>
						<FaPlus size={25} color="white" />
						New Chat
					</button>
				</div>
				<div
					className={`flex flex-col h-[600px] overflow-auto px-3 w-full  custom-scroll  gap-2 `}
				>
					{chats.map((chat) => {
						return (
							<Link
								href={
									pathname === `dashboard/chat/${chat.id}`
										? `${chat.id}`
										: `/dashboard/chat/${chat.id}`
								}
								key={chat.id}
								className="flex text-white hover:bg-white/10 rounded-xl cursor-pointer p-2 items-center gap-2 text-[14px] font-medium"
							>
								<PiChatCircleTextFill size={25} />
								{chat.title}
							</Link>
						);
					})}
				</div>
				<div>Hello</div>
			</div>
		</aside>
	);
};

export default ChatSidebar;
