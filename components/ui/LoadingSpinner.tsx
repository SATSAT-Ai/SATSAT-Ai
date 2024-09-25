import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const LoadingSpinner = ({
	className,
	showLoadingText,
	textPosition = "left",
	loadingText,
}: {
	className?: ClassValue;
	showLoadingText?: boolean;
	textPosition?: "left" | "right";
	loadingText?: string;
}) => {
	return (
		<div className="flex gap-3 items-center">
			{showLoadingText && textPosition === "left" && (
				<p>{loadingText ? loadingText : "Please wait"}</p>
			)}
			<div
				className={cn(
					"loader animate-[spin_0.3s_linear_infinite] w-3 h-3 border-[2px] border-white border-t-mid--yellow border-t-2 rounded-full",
					className
				)}
			></div>
			{showLoadingText && textPosition === "right" && (
				<p>{loadingText ? loadingText : "Please wait"}</p>
			)}
		</div>
	);
};

export default LoadingSpinner;
