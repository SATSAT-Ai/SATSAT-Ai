"use client";

import { useState, useEffect } from "react";

const TypeWrite = ({ text }: { text: string }) => {
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

		return () => {
			clearInterval(typingInterval);
		};
	}, [text, typedText]);

	return (
		<div className="flex items-center justify-center flex-wrap text-mid--yellow text-text-normal md:text-text-normal">
			<span>{typedText}</span>
			{cursorVisible && (
				<span className={cursorVisible ? "animate-pulse text-mid--yellow" : ""}>
					|
				</span>
			)}
		</div>
	);
};

export default TypeWrite;
