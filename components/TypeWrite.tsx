"use client";
import { useState, useEffect, Dispatch, SetStateAction, memo } from "react";

interface ITypeWrite {
	text: string | string[];
	maxWidth?: number;
	color?: string;
	showCaret?: boolean;
	typingSpeed?: number;
	setIsTypeWriterComplete?: Dispatch<SetStateAction<boolean>>;
	loop?: boolean;
	timeToStartNewText?: number;
	fontSize?: number;
	showCaretOnComplete?: boolean;
	caretColor?: string;
	fontWeight?: "normal" | "medium";
	textAlign?: "center" | "left";
}

const TypeWrite = ({
	text,
	color,
	showCaret,
	typingSpeed = 60,
	setIsTypeWriterComplete,
	loop = false,
	timeToStartNewText = 2000,
	fontSize = 20,
	showCaretOnComplete = false,
	maxWidth,
	caretColor,
	fontWeight,
	textAlign = "center",
}: ITypeWrite): JSX.Element => {
	const [typedText, setTypedText] = useState("");
	const [cursorVisible, setCursorVisible] = useState(true);
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		if (setIsTypeWriterComplete) {
			setIsTypeWriterComplete(typedText === text);
		}
	}, [currentWordIndex, setIsTypeWriterComplete, text, typedText]);

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
			}, typingSpeed);
		};

		let timeOutId: string | number | NodeJS.Timeout | undefined;

		if (currentWordIndex < sentence.length) {
			timeOutId = setTimeout(() => {
				setTypedText("");
				setCursorVisible(true);
				simulateTypewriterEffect(sentence[currentWordIndex]);
			}, timeToStartNewText); //when to start the new text
		} else {
			setCursorVisible(showCaretOnComplete ?? false);

			if (loop) {
				timeOutId = setTimeout(() => {
					setCursorVisible(true);
					setCurrentWordIndex(0);
				}, typingSpeed); //speed of typing the text
			}
		}

		return () => {
			clearTimeout(timeOutId);
		};
	}, [
		currentWordIndex,
		typingSpeed,
		loop,
		text,
		timeToStartNewText,
		showCaretOnComplete,
	]);

	return (
		<p
			className={`${
				color ? `text-[${color}]` : "text-mid--yellow"
			} text-text-normal  ${
				fontWeight == "normal"
					? "font-normal"
					: fontWeight === "medium"
					? "font-medium"
					: "font-normal"
			}  md:text-[${fontSize}] text-[${textAlign}] my-2`}
			style={{
				overflowWrap: "anywhere",
				maxWidth: `${maxWidth ? `${maxWidth}px` : "100%"}`,
			}}
		>
			<>{typedText}</>
			{cursorVisible && showCaret && (
				<span
					className={`${
						cursorVisible
							? `animate-pulse ${
									caretColor ? `text-[${caretColor}]` : "text-mid--yellow"
							  }`
							: ""
					}`}
				>
					|
				</span>
			)}
		</p>
	);
};

export default memo(TypeWrite);
