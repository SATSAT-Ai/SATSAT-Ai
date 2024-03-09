import Link from "next/link";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import GlowCardParent from "./GlowCardParent";
import GlowCard from "./GlowCard";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

const SolutionsDropDown = ({
	scrolled,
	className,
}: {
	scrolled: boolean;
	className?: ClassValue;
}) => {
	const solutionsData: { id: string; solution: string; link: string }[] = [
		{
			id: "dkfj434skd",
			solution: "Credit Scoring Services",
			link: "/",
		},
		{
			id: "dkfjswr34kd",
			solution: "Expense Tracking Apps",
			link: "/",
		},
		{
			id: "dkfjswer3ykd",
			solution: "Accounting Software Integration",
			link: "/",
		},
		{
			id: "dkfjsewr3kd",
			solution: "Business Intelligence Platforms",
			link: "/",
		},
		{
			id: "dkfj46rskd",
			solution: "Regulatory Compliance Services",
			link: "/",
		},
		{
			id: "dkfjsw35kd",
			solution: "Mobile Banking Apps",
			link: "/",
		},
		{
			id: "dkfjwf6skd",
			solution: "E-commerce Platforms",
			link: "/",
		},
		{
			id: "dkfjqskd",
			solution: "Educational Tools",
			link: "/",
		},
	];
	return (
		<div
			className={cn(
				`bg-[#071f07]/60 w-full p-5 h-[67vh] xl:h-[57vh] overflow-y-auto custom-scroll2 backdrop-blur-xl absolute z-10 ${
					!scrolled
						? "backdrop-blur-xl saturate-150"
						: "backdrop-blur-xl saturate-150"
				} text-darker`,
				className
			)}
		>
			<p className="text-brand-green text-text-normal font-medium px-5 pb-3 ">
				Use cases
			</p>

			<div className="grid grid-cols-1 sm:grid-cols-2 min-[950px]:grid-cols-3 xl:grid-cols-4 text-white/80 gap-5 px-5 pb-5  items-center justify-between">
				{solutionsData.map((solution) => {
					return (
						<Link
							href={solution.link}
							key={solution.id}
							className="hover:bg-brand-green-darker flex border border-brand-green/40 items-center justify-between gap-5 bg-brand-green-darker/50 text-mid--yellow md:text-white text-normal p-2 text-[15px] rounded-lg font-medium"
						>
							{solution.solution}
							<KeyboardArrowRight color="inherit" fontSize="medium" />
						</Link>
					);
				})}
			</div>
			<div className="px-5">
				<div className="h-[1px] w-full bg-gradient-to-r from-brand-green-darker/20 via-brand-green to-brand-green-darker/20 mt-2 mb-7 "></div>
			</div>
			<GlowCardParent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white/80 gap-5 px-5 items-start justify-between">
				<GlowCard
					type="link"
					cardClassName="bg-[#0e2b0e] gap-5 p-2 cursor-pointer shadow-sm"
					className="p-3  duration-100 transition-colors rounded-md"
				>
					<Link href={"/"} className=" flex items-center gap-3 justify-between">
						<div>
							<p className="pb-3 text-text-20 font-medium text-white">
								Credit Scoring Services
							</p>
							<span className="text-mid--yellow text-text-14 sm:text-text-normal">
								Provide accurate credit scoring services tailored to your
								business needs. Our advanced algorithms ensure precise
								evaluations, helping you make informed decisions.
							</span>
						</div>
						<KeyboardArrowRight color="inherit" fontSize="medium" />
					</Link>
				</GlowCard>
				<GlowCard
					type="link"
					cardClassName="bg-[#0e2b0e] gap-5 p-2 cursor-pointer shadow-sm"
					className="p-3  duration-100 transition-colors rounded-md"
				>
					<Link href={"/"} className=" flex items-center gap-3 justify-between">
						<div>
							<p className="pb-3 text-text-20 font-medium text-white">
								Business Intelligence Platform
							</p>
							<span className="text-mid--yellow text-text-14 sm:text-text-normal">
								Harness the power of data with our Business Intelligence
								Platform. Gain actionable insights, visualize trends, and make
								data-driven decisions to drive business growth and success.
							</span>
						</div>
						<KeyboardArrowRight color="inherit" fontSize="medium" />
					</Link>
				</GlowCard>
				<GlowCard
					type="link"
					cardClassName="bg-[#0e2b0e] gap-5 p-2 cursor-pointer shadow-sm"
					className="p-3  duration-100 transition-colors rounded-md"
				>
					<Link href={"/"} className=" flex items-center gap-3 justify-between">
						<div>
							<p className="pb-3 text-text-20 font-medium text-white">
								Accounting Software Integration
							</p>
							<span className="text-mid--yellow text-text-14 sm:text-text-normal">
								Seamlessly integrate your accounting software with our platform
								for streamlined operations. Sync data, automate tasks, and gain
								better control over your finances.
							</span>
						</div>
						<KeyboardArrowRight color="inherit" fontSize="medium" />
					</Link>
				</GlowCard>
			</GlowCardParent>
		</div>
	);
};

export default SolutionsDropDown;
