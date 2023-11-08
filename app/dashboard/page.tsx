"use client";

import { AppContext } from "@/context/AppContext";
import { useContext } from "react";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";

const Page = () => {
	const { hideSidebar, setHideSidebar } = useContext(AppContext);

	return (
		<div className="min-h-screen text-white my-max z-10 relative">
			{/* //can change my-max to p-2 */}
			<div className="flex items-center gap-5">
				{hideSidebar && (
					<div className=" fixed bg-mid--yellow cursor-pointer hover:bg-brand-green w-fit p-1 rounded-md">
						<TbLayoutSidebarRightExpand
							size={25}
							color="white"
							onClick={() => setHideSidebar(false)}
						/>
					</div>
				)}
				<h1 className="text-[35px] md:text-text-40 m-0">Dashboard</h1>
			</div>
			<div className="">
				<h1 className="text-[35px] md:text-text-40 m-0">Dashboard</h1>
				<h1 className="text-[35px] md:text-text-40 m-0">Dashboard</h1>
				<h1 className="text-[35px] md:text-text-40 m-0">Dashboard</h1>
				<h1 className="text-[35px] md:text-text-40 m-0">Dashboard</h1>
				<h1 className="text-[35px] md:text-text-40 m-0">Dashboard</h1>
				<h1 className="text-[35px] md:text-text-40 m-0">Dashboard</h1>
				<h1 className="text-[35px] md:text-text-40 m-0">Dashboard</h1>
				<h1 className="text-[35px] md:text-text-40 m-0">Dashboard</h1>
				<h1 className="text-[35px] md:text-text-40 m-0">Dashboard</h1>
			</div>
		</div>
	);
};

export default Page;
