"use client";

import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";
import { AppContext } from "@/context/AppContext";
import DashboardSidebarWithData from "./DashboardSidebarData";
import { cn } from "@/lib/utils";
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
			className={cn(
				"bg-brand-green/10 backdrop-blur-md transition-all duration-200 ease-out text-white z-40 md:relative fixed ",
				{ "md:w-32 -translate-x-full md:translate-x-0": hideSidebar },
				{ "md:w-64 translate-x-0 overflow-hidden": !hideSidebar }
			)}
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
