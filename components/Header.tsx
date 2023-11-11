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
			if (window.scrollY > 70) {
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
		<>
			<div className={`sm:hidden`}>
				<MobileNav setShowNav={setShowNav} showNav={showNav} />
			</div>
			<header
				className={`py-3 z-10 fixed w-full transition-background duration-300 ${
					scrolled
						? `${
								pathname == "/choose-your-pricing"
									? "bg-brand-green-darker/70"
									: "bg-white/90"
						  } backdrop-blur-md saturate-150`
						: "bg-none backdrop-blur-none"
				} top-0`}
			>
				<div className="my-max flex items-center justify-between w-full">
					<Link href={"/"}>
						<Image src={satsatLogo} height={100} width={100} alt="SATSAT-Ai" />
					</Link>
					<MdMenu
						className="sm:hidden ml-auto cursor-pointer"
						color="white"
						size="25"
						onClick={() => setShowNav(true)}
					/>
					<ul className="hidden sm:flex items-center gap-5 font-normal text-text-normal">
						<li
							className={`${
								pathname == "/"
									? "text-mid--yellow font-medium"
									: "text-grey-lightest hover:text-white"
							}`}
						>
							<Link href={"/"}>Home</Link>
						</li>
						<li
							className={`${
								pathname == "/about"
									? "text-mid--yellow font-medium"
									: "text-grey-lightest hover:text-white"
							}`}
						>
							<Link href={"/about"}>About</Link>
						</li>
						<li
							className={`${
								pathname == "/features"
									? "text-mid--yellow font-medium"
									: "text-grey-lightest hover:text-white"
							}`}
						>
							<Link href={"/features"}>Features</Link>
						</li>
						<li
							className={`${
								pathname == "/contact"
									? "text-mid--yellow font-medium"
									: "text-grey-lightest hover:text-white"
							}`}
						>
							<Link href={"/contact"}>Contact</Link>
						</li>
						<li
							className={`${
								pathname == "/signin"
									? "text-mid--yellow font-medium"
									: "text-grey-lightest hover:text-white"
							}`}
						>
							<Link href={"/signin"}>Sign in</Link>
						</li>
						<Link
							className="flex items-center gap-3 font-normal hover:bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green button"
							href={"/choose-your-pricing"}
						>
							Get Started
							<MdArrowForward color="white" size="25" />
						</Link>
					</ul>
				</div>
			</header>
		</>
	);
};

export default Header;
