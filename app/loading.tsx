"use client";
import { MoonLoader } from "react-spinners";

const Loading = () => {
	return (
		<div className="min-h-screen w-full bg-darker text-white flex flex-col items-center justify-center">
			<h1 className="text-text-24">Loading...</h1>
			<MoonLoader color="#29a173" />
		</div>
	);
};

export default Loading;
