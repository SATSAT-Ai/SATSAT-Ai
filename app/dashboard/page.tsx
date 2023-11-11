"use client";

import LineChart from "@/components/LineChart";
import PieCharts from "@/components/PieCharts";
import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";

const Page = () => {
	const { hideSidebar, setHideSidebar } = useContext(AppContext);

	return (
		<div className="min-h-screen text-white px-5 my-max z-10 relative">
			<div className="flex items-center gap-5 py-3">
				{hideSidebar && (
					<div className=" fixed left-5 bg-mid--yellow cursor-pointer hover:bg-brand-green w-fit p-1 rounded-md">
						<TbLayoutSidebarRightExpand
							size={25}
							color="white"
							onClick={() => setHideSidebar(false)}
						/>
					</div>
				)}
				<h1 className="text-[35px] md:text-[45px] m-0 text-center lg:text-left w-full ">
					Dashboard
				</h1>
			</div>
			<PieCharts />
			<LineChart />
		</div>
	);
};

export default Page;
