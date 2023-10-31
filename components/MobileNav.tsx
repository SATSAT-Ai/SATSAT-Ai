import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdClose } from "react-icons/md";
import { SetStateAction, Dispatch } from "react";

interface navProps {
	setShowNav: Dispatch<SetStateAction<boolean>>;
	showNav: boolean;
}

const MobileNav = ({ setShowNav, showNav }: navProps) => {
	const pathname = usePathname();

	return (
		<>
			{
				<div
					onClick={() => setShowNav(false)}
					className={`  ${
						showNav
							? "translate-x-0"
							: " translate-x-full delay-100 duration-100"
					} bg-white/10 duration-150 motio saturate-150 fixed backdrop-blur-lg top-0 z-50 left-0 h-screen w-full`}
				></div>
			}
			<ul
				className={` ${
					showNav ? "delay-100 translate-x-0" : " translate-x-full"
				}
					 flex z-50 overflow-y-scroll scrollbar-hidden flex-col transition-transform duration-100  fixed top-0 right-0 w-3/4 bg-brand-green-darker/90 h-screen justify-center items-center gap-5 font-medium text-[17px]`}
			>
				<MdClose
					onClick={() => setShowNav(false)}
					color="white"
					size="25"
					className="absolute cursor-pointer top-5 right-4"
				/>
				<li
					className={`${
						pathname == "/"
							? "text-mid--yellow"
							: "text-grey-lightest hover:text-white"
					}`}
				>
					<Link href={"/"}>Home</Link>
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
				<Link className="text-white bg-brand-green button" href={"/signup"}>
					Get Started
				</Link>
			</ul>
		</>
	);
};

export default MobileNav;
