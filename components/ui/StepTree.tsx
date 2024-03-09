import LoadingSpinner from "./LoadingSpinner";
import { cn } from "@/lib/utils";

const StepTree = ({
	currentStep,
	className,
}: {
	currentStep: number;
	className?: string;
}) => {
	return (
		<div className={cn("text-white flex flex-col gap-10", className)}>
			<div className=" flex items-center gap-5 z-10 ">
				{currentStep === 1 ? (
					<div className="bg-[#071f07] h-12 w-12 rounded-full font-medium grid place-content-center">
						<LoadingSpinner className=" animate-[spin_0.4s_linear_infinite] border-transparent border-t-mid--yellow h-5 w-5" />
					</div>
				) : (
					<div
						className={`relative before:absolute before:top-[38px] before:left-1/2 before:-translate-x-1/2 before:w-1 ${
							currentStep > 1
								? " before:animate-[increase-height_.5s_ease] before:h-[57px]"
								: "before:h-0"
						}  duration-500 before:bg-brand-green before:-z-10 bg-brand-green h-12 w-12 rounded-full font-medium  border-[5px] border-brand-green-darker grid place-content-center`}
					>
						1
					</div>
				)}
				<div>
					<p className="font-normal text-text-24"> Step 1</p>
					<span className="text-mid--yellow">Verify Your Email</span>
				</div>
			</div>
			<div className={`flex items-center gap-5 z-10`}>
				{currentStep === 2 ? (
					<div className="bg-[#071f07] h-12 w-12 rounded-full font-medium grid place-content-center">
						<LoadingSpinner className=" animate-[spin_0.4s_linear_infinite] border-transparent border-t-mid--yellow h-5 w-5" />
					</div>
				) : currentStep >= 3 ? (
					<div
						className={`relative before:absolute before:top-9 before:left-1/2 before:-translate-x-1/2 before:w-1 ${
							currentStep > 2
								? " before:animate-[increase-height_.5s_ease] before:h-[60px] "
								: "before:h-0"
						}  duration-500 before:bg-brand-green before:-z-10 bg-brand-green h-12 w-12 rounded-full font-medium  border-[5px] border-brand-green-darker grid place-content-center`}
					>
						2
					</div>
				) : (
					<>
						<div
							className={`${
								currentStep === 2 ? "opacity-100" : "opacity-40"
							} bg-[#071f07] h-12 w-12 relative rounded-full font-medium grid place-content-center`}
						>
							2
						</div>
					</>
				)}

				<div className={`${currentStep >= 2 ? "opacity-100" : "opacity-40"}`}>
					<p className="font-normal text-text-24">Step 2</p>
					<span className="text-mid--yellow">Verify Phone</span>
				</div>
			</div>
			<div className={`flex items-center gap-5 z-10`}>
				{currentStep === 3 ? (
					<div className="bg-[#071f07] h-12 w-12 rounded-full font-medium grid place-content-center">
						<LoadingSpinner className=" animate-[spin_0.4s_linear_infinite] border-transparent border-t-mid--yellow h-5 w-5" />
					</div>
				) : currentStep === 4 ? (
					<div
						className={`bg-brand-green h-12 w-12 rounded-full font-medium  border-[5px] border-brand-green-darker grid place-content-center`}
					>
						3
					</div>
				) : (
					<div
						className={`${
							currentStep === 2 ? "opacity-100" : "opacity-40"
						} bg-[#071f07] h-12 w-12 rounded-full font-medium grid place-content-center`}
					>
						3
					</div>
				)}

				<div className={`${currentStep >= 3 ? "opacity-100" : "opacity-40"}`}>
					<p className="font-normal text-text-24">Finishing Up</p>
					<span className="text-mid--yellow">Welcome to SatSat Ai</span>
				</div>
			</div>
		</div>
	);
};

export default StepTree;
