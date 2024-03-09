"use client";

import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import DashboardSidebarWithData from "./DashboardSidebarData";
const DashboardSidebar = () => {
	const pathname = usePathname();
	const { hideSidebar, setHideSidebar } = useContext(AppContext);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 768) {
				setHideSidebar(true);
			} else {
				setHideSidebar(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [setHideSidebar]);

	return (
		<aside
			className={`bg-white/10 backdrop-blur-md transition-all duration-75 ease-out text-white z-40 md:relative fixed ${
				hideSidebar
					? "md:w-32 -translate-x-full md:translate-x-0"
					: "md:w-64 translate-x-0 overflow-hidden"
			}`}
		>
			<DashboardSidebarWithData
				hideSidebar={hideSidebar}
				setHideSidebar={setHideSidebar}
				pathname={pathname!}
			/>
		</aside>
	);
};

export default DashboardSidebar;
