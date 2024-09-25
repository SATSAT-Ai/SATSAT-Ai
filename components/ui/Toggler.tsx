import { Dispatch, SetStateAction } from "react";
import { Switch } from "@headlessui/react";
import ShimmerButton from "./ShimmerButton";
import { cn } from "@/lib/utils";

export default function Toggler({
	enabled,
	setEnabled,
}: {
	enabled: boolean;
	setEnabled: Dispatch<SetStateAction<boolean>>;
}) {
	return (
		<div className="pt-2 mx-auto w-fit flex items-center text-white gap-2 sm:gap-5">
			<button
				type="button"
				onClick={() => setEnabled(false)}
				className="text-text-20 sm:text-text-24 md:text-[30px] relative font-medium capitalize text-brand-green"
			>
				Monthly
			</button>
			<Switch
				data-test={"toggle-switch"}
				checked={enabled}
				onChange={setEnabled}
				className={cn(
					"  relative inline-flex h-[33px] w-[61px] shrink-0 cursor-pointer rounded-full border-2 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75",
					{
						"bg-brand-green/45  border-brand-green": enabled,
					},
					{
						" border-white/20 bg-grey-light": !enabled,
					}
				)}
			>
				<span className="sr-only">Use setting</span>
				<span
					aria-hidden="true"
					className={cn(
						"pointer-events-none relative top-1/2 -translate-y-1/2 inline-block h-[22px] w-[22px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
						{ "translate-x-8": enabled },
						{ "translate-x-[3px]": !enabled }
					)}
				/>
			</Switch>
			<div
				onClick={() => setEnabled(true)}
				className="flex items-center gap-2 sm:gap-5 text-text-20 sm:text-text-24 md:text-[30px]  relative font-medium capitalize text-brand-green"
			>
				<button type="button">yearly</button>
				<ShimmerButton
					className="pointer-events-none"
					shimmerColor="transparent"
					text="50% off"
				/>
			</div>
		</div>
	);
}
