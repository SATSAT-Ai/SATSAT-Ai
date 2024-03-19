"use client";

import { useRouter } from "next/navigation";
import LoadingSpinner from "./ui/LoadingSpinner";

const FinishingUp = () => {
	const finishingUpData = {
		["starting plan"]: "free",
		["billing period"]: "forever",
		price: "free",
	};

	const router = useRouter();
	//TODO: get plan details

	const handleMakePayment = () => {};

	return (
		<div className="max-w-xs w-full ">
			<ul className="mb-5 w-full">
				{Object.entries(finishingUpData).map(
					([key, value]: [string, string]) => {
						return (
							<li
								className="text-white flex text-text-normal sm:text-text-20 items-center justify-between gap-3"
								key={key}
							>
								<p className="capitalize text-text-normal sm:text-text-20">
									{key}
								</p>{" "}
								<p className="capitalize text-mid--yellow text-text-20 sm:text-text-20 font-medium">
									{value}
								</p>
							</li>
						);
					}
				)}
			</ul>

			<button
				data-test="finishingUpButton"
				type="button"
				onClick={() => router.push("/signin")}
				className="w-full block text-center font-normal hover:bg-brand-green/70 transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green/80 button"
			>
				Done
			</button>
		</div>
	);
};

export default FinishingUp;
