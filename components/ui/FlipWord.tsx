"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, LayoutGroup } from "framer-motion";
import { cn } from "@/lib/utils";
import { Retro } from "./RetroGrid";
import { ClassValue } from "clsx";

export const Flip = ({
	words,
	duration = 3000,
	className,
}: {
	words: string[];
	duration?: number;
	className?: string;
}) => {
	const [currentWord, setCurrentWord] = useState(words[0]);
	const [isAnimating, setIsAnimating] = useState<boolean>(false);

	const startAnimation = useCallback(() => {
		const word = words[words.indexOf(currentWord) + 1] || words[0];
		setCurrentWord(word);
		setIsAnimating(true);
	}, [currentWord, words]);

	useEffect(() => {
		if (!isAnimating)
			setTimeout(() => {
				startAnimation();
			}, duration);
	}, [isAnimating, duration, startAnimation]);

	return (
		<AnimatePresence
			onExitComplete={() => {
				setIsAnimating(false);
			}}
		>
			<motion.span
				initial={{
					opacity: 0,
					y: 10,
				}}
				animate={{
					opacity: 1,
					y: 0,
				}}
				transition={{
					duration: 0.4,
					ease: "easeInOut",
					type: "spring",
					stiffness: 100,
					damping: 10,
				}}
				exit={{
					opacity: 0,
					y: -40,
					x: 40,
					filter: "blur(8px)",
					scale: 2,
					position: "absolute",
				}}
				className={cn("z-10 inline-block relative text-left px-2", className)}
				key={currentWord}
			>
				{currentWord.split("").map((letter, index) => (
					<motion.span
						key={currentWord + index}
						initial={{ opacity: 0, y: 10, filter: "blur(8px)" }}
						animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
						transition={{
							delay: index * 0.08,
							duration: 0.4,
						}}
						className="inline-block"
					>
						{letter}
					</motion.span>
				))}
			</motion.span>
		</AnimatePresence>
	);
};

export function FlipWord({ className }: { className?: ClassValue }) {
	const words = [
		"Access\u00A0Analysis",
		"Categorization",
		"Gain\u00A0Clarity",
		"Spending\u00A0Overview",
		"And\u00A0more.",
	];

	return (
		<div
			className={cn(
				"flex justify-center items-center px-4 w-full h-full",
				className
			)}
		>
			<p className="text-center leading-tight text-text-40 md:text-text-60 max-w-xl font-semibold text-brand-green">
				<Flip words={words} /> <br />
			</p>
			<Retro />
		</div>
	);
}
