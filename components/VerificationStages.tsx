"use client";

import { useQuery } from "@tanstack/react-query";
import FinishingUp from "./FinishingUp";
import MobileStepTree from "./MobileStepTree";
import VerifyEmailStep, { IVerifyEmail } from "./VerifyEmailStep";
import VerifyPhoneStep, { IverifyPhone } from "./VerifyPhoneStep";
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
	2: ({ setCurrentStep, phone }: IverifyPhone) => JSX.Element;
	3: ({ setCurrentStep }: IVerifyEmail) => JSX.Element;
};

const VerificationStages = () => {
	const searchParams = useSearchParams();
	const [currentStep, setCurrentStep] = useState(1);
	const plan = searchParams?.get("plan");
	const { userId } = useGetUserId();
	const router = useRouter();

	const views: viewType = {
		1: VerifyEmailStep,
		2: VerifyPhoneStep,
		3: FinishingUp,
	};

	const CurrentView = views[currentStep as keyof viewType];

	const { data, isLoading, error } = useQuery({
		queryKey: [userId],
		queryFn: () => {
			const response = axios.get(
				`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/users/${userId}`
			);
			return response;
		},
		refetchOnWindowFocus: false,
	});

	// if userId is wrong redirect to / else redirect to unverified step
	useLayoutEffect(() => {
		const axiosError = error as unknown as {
			response: { data: { error: any } };
			message: string;
		};
		if (!userId) {
			toast.dismiss();
			toast.error(axiosError?.response?.data?.error ?? "no userId found");
			router.push("/");
		}
		if (!data?.data.user && error) {
			toast.dismiss();
			console.log(axiosError);
			toast.error(axiosError?.message ?? "Something went wrong");
		}

		if (data?.data?.user) {
			const hasEmailVerification = data?.data?.user?.email_verified_at;
			const hasPhoneVerification = data?.data?.user?.phone_verified_at;
			const isFullyVerified = hasEmailVerification && hasPhoneVerification;

			setCurrentStep(isFullyVerified ? 3 : hasEmailVerification ? 2 : 1);
		}
	}, [data?.data.user, error, router, userId]);

	return (
		<>
			<button
				aria-label="go back"
				type="button"
				onClick={() => router.push(`/signup?plan=${plan}`)}
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
