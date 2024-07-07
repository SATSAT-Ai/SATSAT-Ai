"use client";

import { useState, useEffect } from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";
import { ClassValue } from "clsx";

interface smoothEffectProps {
	text: string | string[];
	delay?: number;
	duration?: number;
	className?: ClassValue;
	timeoutDuration?: number;
	showCaret?: boolean;
}

const SmoothTextEffect = ({
	text,
	showCaret,
	delay,
	duration,
	timeoutDuration = 6000,
	className,
}: smoothEffectProps): JSX.Element => {
	const [currentWordIndex, setCurrentWordIndex] = useState(0);
	const [words, setWords] = useState("");

	useEffect(() => {
		const sentence = Array.isArray(text) ? text : [text];
		const timeout = setTimeout(() => {
			setCurrentWordIndex((prevWordIndex) => {
				return prevWordIndex === sentence.length - 1 ? 0 : currentWordIndex + 1;
			});
			setWords(sentence[currentWordIndex]);
		}, timeoutDuration);

		return () => {
			clearTimeout(timeout);
		};
	}, [currentWordIndex, duration, text, timeoutDuration]);

	return (
		<TextGenerateEffect
			showCaret={showCaret}
			duration={duration}
			delay={delay}
			words={words}
			className={className}
		/>
	);
};

export default SmoothTextEffect;
