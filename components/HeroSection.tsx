"use client";

import { TbSquareRoundedArrowDownFilled } from "react-icons/tb";
import TypeWrite from "@/components/TypeWrite";
import PromptPage from "@/components/PromptPage";
import CustomGlowButton from "./ui/CustomGlowButton";
import { useRef } from "react";

const HeroSection = () => {
	const sectionRef = useRef<null | HTMLDivElement>(null);

	return (
		<>
			<div className=" w-full text-center flex flex-col relative z-0 ">
				<div className="green-blob2 w-[550px] h-[400px] animate-pulse top-[-50%] md:top-[-35%] left-[50%]"></div>
				<div className=" min-h-svh py-20 relative my-max flex flex-col items-center justify-between h-full w-full">
					<section>
						<h1 className="text-brand-green mb-5 font-bold max-w-5xl mx-auto text-text-40 md:text-text-60 lg:text-text-80">
							SATSAT AI
						</h1>
						<TypeWrite
							text={[
								"Query your financial data with natural language",
								"Budget management and forecasts",
								"Wealth of data-driven financial insights",
								"Alternative credit scoring",
								"Insurance and loan offers",
							]}
							showCaret={true}
							loop={true}
							timeToStartNewText={4700}
							typingSpeed={55}
							showCaretOnComplete={true}
						/>
						<div className="w-fit mt-3 mx-auto">
							<CustomGlowButton
								href="/choose-your-pricing"
								name="Get Started Now"
							/>
						</div>
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
				className="relative flex flex-col items-center min-h-svh pt-16 z-[1] snap-start"
			>
				<h2 className="md:text-text-50 silver-text text-[35px] py-7 text-center sm:text-left font-semibold text-white">
					Chat With Your Financial Data
				</h2>

				<div className="flex bg-[black] relative rounded-3xl my-shadow mx-auto my-max items-center justify-center">
					<div className="green-blob2 w-96 h-96 top-[50%] left-[-50%] md:left-[-20%]"></div>
					<div className="yellow-blob2 w-96 h-96 top-[20%] right-[-30%]"></div>
					<PromptPage />
				</div>
			</div>
		</>
	);
};

export default HeroSection;
