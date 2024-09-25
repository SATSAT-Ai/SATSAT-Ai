import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const TopShade = ({ className }: { className?: ClassValue }) => {
	return (
		<div
			className={cn(
				"mx-auto sticky top-0 -mt-3 left-0 flex  h-0 max-w-[1440px] -mb-5 w-full justify-between z-20 items-center px-3",
				className
			)}
		>
			<div className="absolute -top-5 from-[#040a06] h-20 blur from-50% via-[#001404]/90 to-darker/20 inset-0 -bottom-7 z-[-1] bg-gradient-to-b via-50% "></div>
		</div>
	);
};

export default TopShade;
