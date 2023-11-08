"use client";
import Image from "next/image";
import Logo from "@/public/satsat-logo.svg";
import DashboardData from "@/app/dashboard/dashboardData";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const DashboardSidebar = () => {
	const pathname = usePathname();
	const { hideSidebar, setHideSidebar } = useContext(AppContext);
	return (
		<div
			className={`bg-white/10 backdrop-blur-md text-white min-h-full relative flex-grow-0 flex-shrink-0 md:flex-[150px] ${
				hideSidebar ? "hidden" : "block"
			}`}
		>
			<Link href={"/"} className="hidden md:flex">
				<Image
					className="mx-auto w-fit pt-4"
					src={Logo}
					height={110}
					width={110}
					alt="SATSAT-Ai"
				/>
			</Link>

			<DashboardData setHideSidebar={setHideSidebar} pathname={pathname} />
		</div>
	);
};

export default DashboardSidebar;
