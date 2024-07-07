"use client";

import { cn } from "@/lib/utils";
import React, { forwardRef, useRef } from "react";
import { Beam } from "./Beams";
import Image from "next/image";
import SatSatAiLogo from "@/public/SatSat-ai-logo-new.svg";
import Pdf from "@/public/pdf.svg";
import csv from "@/public/csv.svg";
import word from "@/public/word.svg";
import txt from "@/public/txt.svg";
import xml from "@/public/xml.svg";
import { motion } from "framer-motion";

const Circle = forwardRef<
	HTMLDivElement,
	{ className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
	return (
		<div
			ref={ref}
			className={cn(
				"z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white p-2 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
				className
			)}
		>
			{children}
		</div>
	);
});

Circle.displayName = "Circle";

export function AnimatedBeam({ className }: { className?: string }) {
	const containerRef = useRef<HTMLDivElement>(null);
	const div1Ref = useRef<HTMLDivElement>(null);
	const div2Ref = useRef<HTMLDivElement>(null);
	const div3Ref = useRef<HTMLDivElement>(null);
	const div4Ref = useRef<HTMLDivElement>(null);
	const div5Ref = useRef<HTMLDivElement>(null);
	const div6Ref = useRef<HTMLDivElement>(null);
	const div7Ref = useRef<HTMLDivElement>(null);
	const Icons = {
		user: () => (
			<motion.svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="#29a173"
				strokeWidth="3"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
				<circle cx="12" cy="7" r="4" />
			</motion.svg>
		),
	};

	return (
		<div
			className={cn("relative flex overflow-hidden p-10", className)}
			ref={containerRef}
		>
			<div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
				<div className="flex flex-col justify-center">
					<Circle ref={div7Ref}>
						<Icons.user />
					</Circle>
				</div>
				<div className="flex flex-col justify-center">
					<Circle ref={div6Ref} className="h-16 w-16">
						<Image
							src={SatSatAiLogo}
							alt="satsat-ai"
							className="h-full w-full"
						/>
					</Circle>
				</div>
				<div className="flex flex-col justify-center gap-2">
					<Circle ref={div1Ref}>
						<Image src={Pdf} alt="pdf" className="h-full w-full" />
					</Circle>
					<Circle ref={div2Ref}>
						<Image src={csv} alt="csv" className="h-full w-full" />
					</Circle>
					<Circle ref={div3Ref}>
						<Image src={word} alt="word" className="h-full w-full" />
					</Circle>
					<Circle ref={div4Ref}>
						<Image src={txt} alt="txt" className="h-full w-full" />
					</Circle>
					<Circle ref={div5Ref}>
						<Image src={xml} alt="xml" className="h-full w-full" />
					</Circle>
				</div>
			</div>

			{/* AnimatedBeams */}
			<Beam
				containerRef={containerRef}
				fromRef={div1Ref}
				toRef={div6Ref}
				delay={0.3}
				duration={3}
				reverse
			/>
			<Beam
				containerRef={containerRef}
				fromRef={div2Ref}
				toRef={div6Ref}
				delay={0.2}
				duration={3}
				reverse
			/>
			<Beam
				containerRef={containerRef}
				fromRef={div3Ref}
				toRef={div6Ref}
				duration={3}
				delay={0.5}
				reverse
			/>
			<Beam
				containerRef={containerRef}
				fromRef={div4Ref}
				toRef={div6Ref}
				delay={0.1}
				duration={3}
				reverse
			/>
			<Beam
				containerRef={containerRef}
				fromRef={div5Ref}
				toRef={div6Ref}
				delay={0.4}
				duration={3}
				reverse
			/>
			<Beam
				containerRef={containerRef}
				fromRef={div6Ref}
				toRef={div7Ref}
				delay={0.7}
				duration={3}
				reverse
			/>
		</div>
	);
}
