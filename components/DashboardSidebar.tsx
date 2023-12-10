"use client";

import { usePathname } from "next/navigation";
import { useContext, useLayoutEffect } from "react";
import { AppContext } from "@/context/AppContext";
import DashboardSidebarWithData from "./DashboardSidebarData";
const DashboardSidebar = () => {
	const pathname = usePathname();
	const { hideSidebar, setHideSidebar } = useContext(AppContext);

	useLayoutEffect(() => {
		if (pathname.includes("/chat")) {
			setHideSidebar(true);
		} else {
			setHideSidebar(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<aside
			className={`bg-white/10  backdrop-blur-md text-white  z-40 md:relative fixed   ${
				hideSidebar
					? "w-40 md:w-32 transition-all duration-500 -translate-x-full md:translate-x-0"
					: "w-28 md:w-64 translate-x-0  transition-transform duration-500 md:duration-0 md:transition-none"
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
