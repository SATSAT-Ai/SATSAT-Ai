"use client";

import { usePathname } from "next/navigation";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import DashboardSidebarWithData from "./DashboardSidebarData";

const DashboardSidebar = () => {
	const pathname = usePathname();
	const { hideSidebar, setHideSidebar } = useContext(AppContext);
	return (
		<div
			className={`bg-white/10 backdrop-blur-md text-white min-h-full z-40 sm:relative absolute flex-initial md:basis-64 ${
				hideSidebar ? "hidden" : "block"
			}`}
		>
			<DashboardSidebarWithData
				setHideSidebar={setHideSidebar}
				pathname={pathname}
			/>
		</div>
	);
};

export default DashboardSidebar;
