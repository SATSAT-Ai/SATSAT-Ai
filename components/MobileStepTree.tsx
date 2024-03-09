import LoadingSpinner from "./ui/LoadingSpinner";
import { cn } from "@/lib/utils";

const MobileStepTree = ({
	currentStep,
	className,
}: {
	currentStep: number;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"text-white flex mb-5 max-w-[482px] justify-between gap-10",
				className
			)}
		>
			<div className=" flex items-center flex-1 z-10 flex-col-reverse gap-5 ">
				{currentStep === 1 ? (
					<div className="bg-[#071f07] h-12 w-12 rounded-full font-medium grid place-content-center">
						<LoadingSpinner className=" animate-[spin_0.4s_linear_infinite] border-transparent border-t-mid--yellow h-5 w-5" />
					</div>
				) : (
					<div
						className={`relative before:absolute before:top-1/2 before:left-[99%] before:h-1 ${
							currentStep > 1
								? " before:animate-[increase-width_.5s_ease] before:w-[80px] min-[375px]:before:w-[132px]"
								: "before:w-0"
						}  duration-500 before:bg-brand-green bg-brand-green h-12 w-12 rounded-full font-medium  border-[5px] border-brand-green-darker grid place-content-center`}
					>
						1
					</div>
				)}
				<span
					className={`text-mid--yellow text-center text-text-normal ${
						currentStep >= 1 ? "opacity-100" : "opacity-40"
					}`}
				>
					Verify Email
				</span>
			</div>
			<div className={`flex items-center flex-1 z-10 flex-col-reverse gap-5`}>
				{currentStep === 2 ? (
					<div className="bg-[#071f07] h-12 w-12 rounded-full font-medium grid place-content-center">
						<LoadingSpinner className=" animate-[spin_0.4s_linear_infinite] border-transparent border-t-mid--yellow h-5 w-5" />
					</div>
				) : currentStep >= 3 ? (
					<div
						className={`relative before:absolute before:top-1/2 before:left-[99%] before:h-1 ${
							currentStep > 2
								? " before:animate-[increase-width_.5s_ease] before:w-[80px] min-[375px]:before:w-[132px]"
								: "before:w-0"
						}  duration-500 before:bg-brand-green bg-brand-green h-12 w-12 rounded-full font-medium  border-[5px] border-brand-green-darker grid place-content-center`}
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

				<span
					className={`text-mid--yellow text-center text-text-normal ${
						currentStep >= 2 ? "opacity-100" : "opacity-40"
					}`}
				>
					Verify Phone
				</span>
			</div>
			<div className={`flex items-center flex-1 z-10 flex-col-reverse gap-5`}>
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

				<span
					className={`text-mid--yellow text-center text-text-normal ${
						currentStep >= 3 ? "opacity-100" : "opacity-40"
					}`}
				>
					Welcome
				</span>
			</div>
		</div>
	);
};

export default MobileStepTree;
