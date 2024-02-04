"use client";

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { particlesOptions } from "@/helpers/particlesOptions";

type ParticlesProps = {
	id?: string;
	className?: string;
	background?: string;
	particleSize?: number;
	minSize?: number;
	maxSize?: number;
	speed?: number;
	particleColor?: string;
	particleDensity?: number;
};

const SparklesCore = (props: ParticlesProps) => {
	const {
		id,
		className,
		background,
		minSize,
		maxSize,
		speed,
		particleColor,
		particleDensity,
	} = props;

	const [init, setInit] = useState(false);
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			await loadSlim(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const controls = useAnimation();
	const particlesLoaded = async (container?: Container) => {
		if (container) {
			controls.start({
				opacity: 1,
				transition: {
					duration: 1,
				},
			});
		}
	};
	return (
		<motion.div animate={controls} className={cn("opacity-0", className)}>
			{init && (
				<Particles
					id={id || "tsparticles"}
					className={cn("h-full w-full")}
					particlesLoaded={particlesLoaded}
					options={particlesOptions({
						background: background!,
						particleColor: particleColor!,
						particleDensity: particleDensity!,
						speed: speed!,
						minSize: minSize!,
						maxSize: maxSize!,
					})}
				/>
			)}
		</motion.div>
	);
};

export default SparklesCore;
