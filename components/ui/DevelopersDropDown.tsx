import Link from "next/link";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import GlowCardParent from "./GlowCardParent";
import GlowCard from "./GlowCard";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { ReactElement } from "react";
import { PiWebhooksLogoBold } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { FiCodesandbox } from "react-icons/fi";
import { VscReferences } from "react-icons/vsc";
import { IoShieldCheckmark } from "react-icons/io5";
import { TbArrowGuide } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { BsFileEarmarkCode } from "react-icons/bs";

const developerPortal: {
	id: string;
	portal: string;
	link: string;
	desc: string;
	icon: ReactElement;
}[] = [
	{
		id: "Developers",
		portal: "Developers",
		desc: "Get started as a developer",
		link: "/developers",
		icon: <FaCode size={25} color="#c18e3b" />,
	},
	{
		id: "dev-docs",
		portal: "Developer docs",
		desc: "Learn about using our API",
		link: "/developers/api-docs",
		icon: <BsFileEarmarkCode size={25} color="#c18e3b" />,
	},

	{
		id: "web-hooks",
		portal: "Web hooks",
		desc: "Set up and manage webhooks.",
		link: "/developers/webhooks",
		icon: <PiWebhooksLogoBold size={25} color="#c18e3b" />,
	},
	{
		id: "authentication",
		portal: "Authentication",
		desc: " Authorize and Authenticate",
		link: "/developers/api/authentication",
		icon: <IoShieldCheckmark size={25} color="#c18e3b" />,
	},
	{
		id: "api-refrence",
		desc: "Explore our API",
		portal: "Api reference",
		link: "/developers/api-docs",
		icon: <VscReferences size={25} color="#c18e3b" />,
	},
	{
		id: "Integration-Guide",
		desc: "Follow our integration guide",
		portal: "Integration Guide",
		link: "/developers/getting-started",
		icon: <TbArrowGuide size={25} color="#c18e3b" />,
	},
	{
		id: "developer support",
		desc: "Get assistance and support.",
		portal: "Developer Support",
		link: "/developers/getting-started",
		icon: <BiSupport size={25} color="#c18e3b" />,
	},
	{
		id: "developer-sandbox",
		portal: "Developer sandbox",
		desc: "Start using our sandbox",
		link: "/developers/getting-started",
		icon: <FiCodesandbox size={25} color="#c18e3b" />,
	},
];

const DevelopersDropDown = ({
	scrolled,
	className,
	cardClassName,
}: {
	scrolled: boolean;
	className?: ClassValue;
	cardClassName?: ClassValue;
}) => {
	return (
		<div
			className={cn(
				`bg-[#071f07]/60 w-full p-5 h-[66vh] xl:h-[56vh] overflow-y-auto custom-scroll2 backdrop-blur-xl absolute z-10 ${
					!scrolled
						? "backdrop-blur-xl saturate-150"
						: "backdrop-blur-xl saturate-150"
				} text-darker`,
				className
			)}
		>
			<div
				className={cn(
					"grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 text-white/80 gap-5 p-5 items-center justify-between",
					cardClassName
				)}
			>
				{developerPortal.map((portal) => {
					return (
						<Link
							href={portal.link}
							key={portal.id}
							className="flex border border-brand-green/40 items-center justify-between gap-5 hover:bg-brand-green-darker bg-brand-green-darker/50 text-white text-normal p-2 rounded-lg font-medium"
						>
							<div className="flex items-start gap-3">
								{portal.icon}
								<p className="flex flex-col">
									<span className="font-medium">{portal.portal}</span>
									<span className="text-mid--yellow font-normal text-text-14 sm:text-text-normal">
										{portal.desc}
									</span>
								</p>
							</div>
							<KeyboardArrowRight color="inherit" fontSize="medium" />
						</Link>
					);
				})}
			</div>
			<GlowCardParent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white/80 gap-5 px-5 items-start justify-between">
				<GlowCard
					type="link"
					linkTo="/"
					cardClassName="bg-[#0e2b0e] gap-5 p-2 cursor-pointer shadow-sm"
					className="p-3  duration-100 transition-colors rounded-md"
				>
					<Link href={"/"} className=" flex items-center gap-3 justify-between">
						<div>
							<p className="pb-3 text-text-20 font-medium text-white">
								Feedback
							</p>
							<span className="text-mid--yellow text-text-14 sm:text-text-normal">
								We value your input! Share your feedback with us to help improve
								SatSat AI. Your suggestions and comments are essential in
								shaping the future of our platform.
							</span>
						</div>
						<KeyboardArrowRight color="inherit" fontSize="medium" />
					</Link>
				</GlowCard>
				<GlowCard
					type="link"
					linkTo="/"
					cardClassName="bg-[#0e2b0e] gap-5 p-2 cursor-pointer shadow-sm"
					className="p-3  duration-100 transition-colors rounded-md"
				>
					<Link href={"/"} className=" flex items-center gap-3 justify-between">
						<div>
							<p className="pb-3 text-text-20 font-medium text-white">
								Product Overview
							</p>
							<span className="text-mid--yellow text-text-14 sm:text-text-normal">
								Learn more about SatSat AI and its features. Discover how our
								platform utilizes AI to provide insights into financial data,
								streamline processes, and empower decision-making.
							</span>
						</div>
						<KeyboardArrowRight color="inherit" fontSize="medium" />
					</Link>
				</GlowCard>
				<GlowCard
					type="link"
					linkTo="/"
					cardClassName="bg-[#0e2b0e] gap-5 p-2 cursor-pointer shadow-sm"
					className="p-3  duration-100 transition-colors rounded-md"
				>
					<Link href={"/"} className=" flex items-center gap-3 justify-between">
						<div>
							<p className="pb-3 text-text-20 font-medium text-white">FAQ</p>
							<span className="text-mid--yellow text-text-14 sm:text-text-normal">
								Explore frequently asked questions about SatSat AI and find
								answers to common inquiries regarding our platform, solutions,
								integration, security, and more.
							</span>
						</div>
						<KeyboardArrowRight color="inherit" fontSize="medium" />
					</Link>
				</GlowCard>
			</GlowCardParent>
		</div>
	);
};

export default DevelopersDropDown;
