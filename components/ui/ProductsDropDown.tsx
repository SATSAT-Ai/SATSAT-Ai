import Link from "next/link";
import CustomGlowButton from "./CustomGlowButton";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import GlowCardParent from "./GlowCardParent";
import GlowCard from "./GlowCard";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import ScanIcon from "@/public/scan.svg";
import ExtractInsightIcon from "@/public/extractInsight.svg";
import AltScoring from "@/public/scoring.svg";
import Documents from "@/public/documents.svg";
import FraudImage from "@/public/fraud.svg";
import ClientProfileImage from "@/public/profile.svg";
import ChatBotImage from "@/public/chat.svg";
import Image from "next/image";

const featuredProducts: {
	id: string;
	productName: string;
	description: string;
	link: string;
	img: string;
}[] = [
	{
		id: "scan-documents",
		productName: "Scan Documents",
		description: "Scan mobile money, bank statements, Invoices and receipts",
		img: ScanIcon,
		link: "/scan-documents",
	},
	{
		id: "extract-insights",
		productName: "Extract Insights",
		description: "Get valuable insights from your financial documents.",
		img: ExtractInsightIcon,
		link: "/extract-insights",
	},
	{
		id: "alternative-scoring",
		productName: "Alternative Scoring",
		description: "Use alternative data for credit scoring and more.",
		link: "/alternative-scoring",
		img: AltScoring,
	},
];

const products: {
	id: string;
	product: string;
	details: string;
	img: any;
	link: string;
}[] = [
	{
		id: "statement-scan",
		product: "Documents",
		details: "Scan PDF, OCR, CSV and More",
		img: Documents,
		link: "/features/statement-scan",
	},
	{
		id: "fraud-detection",
		product: "Fraud",
		img: FraudImage,
		details: "Smart Fraud Detection",
		link: "/features/fraud-detection",
	},
	{
		id: "insights-to-financial-documents",
		product: "Insights",
		img: ExtractInsightIcon,
		details: "Insights to financial documents",
		link: "/features/insights-to-financial-documents",
	},
	{
		id: "client-profile-management",
		product: "Clients",
		img: ClientProfileImage,
		details: "Client Profile Management",
		link: "/features/client-profile-management",
	},
	{
		id: "ai-chatbot",
		product: "Chat",
		img: ChatBotImage,
		details: "AI ChatBot",
		link: "/features/ai-chatbot",
	},
];

const ProductDropDown = ({
	className,
	toggleNavToFalse,
}: {
	toggleNavToFalse?: () => void | undefined;
	className?: ClassValue;
}) => {
	return (
		<GlowCardParent
			data-test="prod-dropDown"
			className={cn(
				"py-5 overflow-y-auto custom-scroll2 h-[65vh] bg-[#071f07]/80 overscroll-none w-full px-5 absolute z-10 backdrop-blur-xl saturate-150",
				className
			)}
		>
			<GlowCardParent className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 overscroll-none text-white/80 gap-3 px-5 pb-3 items-center justify-between">
				{featuredProducts.map((featured) => {
					return (
						<Link
							data-test={featured.id}
							key={featured.id}
							href={featured.link}
						>
							<GlowCard
								cardClassName="bg-[#0e2b0e] shadow-sm cursor-pointer rounded-md flex-row items-center gap-5 justify-between"
								className="flex w-full flex-col text-center sm:text-left sm:flex-row items-center justify-start xl:justify-between gap-5"
							>
								<Image
									src={featured.img}
									alt={featured.productName}
									height={50}
									width={50}
									priority
								/>
								<div>
									<p className="text-white pb-1 font-medium text-text-24">
										{featured.productName}
									</p>
									<span className="text-mid--yellow mx-auto text-text-normal max-w-sm w-full block">
										{featured.description}
									</span>
								</div>
								<KeyboardArrowRight
									color="inherit"
									className={cn("hidden md:flex ml-auto xl:ml-0")}
									fontSize="medium"
								/>
							</GlowCard>
						</Link>
					);
				})}
			</GlowCardParent>

			<div className="flex flex-col xl:flex-row text-white/80 gap-3 px-5 items-start justify-between">
				<GlowCardParent>
					<GlowCard
						className="grid grid-cols-1 md:grid-cols-2 justify-between gap-5 items-start flex-[3] z-20"
						cardClassName="bg-[#0e2b0e]"
					>
						{/* <div className="flex-[2.5]">
							<div className="mb-5">
								<p className="text-white font-medium pb-2 text-text-20">
									Discover Powerful Features
								</p>
								<span className="text-mid--yellow md:text-[#d6d6d6] text-text-14 sm:text-text-normal">
									Explore the capabilities that set us apart. From advanced
									scanning to intuitive dashboards, our platform offers a suite
									of tools designed to streamline your workflow and drive
									productivity. Uncover insights, detect fraud, manage clients,
									and more—all in one place.
								</span>
							</div>
							<div>
								<p className="text-white pb-2 font-medium text-text-20">
									Enhance Your Workflow
								</p>
								<span className="text-mid--yellow md:text-[#d6d6d6] text-text-14 sm:text-text-normal">
									Take your operations to the next level with our innovative
									features. Whether{` you're `}a small business or a large
									enterprise, our solutions are tailored to meet your needs.
									Experience seamless integration, powerful analytics, and
									unparalleled convenience. Elevate your workflow today.
								</span>
							</div>
							<div className=" w-fit mt-5 z-20 relative">
								<CustomGlowButton
									data-test="explore-all-features"
									name="Explore All Features"
									buttonType="Link"
									href="/features"
								/>
							</div>
						</div> */}

						<div className="flex-[2] w-full">
							<ul>
								<GlowCardParent className="grid grid-cols-1 xl:grid-cols-2 gap-3">
									{products.map((product) => {
										return (
											<li key={product.id}>
												<GlowCard
													data-test={`${product.link}`}
													onCardClick={toggleNavToFalse!}
													type="link"
													linkTo={product.link}
													cardClassName="bg-[#071f07] gap-5 p-0 cursor-pointer"
													className="p-3 duration-100 transition-colors rounded-md"
												>
													<div className="flex items-center gap-3 justify-start">
														<Image
															src={product.img}
															alt={product.product}
															height={25}
															width={25}
														/>
														<div>
															<p className="font-medium text-[17px] text-white">
																{product.product}
															</p>
															<span className="text-mid--yellow text-text-14">
																{product.details}
															</span>
														</div>
														<KeyboardArrowRight
															color="inherit"
															fontSize="medium"
															className="ml-auto"
														/>
													</div>
												</GlowCard>
											</li>
										);
									})}
									<li className="grid place-content-center z-20 relative w-full">
										<CustomGlowButton
											data-test="explore-all-features"
											name="Explore All Features"
											buttonType="Link"
											href="/features"
											className="rounded-md before:rounded-md after:rounded-md w-full"
										/>
									</li>
								</GlowCardParent>
							</ul>
						</div>
						<div className="flex-[2] flex flex-col gap-3 max-w-xl">
							{/* <div className="mb-5">
								<p className="text-white font-medium pb-2 text-text-20">
									Streamline Your Workflow
								</p>
								<span className="text-mid--yellow md:text-[#d6d6d6] text-text-14 sm:text-text-normal">
									Our platform is designed to simplify complex processes and
									optimize efficiency. With intuitive interfaces and seamless
									integration, you can automate tedious tasks and focus on what
									matters most. Say goodbye to manual data entry and hello to
									increased productivity.
								</span>
							</div> */}
							<div>
								<p className="text-white font-medium text-text-24">
									Enhance Your Workflow
								</p>
								<span className="text-mid--yellow text-text-normal">
									Take your operations to the next level with our innovative
									features. Whether{` you're `}a small business or a large
									enterprise, our solutions are tailored to meet your needs.
									Experience seamless integration, powerful analytics, and
									unparalleled convenience. Elevate your workflow today.
								</span>
							</div>
							<div>
								<p className="text-white font-medium text-text-24">
									Gain Actionable Insights
								</p>
								<span className="text-mid--yellow text-text-normal">
									Unlock the power of data with our advanced analytics tools.
									From customizable reports to real-time metrics,{` you'll `}
									have access to valuable insights that drive informed
									decision-making. Identify trends, spot opportunities, and stay
									ahead of the competition.
								</span>
							</div>
						</div>
					</GlowCard>
				</GlowCardParent>
			</div>
		</GlowCardParent>
	);
};

export default ProductDropDown;
