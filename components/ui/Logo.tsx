import { cn } from "@/lib/utils";
import SatSatAiLogo from "@/public/SatSat-ai-logo-new.svg";
import { ClassValue } from "clsx";
import Image from "next/image";

const Logo = ({
	type = "large",
	className,
}: {
	type?: "normal" | "small" | "large" | "small-normal";
	className?: ClassValue;
}) => {
	return type === "normal" ? (
		<div
			className={cn(
				"text-white text-[30px] flex mx-auto  w-full items-center gap-2 font-medium justify-center",
				className
			)}
		>
			<Image
				className={cn("h-auto w-[34px]", className)}
				src={SatSatAiLogo}
				alt="logo"
			/>
			SatSat Ai
		</div>
	) : type === "small" ? (
		<div
			className={cn(
				"bg-white hover:bg-white/10 transition rounded-full mx-5 w-9 h-auto shrink-0 aspect-square p-1 ",
				className
			)}
		>
			<Image
				className={cn("h-full w-full", className)}
				src={SatSatAiLogo}
				alt="logo"
			/>
		</div>
	) : type === "small-normal" ? (
		<Image
			className={cn("h-auto w-9", className)}
			src={SatSatAiLogo}
			alt="logo"
		/>
	) : (
		type === "large" && (
			<div
				className={cn(
					"text-white text-[30px] flex mx-auto w-full items-center gap-2 font-medium justify-center",
					className
				)}
			>
				<div className={cn("bg-white rounded-full w-8 h-8 p-1 ", className)}>
					<Image
						className={cn("h-full w-full", className)}
						src={SatSatAiLogo}
						alt="logo"
					/>
				</div>
				SatSat Ai
			</div>
		)
	);
};

export default Logo;
