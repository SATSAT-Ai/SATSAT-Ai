import { cn } from "@/lib/utils";

const Blob = ({
	className,
	animation,
	background = "#2aa27460",
	blur = 40,
}: {
	blur?: number;
	background?: string;
	className?: string;
	animation?: "animate-none" | "animate-spin" | "animate-pulse";
}) => {
	return (
		<div
			className={cn(
				"absolute -translate-y-1/2 mx-auto w-72 h-72 sm:w-[550px] top-[70%] left-[15%] md:left-[-15%]",
				className
			)}
		>
			<div
				style={{
					backgroundColor: background,
					filter: `blur(${blur}px)`,
				}}
				className={cn(`absolute rounded-full z-10 h-full w-full`, animation)}
			></div>
		</div>
	);
};

export default Blob;
