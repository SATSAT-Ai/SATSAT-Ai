"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import LoadingSpinner from "./ui/LoadingSpinner";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useGetUserId } from "@/hooks/getUserId";

export interface defaultValues {
	otpCode: string;
}

const VerifyOTP = ({
	telNumber,
	setCurrentStep,
}: {
	telNumber: string;
	setCurrentStep: Dispatch<SetStateAction<number>>;
}) => {
	const [loading, setLoading] = useState(false);

	const {
		handleSubmit,
		formState: { errors, isValid },
		register,
		setError,
	} = useForm<defaultValues>();
	const [countDown, setCountDown] = useState(0);
	const { userId } = useGetUserId();

	//resend verification code
	const resendOTPMutation = useMutation({
		mutationFn: () => {
			const response = axios.get(
				`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/user/phone/request-code/${userId}`
			);
			return response;
		},
		onSuccess() {
			setCountDown(30);
		},
	});

	const handleResendOTP = async () => {
		try {
			resendOTPMutation.mutate();
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const onSubmit = async (data: defaultValues) => {
		setLoading(true);
		try {
			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/user/phone/verify`,
				{
					phone: telNumber,
					code: data.otpCode,
				}
			);

			if (response.status === 200) {
				toast.dismiss();
				toast.success("Phone has been verified");

				setCurrentStep((prev) => prev + 1);
			}
		} catch (error) {
			setLoading(false);
			toast.dismiss();
			toast.error("Incorrect OTP");
			setError("otpCode", { message: "Incorrect OTP" });
			console.log(error);
		}
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setCountDown(countDown === 0 ? 0 : countDown - 1);
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [countDown]);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="w-full mb-5 flex flex-col">
				<input
					data-test="otpVerificationInput"
					disabled={loading}
					placeholder="OTP Code"
					className={`placeholder:text-grey-lightest/60 outline-none text-white border ${
						errors.otpCode
							? "border-crimson focus:border-crimson"
							: isValid
							? "border-brand-green"
							: "border-white"
					} bg-transparent p-2 rounded-md`}
					type="text"
					{...register("otpCode", {
						required: {
							value: true,
							message: "An OTP code is required",
						},
					})}
				/>
				{errors.otpCode && (
					<p
						data-test="optErrorMessage"
						className="text-crimson pt-1 text-text-12"
					>
						{errors.otpCode.message}
					</p>
				)}
			</div>
			{loading ? (
				<button
					disabled={loading}
					type="button"
					className="w-full block transition-colors duration-200 bg-brand-green button"
				>
					<LoadingSpinner className="mx-auto animate-[spin_0.4s_linear_infinite] border-transparent border-t-brand-green-darker h-6 w-6" />
				</button>
			) : (
				<button
					data-test="verifyOtp"
					disabled={loading}
					type="submit"
					className="w-full block text-center font-normal bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white hover:bg-brand-green button"
				>
					Continue
				</button>
			)}
			<span className="text-white flex items-center gap-3 mt-5 text-text-14 font-light text-right w-full">
				{"Didn't received OTP? "}

				{countDown === 0 ? (
					<button
						data-test="resendOtp"
						disabled={loading}
						onClick={handleResendOTP}
						type="button"
						className=" font-medium text-normal text-brand-green"
					>
						Resend
					</button>
				) : (
					<p className="flex items-center text-text-14 gap-3">
						Try again after
						<span className="text-brand-green font-medium">{countDown}s</span>
					</p>
				)}
			</span>
		</form>
	);
};

export default VerifyOTP;
