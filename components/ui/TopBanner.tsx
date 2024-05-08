"use client";

import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import Link from "next/link";

const TopBanner = () => {
	const [showBanner, setShowBanner] = useState<boolean | null>(false);

	useEffect(() => {
		//show closed banner every 24hrs

		const expirationDuration = 24 * 60 * 60 * 1000; // 24 hours
		const hasExpired = new Date().getTime() - expirationDuration > 0; // Check if 24 hrs passed

		const bannerInSession = JSON.parse(
			localStorage.getItem("showBanner") as unknown as string
		);
		if (bannerInSession !== false && !hasExpired) {
			setShowBanner(false);
		}
		localStorage.setItem("showBanner", JSON.stringify(true));
		setShowBanner(bannerInSession);
	}, []);

	const handleShowBanner = () => {
		localStorage.setItem("showBanner", JSON.stringify(false));
		setShowBanner(false);
	};

	return (
		showBanner !== false && (
			<div className="text-white flex items-center gap-5 px-5 py-2 justify-between w-full text-center bg-darker">
				<p className="flex-[11] font-medium text-text-14 sm:text-text-normal">
					To Get Early Access To SatSat Ai, Please{" "}
					<Link
						data-test="topBanner"
						target="_blank"
						href="https://forms.gle/CbDpLjhDCdx1NugU8"
						className="text-brand-green font-medium underline text-text-14 sm:text-text-normal"
					>
						Join The Waitlist
					</Link>{" "}
					✨
				</p>
				{/* <MdClose
					color="white"
					className="cursor-pointer active:scale-[1.02] text-text-24 transition-colors duration-100 hover:bg-grey-light rounded-full p-1"
					onClick={() => handleShowBanner()}
				/> */}
			</div>
		)
	);
};

export default TopBanner;
