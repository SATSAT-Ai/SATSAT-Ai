"use client";

import { useEffect, useState } from "react";
import {
	initializePaddle,
	Paddle,
	InitializePaddleOptions,
} from "@paddle/paddle-js";

const usePaddle = () => {
	const [paddle, setPaddle] = useState<Paddle>();

	// Download and initialize Paddle instance from CDN
	useEffect(() => {
		if (!process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT) {
			throw Error("paddle environment is undefined");
		}

		initializePaddle({
			environment: process.env.NEXT_PUBLIC_PADDLE_ENVIRONMENT
				? "sandbox"
				: "production",
			token: process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN,
		} as unknown as InitializePaddleOptions).then(
			(paddleInstance: Paddle | undefined) => {
				if (paddleInstance) {
					setPaddle(paddleInstance);
				}
			}
		);
	}, []);

	return paddle;
};

export default usePaddle;
