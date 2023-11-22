"use client";

import { useState, useEffect } from "react";

const TypeWriter = ({ text }: { text: string }) => {
	const [typedText, setTypedText] = useState("");
	const [cursorVisible, setCursorVisible] = useState(true);

	useEffect(() => {
		const typingInterval = setInterval(() => {
			if (typedText !== text) {
				setTypedText(typedText + text[typedText.length]);
			} else {
				clearInterval(typingInterval);
				setCursorVisible(false);
			}
		}, 50);

		return () => clearInterval(typingInterval);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [typedText]);
	return (
		<div className="flex items-center justify-center flex-wrap">
			<span>{typedText}</span>
			<span
				className={
					cursorVisible
						? "animate-pulse min-w-[12px] inline-block w-3 h-3 rounded-full bg-mid--yellow"
						: ""
				}
			></span>
		</div>
	);
};

export default TypeWriter;
