"use client";

import CustomGlowButton from "@/components/ui/CustomGlowButton";
import { useState } from "react";

const WalkThrough = () => {
	const [currentStep, setCurrentStep] = useState(0);

	const currentStepData = [
		{
			stepTitle: `lorem ipsum data`,
		},
		{
			stepTitle: `lorem ipsum step ${currentStep} data`,
			targetElementId: "walkthrough-1",
		},
		{
			stepTitle: `lorem ipsum step ${currentStep} data`,
			targetElementId: "walkthrough-2",
		},
		{
			stepTitle: `lorem ipsum step ${currentStep} data`,
			targetElementId: "walkthrough-3",
		},
		{
			stepTitle: `lorem ipsum step ${currentStep} data`,
			targetElementId: "walkthrough-4",
		},
	];

	const highlightTarget = (steps: number) => {
		currentStepData.forEach((targetElement) => {
			const target = document.getElementById(targetElement?.targetElementId!);
			if (target) {
				target?.classList?.remove("walkthroughTarget");
                target.classList.remove("glow3");
			}
		});
		const targetDomElement = document.getElementById(
			currentStepData[steps]?.targetElementId!
		);
		if (targetDomElement) {
			targetDomElement.classList.add("walkthroughTarget");

			targetDomElement.classList.add("glow3");
			targetDomElement.scrollIntoView({ behavior: "smooth", block: "center" });
		}
	};

	return (
		<div className="absolute top-0 left-0 z-[100] h-screen w-full bg-darker/90 p-3 flex flex-col items-center justify-center">
			<div className="text-white z-[101] bg-brand-green-darker p-4 rounded-md shadow-md">
				{currentStep >= 1 && (
					<span className="pb-5 block text-text-20 font-medium">
						Step {currentStep}
					</span>
				)}

				<h1 className="mb-0 font-medium">
					{currentStepData[currentStep]?.stepTitle}
				</h1>
				<div className="flex items-center flex-wrap-reverse gap-5 mt-5">
					<button
						className="text-text-normal active:scale-[1.02] text-mid--yellow underline"
						type="button"
					>
						Skip Tutorial
					</button>

					<div className="flex items-center gap-5 justify-between ">
						<button
							disabled={currentStep <= 1}
							className="bg-brand-green/70 disabled:active:scale-100 active:scale-[1.02] hover:bg-brand-green transition-colors duration-150 ease-in disabled:bg-[#071f07] py-2 px-7 rounded-lg"
							type="button"
							onClick={() => (
								setCurrentStep(currentStep - 1),
								highlightTarget(currentStep - 1)
							)}
						>
							Prev
						</button>
						<CustomGlowButton
							disabledGlowButton={currentStep === currentStepData.length - 1}
							buttonType="button"
							name="Next"
							handleClick={() => (
								setCurrentStep(currentStep + 1),
								highlightTarget(currentStep + 1)
							)}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WalkThrough;
