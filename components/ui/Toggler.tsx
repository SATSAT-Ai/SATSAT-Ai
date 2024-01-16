"use client";

import { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import discountImage from "@/public/50-percent-off-1-svgrepo-com.svg";
import Image from "next/image";

export default function Toggler({
	enabled,
	setEnabled,
}: {
	enabled: boolean;
	setEnabled: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<div className="pt-7 mx-auto w-fit flex items-center text-white gap-5">
			<button
				type="button"
				onClick={() => setEnabled(false)}
				className="text-text-24 font-medium capitalize text-brand-green"
			>
				Monthly
			</button>
			<Switch
				checked={enabled}
				onChange={setEnabled}
				className={`${
					enabled ? "bg-teal-900 bg-brand-green" : "bg-grey-light bg-teal-700"
				}
          relative inline-flex  h-[33px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
			>
				<span className="sr-only">Use setting</span>
				<span
					aria-hidden="true"
					className={`${enabled ? "translate-x-8" : "translate-x-[3px]"}
            pointer-events-none relative top-1/2 -translate-y-1/2 inline-block h-[20px] w-[20px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
				/>
			</Switch>
			<button
				type="button"
				onClick={() => setEnabled(true)}
				className="flex items-center gap-5 text-text-24 relative font-medium capitalize text-brand-green"
			>
				yearly
				<p className="text-mid--yellow font-medium text-text-20 border border-mid--yellow rounded-lg py-1 px-2">
					50% off
				</p>
			</button>
		</div>
	);
}
