import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const LoadingSpinner = ({ className }: { className?: ClassValue }) => {
	return (
		<div
			className={cn(
				"loader animate-[spin_0.3s_linear_infinite] w-3 h-3 border-[2px] border-white border-t-mid--yellow border-t-2 rounded-full",
				className
			)}
		></div>
	);
};

export default LoadingSpinner;
