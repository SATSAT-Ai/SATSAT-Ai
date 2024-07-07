"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import satsatLogo from "../public/satsat-logo.svg";
import { SetStateAction, Dispatch, useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { dropdown } from "./Header";
import DevelopersDropDown from "./ui/DevelopersDropDown";
import ProductDropDown from "./ui/ProductsDropDown";
import SolutionsDropDown from "./ui/SolutionsDropDown";
import Image from "next/image";
import SignOutButton from "./ui/SignOutButton";
import GetStartedButton from "./ui/GetStartedButton";
interface navProps {
	setDropDownType: Dispatch<SetStateAction<dropdown>>;
	setShowNav: Dispatch<SetStateAction<boolean>>;
	showNav: boolean;
	dropDownType: dropdown;
}

type linkType = "dropdown" | "link";

const MobileNav = ({
	setShowNav,
	showNav,
	setDropDownType,
	dropDownType,
}: navProps) => {
	const pathname = usePathname();
	const { data: session } = useSession();
	const [loading, setLoading] = useState(false);
	const [showModal, setShowModal] = useState(false);

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

	const handleSignOut = async () => {
		setLoading(true);
		try {
			await signOut();
			setShowNav(false);
		} catch (e) {
			console.log(e);
			setLoading(false);
		}
	};

	return (
		<div className="md:hidden">
			{
				<div
					onClick={() => (setShowNav(false), setShowModal(false))}
					className={`  ${
						showNav
							? "translate-x-0"
							: " translate-x-full delay-100 duration-100"
					} bg-white/10 duration-150 saturate-150 fixed backdrop-blur-lg top-0 z-50 left-0 h-screen w-full`}
				></div>
			}
			<ul
				className={` ${
					showNav ? "delay-100 translate-x-0" : " translate-x-full"
				}
					 flex z-50 overflow-y-scroll scrollbar-hidden flex-col transition-transform duration-100 fixed top-0 right-0 w-[85%] bg-[#071f07] h-screen justify-center items-center gap-5 font-medium text-[17px]`}
			>
				<MdClose
					onClick={() => (setShowNav(false), setShowModal(false))}
					color="white"
					size="25"
					className="absolute cursor-pointer top-5 right-4"
				/>
				{navLinks.map((links) => {
					return (
						<li
							key={links.path}
							className={`${
								pathname == links.path
									? "text-mid--yellow"
									: "text-white hover:text-mid--yellow font-medium"
							}`}
						>
							{links.type === "dropdown" ? (
								<button
									onClick={() => (
										setShowModal(true),
										setDropDownType(links.name.toLocaleLowerCase() as dropdown)
									)}
									type="button"
								>
									{links.name}
								</button>
							) : (
								<Link onClick={() => setShowNav(false)} href={links.path}>
									{links.name}
								</Link>
							)}
						</li>
					);
				})}
				{/* ===========modal=========== */}
				{showModal && (
					<div className="absolute top-0 min-h-screen shadow-md w-full bg-[#071f07] text-white">
						<div className=" bg-[#071f07] z-20 absolute top-0 left-0 w-full px-5 py-3 flex items-center gap-5 justify-between">
							<Link href={"/"}>
								<Image
									className="h-auto w-auto"
									src={satsatLogo}
									height={120}
									width={120}
									alt="SATSAT-Ai"
									priority
								/>
							</Link>
							<MdClose
								onClick={() => setShowModal(false)}
								color="white"
								size="25"
								className="ml-auto cursor-pointer"
							/>
						</div>
						{dropDownType === "developers" ? (
							<DevelopersDropDown
								cardClassName="grid-cols-1"
								className="!min-h-screen overscroll-none pt-[64px] pb-5 px-0 bg-transparent backdrop-filter-none backdrop-blur-none rounded-none"
							/>
						) : dropDownType === "products" ? (
							<ProductDropDown
								toggleNavToFalse={() => setShowNav(false)}
								className="!min-h-screen overscroll-none pt-[64px] backdrop-filter-none pb-5 px-0 bg-transparent backdrop-blur-none rounded-none"
							/>
						) : dropDownType === "solutions" ? (
							<SolutionsDropDown className="!min-h-screen overscroll-none pt-[64px] pb-5 px-0 bg-transparent backdrop-filter-none backdrop-blur-none rounded-none" />
						) : (
							<></>
						)}
					</div>
				)}

				{!session?.user ? (
					<li
						onClick={() => setShowNav(false)}
						className="text-white hover:text-mid--yellow font-medium"
					>
						<Link href={"/signin"}>Sign in</Link>
					</li>
				) : (
					<li
						onClick={() => setShowNav(false)}
						className="text-white hover:text-mid--yellow font-medium"
					>
						<Link href={"/dashboard"}>Dashboard</Link>
					</li>
				)}
				{pathname !== "/choose-your-pricing" && !session?.user ? (
					<li onClick={() => setShowNav(false)}>
						<GetStartedButton showIcon={false} />
					</li>
				) : (
					pathname !== "/choose-your-pricing" &&
					session?.user && (
						<SignOutButton loading={loading} handleSignOut={handleSignOut} />
					)
				)}
			</ul>
		</div>
	);
};

export default MobileNav;
