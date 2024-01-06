"use client";
import { useState, useEffect, Dispatch, SetStateAction, memo } from "react";

interface ITypeWrite {
	text: string | string[];
	color?: string;
	showCaret?: boolean;
	interval?: number;
	setTypeWriterComplete?: Dispatch<SetStateAction<boolean>>;
	loop?: boolean;
	timeToStartNewText?: number;
}

const TypeWrite = ({
	text,
	color,
	showCaret,
	interval = 60,
	setTypeWriterComplete,
	loop = false,
	timeToStartNewText = 2000,
}: ITypeWrite) => {
	const [typedText, setTypedText] = useState("");
	const [cursorVisible, setCursorVisible] = useState(true);
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		if (setTypeWriterComplete) {
			setTypeWriterComplete(typedText === text);
		}
	}, [currentWordIndex, setTypeWriterComplete, text, typedText]);

	useEffect(() => {
		const sentence = Array.isArray(text) ? text : [text];

		const simulateTypewriterEffect = (textToType: string) => {
			const intervalId = setInterval(() => {
				setTypedText((prevTypedText) => {
					const nextChar = textToType && textToType[prevTypedText.length];
					if (nextChar) {
						return prevTypedText + nextChar;
					} else {
						setCurrentWordIndex(currentWordIndex + 1);
						clearInterval(intervalId);
					}

					return prevTypedText;
				});
			}, interval);
		};

		let timeOutId: string | number | NodeJS.Timeout | undefined;

		if (currentWordIndex < sentence.length) {
			timeOutId = setTimeout(() => {
				setTypedText("");
				setCursorVisible(true);
				simulateTypewriterEffect(sentence[currentWordIndex]);
			}, timeToStartNewText); //when to start the new text
		} else {
			if (loop) {
				timeOutId = setTimeout(() => {
					setCursorVisible(true);
					setCurrentWordIndex(0);
				}, interval); //when to loop the new text
			}
		}

		return () => {
			clearTimeout(timeOutId);
		};
	}, [currentWordIndex, interval, loop, text, timeToStartNewText]);

	return (
		<div
			className={`flex items-center flex-wrap ${
				color ? `text-[${color}]` : "text-mid--yellow"
			} text-text-normal md:text-text-20`}
		>
			<span>{typedText}</span>
			{cursorVisible && showCaret && (
				<span
					className={`${
						cursorVisible
							? `animate-pulse ${
									color ? `text-[${color}]` : "text-mid--yellow"
							  }`
							: ""
					}`}
				>
					|
				</span>
			)}
		</div>
	);
};

export default memo(TypeWrite);
