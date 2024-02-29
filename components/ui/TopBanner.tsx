"use client";

import { useState } from "react";
import { MdClose } from "react-icons/md";
const TopBanner = () => {
	const [showBanner, setShowBanner] = useState(true);

	return (
		showBanner && (
			<div className="text-white flex shadow-md items-center gap-5 px-5 py-1 justify-between w-full text-center bg-grey-light">
				<p className="flex-[11] font-medium">
					Unlock SatSat Ai Early Access{" "}
					<button className="text-brand-green underline">
						Join The Waitlist
					</button>
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
