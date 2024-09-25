import SatSatAiLogo from "@/public/SatSat-ai-logo-new.svg";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-darker py-10 relative">
			<div className="my-max w-full gap-7 flex flex-col sm:flex-row items-center md:items-start justify-between">
				<ul className="text-white w-fit flex items-center sm:items-start flex-col gap-3">
					<li className="w-fit">
						<Link href={"/"} data-test="SatSat-Ai-logo">
							<div className="text-white text-text-20 flex mx-auto w-full items-center gap-2 font-semibold justify-center">
								<div className="bg-white rounded-full w-[25px] h-[25px] p-1">
									<Image
										className={"h-full w-full"}
										src={SatSatAiLogo}
										alt="logo"
									/>
								</div>
								SATSAT Ai
							</div>
						</Link>
					</li>
					<li className="hover:text-brand-green w-fit">
						<Link href={"#"}>Twitter</Link>
					</li>
					<li className="hover:text-brand-green w-fit transition-colors">
						<Link href={"#"}>Linkedin</Link>
					</li>
					<li className="hover:text-brand-green w-fit transition-colors">
						<Link href={"#"}>Facebook</Link>
					</li>
				</ul>

				<ul className=" items-center sm:items-start text-white w-fit flex flex-col gap-3">
					<li className="hover:text-brand-green w-fit">
						<Link href={"/faq"}>Faq</Link>
					</li>
					<li className="hover:text-brand-green w-fit transition-colors">
						<Link href={"/developers"}>Developers</Link>
					</li>
					<li className="hover:text-brand-green w-fit transition-colors">
						<Link href={"/choose-your-pricing"}>Pricing</Link>
					</li>
				</ul>
				<ul className=" items-center sm:items-start text-white w-fit flex flex-col gap-3">
					<li className="hover:text-brand-green w-fit">
						<Link href={"/"}>Home</Link>
					</li>
					<li className="hover:text-brand-green w-fit transition-colors">
						<Link href={"/about"}>About</Link>
					</li>

					<li className="hover:text-brand-green w-fit transition-colors">
						<Link href={"/features"}>Features</Link>
					</li>
					<li className="hover:text-brand-green w-fit transition-colors">
						<Link href={"/contact"}>Contact</Link>
					</li>
				</ul>
			</div>
			<div className=" my-7 w-full h-[1px] [background:linear-gradient(to_left,#050d0a,#a3a3a3,#050d0a)]"></div>
			<div className="my-max">
				<div className="flex items-center flex-col md:flex-row justify-between gap-5">
					<p className="text-white">&copy; All rights reserved</p>
					<ul className="items-center text-white w-fit flex gap-3">
						<li className="hover:text-brand-green w-fit">
							<Link href={"/terms"}>Terms</Link>
						</li>
						<li className="hover:text-brand-green w-fit transition-colors">
							<Link href={"/privacy"}>Privacy</Link>
						</li>

						<li className="hover:text-brand-green w-fit transition-colors">
							<Link href={"/cookies"}>Cookies</Link>
						</li>
					</ul>
					<ul className="items-center text-white w-fit flex gap-5">
						<li className="hover:text-brand-green text-brand-green w-fit transition-colors">
							<Link href={"#"} aria-label="facebook">
								<BsFacebook size="25" />
							</Link>
						</li>
						<li className="hover:text-brand-green text-brand-green w-fit transition-colors">
							<Link href={"#"} aria-label="twitter">
								<FaXTwitter size="25" />
							</Link>
						</li>
						<li className="hover:text-brand-green text-brand-green w-fit transition-colors">
							<Link href={"#"} aria-label="linkedin">
								<BsLinkedin size="25" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
