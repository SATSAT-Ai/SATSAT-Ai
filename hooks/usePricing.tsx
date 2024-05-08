"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const usePricing = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ["listSubscription"],
		queryFn: async () => {
			const response = axios.get(
				`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/api/billing/subscriptions`
			);
			return response;
		},
	});

	return { data, error, isLoading };
};

export default usePricing;
