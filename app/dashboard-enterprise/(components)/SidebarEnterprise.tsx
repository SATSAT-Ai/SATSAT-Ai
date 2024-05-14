"use client";

import { HiChevronRight, HiChevronLeft } from "react-icons/hi";
import { ReactElement, useState } from "react";
import Link from "next/link";
import { PiUsersThreeFill } from "react-icons/pi";
import { SiGooglebard } from "react-icons/si";
import { RiSettingsFill, RiLogoutBoxFill } from "react-icons/ri";
import { BiSolidDashboard } from "react-icons/bi";

interface IdashboardPaths {
	name: string;
	path: string;
	icon: ReactElement;
}

interface IdashboardData extends IdashboardPaths {
	subPaths?: IdashboardPaths[];
}

const SidebarEnterprise = () => {
	const [showSidebar, setShowSidebar] = useState(true);

	const dashBoardData: IdashboardData[] = [
		{
			name: "Overview",
			path: "/dashboard-enterprise",
			icon: <BiSolidDashboard className="text-white text-text-20" />,
		},
		{
			name: "Clients",
			path: "/dashboard-enterprise/clients",
			icon: <PiUsersThreeFill className="text-white text-text-20" />,
		},
		{
			name: "Scan",
			path: "/dashboard-enterprise/scan",
			icon: <SiGooglebard className="text-white text-text-20" />,
		},
		{
			name: "Settings",
			path: "/dashboard-enterprise/scan",
			icon: <RiSettingsFill className="text-white text-text-20" />,
		},
		{
			name: "logout",
			path: "/dashboard-enterprise/scan",
			icon: <RiLogoutBoxFill className="text-white text-text-20" />,
		},
	];

	return (
		<div className="flex">
			<aside
				className={`h-screen ${
					showSidebar ? " md:w-52" : " md:w-20"
				} w-20 bg-[#17212B] text-white transition-all duration-150 ease-in-out scrollbar-hidden overflow-y-auto relative`}
			>
				<Link
					href={"/"}
					className="flex items-center justify-between p-5 sticky top-0 bg-[#17212B]"
				>
					{showSidebar ? (
						<h1 className="m-0">Custom Logo</h1>
					) : (
						<h1 className="m-0">Logo</h1>
					)}
				</Link>
				<ul className="p-2">
					{dashBoardData.map((data) => {
						return (
							<li key={data.name}>
								<Link
									href={data.path}
									className="hover:bg-grey-light rounded-md p-2 cursor-pointer items-center justify-center md:justify-start flex gap-4"
								>
									{data.icon}
									<p className="font-normal text-text-normal">{data.name}</p>
								</Link>
							</li>
						);
					})}
				</ul>
			</aside>
			{showSidebar ? (
				<button
					type="button"
					onClick={() => setShowSidebar(!showSidebar)}
					className="size-6 focus:ring-1 focus:outline-none focus:ring-offset-1 focus:ring-offset-[#5289C1]/30 grid place-content-center group shadow-md active:scale-[1.03] rounded-full text-text-20 relative z-10 right-3 top-5 bg-[#17212B]"
				>
					<HiChevronLeft className="text-white/60 group-hover:text-white transition-colors ease-in" />
				</button>
			) : (
				<button
					type="button"
					onClick={() => setShowSidebar(!showSidebar)}
					className="group focus:ring-1 focus:outline-none focus:ring-offset-1 focus:ring-offset-[#5289C1]/30 active:scale-[1.03] size-6 grid place-content-center shadow-md rounded-full text-text-20 relative z-10 right-3 top-5 bg-[#17212B]"
				>
					<HiChevronRight className="text-white/60 group-hover:text-white transition-colors ease-in" />
				</button>
			)}
		</div>
	);
};

export default SidebarEnterprise;
