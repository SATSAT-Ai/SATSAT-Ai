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
					className={`focus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green focus:ring-opacity-50 placeholder:text-grey-lightest/60 outline-none text-white border ${
						errors.otpCode
							? "border-crimson focus:ring-offset-crimson focus:ring-crimson"
							: isValid
							? "border-brand-green focus:ring-offset-brand-green focus:ring-brand-green"
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
						className="text-crimson pt-2 text-text-12"
					>
						{errors.otpCode.message}
					</p>
				)}
			</div>

			<button
				data-test="verifyOtp"
				disabled={loading}
				type="submit"
				className={`${
					loading
						? "disabled:cursor-not-allowed"
						: "bg-brand-green  active:scale-[1.01]"
				}focus:outline-none focus:ring focus:border-none focus:ring-offset-2 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 w-full block text-center font-normal transition-colors duration-200 text-white  button`}
			>
				{loading ? (
					<LoadingSpinner className="mx-auto animate-[spin_0.4s_linear_infinite] border-transparent border-t-brand-green-darker h-6 w-6" />
				) : (
					"Continue"
				)}
			</button>

			<span className="text-white flex items-center gap-3 mt-5 text-text-14 font-light text-right w-full">
				{"Didn't received OTP? "}

				{countDown === 0 ? (
					<button
						data-test="resendOtp"
						disabled={loading}
						onClick={handleResendOTP}
						type="button"
						className="focus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 focus:rounded-sm font-medium text-normal text-brand-green"
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
