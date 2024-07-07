"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypeWrite from "./TypeWrite";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { ClassValue } from "clsx";

type typeWriteProps =
	| {
			text: string;
			fontSize?: number;
			typeWriteType?: "default";
			delay: never;
			duration: never;
			className: ClassValue;
	  }
	| {
			text: string;
			fontSize?: number;
			typeWriteType?: "smoothWriter";
			delay?: number;
			duration?: number;
			className?: ClassValue;
	  };
const TypeWriteInView = ({
	text,
	typeWriteType = "default",
	duration,
	delay,
	className,
}: typeWriteProps) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0 }}
			animate={inView ? { opacity: 1 } : { opacity: 0 }}
			transition={{ duration: 0.3, ease: "linear" }}
		>
			{typeWriteType === "default" && inView && (
				<TypeWrite
					caretType="round"
					text={text}
					showCaret={true}
					loop={false}
					typingSpeed={20}
					showCaretOnComplete={false}
					timeToStartNewText={0}
				/>
			)}
			{typeWriteType === "smoothWriter" && inView && (
				<TextGenerateEffect
					delay={delay}
					duration={duration}
					showCaret={true}
					words={text}
					className={className}
				/>
			)}
		</motion.div>
	);
};

export default TypeWriteInView;
