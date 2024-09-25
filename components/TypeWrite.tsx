"use client";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import React, {
	useReducer,
	useEffect,
	useCallback,
	CSSProperties,
	useMemo,
} from "react";

interface ITypeWrite {
	text: string | string[];
	maxWidth?: number;
	color?: string;
	showCaret?: boolean;
	typingSpeed?: number;
	onComplete?: (isComplete: boolean) => void;
	loop?: boolean;
	timeToStartNewText?: number | null;
	showCaretOnComplete?: boolean;
	caretColor?: string;
	fontWeight?: "normal" | "medium";
	textAlign?: "center" | "left";
	caretType?: "default" | "round";
	className?: ClassValue;
	onWordIndexChange?: (index: number) => void;
}

type State = {
	typedText: string;
	cursorVisible: boolean;
	currentWordIndex: number;
	isComplete: boolean;
};

type Action =
	| { type: "SET_TYPED_TEXT"; payload: string }
	| { type: "SET_CURSOR_VISIBLE"; payload: boolean }
	| { type: "SET_CURRENT_WORD_INDEX"; payload: number }
	| { type: "SET_COMPLETE"; payload: boolean }
	| { type: "RESET" };

const initialState: State = {
	typedText: "",
	cursorVisible: true,
	currentWordIndex: 0,
	isComplete: false,
};

function reducer(state: State, action: Action): State {
	switch (action.type) {
		case "SET_TYPED_TEXT":
			return { ...state, typedText: action.payload };
		case "SET_CURSOR_VISIBLE":
			return { ...state, cursorVisible: action.payload };
		case "SET_CURRENT_WORD_INDEX":
			return { ...state, currentWordIndex: action.payload };
		case "SET_COMPLETE":
			return { ...state, isComplete: action.payload };
		case "RESET":
			return initialState;
		default:
			return state;
	}
}

const TypeWrite: React.FC<ITypeWrite> = ({
	text,
	color,
	showCaret = true,
	typingSpeed = 60,
	onComplete,
	loop = false,
	timeToStartNewText = 2000,
	showCaretOnComplete = false,
	maxWidth,
	caretColor,
	fontWeight,
	textAlign = "center",
	caretType = "default",
	className,
	onWordIndexChange,
}) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const sentences = useMemo(
		() => (Array.isArray(text) ? text : [text]),
		[text]
	);

	const simulateTypewriterEffect = useCallback(
		(textToType: string) => {
			let index = 0;
			const intervalId = setInterval(() => {
				if (index < textToType?.length) {
					dispatch({
						type: "SET_TYPED_TEXT",
						payload: textToType.slice(0, index + 1),
					});
					index++;
				} else {
					clearInterval(intervalId);
					const nextWordIndex = state.currentWordIndex;
					if (nextWordIndex < sentences.length) {
						dispatch({
							type: "SET_CURRENT_WORD_INDEX",
							payload: nextWordIndex + 1,
						});
						onWordIndexChange?.(nextWordIndex);
					}
					if (nextWordIndex >= sentences.length) {
						dispatch({ type: "SET_COMPLETE", payload: true });
						onComplete?.(true);
					}
				}
			}, typingSpeed);

			return intervalId;
		},
		[
			typingSpeed,
			onWordIndexChange,
			onComplete,
			sentences?.length,
			state.currentWordIndex,
		]
	);

	useEffect(() => {
		let timeoutId: NodeJS.Timeout;
		let intervalId: NodeJS.Timeout;

		const startTyping = () => {
			dispatch({ type: "SET_TYPED_TEXT", payload: "" });
			dispatch({ type: "SET_CURSOR_VISIBLE", payload: true });
			intervalId = simulateTypewriterEffect(sentences[state.currentWordIndex]);
		};

		if (timeToStartNewText === null) {
			startTyping();
		} else if (state.currentWordIndex < sentences?.length) {
			timeoutId = setTimeout(startTyping, timeToStartNewText);
		} else {
			dispatch({ type: "SET_CURSOR_VISIBLE", payload: showCaretOnComplete });
			if (loop) {
				timeoutId = setTimeout(() => {
					dispatch({ type: "RESET" });
				}, typingSpeed);
			}
		}

		return () => {
			clearTimeout(timeoutId);
			clearInterval(intervalId);
		};
	}, [
		state.currentWordIndex,
		sentences,
		timeToStartNewText,
		loop,
		showCaretOnComplete,
		simulateTypewriterEffect,
		typingSpeed,
	]);

	return (
		<p
			style={
				{
					"--color": color,
					"--textAlign": textAlign,
					overflowWrap: "anywhere",
					maxWidth: maxWidth ? `${maxWidth}px` : "100%",
				} as CSSProperties
			}
			className={cn(
				"text-text-normal md:text-[18px] font-normal text-[var(--textAlign)] my-2",
				{ "font-normal": fontWeight === "normal" },
				{ "font-medium": fontWeight === "medium" },
				{ "text-[var(--color)]": color },
				{ "text-mid--yellow": !color },
				className
			)}
		>
			{state.typedText}
			{state.cursorVisible && showCaret && (
				<span
					className={cn(
						"animate-pulse",
						caretColor
							? `text-[${caretColor}]`
							: "text-mid--yellow inline-block relative top-[1px]"
					)}
				>
					{caretType === "default" ? (
						"|"
					) : (
						<div
							className={cn(
								"h-3 w-3 rounded-full",
								color ? `bg-[${color}]` : "bg-mid--yellow"
							)}
						/>
					)}
				</span>
			)}
		</p>
	);
};

export default React.memo(TypeWrite);
