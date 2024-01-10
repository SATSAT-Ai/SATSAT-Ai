"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import { SetStateAction, Dispatch, useState } from "react";
import { signOut, useSession } from "next-auth/react";
interface navProps {
	setShowNav: Dispatch<SetStateAction<boolean>>;
	showNav: boolean;
}

const MobileNav = ({ setShowNav, showNav }: navProps) => {
	const pathname = usePathname();
	const { data: session } = useSession();
	const [loading, setLoading] = useState(false);

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
		<>
			{
				<div
					onClick={() => setShowNav(false)}
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
					 flex z-50 overflow-y-scroll scrollbar-hidden flex-col transition-transform duration-100 fixed top-0 right-0 w-3/4 bg-brand-green-darker/90 h-screen justify-center items-center gap-5 font-medium text-[17px]`}
			>
				<MdClose
					onClick={() => setShowNav(false)}
					color="white"
					size="25"
					className="absolute cursor-pointer top-5 right-4"
				/>
				<li
					onClick={() => setShowNav(false)}
					className={`${
						pathname == "/"
							? "text-mid--yellow"
							: "text-white hover:text-mid--yellow font-medium"
					}`}
				>
					<Link href={"/"}>Home</Link>
				</li>

				<li
					onClick={() => setShowNav(false)}
					className={`${
						pathname == "/about"
							? "text-mid--yellow"
							: "text-white hover:text-mid--yellow font-medium"
					}`}
				>
					<Link href={"/about"}>About</Link>
				</li>
				<li
					className={`${
						pathname == "/how-it-works"
							? "text-mid--yellow font-medium"
							: "text-white hover:text-mid--yellow font-medium"
					}`}
				>
					<Link href={"/how-it-works"}>How It Works</Link>
				</li>
				<li
					onClick={() => setShowNav(false)}
					className={`${
						pathname == "/features"
							? "text-mid--yellow"
							: "text-white hover:text-mid--yellow font-medium"
					}`}
				>
					<Link href={"/features"}>Features</Link>
				</li>

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
					// <li onClick={() => setShowNav(false)}>
					// 	<Link
					// 		className="flex items-center !rounded-3xl gap-3 font-normal hover:shadow-none hover:bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green button2"
					// 		href={"/choose-your-pricing"}
					// 	>
					// 		Get Started
					// 	</Link>
					// </li>
					<li onClick={() => setShowNav(false)}>
						<Link
							className={`px-7 before:opacity-0 hover:before:opacity-100 before:z-[-1] after:z-[-1]  before:rounded-3xl after:absolute after:rounded-3xl after:top-[-1px] after:left-[-1px]  before:absolute before:top-[-1px] before:left-[-1px] bg-transparent relative rounded-3xl bg-gradient-to-tr from-[#050e0b] to-[#000000] justify-between py-3 custom-block glow4 text-text-normal text-white font-medium flex items-center gap-2`}
							href={"/choose-your-pricing"}
						>
							Get Started Now
						</Link>
					</li>
				) : (
					pathname !== "/choose-your-pricing" &&
					session?.user && (
						<li className="flex items-center !rounded-3xl font-medium gap-3 hover:shadow-none hover:bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green button2">
							<button
								disabled={loading}
								type="button"
								onClick={handleSignOut}
								className="flex items-center gap-4"
							>
								{loading ? "Signing out" : "Sign Out"}
								{loading && <div className="loader"></div>}
							</button>
						</li>
					)
				)}
			</ul>
		</>
	);
};

export default MobileNav;
