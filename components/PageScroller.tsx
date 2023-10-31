"use client";
import { useEffect, useState } from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";

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
		<div
			onClick={scrollTO}
			className={` ${
				scrolled ? "block" : "hidden"
			} fixed bottom-20 z-10 cursor-pointer right-7`}
		>
			<BsArrowUpCircleFill
				size={55}
				className="text-white hover:text-mid--yellow duration-150 active:scale-[1.03]"
			/>
		</div>
	);
};

export default PageScroller;
