import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, { CSSProperties } from "react";

interface progressProps {
	backgroundColor?: string;
	progressColor?: string;
	label?: boolean;
	className?: ClassValue;
	progressCompleted?: number;
	labelText?: string;
}
const ProgressBar = ({
	backgroundColor,
	progressColor = "blue",
	label = false,
	className,
	labelText,
	progressCompleted = 40,
}: progressProps) => {
	return (
		<>
			<div className="flex justify-between mb-1">
				{label && (
					<>
						<span className="text-base font-medium text-white">
							{labelText}
						</span>
						<span className="text-sm font-medium text-blue-700">
							{progressCompleted}%
						</span>
					</>
				)}
			</div>
			<div
				style={
					{
						"--progressBackgroundColor": backgroundColor,
					} as CSSProperties
				}
				className={cn(
					"w-full bg-gray-300 flex items-center shadow-inner shadow-gray-500 rounded-full h-2.5",
					{
						"bg-[var(--progressBackgroundColor)]": backgroundColor,
					},
					className
				)}
			>
				<div
					style={
						{
							"--progressWidth": `${progressCompleted}%`,
							"--progressColor": progressColor,
						} as CSSProperties
					}
					className={cn(
						"bg-blue-600 relative h-full border rounded-full w-[var(--progressWidth)]",
						{
							"bg-[var(--progressColor)]": progressColor,
						}
					)}
				></div>
				{progressCompleted !== 100 && (
					<p className="text-text-12 text-gray-900 font-bold">
						{progressCompleted}%
					</p>
				)}
			</div>
		</>
	);
};

export default ProgressBar;
