import usePricing from "@/hooks/usePricing";
import {
	billingPeriodType,
	databasePlanInterface,
	planType,
	databasePlanName,
} from "@/interface/interface";
import { pricingData } from "@/utils/pricingData";

export const requiredPlans: databasePlanName[] = [
	"pro-monthly",
	"pro-annual",
	"plus-monthly",
	"plus-annual",
	"free-annual",
	"free-monthly",
];

export const BillingPrice = (
	billingPeriod: billingPeriodType,
	plan: planType
): {
	price: string;
	error: Error | null;
	isLoading: boolean;
	priceId: string;
} => {
	const { data, error, isLoading } = usePricing();

	const targetPlanName =
		`${plan.toLocaleLowerCase()}-${billingPeriod.toLowerCase()}` as databasePlanName;

	const getPriceId: databasePlanInterface = data?.data?.data?.find(
		(checkoutPlan: databasePlanInterface) => {
			if (requiredPlans.includes(targetPlanName)) {
				return checkoutPlan.name === targetPlanName;
			}
		}
	);

	if (billingPeriod && plan) {
		const foundCategory = pricingData.find((planCategory) => {
			return planCategory.category.toLowerCase() === plan.toLowerCase();
		});
		//generate planName and filter out plan from database
		if (foundCategory) {
			const checkoutPlan: databasePlanInterface = data?.data?.data?.find(
				(checkoutPlan: databasePlanInterface) => {
					return checkoutPlan.name === targetPlanName;
				}
			);
			if (checkoutPlan) {
				console.log(billingPeriod);
				const price =
					billingPeriod === "monthly"
						? foundCategory?.price!
						: foundCategory?.annualPrice!;
				return {
					price,
					error,
					isLoading,
					priceId: getPriceId?.id,
				};
			}
		}
	}
	return { price: "Free", error, isLoading, priceId: getPriceId?.id };
};
