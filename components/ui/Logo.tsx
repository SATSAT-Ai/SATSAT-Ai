import { cn } from "@/lib/utils";
import SatSatAiLogo from "@/public/SatSat-ai-logo-new.svg";
import { ClassValue } from "clsx";
import Image from "next/image";

const Logo = ({
	type = "large",
	className,
}: {
	type?: "normal" | "small" | "large";
	className?: ClassValue;
}) => {
	return type === "normal" ? (
		<div
			className={cn(
				"text-white text-[30px] flex mx-auto  w-full items-center gap-2 font-medium justify-center",
				className
			)}
		>
			Sat
			<Image
				className={cn("h-auto w-[30px]", className)}
				src={SatSatAiLogo}
				alt="logo"
			/>
			atAi
		</div>
	) : type === "small" ? (
		<div
			className={cn(
				"bg-white hover:bg-white/10 transition rounded-full mx-5 w-10 h-10 p-1 ",
				className
			)}
		>
			<Image
				className={cn("h-full w-full", className)}
				src={SatSatAiLogo}
				alt="logo"
			/>
		</div>
	) : (
		type === "large" && (
			<div
				className={cn(
					"text-white text-[30px] flex mx-auto w-full items-center gap-2 font-medium justify-center",
					className
				)}
			>
				Sat
				<div className={cn("bg-white rounded-full w-10 h-10 p-1 ", className)}>
					<Image
						className={cn("h-full w-full", className)}
						src={SatSatAiLogo}
						alt="logo"
					/>
				</div>
				atAi
			</div>
		)
	);
};

export default Logo;
