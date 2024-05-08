"use client";

import usePaddle from "@/hooks/usePaddle";
import { useEffect } from "react";
import { BillingPrice, requiredPlans } from "@/helpers/getBillingPlan";
import {
	billingPeriodType,
	planType,
	finishingUpDataInterface,
	databasePlanName,
} from "@/interface/interface";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
const PaddleCheckout = () => {
	const paddle = usePaddle();
	const router = useRouter();
	const searchParams = useSearchParams();
	const billingPeriod = searchParams?.get("period") as billingPeriodType;
	const plan = searchParams?.get("plan") as planType;
	const { price, error, isLoading, priceId } = BillingPrice(
		billingPeriod,
		plan
	);
	if (error) {
		toast.error(error.message);
	}

	const newGeneratedUserPlanName = // new plan name that matches database required plans
		`${plan.toLocaleLowerCase()}-${billingPeriod.toLowerCase()}` as databasePlanName;

	if (!requiredPlans.includes(newGeneratedUserPlanName)) {
		//redirect if plan does not exist
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

	useEffect(() => {
		if (plan !== "free") {
			paddle?.Checkout.open({
				customer: {
					email: "",
					address: {
						city: "",
						// countryCode: "",
						region: "",
						postalCode: "",
					},
				},

				settings: {
					allowLogout: false,
					displayMode: "inline",
					frameTarget: "checkout-container",
					frameInitialHeight: 450,
					frameStyle:
						"min-width:450px; background-color: white; border: none; border-radius:7px; padding-inline:20px",
					theme: "light",
					locale: "en",
					successUrl: process.env.NEXT_PUBLIC_PADDLE_SUCCESS_URL,
				},

				items: [
					{
						priceId,
						quantity: 1,
					},
				],
			});
		}
	}, [paddle?.Checkout, plan, priceId]);

	return (
		<>
			<div className="text-white w-full h-screen flex-1 rounded-lg">
				<h1 className="max-w-sm capitalize mx-auto lg:ml-0 text-text-40 font-semibold">
					{plan}
				</h1>
				<ul className="mb-5 max-w-sm flex flex-col mx-auto lg:ml-0">
					{Object.entries(finishingUpData).map(
						([key, value]: [string, string]) => {
							return (
								<li
									className="text-white py-2 flex text-text-normal sm:text-text-20 items-center justify-between gap-3"
									key={key}
								>
									<p className="capitalize text-text-normal sm:text-text-20">
										{key}
									</p>{" "}
									<p className="capitalize text-white text-text-normal sm:text-text-20 font-normal">
										{value}
									</p>
								</li>
							);
						}
					)}
					{plan === "free" && (
						<button
							disabled={isLoading}
							data-test="finishingUpButton"
							type="button"
							onClick={() => router.push("/signin")}
							className="w-full shadow-md block text-center font-normal hover:bg-brand-green/70 transition-colors duration-200 active:scale-[1.01] text-white bg-mid--yellow/80 button"
						>
							Done
						</button>
					)}
				</ul>
				{priceId}
			</div>
			{plan !== "free" && <div className="checkout-container"></div>}
		</>
	);
};

export default PaddleCheckout;
