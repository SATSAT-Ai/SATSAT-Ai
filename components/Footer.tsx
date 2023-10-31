import satsatLogo from "../public/satsat-logo.svg";
import Image from "next/image";
import Link from "next/link";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-darker py-10">
			<div className="my-max w-full gap-7 flex flex-col sm:flex-row items-center md:items-start justify-between">
				<ul className="text-grey-light w-fit flex items-center sm:items-start flex-col gap-3">
					<li className="hover:text-white w-fit">
						<Link href={"/"}>
							<Image
								src={satsatLogo}
								height={100}
								width={100}
								alt="Satsat ai"
							/>
						</Link>
					</li>
					<li className="hover:text-white w-fit">
						<Link href={"#"}>Twitter</Link>
					</li>
					<li className="hover:text-white w-fit transition-colors">
						<Link href={"#"}>Linkedin</Link>
					</li>
					<li className="hover:text-white w-fit transition-colors">
						<Link href={"#"}>Facebook</Link>
					</li>
				</ul>

				<ul className=" items-center sm:items-start text-grey-light w-fit flex flex-col gap-3">
					<li className="hover:text-white w-fit">
						<Link href={"#"}>Faq</Link>
					</li>
					<li className="hover:text-white w-fit transition-colors">
						<Link href={"#"}>Support</Link>
					</li>
					<li className="hover:text-white w-fit transition-colors">
						<Link href={"#"}>Developers</Link>
					</li>
				</ul>
				<ul className=" items-center sm:items-start text-grey-light w-fit flex flex-col gap-3">
					<li className="hover:text-white w-fit">
						<Link href={"#"}>Home</Link>
					</li>
					<li className="hover:text-white w-fit transition-colors">
						<Link href={"#"}>About Us</Link>
					</li>

					<li className="hover:text-white w-fit transition-colors">
						<Link href={"#"}>Features</Link>
					</li>
					<li className="hover:text-white w-fit transition-colors">
						<Link href={"#"}>Contact</Link>
					</li>
				</ul>
			</div>
			<div className=" my-7 w-full h-[1px] gradient2"></div>
			<div className="my-max">
				<div className="flex items-center flex-col md:flex-row justify-between gap-5">
					<p className="text-grey-light">&copy; All rights reserved</p>
					<ul className="items-center text-grey-light w-fit flex gap-3">
						<li className="hover:text-white w-fit">
							<Link href={"#"}>Terms</Link>
						</li>
						<li className="hover:text-white w-fit transition-colors">
							<Link href={"#"}>Privacy</Link>
						</li>

						<li className="hover:text-white w-fit transition-colors">
							<Link href={"#"}>Cookies</Link>
						</li>
					</ul>
					<ul className="items-center text-grey-light w-fit flex gap-5">
						<li className="hover:text-white w-fit transition-colors">
							<Link href={"#"}>
								<BsFacebook color="#29a173" size="25" />
							</Link>
						</li>
						<li className="hover:text-white w-fit transition-colors">
							<Link href={"#"}>
								<FaXTwitter color="#29a173" size="25" />
							</Link>
						</li>
						<li className="hover:text-white w-fit transition-colors">
							<Link href={"#"}>
								<BsLinkedin color="#29a173" size="25" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
