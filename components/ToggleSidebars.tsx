"use client";

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import {
	TbLayoutSidebarLeftExpand,
	TbLayoutSidebarRightExpand,
} from "react-icons/tb";

const ToggleSidebars = () => {
	const { setHideSidebar, setHidChatSidebar, hideSidebar, hideChatSidebar } =
		useContext(AppContext);
	return (
		<div
			className={`${
				!hideSidebar && !hideChatSidebar ? "hidden" : "flex"
			}  mx-auto sticky top-20 flex  max-w-[1440px]  w-full justify-between p-5 items-center `}
		>
			{hideSidebar && (
				<div
					tabIndex={0}
					className="  focus:bg-brand-green cursor-pointer hover:bg-brand-green w-fit p-1 rounded-md"
					onClick={() => setHideSidebar(false)}
				>
					<TbLayoutSidebarLeftExpand size={25} color="white" />
				</div>
			)}
			{hideChatSidebar && (
				<div
					tabIndex={0}
					className="ml-auto focus:bg-brand-green cursor-pointer hover:bg-brand-green w-fit p-1 rounded-md"
					onClick={() => setHidChatSidebar(false)}
				>
					<TbLayoutSidebarRightExpand size={25} color="white" />
				</div>
			)}
		</div>
	);
};

export default ToggleSidebars;
