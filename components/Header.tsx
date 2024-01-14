"use client";
import Image from "next/image";
import satsatLogo from "../public/satsat-logo.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu, MdArrowForward } from "react-icons/md";
import { useState, useEffect } from "react";
import MobileNav from "./MobileNav";
import { signOut, useSession } from "next-auth/react";

const Header = ({ position }: { position?: string }) => {
	const { data: session } = useSession();

	const [showNav, setShowNav] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [loading, setLoading] = useState(false);
	const pathname = usePathname();

	const navLinks: { path: string; name: string }[] = [
		{
			path: "/",
			name: "Home",
		},
		{
			path: "/about",
			name: "About",
		},
		{
			path: "/how-it-works",
			name: "How It Works",
		},
		{
			path: "/features",
			name: "Features",
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
			<div className={`sm:hidden`}>
				<MobileNav setShowNav={setShowNav} showNav={showNav} />
			</div>
			<header
				className={`py-3 z-10 ${
					position ?? "fixed"
				} top-0 w-full transition-background duration-300 ${
					scrolled
						? `${
								pathname == "/choose-your-pricing"
									? "bg-brand-green-darker/70"
									: "bg-white/10"
						  } backdrop-blur-md saturate-150`
						: "bg-none backdrop-blur-none"
				} top-0`}
			>
				<div className="my-max flex items-center justify-between w-full">
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
					<MdMenu
						className="sm:hidden ml-auto cursor-pointer"
						color="white"
						size="25"
						onClick={() => setShowNav(true)}
					/>
					<ul className="hidden sm:flex items-center gap-3 sm:gap-5 text-[15px] md:text-text-normal font-medium">
						{navLinks.map((links) => {
							if (links.name === "About") {
								return (
									<li
										key={links.name}
										className={`hidden md:flex ${
											pathname == "/about"
												? "text-mid--yellow font-medium"
												: "text-white hover:text-mid--yellow"
										}`}
									>
										<Link href={"/about"}>About</Link>
									</li>
								);
							}
							return (
								<li
									key={links.name}
									className={`flex ${
										pathname === links.path
											? "text-mid--yellow font-medium"
											: "text-white hover:text-mid--yellow"
									}`}
								>
									<Link href={links.path}>{links.name}</Link>
								</li>
							);
						})}

						{session?.user?.email ? (
							<>
								<li className={`text-white hover:text-mid--yellow font-medium`}>
									<Link href={"/dashboard"}>Dashboard</Link>
								</li>

								<li
									className={`text-[15px] px-5 ${
										loading
											? " bg-grey-light font-medium button2 hover:bg-grey-light !shadow-none"
											: " cursor-pointer active:scale-[1.02] bg-mid--yellow button2"
									} flex items-center !rounded-3xl gap-3 font-normal shadow-none transition-colors duration-200 text-white `}
								>
									<button
										disabled={loading}
										type="button"
										onClick={handleSignOut}
										className="flex items-center font-medium text-white gap-4"
									>
										{loading ? "Signing out" : "Sign Out"}
										{loading && <div className="loader"></div>}
									</button>
								</li>
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
									<Link href={"/signin"}>Sign in</Link>
								</li>
								{pathname !== "/choose-your-pricing" && (
									<li>
										<Link
											href={"/choose-your-pricing"}
											className={`px-7 before:opacity-0 hover:before:opacity-100 before:z-[-1] after:z-[-1]  before:rounded-3xl after:absolute after:rounded-3xl after:top-[-1px] after:left-[-1px]  before:absolute before:top-[-1px] before:left-[-1px] bg-transparent relative rounded-3xl bg-gradient-to-tr from-[#050e0b] to-[#000000] justify-between py-3 custom-block glow4 text-text-normal text-white font-medium flex items-center gap-2`}
										>
											<div style={{ order: 2 }}>
												{<MdArrowForward color="white" size="24" />}
											</div>
											Get Started
										</Link>
									</li>
								)}
							</>
						)}
					</ul>
				</div>
			</header>
		</>
	);
};

export default Header;
