import { ClassValue } from "clsx";
import { ReactNode } from "react";
import { cn } from "../../lib/utils";
import Link from "next/link";

const GlowCard = ({
	cardClassName,
	className,
	customBackgroundColorBefore,
	customBackgroundColorAfter,
	children,
	type = "card",
	linkTo,
	onCardClick,
	...restProps
}: {
	onCardClick?: () => void;
	cardClassName?: ClassValue;
	className?: ClassValue;
	customBackgroundColorBefore?: string;
	customBackgroundColorAfter?: string;
	children: ReactNode;
	linkTo?: string;
	type?: "card" | "link";
}) => {
	return type === "link" ? (
		<Link
			{...restProps}
			onClick={onCardClick}
			href={linkTo || ""}
			className={cn(
				`relative overflow-clip flex flex-col w-full text-white rounded-xl hover:before:opacity-100 before:opacity-0 after:opacity-0 before:h-full after:h-full before:left-0 after:left-0 before:bottom-0 after:bottom-0 before:top-0 after:top-0 before:transition-opacity after:transition-opacity before:duration-[500ms] before:w-full after:w-full after:duration-[500ms] before:absolute after:absolute after:rounded-[inherit] before:rounded-[inherit] card-child group-hover:before:opacity-100 group-hover:after:opacity-100`,
				cardClassName
			)}
			style={{
				["--before-color" as string]:
					customBackgroundColorBefore ?? "rgba(255, 255, 255, 0.06)",
				["--after-color" as string]:
					customBackgroundColorAfter ?? "rgba(255, 255, 255, 0.4)",
			}}
		>
			<div
				className={cn(
					"card-content absolute bg-[#171717] rounded-[inherit] flex flex-col left-0 bottom-0 right-0 top-0 inset-[1px] z-[2]",
					cardClassName
				)}
			></div>

			<div className={cn("z-[2] p-3", className)}>{children}</div>
		</Link>
	) : (
		<div
			{...restProps}
			className={cn(
				`relative overflow-clip flex flex-col w-full text-white rounded-xl hover:before:opacity-100 before:opacity-0 after:opacity-0 before:h-full after:h-full before:left-0 after:left-0 before:bottom-0 after:bottom-0 before:top-0 after:top-0 before:transition-opacity after:transition-opacity before:duration-[500ms] before:w-full after:w-full after:duration-[500ms] before:absolute after:absolute after:rounded-[inherit] before:rounded-[inherit] card-child group-hover:before:opacity-100 group-hover:after:opacity-100`,
				cardClassName
			)}
			style={{
				["--before-color" as string]:
					customBackgroundColorBefore ?? "rgba(255, 255, 255, 0.06)",
				["--after-color" as string]:
					customBackgroundColorAfter ?? "rgba(255, 255, 255, 0.4)",
			}}
		>
			<div
				className={cn(
					"card-content absolute bg-[#171717] rounded-[inherit] flex flex-col left-0 bottom-0 right-0 top-0 inset-[1px] z-[2]",
					cardClassName
				)}
			></div>

			<div className={cn("z-[2] p-3", className)}>{children}</div>
		</div>
	);
};

export default GlowCard;
