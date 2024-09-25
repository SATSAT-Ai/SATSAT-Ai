"use client";

import { useForm } from "react-hook-form";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import { IoChevronBackOutline } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { cn } from "@/lib/utils";

interface IVerifySignIn {
	signInCode: string;
}

const UserVerificationForm = () => {
	const [loading, setLoading] = useState(false);
	const [countDown, setCountDown] = useState(0);
	const [showAlertModal, setShowAlertModal] = useState(false);
	const router = useRouter();
	const {
		handleSubmit,
		formState: { errors, isValid },
		setError,
		register,
	} = useForm<IVerifySignIn>();

	const email = (secureLocalStorage.getItem("signInEmail") as string) ?? "";

	useEffect(() => {
		if (!email) {
			router.push("/signin");
		}
	}, [email, router]);

	const maskEmail = () => {
		const userName = email?.split("@")[0];
		const domain = email?.split("@")[1];

		const maskedUsername =
			userName?.split("")[0] + "*".repeat(userName?.length - 1);
		if (maskedUsername && domain) {
			return maskedUsername + "@" + domain;
		}
	};

	const ResendOneTimeCodeMutation = useMutation({
		mutationKey: ["resendOneTimeCode"],
		mutationFn: (email: string) => {
			const response = axios.post(
				`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/api/auth/login/request`,
				{
					email,
				}
			);
			return response;
		},
		onSuccess(data) {
			toast.dismiss();
			toast.success(data.data.message);
			setShowAlertModal(true);
			setCountDown(30);
		},
		onError(error) {
			setLoading(false);
			toast.dismiss();
			toast.error(error.message);
			console.log(error);
		},
	});

	const handleResendSignInCode = () => {
		ResendOneTimeCodeMutation.mutate(email);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			setCountDown(countDown === 0 ? 0 : countDown - 1);
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, [countDown]);

	const onSubmit = async (data: IVerifySignIn) => {
		setLoading(true);
		try {
			const signInResponse = await signIn("credentials", {
				email,
				password: data.signInCode,
				redirect: false,
				callbackUrl: "/dashboard",
			});
			if (signInResponse?.error) {
				setLoading(false);
				toast.dismiss();
				toast.error(signInResponse.error + " or Invalid token");
				console.log(signInResponse.error);
				setError("signInCode", { message: "An error occurred" });
			}
			if (signInResponse?.ok) {
				toast.success("Verification successful");
				router.push("/dashboard");
			}
		} catch (error: any) {
			toast.dismiss();
			setLoading(false);
			toast.error("An error occurred or invalid token");
			console.log(error);
			setError("signInCode", { message: "An error occurred or invalid token" });
		}
	};
	return (
		<>
			<button
				aria-label="go back"
				type="button"
				onClick={() => router.push(`/signin`)}
				className="hidden lg:flex text-white absolute top-36 left-32 w-ful font-medium gap-3 items-center"
			>
				<IoChevronBackOutline color="white" className="z-0" size={20} />
				Back
			</button>
			<p className="text-mid--yellow text-center my-6">
				{email
					? `Enter the login token we just sent to ${maskEmail()}.`
					: " Enter the login token we just sent."}
			</p>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="w-full mb-5 flex flex-col">
					<input
						data-test="signin_verification_input"
						disabled={loading}
						placeholder="Enter Verification Code"
						className={cn(
							"focus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green focus:ring-opacity-50 placeholder:text-grey-lightest/60 outline-none text-white border border-white bg-transparent p-2 rounded-md",
							{
								"border-crimson focus:border-crimson focus:ring-offset-crimson focus:ring-crimson":
									errors.signInCode,
							},
							{
								"border-brand-green focus:ring-offset-brand-green focus:ring-brand-green":
									isValid,
							},
							{
								"border-grey-lightest/40": loading,
							}
						)}
						type="text"
						{...register("signInCode", {
							required: {
								value: true,
								message: "verification code is required",
							},
						})}
					/>
					{errors.signInCode && (
						<p
							data-test="signin_verification_error"
							className="text-crimson pt-2 text-text-12"
						>
							{errors.signInCode.message}
						</p>
					)}
				</div>

				<button
					data-test="verify_signin_button"
					disabled={loading}
					className={cn(
						"disabled:cursor-not-allowed focus:outline-none focus:ring focus:border-none focus:ring-offset-2 focus:ring-offset-mid--yellow focus:ring-mid--yellow text-white transition-colors duration-150 ease-in active:scale-100 outline-none block w-full p-2 rounded-lg focus:ring-opacity-50 bg-brand-green enabled:hover:bg-mid--yellow font-medium text-[17px]",
						{
							"active:scale-[1.01] hover:bg-mid--yellow/85": !loading,
						},
						{
							"bg-grey-light cursor-default": loading,
						}
					)}
					type="submit"
				>
					{loading ? (
						<LoadingSpinner className=" mx-auto animate-[spin_0.4s_linear_infinite] border-transparent border-t-mid--yellow h-5 w-5" />
					) : (
						"Continue"
					)}
				</button>
				<span className="text-white flex items-center gap-3 mt-5 text-text-14 font-light text-right w-full">
					{"Didn't received the code? "}

					{countDown === 0 ? (
						<button
							data-test="resendSignInToken"
							disabled={loading}
							onClick={handleResendSignInCode}
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
			{showAlertModal && (
				<div
					onClick={() => setShowAlertModal(false)}
					className="w-full h-screen bg-darker/80 p-2 grid place-content-center text-white z-30 absolute top-0 left-0"
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className="bg-[#071f07] shadow-md max-w-[350px] p-5 rounded-lg"
					>
						<SiMinutemailer
							size={40}
							className="text-mid--yellow mx-auto mb-3 leading-tight"
						/>
						<h2 className="font-medium text-text-24 text-mid--yellow">{`Didn't Receive the email verification code?`}</h2>
						<p className="py-4 font-normal">
							Email verification has been sent. If you have not received the
							verification code after several attempts, please try the
							following:
						</p>
						<ul className="list-decimal list-inside font-normal">
							<li>
								Check if it is in your
								<span className="text-mid--yellow"> Spam/junk </span> mail.
							</li>
							<li>
								Make sure your email address is{" "}
								<span className="text-mid--yellow">{email}</span> .
							</li>
							<li>
								The message may have been delayed for a few minutes. Try again
								after 5mins
							</li>
						</ul>
						<button
							data-test="modal"
							onClick={() => setShowAlertModal(false)}
							className="w-full bg-brand-green/60 hover:bg-brand-green/70 ease transition-colors duration-100 p-2 font-medium rounded-sm mt-5 active:scale-[1.01]"
							type="button"
						>
							OK
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default UserVerificationForm;
