"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import ChatCollections from "./ChatCollections";
import { Ichat } from "@/interface";
import { FaUserCircle } from "react-icons/fa";

const ChatSidebar = () => {
	const [showFiles, setShowFiles] = useState(false);

	//fetch chats

	const chats: Ichat[] = [
		{
			id: "csdrfdfsfer",
			title: "Monthly spending trends",
			timestamp: "34i23483",
		},
		{
			id: "csdrfdferwwerersfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdfeerwrwersfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwe7rsfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdfedfdsrweghfghrsfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegwerhfghrsfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwwereghfghrsfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyerhfghrsfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwjjyegwerhfghrsfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwwere43545ghfghrsfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348df3",
		},
		{
			id: "csdrfdferwegyerrbhfghrsfer",
			title: "Monthly spending trends2",
			timestamp: "34i2348df3",
		},
	];

	const pathname = usePathname();
	const { hideSidebar, setHideSidebar } = useContext(AppContext);
	return (
		<div
			className={`bg-white/10 backdrop-blur-md text-white min-h-full z-40 sm:relative absolute flex-initial md:basis-72 ${
				hideSidebar ? "hidden" : "block"
			}`}
		>
			{/* <ChatSidebarData setHideSidebar={setHideSidebar} pathname={pathname} /> */}
			<ul className=" p-3 justify-between min-h-screen flex w-full sticky top-0 items-center flex-col gap-2 ">
				<div className="flex justify-between w-full items-center gap-5">
					<button
						type="button"
						className="flex font-semibold border hover:bg-brand-green active:scale-[1.02] ease-linear transition-colors border-brand-green px-4 py-2 rounded-xl w-fit items-center gap-5"
					>
						<FaPlus size={25} color="white" />
						New Chat
					</button>

					{/* <div
						tabIndex={0}
						onClick={() => setHideSidebar(true)}
						className=" focus:bg-brand-green mx-auto md:mx-full cursor-pointer hover:bg-brand-green p-1 rounded-md"
					>
					</div> */}
					<TbLayoutSidebarRightExpand color="white" size={30} />
				</div>
				<ChatCollections chatCollections={chats} showFiles={showFiles} />

				<li className="flex  flex-col md:mt-2 gap-4">
					<div className="active:scale-[1.01] select-none flex flex-col max-w-xs cursor-pointer gap-3 gradient-upgrade rounded-3xl p-5 shadow-md">
						<h3 className="my-0 flex items-center gap-3 font-medium text-text-normal">
							<RocketLaunchIcon fontSize="large" color={"primary"} />
							UPGRADE PLAN
						</h3>
						<p className="w-full text-[13px] font-normal">
							Upgrade your current plan and enjoy amazing features
						</p>
					</div>
					<div className="bg-white/10 w-full hover:bg-brand-green-darker cursor-pointer active:scale-[1.01] justify-start p-2 rounded-md flex items-center gap-3">
						<div className="h-10 w-10 flex hover:bg-grey-light items-center justify-center rounded-full bg-brand-green">
							<FaUserCircle color="white" size={30} />
						</div>
						<p>Kamasah Dickson</p>
					</div>
				</li>
			</ul>
		</div>
	);
};

export default ChatSidebar;
