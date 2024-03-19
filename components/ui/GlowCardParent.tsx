"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

type cardProp = {
	className?: string;
	children: React.ReactNode;
};

const GlowCardParent = ({ children, className, ...restProps }: cardProp) => {
	const parentCardRef = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		const parentCard = parentCardRef?.current;
		const cards = parentCard?.querySelectorAll<HTMLDivElement>(".card-child");
		const handleMouseMove = (e: MouseEvent) => {
			cards?.forEach((card) => {
				const { left, top } = card.getBoundingClientRect();
				card.style.setProperty("--mouse-x", `${e.clientX - left}px`);
				card.style.setProperty("--mouse-y", `${e.clientY - top}px`);
			});
		};

		parentCard?.addEventListener("mousemove", handleMouseMove);

		return () => {
			parentCard?.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div
			{...restProps}
			className={cn("group w-full", className)}
			ref={parentCardRef}
		>
			{children}
		</div>
	);
};

export default GlowCardParent;
