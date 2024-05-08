"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { HTMLAttributes } from "react";

export type billing_period = "annual" | "monthly";

export type SubScribeButton = HTMLAttributes<HTMLButtonElement> & {
	name: string;
	buttonType: string;
	billing_period: billing_period;
};

const SubscribeButton = ({
	name,
	buttonType,
	billing_period,
	...restProps
}: SubScribeButton) => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const params = new URLSearchParams(searchParams!);

	const handlePlan = () => {
		params.set("plan", buttonType);
		params.set("period", billing_period);
		if (buttonType === "enterprise") {
			router.replace(`/contact?${params}`);
		} else {
			router.replace(`/signup?${params}`);
		}
	};

	return (
		<button
			{...restProps}
			onClick={handlePlan}
			type="button"
			className="w-full shadow-md button block text-center font-normal hover:bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green button"
		>
			{name}
		</button>
	);
};

export default SubscribeButton;
