"use client";

import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import PromptPage from "@/components/PromptPage";
import { useRef } from "react";
import SparklesCore from "@/components/ui/Particles";
import GetStartedButton from "./ui/GetStartedButton";
import SmoothTextEffect from "./ui/SmoothTextEffect";
import Blob from "./Blob";

const HeroSection = () => {
	const sectionRef = useRef<null | HTMLDivElement>(null);

	return (
		<>
			<div className=" w-full text-center flex flex-col relative z-0 ">
				<Blob
					className="z-10 animate-[pulse_3s_cubic-bezier(0.7,1,0.6,1)_infinite]  w-[600px] h-[350px] md:w-[800px] md:h-[500px] bg-brand-green/45 left-1/2 -translate-x-1/2 translate-y-0 -top-[300px] md:-top-[400px] xl:-top-[380px]"
					blur={150}
				/>
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
						{/* <h1 className=" text-brand-green  leading-tight font-bold max-w-5xl mx-auto text-text-60 mb-0 md:text-text-80 lg:text-[90px]"> */}
						<h1 className="bg-gradient-to-r from-brand-green from-[40%] to-mid--yellow bg-clip-text text-transparent leading-tight font-bold max-w-5xl mx-auto text-text-60 mb-0 md:text-text-80 lg:text-[90px]">
							SATSAT AI
						</h1>
						<div className="mb-4">
							<SmoothTextEffect
								className="text-text-normal text-mid--yellow"
								text={[
									"Query your financial data with natural language",
									"Budget management and forecasts",
									"Wealth of data-driven financial insights",
									"Alternative credit scoring",
									"Analyze bank and mobile money statements, invoices and receipts",
								]}
								delay={0.2}
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
						<TbSquareRoundedArrowDownFilled
							className="text-text-60 md:text-[70px]"
							color="white"
						/>
					</button>
				</div>
			</div>

			<section
				ref={sectionRef}
				className="relative flex flex-col items-center min-h-screen pt-16 z-[1] snap-start"
			>
				<h2 className="text-text-40 mb-0 md:text-text-50 silver-text py-10 text-center sm:text-left font-semibold text-white">
					Chat With Your Financial Data
				</h2>

				<div className="flex bg-[black] relative rounded-3xl my-shadow mx-auto my-max items-center justify-center">
					<Blob
						blur={120}
						className="translate-y-0 bg-brand-green/70 -z-10 w-96 h-96 top-[50%] left-[-50%] md:left-[-7%]"
					/>
					<Blob
						blur={120}
						className="translate-y-0 bg-mid--yellow/70 -z-10 w-96 h-96 top-[20%] right-[-30%]"
					/>
					<PromptPage />
				</div>
			</section>
		</>
	);
};

export default HeroSection;
