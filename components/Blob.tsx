import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { CSSProperties } from "react";
const Blob = ({
	className,
	animation,
	background = "#2aa27420",
	blur = 40,
}: {
	blur?: number;
	background?: string;
	className?: ClassValue;
	animation?: "animate-none" | "animate-spin" | "animate-pulse";
}) => {
	return (
		<div
			style={
				{
					"--background": background,
					"--blur": `${blur}px`,
					"--blur-backdrop": `${blur / 2}px`,
				} as CSSProperties
			}
			className={cn(
				` rounded-full absolute bg-[var(--background)] blur-[var(--blur)] mx-auto w-72 h-72 sm:w-[550px] top-[70%] before:bg-white/5 before:saturate-150 before:backdrop-blur-[var(--blur-backdrop)] before:inset-0 before:h-full before:w-full before:block`,
				animation,
				className
			)}
		></div>
	);
};

export default Blob;
