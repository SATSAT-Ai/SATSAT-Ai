"use client";

import { usePathname } from "next/navigation";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import DashboardSidebarWithData from "./DashboardSidebarData";

const DashboardSidebar = () => {
	const pathname = usePathname();
	const { hideSidebar, setHideSidebar } = useContext(AppContext);
	return (
		<aside
			className={`bg-white/10   backdrop-blur-md text-white  z-40 sm:relative fixed flex-initial md:basis-64  ${
				hideSidebar ? "!basis-28 hidden md:block" : "block"
			}`}
		>
			<DashboardSidebarWithData
				hideSidebar={hideSidebar}
				setHideSidebar={setHideSidebar}
				pathname={pathname}
			/>
		</aside>
	);
};

export default DashboardSidebar;
