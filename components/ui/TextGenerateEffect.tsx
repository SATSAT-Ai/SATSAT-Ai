"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

interface effectProps {
	words: string;
	showCaret?: boolean;
	duration?: number;
	delay?: number;
	className?: ClassValue;
}

export const TextGenerateEffect = ({
	words,
	className,
	duration = 2,
	delay = 0.3,
}: effectProps) => {
	const [scope, animate] = useAnimate();
	const [showCaretType, setShowCaretType] = useState(true);

	let wordsArray = words?.split(" ");

	useEffect(() => {
		const interval = setInterval(() => {
			setShowCaretType((prev) => !prev);
		}, 2000);

		return () => {
			clearInterval(interval);
		};
	}, [showCaretType]);

	useEffect(() => {
		if (words) {
			animate(
				"span",
				{
					opacity: 1,
				},
				{
					duration,
					delay: stagger(delay),
				}
			);
		}
	}, [animate, delay, duration, words]);

	const renderWords = () => {
		return (
			<>
				<motion.div ref={scope} className={cn("text-mid--yellow", className)}>
					{wordsArray?.map((word, idx) => {
						return (
							<motion.span className="opacity-0" key={word + idx}>
								{word}{" "}
							</motion.span>
						);
					})}
				</motion.div>
				{!words && (
					<span className="animate-pulse text-mid--yellow inline-block">
						{showCaretType ? (
							"|"
						) : (
							<div className="h-3 w-3 rounded-full bg-mid--yellow" />
						)}
					</span>
				)}
			</>
		);
	};

	return renderWords();
};
