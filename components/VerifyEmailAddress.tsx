"use client";

import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "./ui/LoadingSpinner";
import axios from "axios";
import toast from "react-hot-toast";
import { useGetUserId } from "@/hooks/getUserId";
import { useMutation } from "@tanstack/react-query";
interface defaultValues {
	verification_code: string;
}

const VerifyEmailAddress = ({
	email,
	setCurrentStep,
	setShowAlertModal,
}: {
	email: string;
	setCurrentStep: Dispatch<SetStateAction<number>>;
	setShowAlertModal: Dispatch<SetStateAction<boolean>>;
}) => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors, isValid },
	} = useForm<defaultValues>();

	const [loading, setLoading] = useState(false);
	const [countDown, setCountDown] = useState(0);
	const { userId } = useGetUserId();

	const sendOTPMutation = useMutation({
		mutationKey: [userId],
		mutationFn: async () => {
			const response = axios.get(
				`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/api/user/phone/request-code/${userId}`
			);

			return response;
		},
	});

	const resendEmailMutation = useMutation({
		mutationFn: async () => {
			const response = axios.get(
				`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/api/user/email/verify/${userId}`
			);
			return response;
		},
		onSuccess() {
			setCountDown(30);
			setShowAlertModal(true);
		},

		onError(error) {
			console.log(error);
		},
	});

	const handleResend = async () => {
		try {
			///resend code
			resendEmailMutation.mutate();
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	const onSubmit = async (data: defaultValues) => {
		try {
			setLoading(true);

			const response = await axios.post(
				`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/api/user/email/verify`,
				{
					email,
					token: data.verification_code,
				}
			);

			if (response.status === 200) {
				toast.dismiss();
				toast.success("Email has been verified.");
				setCurrentStep((prev) => prev + 1);
				//send OTP after email has been verified
				sendOTPMutation.mutate();
			}
		} catch (error: any) {
			console.log(error);
			setError("verification_code", { message: "Wrong verification code" });
			setLoading(false);
			toast.error(error?.response?.data?.error || error.message);
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
					data-test="email-verification-code"
					disabled={loading}
					placeholder="Verification Code"
					className={`focus:outline-none focus:ring focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green focus:border-none focus:ring-opacity-50 placeholder:text-grey-lightest/60 outline-none text-white border ${
						errors.verification_code
							? "border-crimson focus:ring-offset-crimson focus:ring-crimson"
							: isValid
							? "border-brand-green focus:ring-offset-brand-green focus:ring-brand-green"
							: "border-white"
					} bg-transparent p-2 rounded-md`}
					type="text"
					{...register("verification_code", {
						required: {
							value: true,
							message: "verification code is required",
						},
					})}
				/>
				{errors.verification_code && (
					<p
						data-test="emailCodeError"
						className="text-crimson pt-2 text-text-12"
					>
						{errors.verification_code.message}
					</p>
				)}
			</div>

			<button
				data-test="verifyEmailButton"
				disabled={loading}
				type="submit"
				className={`${
					loading
						? "disabled:cursor-not-allowed disabled:bg-brand-green "
						: "bg-mid--yellow  active:scale-[1.01]"
				}focus:outline-none focus:ring focus:border-none focus:ring-offset-2 focus:ring-offset-mid--yellow focus:ring-mid--yellow outline-none focus:ring-opacity-50 w-full block text-center font-normal transition-colors duration-200 text-white  button`}
			>
				{loading ? (
					<LoadingSpinner className="mx-auto animate-[spin_0.4s_linear_infinite] border-transparent border-t-brand-green-darker h-6 w-6" />
				) : (
					"Continue"
				)}
			</button>

			<span className="text-white flex items-center gap-3 mt-5 text-text-14 font-light text-right w-full">
				{"Didn't received the code? "}

				{countDown === 0 ? (
					<button
						data-test="resendEmailButton"
						disabled={loading}
						onClick={handleResend}
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

export default VerifyEmailAddress;
