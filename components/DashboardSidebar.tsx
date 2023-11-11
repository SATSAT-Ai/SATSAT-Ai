"use client";

import DashboardData from "@/app/dashboard/dashboardData";
import { usePathname } from "next/navigation";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const DashboardSidebar = () => {
	const pathname = usePathname();
	const { hideSidebar, setHideSidebar } = useContext(AppContext);
	return (
		<div
			className={`bg-white/10 backdrop-blur-md text-white min-h-full relative flex-initial md:basis-64 ${
				hideSidebar ? "hidden" : "block"
			}`}
		>
			<DashboardData setHideSidebar={setHideSidebar} pathname={pathname} />
		</div>
	);
};

export default DashboardSidebar;
