"use client";

import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import TypeWrite from "@/components/TypeWrite";
import PromptPage from "@/components/PromptPage";
import { useRef } from "react";
import SparklesCore from "@/components/ui/Particles";
import GetStartedButton from "./ui/GetStartedButton";

const HeroSection = () => {
	const sectionRef = useRef<null | HTMLDivElement>(null);

	return (
		<>
			<div className=" w-full text-center flex flex-col relative z-0 ">
				<div className="green-blob2 z-10 w-[800px] h-[450px] !bg-brand-green/75 animate-pulse top-[-50%] md:top-[-35%] left-[50%]"></div>
				<div className="absolute source-out h-full bottom-0 z-[1] left-0 w-full">
					<SparklesCore
						particleSize={5}
						id="tsparticlesfullpage"
						background="transparent"
						minSize={0.8}
						maxSize={1.9}
						particleDensity={30}
						className="w-full h-full"
						particleColor="#29a173"
					/>
				</div>

				<div className="z-10 min-h-screen py-20 relative my-max flex flex-col items-center justify-between h-full w-full">
					<section className="flex flex-col items-center flex-1 justify-center">
						<h1 className="text-brand-green leading-tight font-bold max-w-5xl mx-auto text-text-40 mb-0 md:text-text-60 lg:text-text-80">
							SATSAT AI
						</h1>
						<div className="h-14 mb-4">
							<TypeWrite
								text={[
									"Query your financial data with natural language",
									"Budget management and forecasts",
									"Wealth of data-driven financial insights",
									"Alternative credit scoring",
									"Analyze bank and mobile money statements, invoices and receipts",
								]}
								showCaret={true}
								loop={true}
								timeToStartNewText={3500}
								typingSpeed={55}
								showCaretOnComplete={true}
								maxWidth={350}
							/>
						</div>

						<GetStartedButton
							showIcon={false}
							name="Get Started Now"
							className="w-fit mx-auto"
							data-test="choose-pricing-button"
						/>
					</section>
					<button
						aria-label="to next section"
						className="active:scale-[1.02]"
						onClick={() =>
							sectionRef?.current?.scrollIntoView({ behavior: "smooth" })
						}
						type="button"
					>
						<TbSquareRoundedArrowDownFilled size={70} color="white" />
					</button>
				</div>
			</div>

			<div
				ref={sectionRef}
				className="relative flex flex-col items-center min-h-screen pt-16 z-[1] snap-start"
			>
				<h2 className="md:text-text-50 silver-text text-[35px] py-7 text-center sm:text-left font-semibold text-white">
					Chat With Your Financial Data
				</h2>

				<div className="flex bg-[black] relative rounded-3xl my-shadow mx-auto my-max items-center justify-center">
					<div className="green-blob2 !bg-brand-green/70 !blur-3xl -z-10 w-96 h-96 top-[50%] left-[-50%] md:left-[-7%]"></div>
					<div className="yellow-blob2 !bg-mid--yellow/70 !blur-3xl -z-10 w-96 h-96 top-[20%] right-[-30%]"></div>
					<PromptPage />
				</div>
			</div>
		</>
	);
};

export default HeroSection;
