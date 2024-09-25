"use client";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
import { useRouter, useSearchParams } from "next/navigation";
import { HTMLAttributes } from "react";

export type billing_period = "annual" | "monthly";

export type SubScribeButton = HTMLAttributes<HTMLButtonElement> & {
	name: string;
	buttonType: string;
	billing_period: billing_period;
	className?: ClassValue;
};

const SubscribeButton = ({
	name,
	buttonType,
	billing_period,
	className,
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
			className={cn(
				"w-full shadow-md  block text-center rounded-xl hover:bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white active:bg-brand-green bg-brand-green hover:bg-brand-green/70 px-4 py-3",
				className
			)}
		>
			{name}
		</button>
	);
};

export default SubscribeButton;
