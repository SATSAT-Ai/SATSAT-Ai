"use client";
import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import PromptPage from "@/components/PromptPage";
import { useRef } from "react";
import SparklesCore from "@/components/ui/Particles";
import GetStartedButton from "./ui/GetStartedButton";
import Blob from "./Blob";
import { FlipWordTypeWriter } from "./ui/TextGenerateEffect";

const HeroSection = () => {
	const sectionRef = useRef<null | HTMLDivElement>(null);

	return (
		<>
			<div className=" w-full text-center flex flex-col z-0">
				<Blob
					className="z-10 animate-[pulse_3s_cubic-bezier(0.7,1,0.6,1)_infinite] w-72 sm:w-[400px] h-[350px] md:w-[600px] md:h-[500px] bg-brand-green/45 left-1/2 -translate-x-1/2 translate-y-0 -top-[300px] md:-top-[400px] xl:-top-[380px]"
					blur={150}
				/>

				<div className="absolute [mask-composite:subtract] [-webkit-mask-composite:subtract] [-webkit-mask-image:radial-gradient(circle_at_top,transparent_150px,white)] [mask-image:radial-gradient(circle_at_top,transparent_150px,white)] min-[768px]:[-webkit-mask-image:radial-gradient(circle_at_top,transparent_200px,white)] min-[768px]:[mask-image:radial-gradient(circle_at_top,transparent_200px,white)] h-full bottom-0 z-[1] left-0 w-full">
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
						<h1 className="bg-gradient-to-r from-brand-green from-[40%] to-mid--yellow bg-clip-text text-transparent leading-tight font-bold max-w-5xl mx-auto text-text-60 mb-0 md:text-text-80 lg:text-[90px]">
							SATSAT AI
						</h1>
						<div className="mb-4">
							<FlipWordTypeWriter
								className="text-text-normal text-mid--yellow text-center"
								textArray={[
									"Query\u00A0your\u00A0financial\u00A0data\u00A0with\u00A0natural\u00A0language",
									"Budget\u00A0management\u00A0and\u00A0forecasts",
									"Wealth\u00A0of\u00A0data-driven\u00A0financial\u00A0insights",
									"Alternative\u00A0credit\u00A0scoring",
									"Analyze\u00A0bank\u00A0and\u00A0mobile\u00A0money\u00A0statements,\u00A0invoices\u00A0and\u00A0receipts",
								]}
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
				<h2
					className="text-text-40 mb-0 md:text-text-50 [background:radial-gradient(70.71%_70.71%_at_50%_50%,#fff_30%,rgba(255,255,255,0.5)_84.77%)] !bg-clip-text text-transparent
				py-10 text-center sm:text-left font-semibold"
				>
					Chat With Your Financial Data
				</h2>

				<div className="flex bg-[black] relative rounded-3xl [box-shadow:-7px_1px_20px_-9px_#29a173,1px_-1px_20px_-7px_#c98821] mx-auto my-max items-center justify-center">
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
