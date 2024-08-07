"use client";

import { useQuery } from "@tanstack/react-query";
import FinishingUp from "./FinishingUp";
import MobileStepTree from "./MobileStepTree";
import VerifyEmailStep, { type IVerifyEmail } from "./VerifyEmailStep";
import VerifyPhoneStep, { type IVerifyPhone } from "./VerifyPhoneStep";
import StepTree from "./ui/StepTree";
import { useSearchParams, useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { useGetUserId } from "@/hooks/getUserId";
import axios from "axios";
import LoadingSpinner from "./ui/LoadingSpinner";
import toast from "react-hot-toast";

type viewType = {
	1: ({ setCurrentStep, email }: IVerifyEmail) => JSX.Element;
	2: ({ setCurrentStep, phone }: IVerifyPhone) => JSX.Element;
	3: () => JSX.Element;
};

const VerificationStages = () => {
	const searchParams = useSearchParams();
	const [currentStep, setCurrentStep] = useState(1);
	const plan = searchParams?.get("plan");
	const { userId } = useGetUserId();
	const router = useRouter();
	const billingPeriod = searchParams?.get("period");

	const views: viewType = {
		1: VerifyEmailStep,
		2: VerifyPhoneStep,
		3: FinishingUp,
	};

	const CurrentView = views[currentStep as keyof viewType];

	const { data, isLoading, error } = useQuery({
		queryKey: [userId],
		queryFn: async () => {
			const response = axios.get(
				`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/api/users/${userId}`
			);
			return response;
		},
		refetchOnWindowFocus: false,
	});

	useLayoutEffect(() => {
		const axiosError = error as unknown as {
			response: { data: { message: any } };
		};
		if (!billingPeriod || !plan) {
			router.push(`/choose-your-pricing`);
			toast.error("An error occurred");
		}

		if (!userId) {
			toast.dismiss();
			toast.error("no userId found or invalid userId");
			router.push("/");
		}
		if (!data?.data?.user && error) {
			toast.dismiss();
			console.log(axiosError);
			toast.error(axiosError?.response.data.message ?? "Something went wrong");
		}

		if (data?.data?.user) {
			const hasEmailVerification = data?.data?.user?.email_verified_at;
			const hasPhoneVerification = data?.data?.user?.phone_verified_at;
			const isFullyVerified = hasEmailVerification && hasPhoneVerification;

			setCurrentStep(isFullyVerified ? 3 : hasEmailVerification ? 2 : 1);
		}
	}, [billingPeriod, data?.data?.user, error, plan, router, userId]);

	return (
		<>
			<button
				aria-label="go back"
				type="button"
				onClick={() =>
					router.push(`/signup?plan=${plan}&period=${billingPeriod}`)
				}
				className="hidden lg:flex text-white absolute top-36 left-32 w-ful font-medium gap-3 items-center"
			>
				<IoChevronBackOutline color="white" className="z-0" size={20} />
				Back
			</button>
			<div className="flex flex-col-reverse md:flex-row my-max mx-auto justify-between items-center gap-5 max-w-2xl w-full">
				{isLoading ? (
					<LoadingSpinner className=" mx-auto animate-[spin_0.5s_linear_infinite] border-transparent border-t-brand-green h-10 w-10" />
				) : (
					<CurrentView
						phone={data?.data?.user?.phone}
						email={data?.data?.user?.email}
						setCurrentStep={setCurrentStep}
					/>
				)}
				<StepTree currentStep={currentStep} className="hidden md:flex" />
				<MobileStepTree
					currentStep={currentStep}
					className={"md:hidden w-full"}
				/>
			</div>
		</>
	);
};

export default VerificationStages;
