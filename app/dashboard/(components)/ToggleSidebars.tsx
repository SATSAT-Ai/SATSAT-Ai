"use client";

import { AppContext } from "@/context/AppContext";
import { ChatContext } from "@/context/ChatContext";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { useContext } from "react";
import {
	TbLayoutSidebarLeftExpand,
	TbLayoutSidebarRightExpand,
} from "react-icons/tb";

const ToggleSidebars = ({ className }: { className?: ClassValue }) => {
	const { setHideSidebar, hideSidebar } = useContext(AppContext);
	const { setHideChatSidebar, hideChatSidebar } = useContext(ChatContext);

	const handleShowSidebar = () => {
		setHideSidebar(false);
		if (window.innerWidth <= 1050) {
			setHideChatSidebar(true);
		}
	};

	const handleHideSidebar = () => {
		setHideChatSidebar(false);
		if (window.innerWidth <= 1050) {
			setHideSidebar(true);
		}
	};

	return (
		<div
			className={cn(
				"mx-auto sticky top-0 left-0  flex  max-w-[1440px]  w-full justify-between py-3 items-center",
				{ hidden: !hideSidebar && !hideChatSidebar },
				{ flex: hideSidebar && hideChatSidebar },
				className
			)}
		>
			{hideSidebar && (
				<div
					tabIndex={0}
					className="  focus:bg-brand-green cursor-pointer hover:bg-brand-green w-fit p-1 rounded-md"
					onClick={handleShowSidebar}
				>
					<TbLayoutSidebarLeftExpand size={25} color="white" />
				</div>
			)}
			{hideChatSidebar && (
				<div
					tabIndex={0}
					className="ml-auto focus:bg-brand-green cursor-pointer hover:bg-brand-green w-fit p-1 rounded-md"
					onClick={handleHideSidebar}
				>
					<TbLayoutSidebarRightExpand size={25} color="white" />
				</div>
			)}
		</div>
	);
};

export default ToggleSidebars;
