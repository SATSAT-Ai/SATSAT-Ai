import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ClassValue } from "clsx";

export interface ShimmerButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	shimmerColor?: string;
	shimmerSize?: string;
	borderRadius?: string;
	shimmerDuration?: string;
	background?: string;
	className?: string;
	children?: React.ReactNode;
	highlight?: boolean;
}

export const Shimmer = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
	(
		{
			shimmerColor = "#ffffff",
			shimmerSize = "0.05em",
			shimmerDuration = "3s",
			borderRadius = "100px",
			background = "rgba(0, 0, 0, 1)",
			className,
			children,
			highlight = true,
			...props
		},
		ref
	) => {
		return (
			<button
				style={
					{
						"--spread": "90deg",
						"--shimmer-color": shimmerColor,
						"--radius": borderRadius,
						"--speed": shimmerDuration,
						"--cut": shimmerSize,
						"--bg": background,
					} as CSSProperties
				}
				className={cn(
					"group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap px-6 py-3 [background:var(--bg)] [border-radius:var(--radius)] text-black",
					"transform-gpu transition-transform duration-300 ease-in-out active:translate-y-[1px] overflow-clip",
					className
				)}
				ref={ref}
				{...props}
			>
				{/* spark container */}
				<div
					className={cn(
						"-z-30 blur-[2px]",
						"absolute inset-0 overflow-visible [container-type:size]"
					)}
				>
					{/* spark */}
					<div className="absolute inset-0 h-[100cqh] animate-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
						{/* spark before */}
						<div className="animate-spin-around absolute inset-[-100%] w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
					</div>
				</div>
				{children}

				{/* Highlight */}
				<div
					className={cn(
						"insert-0 absolute h-full w-full",

						"rounded-2xl px-4 py-1.5 text-sm font-medium",
						{ "shadow-[inset_0_-8px_10px_#29a17340]": highlight },

						// transition
						"transform-gpu transition-all duration-300 ease-in-out",

						// on hover
						"group-hover:shadow-[inset_0_-6px_10px_#29a17360]",

						// on click
						"group-active:shadow-[inset_0_-10px_10px_#29a17380]"
					)}
				/>

				{/* backdrop */}
				<div
					className={cn(
						"absolute -z-20 [background:var(--bg)] [border-radius:var(--radius)] [inset:var(--cut)]"
					)}
				/>
			</button>
		);
	}
);

Shimmer.displayName = "Shimmer";

export function ShimmerButton({
	buttonType,
	fontSize = 20,
	className,
}: {
	buttonType?: "link" | "button";
	fontSize?: number;
	className?: ClassValue;
}) {
	return buttonType == "link" ? (
		<Link
			href={"/book-a-demo"}
			className={cn("z-10 flex items-center justify-center", className)}
		>
			<Shimmer className="shadow-2xl py-7 px-32" shimmerColor="#29a173">
				<span
					style={
						{
							"--fontSize": `${fontSize}px`,
						} as CSSProperties
					}
					className="whitespace-pre-wrap text-center [font-size:var(--fontSize)] font-semibold leading-none tracking-tight text-white from-white"
				>
					Book A Demo
				</span>
			</Shimmer>
		</Link>
	) : (
		<div className={cn("z-10 flex items-center justify-center", className)}>
			<Shimmer className="shadow-2xl" shimmerColor="#29a173">
				<span
					style={
						{
							"--fontSize": fontSize,
						} as CSSProperties
					}
					className="whitespace-pre-wrap text-center text-[var(--fontSize)] font-medium leading-none tracking-tight text-white from-white lg:text-lg"
				>
					Book A Demo
				</span>
			</Shimmer>
		</div>
	);
}

export default ShimmerButton;
