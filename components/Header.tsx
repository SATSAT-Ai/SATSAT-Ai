"use client";

import Image from "next/image";
import SatSatAiLogo from "../public/satsat-logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import { signOut, useSession } from "next-auth/react";
import ProductDropDown from "./ui/ProductsDropDown";
import DevelopersDropDown from "./ui/DevelopersDropDown";
import SolutionsDropDown from "./ui/SolutionsDropDown";
import SignOutButton from "./ui/SignOutButton";
import GetStartedButton from "./ui/GetStartedButton";
import TopBanner from "./ui/TopBanner";

export type dropdown = "products" | "solutions" | "developers" | "";

const Header = ({ position }: { position?: string }) => {
	const { data: session } = useSession();

	const [showNav, setShowNav] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [loading, setLoading] = useState(false);
	const pathname = usePathname();
	const [showDropDown, setShowDropDown] = useState(false);
	const [dropDownType, setDropDownType] = useState<dropdown>("");

	type linkType = "dropdown" | "link";

	const navLinks: { path: string; name: string; type: linkType }[] = [
		{
			path: "/products",
			name: "Products",
			type: "dropdown",
		},
		{
			path: "/solutions",
			name: "Solutions",
			type: "dropdown",
		},

		{
			path: "/developers",
			name: "Developers",
			type: "dropdown",
		},
		{
			path: "/contact",
			name: "Support",
			type: "link",
		},
	];

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

	const handleSignOut = async () => {
		setLoading(true);
		try {
			await signOut();
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};

	return (
		<>
			<MobileNav
				setShowNav={setShowNav}
				showNav={showNav}
				dropDownType={dropDownType}
				setDropDownType={setDropDownType}
				scrolled={scrolled}
			/>

			<header
				onMouseLeave={() => setShowDropDown(false)}
				className={` z-10 ${
					position ?? "fixed"
				} top-0 w-full z-30 transition-background duration-300 `}
				style={{
					boxShadow: scrolled ? "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" : "",
				}}
			>
				<TopBanner />
				<div
					className={`${
						scrolled
							? `${
									pathname == "/choose-your-pricing"
										? "bg-brand-green-darker/70"
										: showDropDown
										? " bg-brand-green/10"
										: "bg-white/10"
							  } backdrop-blur-xl saturate-150`
							: `bg-none backdrop-blur-none ${
									showDropDown ? "bg-brand-green-darker/60" : "bg-transparent"
							  } `
					} top-0 py-3`}
				>
					<div className={` my-max flex items-center justify-between w-full`}>
						<Link href={"/"} data-test="SatSat-Ai-logo">
							<Image
								className="h-auto w-auto"
								src={SatSatAiLogo}
								height={120}
								width={120}
								alt="SatSat-Ai"
								priority
							/>
						</Link>
						<MdMenu
							className="md:hidden ml-auto cursor-pointer"
							color="white"
							size="25"
							onClick={() => setShowNav(true)}
						/>
						<ul className="hidden md:flex items-center gap-3 sm:gap-5 text-[15px] md:text-text-normal font-medium">
							{navLinks.map((links) => {
								if (links.type === "dropdown") {
									return (
										<li
											data-test={`dropdown-${links.name}`}
											tabIndex={0}
											onMouseOver={() => (
												setShowDropDown(true),
												setDropDownType(
													links.name.toLocaleLowerCase() as dropdown
												)
											)}
											key={links.name}
											className={`flex ${
												showDropDown &&
												dropDownType === links.name.toLocaleLowerCase()
													? "text-mid--yellow font-medium"
													: "text-white hover:text-mid--yellow"
											} hover:cursor-pointer`}
										>
											{links.name}
										</li>
									);
								}
								return (
									<li
										onMouseOver={() => setShowDropDown(false)}
										key={links.name}
										className={`flex ${
											pathname === links.path
												? "text-mid--yellow font-medium"
												: "text-white hover:text-mid--yellow"
										}`}
									>
										<Link href={links.path} data-test={links.name}>
											{links.name}
										</Link>
									</li>
								);
							})}

							{session?.user?.email ? (
								<>
									<li
										className={`text-white hover:text-mid--yellow font-medium`}
									>
										<Link href={"/dashboard"}>Dashboard</Link>
									</li>

									<SignOutButton
										data-test="signOut-button"
										loading={loading}
										handleSignOut={handleSignOut}
									/>
								</>
							) : (
								<>
									<li
										className={`${
											pathname == "/signin"
												? "text-mid--yellow font-medium"
												: "text-white hover:text-mid--yellow"
										}`}
									>
										<Link data-test={"signIn"} href={"/signin"}>
											Sign in
										</Link>
									</li>
									<li data-test="pricing-button">
										{pathname !== "/choose-your-pricing" && (
											<GetStartedButton
												showIcon={true}
												data-test="choose-pricing-button"
											/>
										)}
									</li>
								</>
							)}
						</ul>
					</div>
				</div>

				{showDropDown &&
					(dropDownType === "developers" ? (
						<DevelopersDropDown
							className="hidden md:block"
							scrolled={scrolled}
						/>
					) : dropDownType === "products" ? (
						<ProductDropDown className="hidden md:block" scrolled={scrolled} />
					) : dropDownType === "solutions" ? (
						<SolutionsDropDown
							scrolled={scrolled}
							className="hidden md:block"
						/>
					) : (
						<></>
					))}
			</header>
		</>
	);
};

export default Header;
