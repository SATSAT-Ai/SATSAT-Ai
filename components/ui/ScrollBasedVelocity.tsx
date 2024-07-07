"use client";

import { cn } from "@/lib/utils";
import { wrap } from "@motionone/utils";
import {
	motion,
	useAnimationFrame,
	useMotionValue,
	useScroll,
	useSpring,
	useTransform,
	useVelocity,
} from "framer-motion";
import React, { CSSProperties, useEffect, useRef, useState } from "react";

interface VelocityScrollProps {
	text: string;
	default_velocity?: number;
	className?: string;
	retro?: boolean;
}

interface ParallaxProps {
	children: string;
	baseVelocity: number;
	className?: string;
	retro?: boolean;
}

function ScrollBasedVelocity({
	text,
	default_velocity = 5,
	className,
	retro,
}: VelocityScrollProps) {
	function ParallaxText({
		children,
		baseVelocity = 100,
		className,
		retro,
	}: ParallaxProps) {
		const baseX = useMotionValue(0);
		const { scrollY } = useScroll();
		const scrollVelocity = useVelocity(scrollY);
		const smoothVelocity = useSpring(scrollVelocity, {
			damping: 50,
			stiffness: 400,
		});

		const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
			clamp: false,
		});

		const [repetitions, setRepetitions] = useState(1);
		const containerRef = useRef<HTMLDivElement>(null);
		const textRef = useRef<HTMLSpanElement>(null);

		useEffect(() => {
			const calculateRepetitions = () => {
				if (containerRef.current && textRef.current) {
					const containerWidth = containerRef.current.offsetWidth;
					const textWidth = textRef.current.offsetWidth;
					const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
					setRepetitions(newRepetitions);
				}
			};

			calculateRepetitions();

			window.addEventListener("resize", calculateRepetitions);
			return () => window.removeEventListener("resize", calculateRepetitions);
		}, [children]);

		const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

		const directionFactor = React.useRef<number>(1);
		useAnimationFrame((t, delta) => {
			let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

			if (velocityFactor.get() < 0) {
				directionFactor.current = -1;
			} else if (velocityFactor.get() > 0) {
				directionFactor.current = 1;
			}

			moveBy += directionFactor.current * moveBy * velocityFactor.get();

			baseX.set(baseX.get() + moveBy);
		});

		return (
			<div
				className="w-full overflow-hidden whitespace-nowrap"
				ref={containerRef}
			>
				<motion.div
					style={{ x }}
					className={cn("inline-block ", className, {
						"bg-gradient-to-br from-brand-green to-mid--yellow/90 bg-clip-text text-transparent font-bold":
							retro,
					})}
				>
					{Array.from({ length: repetitions }).map((_, i) => (
						<span
							className="text-text-40 md:text-text-50 lg:text-text-60"
							key={i}
							ref={i === 0 ? textRef : null}
						>
							{children}{" "}
						</span>
					))}
				</motion.div>
			</div>
		);
	}

	return (
		<section className="relative w-full">
			<ParallaxText
				retro={retro}
				baseVelocity={default_velocity}
				className={className}
			>
				{text}
			</ParallaxText>
			<ParallaxText
				retro={retro}
				baseVelocity={-default_velocity}
				className={className}
			>
				{text}
			</ParallaxText>
		</section>
	);
}

export default ScrollBasedVelocity;
