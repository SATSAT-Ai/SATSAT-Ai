"use client";

import { usePathname } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/context/AppContext";
import DashboardSidebarWithData from "./DashboardSidebarData";
import { cn } from "@/lib/utils";
import { ChevronLeft, PanelLeft } from "lucide-react";
import { Tooltip } from "react-tooltip";
const DashboardSidebar = () => {
	const pathname = usePathname();
	const { hideSidebar, setHideSidebar } = useContext(AppContext);
	const [hideSidebarCompletely, setHideSidebarCompletely] = useState(false);

	const [showTooltip, setShowTooltip] = useState(false);

	useEffect(() => {
		let timeout: NodeJS.Timeout;

		if (hideSidebar && pathname?.includes("/dashboard/chat")) {
			setShowTooltip(true);
		}

		timeout = setTimeout(() => {
			setShowTooltip(false);
		}, 5000);
		return () => {
			clearTimeout(timeout);
		};
	}, [hideSidebar, pathname]);

	useEffect(() => {
		if (pathname?.includes("/dashboard/chat")) {
			setHideSidebarCompletely(true);
		} else {
			setHideSidebarCompletely(false);
		}
	}, [pathname]);

	return (
		<aside
			className={cn(
				"bg-brand-green/10 backdrop-blur-2xl w-64 sm:w-64 transition-all duration-300 text-white z-40 fixed md:relative",
				{ "md:w-24 -translate-x-full md:translate-x-0": hideSidebar },
				{ "translate-x-0": !hideSidebar },
				{ "md:w-0": hideSidebarCompletely }
			)}
		>
			<DashboardSidebarWithData
				hideSidebar={hideSidebar}
				setHideSidebar={setHideSidebar}
				pathname={pathname!}
			/>
			<button
				id="sidebar-chevron-show-completely"
				onClick={() => (
					setHideSidebarCompletely(false), setHideSidebar((prev) => !prev)
				)}
				type="button"
				className={cn(
					"absolute -right-10 cursor-pointer w-fit border hover:border-brand-green bg-brand-green/30 hover:bg-brand-green/40 p-2 border-white/20 rounded-md top-3",
					{ hidden: !hideSidebar && !hideSidebarCompletely }
				)}
			>
				<PanelLeft color="white" size={20} />
				<Tooltip
					variant="light"
					anchorSelect="#sidebar-chevron-show-completely"
					place="bottom"
					content="Show sidebar completely"
					className={cn("hidden md:flex", {
						"md:hidden": !hideSidebar,
					})}
				/>
			</button>
			<button
				onClick={() => (setHideSidebarCompletely(true), setHideSidebar(true))}
				type="button"
				id="sidebar-chevron-hide"
				className={cn(
					"absolute -right-7 hidden md:flex top-1/2",
					{
						"hidden md:flex": !hideSidebarCompletely,
					},
					{ "md:hidden": hideSidebarCompletely }
				)}
			>
				<ChevronLeft
					className="text-white/30 hover:text-white"
					size={25}
					strokeWidth={3}
				/>
				<Tooltip
					variant="light"
					anchorSelect="#sidebar-chevron-hide"
					place="right"
					isOpen={showTooltip}
					content="Hide Sidebar Completely"
					className={cn("hidden md:flex", {
						"md:hidden": !hideSidebar,
					})}
				/>
			</button>
		</aside>
	);
};

export default DashboardSidebar;
