"use client";

import Image from "next/image";
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
import SatSatAiLogo from "@/public/SatSat-ai-logo-new.svg";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

export type dropdown = "products" | "solutions" | "developers" | "";

const Header = ({
	position,
	className,
	green,
}: {
	position?: string;
	className?: ClassValue;
	green?: boolean;
}) => {
	const { data: session } = useSession();

	const [showNav, setShowNav] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [loading, setLoading] = useState(false);
	const pathname = usePathname();
	const [showDropDown, setShowDropDown] = useState(true);
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
			/>

			<header
				onMouseLeave={() => setShowDropDown(false)}
				className={cn(
					"top-0 w-full z-30 transition-background duration-300 ",
					{
						fixed: !position,
					},

					className
				)}
				style={{
					boxShadow: scrolled ? "rgba(0, 0, 0, 0.25) 0px 25px 50px -12px" : "",
				}}
			>
				<TopBanner />
				<div
					className={cn(
						"backdrop-blur-xl bg-transparent top-0 py-3",
						{ "bg-none backdrop-blur-none": !scrolled },

						{
							" bg-brand-green/10 saturate-150": showDropDown,
						},
						{
							"bg-white/5 saturate-150": !showDropDown && scrolled,
						},
						{
							"bg-brand-green-darker/70 saturate-150": scrolled && showDropDown,
						},
						{
							"bg-brand-green-darker/70 saturate-150":
								pathname == "/choose-your-pricing" && scrolled,
						},
						{
							"bg-brand-green-darker/5 saturate-150": green,
						},
						className
					)}
				>
					<div className={` my-max flex items-center justify-between w-full`}>
						<Link href={"/"} data-test="SatSat-Ai-logo">
							<div className="text-white text-text-20 min-[900px]:text-[30px] flex mx-auto w-full items-center gap-2 font-semibold justify-center">
								Sat
								<div className="bg-white rounded-full w-[30px] h-[30px] min-[900px]:w-[35px] min-[900px]:h-[35px] p-1">
									<Image
										className={"h-full w-full"}
										src={SatSatAiLogo}
										alt="logo"
									/>
								</div>
								atAi
							</div>
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
						</ul>
						{session?.user?.email ? (
							<div className={`hidden md:flex items-center gap-5 text-white `}>
								<Link
									href={"/dashboard"}
									className="hover:text-mid--yellow font-medium"
								>
									Dashboard
								</Link>
								<SignOutButton
									data-test="signOut-button"
									loading={loading}
									handleSignOut={handleSignOut}
									className={
										"rounded-lg py-2 bg-brand-green/80 hover:bg-brand-green active:bg-brand-green/90 font-medium hover:text-white"
									}
								/>
							</div>
						) : (
							<ul className="hidden md:flex items-center gap-5">
								<li
									className={cn(
										{
											"text-mid--yellow font-medium": pathname == "/signin",
										},
										{
											"text-white hover:text-mid--yellow":
												pathname !== "/signin",
										}
									)}
								>
									<Link
										className={cn(
											{
												"bg-brand-green py-2 px-4 shadow-md hover:text-white active:bg-brand-green/80 hover:bg-brand-green-darker rounded-md":
													pathname === "/choose-your-pricing",
											},
											{
												"bg-mid--yellow/80 py-2 px-4 text-white shadow-md hover:text-white active:bg-mid--yellow/80 hover:bg-mid--yellow rounded-md":
													scrolled && pathname === "/signin",
											}
										)}
										data-test={"signIn"}
										href={"/signin"}
									>
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
							</ul>
						)}
					</div>
				</div>

				{showDropDown &&
					(dropDownType === "developers" ? (
						<DevelopersDropDown className="hidden md:block" />
					) : dropDownType === "products" ? (
						<ProductDropDown className="hidden md:block" />
					) : dropDownType === "solutions" ? (
						<SolutionsDropDown className="hidden md:block" />
					) : (
						<></>
					))}
			</header>
		</>
	);
};

export default Header;
