import SatSatAiLogo from "@/public/SatSat-ai-logo-new.svg";
import Image from "next/image";
import Blob from "@/components/Blob";
import GetStartedButton from "@/components/ui/GetStartedButton";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const GetStartedWithBlob = ({
	showButton = true,
	className,
	animation,
}: {
	showButton?: boolean;
	className?: ClassValue;
	animation?: "animate-pulse" | "animate-ping";
}) => {
	return (
		<div
			className={cn(
				"py-20 blur-[var(--after-blur)] my-24 relative flex flex-col items-center",
				className
			)}
		>
			<Blob
				className={cn(
					"md:left-1/2 -translate-y-1/2 md:-translate-x-1/2 sm:h-72 top-1/2 saturate-150",
					animation
				)}
				blur={50}
			/>

			<div className="group z-10 text-white text-text-60 md:text-text-80 flex items-center gap-3 font-semibold justify-center">
				Sat
				<div className="bg-white rounded-full w-14 h-14 md:h-20 md:w-20 p-2">
					<Image className="h-full w-full" src={SatSatAiLogo} alt="logo" />
				</div>
				atAi
			</div>

			{showButton && (
				<div className="relative z-[1] mt-2">
					<GetStartedButton
						showIcon={true}
						name="Get Started Now"
						data-test="choose-pricing-button"
					/>
				</div>
			)}
		</div>
	);
};

export default GetStartedWithBlob;
