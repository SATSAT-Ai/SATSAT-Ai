"use client";

import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";
import DashboardOptions from "./DashboardOptions";
import { cn } from "@/lib/utils";
// import DashboardNotification from "@/components/ui/DashboardNotification";
import Profile from "@/components/ui/Profile";

const DashboardHeader = () => {
	const optionsRef = useRef<null | HTMLLIElement>(null);
	const [loading, setLoading] = useState(false);
	// const [showNotification, setShowNotification] = useState(false);
	const [showMoreOptions, setShowMoreOptions] = useState(false);
	const pathname = usePathname();

	const handleLogout = async () => {
		//logout
		setLoading(true);
		try {
			await signOut();
		} catch (e) {
			setLoading(false);
			console.log(e);
		}
	};

	return (
		<header
			className={cn(
				"sticky z-40 backdrop-blur-lg h-16 top-0 bg-brand-green/10 text-white px-3 md:px-5 flex items-center justify-between gap-5",
				{
					hidden: pathname?.includes("/dashboard/chat"),
				}
			)}
		>
			<ul className="flex gap-4 ml-auto sm:gap-6 items-center justify-end">
				{/* <DashboardNotification
					optionsRef={optionsRef}
					setShowNotification={setShowNotification}
					showNotification={showNotification}
					setShowMoreOptions={setShowMoreOptions}
				/> */}

				<Profile />
				<DashboardOptions
					handleLogout={handleLogout}
					loading={loading}
					optionsRef={optionsRef}
					setShowMoreOptions={setShowMoreOptions}
					showMoreOptions={showMoreOptions}
				/>
			</ul>
		</header>
	);
};

export default DashboardHeader;
