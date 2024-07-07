"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";

interface OnscrollTextRevealProp {
	text: string;
	className?: string;
	retro?: boolean;
}

export const OnscrollTextReveal: FC<OnscrollTextRevealProp> = ({
	text,
	className,
	retro,
}) => {
	const targetRef = useRef<HTMLDivElement | null>(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
	});
	const words = text.split(" ");

	return (
		<div
			ref={targetRef}
			className={cn("relative z-0 h-[200vh] md:h-[350vh]", className)}
		>
			<div
				className={
					"sticky top-52 mx-auto flex max-w-6xl items-center bg-transparent px-[1rem] pb-[10rem]"
				}
			>
				<p
					ref={targetRef}
					className={cn(
						"flex flex-wrap p-5 font-semibold text-white md:p-8 lg:p-10",
						className
					)}
				>
					{words.map((word, i) => {
						const start = i / words.length;
						const end = start + 1 / words.length;
						return (
							<Word
								retro={retro}
								key={i}
								progress={scrollYProgress}
								range={[start, end]}
							>
								{word}
							</Word>
						);
					})}
				</p>
			</div>
		</div>
	);
};

interface WordProps {
	children: ReactNode;
	progress: any;
	range: [number, number];
	retro?: boolean;
}

const Word: FC<WordProps> = ({ children, progress, range, retro }) => {
	const opacity = useTransform(progress, range, [0, 1]);
	return (
		<span className="xl:lg-3 relative mx-1 lg:mx-2.5">
			<span
				className={"absolute opacity-5 md:opacity-[0.02] pointer-events-none"}
			>
				{children}
			</span>
			<motion.span
				style={{ opacity: opacity }}
				className={cn("text-white", {
					"bg-gradient-to-br from-brand-green to-mid--yellow/90 bg-clip-text text-transparent":
						retro,
				})}
			>
				{children}
			</motion.span>
		</span>
	);
};

export default OnscrollTextReveal;
