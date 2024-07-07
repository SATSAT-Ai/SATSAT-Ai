"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { useEffect, useState } from "react";

interface WordRotateProps {
	words: string[];
	duration?: number;
	framerProps?: HTMLMotionProps<"h1">;
	className?: string;
	retro?: boolean;
}

export default function WordRotate({
	words,
	duration = 2500,
	framerProps = {
		initial: { opacity: 0, y: -50 },
		animate: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 50 },
		transition: { duration: 0.25, ease: "easeOut" },
	},
	className,
	retro,
}: WordRotateProps) {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % words.length);
		}, duration);

		return () => clearInterval(interval);
	}, [words, duration, index]);

	return (
		<div
			className={cn(
				"overflow-hidden py-2 text-text-50 lg:text-text-60",
				className
			)}
		>
			<AnimatePresence mode="wait">
				<motion.h1
					key={words[index]}
					className={cn(" text-center text-white", className, {
						"bg-gradient-to-br from-brand-green to-mid--yellow/90 bg-clip-text text-transparent font-bold":
							retro,
					})}
					{...framerProps}
				>
					{words[index]}
				</motion.h1>
			</AnimatePresence>
		</div>
	);
}
