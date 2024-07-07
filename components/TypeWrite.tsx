"use client";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import {
	useState,
	useEffect,
	Dispatch,
	SetStateAction,
	memo,
	CSSProperties,
} from "react";

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
	caretType?: "default" | "round";
	className?: ClassValue;
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
	caretType = "default",
	className,
}: ITypeWrite): JSX.Element => {
	const [typedText, setTypedText] = useState("");
	const [cursorVisible, setCursorVisible] = useState(true);
	const [currentWordIndex, setCurrentWordIndex] = useState(0);

	useEffect(() => {
		if (setIsTypeWriterComplete) {
			setIsTypeWriterComplete(typedText === text);
		}
	}, [setIsTypeWriterComplete, text, typedText]);

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
			className={cn(
				"md:[font-size:var(--fontSize)] text-text-normal font-normal text-[var(--textAlign)] my-2",
				{ "font-normal": fontWeight == "normal" },
				{ "font-medium": fontWeight == "medium" },
				{ "text-[var(--color)]": color },
				{ "text-mid--yellow": !color },
				className
			)}
			style={
				{
					"--color": color,
					"--fontSize": fontSize,
					"--textAlign": textAlign,
					overflowWrap: "anywhere",
					maxWidth: `${maxWidth ? `${maxWidth}px` : "100%"}`,
				} as CSSProperties
			}
		>
			<>{typedText}</>
			{cursorVisible && showCaret && (
				<span
					className={`${
						cursorVisible
							? `animate-pulse ${
									caretColor
										? `text-[${caretColor}]`
										: "text-mid--yellow inline-block relative top-[1px]"
							  }`
							: ""
					}`}
				>
					{caretType === "default" ? (
						"|"
					) : (
						<div
							className={`h-3 w-3 rounded-full ${
								color ? `bg-[${color}]` : "bg-mid--yellow"
							}`}
						/>
					)}
				</span>
			)}
		</p>
	);
};

export default memo(TypeWrite);
