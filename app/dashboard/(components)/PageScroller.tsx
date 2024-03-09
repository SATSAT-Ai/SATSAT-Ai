"use client";
import { useEffect, useState } from "react";
import { TbSquareRoundedArrowUpFilled } from "react-icons/tb";

const PageScroller = () => {
	const [scrolled, setScrolled] = useState(false);

	const scrollTO = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 1400) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);
	return (
		<div className="fixed bottom-20 z-10 cursor-pointer right-7">
			<button
				onClick={scrollTO}
				type="button"
				className={`${
					scrolled ? "block" : "hidden"
				} before:opacity-0 hover:before:opacity-100 before:z-[-1] after:z-[-1]  before:rounded-3xl after:absolute after:rounded-3xl after:top-[-1px] after:left-[-1px]  before:absolute before:top-[-1px] before:left-[-1px] bg-transparent relative rounded-3xl bg-gradient-to-tr from-[#050e0b] to-[#000000] justify-between custom-block glow2 text-text-normal text-white font-medium flex items-center gap-2`}
			>
				<TbSquareRoundedArrowUpFilled size={45} color="white" className="p-1" />
			</button>
		</div>
	);
};

export default PageScroller;
