"use client";
import Image from "next/image";
import satsatLogo from "../public/satsat-logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdArrowForward } from "react-icons/md";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";

const Header = () => {
	const [showNav, setShowNav] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 60) {
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
		<header
			className={`py-3 z-10 fixed w-full transition-background duration-300 ${
				scrolled ? "bg-white/10 backdrop-blur-md saturate-150" : ""
			} top-0`}
		>
			<div className="my-max flex items-center justify-between w-full">
				<Link href={"/"}>
					<Image src={satsatLogo} height={120} width={120} alt="SATSAT-Ai" />
				</Link>
				<MdMenu
					className="sm:hidden cursor-pointer"
					color="white"
					size="25"
					onClick={() => setShowNav(true)}
				/>
				{showNav && (
					<div className="sm:hidden">
						<MobileNav setShowNav={setShowNav} />
					</div>
				)}
				<ul className="hidden sm:flex items-center gap-5 font-normal text-text-normal">
					<li
						className={`${
							pathname == "/"
								? "text-mid--yellow"
								: "text-grey-lightest hover:text-white"
						}`}
					>
						<Link href={"/home"}>Home</Link>
					</li>
					<li
						className={`${
							pathname == "/about"
								? "text-mid--yellow"
								: "text-grey-lightest hover:text-white"
						}`}
					>
						<Link href={"/about"}>About</Link>
					</li>
					<li
						className={`${
							pathname == "/features"
								? "text-mid--yellow"
								: "text-grey-lightest hover:text-white"
						}`}
					>
						<Link href={"/features"}>Features</Link>
					</li>
					<li
						className={`${
							pathname == "/contact"
								? "text-mid--yellow"
								: "text-grey-lightest hover:text-white"
						}`}
					>
						<Link href={"/contact"}>Contact</Link>
					</li>
					<li className="text-grey-lightest hover:text-white">
						<Link href={"/login"}>Sign in</Link>
					</li>
					<Link
						className="flex items-center gap-3 hover:bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green button"
						href={"/signup"}
					>
						Get Started
						<MdArrowForward color="white" size="25" />
					</Link>
				</ul>
			</div>
		</header>
	);
};

export default Header;
