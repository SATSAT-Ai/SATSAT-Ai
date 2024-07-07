"use client";

import { useEffect, useState } from "react";
import clsx, { ClassValue } from "clsx";
import WordRotate from "./WordRotate";
import { cn } from "@/lib/utils";

interface MeteorsProps {
	number?: number;
}
export const Meteor = ({ number = 20 }: MeteorsProps) => {
	const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>(
		[]
	);

	useEffect(() => {
		const styles = [...new Array(number)].map(() => ({
			top: -5,
			left: Math.floor(Math.random() * window.innerWidth) + "px",
			animationDelay: Math.random() * 1 + 0.2 + "s",
			animationDuration: Math.floor(Math.random() * 8 + 2) + "s",
		}));
		setMeteorStyles(styles);
	}, [number]);

	return (
		<>
			{[...meteorStyles].map((style, idx) => (
				// Meteor Head
				<span
					key={idx}
					className={clsx(
						"pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-[9999px] bg-brand-green shadow-[0_0_0_1px_#ffffff10]"
					)}
					style={style}
				>
					{/* Meteor Tail */}
					<div className="pointer-events-none absolute top-1/2 -z-10 h-[1px] w-[50px] -translate-y-1/2 bg-gradient-to-r from-brand-green to-transparent" />
				</span>
			))}
		</>
	);
};

function Meteors({ className }: { className?: ClassValue }) {
	return (
		<div
			className={cn(
				"relative flex h-full w-full items-center justify-center overflow-hidden p-20",
				className
			)}
		>
			<Meteor number={50} />
			<div className="z-10 whitespace-pre-wrap text-center font-medium tracking-tighter text-white">
				<WordRotate
					className="text-text-40"
					words={[
						"Creditworthiness",
						"Payment history",
						"Credit monitoring",
						"Credit report",
					]}
				/>
			</div>
		</div>
	);
}
export default Meteors;
