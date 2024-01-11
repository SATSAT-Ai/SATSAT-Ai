"use client";
import { MoonLoader } from "react-spinners";

const Loading = () => {
	return (
		<div className="min-h-svh w-full bg-darker text-white flex gap-5 flex-col items-center justify-center">
			<MoonLoader color="#29a173" />
			<h1 className="text-text-24">Loading...</h1>
		</div>
	);
};

export default Loading;
