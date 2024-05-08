"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useGetUserId } from "@/hooks/getUserId";
import toast from "react-hot-toast";
import {
	billingPeriodType,
	planType,
	finishingUpDataInterface,
	databasePlanName,
} from "@/interface/interface";
import { BillingPrice, requiredPlans } from "@/helpers/getBillingPlan";

const FinishingUp = () => {
	const router = useRouter();
	const searchParams = useSearchParams();
	const billingPeriod = searchParams?.get("period") as billingPeriodType;
	const plan = searchParams?.get("plan") as planType;
	const { userId } = useGetUserId();
	const { price, error, isLoading } = BillingPrice(billingPeriod, plan);

	const newGeneratedUserPlanName =
		`${plan.toLocaleLowerCase()}-${billingPeriod.toLowerCase()}` as databasePlanName; // plan name that matches database required plans

	if (error) {
		toast.error(error.message);
	}

	if (!requiredPlans.includes(newGeneratedUserPlanName)) {
		toast.dismiss();
		toast.error(`The selected plan does not exist`);
		router.push("/choose-your-pricing");
	}

	const finishingUpData: finishingUpDataInterface = {
		["starting plan"]: plan,
		["billing period"]: billingPeriod,
		price:
			price === "Free"
				? "$0.00"
				: price.slice(price.indexOf("$"), price.indexOf("/")) + ".00",
	};

	const handlePaddlePayment = () => {
		if (plan === "free") {
			router.push("/signin");
		} else {
			router.push(
				`/signup/checkout?plan=${plan}&userId=${userId}&period=${billingPeriod}`
			);
		}
	};

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

			{plan === "free" ? (
				<button
					disabled={isLoading}
					data-test="finishingUpButton"
					type="button"
					onClick={() => router.push("/signin")}
					className="w-full block text-center font-normal hover:bg-brand-green/70 transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green/80 button"
				>
					Done
				</button>
			) : (
				<button
					disabled={isLoading}
					data-test="finishingUpButtonWithPaddle"
					type="button"
					onClick={handlePaddlePayment}
					className="w-full block text-center font-normal hover:bg-brand-green/70 transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green/80 button"
				>
					Continue to checkout
				</button>
			)}
		</div>
	);
};

export default FinishingUp;
