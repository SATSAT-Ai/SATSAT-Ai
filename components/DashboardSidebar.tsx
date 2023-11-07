"use client";
import Image from "next/image";
import Logo from "@/public/satsat-logo.svg";
import DashboardData from "@/app/dashboard/dashboardData";
import { usePathname } from "next/navigation";
import Link from "next/link";

const DashboardSidebar = () => {
	const pathname = usePathname();
	return (
		<div className="bg-white/10 backdrop-blur-md text-white h-full">
			<Link href={"/"}>
				<Image
					className="mx-auto w-fit pt-4"
					src={Logo}
					height={110}
					width={110}
					alt="SATSAT-Ai"
				/>
			</Link>
			<DashboardData pathname={pathname} />
		</div>
	);
};

export default DashboardSidebar;
