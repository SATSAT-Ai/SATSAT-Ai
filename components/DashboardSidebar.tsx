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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<aside
			className={`bg-white/10  backdrop-blur-md text-white  z-40 md:relative fixed   ${
				hideSidebar
					? "md:w-32 transition-all duration-500 -translate-x-full md:translate-x-0"
					: "md:w-64 translate-x-0 transition-transform duration-500 md:duration-0 md:transition-none"
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
