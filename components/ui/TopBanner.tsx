"use client";

import { useState, useContext } from "react";
import { MdClose } from "react-icons/md";
import { bannerContext } from "../QueryProvider";

const TopBanner = () => {
	const [showBanner, setShowBanner] = useState(true);
	const { setShowEarlyAccessModal } = useContext(bannerContext);

	return (
		showBanner && (
			<div className="text-white flex items-center gap-5 px-5 py-1 justify-between w-full text-center bg-darker">
				<p className="flex-[11] font-medium text-text-14 sm:text-text-normal">
					To Get Early Access To SatSat Ai, Please{" "}
					<button
						onClick={() => setShowEarlyAccessModal(true)}
						className="text-brand-green font-medium underline text-text-14 sm:text-text-normal"
					>
						Join The Waitlist
					</button>{" "}
					✨
				</p>
				<MdClose
					color="white"
					className="cursor-pointer active:scale-[1.01]"
					onClick={() => setShowBanner(false)}
					size={25}
				/>
			</div>
		)
	);
};

export default TopBanner;
