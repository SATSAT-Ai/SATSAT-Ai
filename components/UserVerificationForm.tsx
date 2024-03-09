"use client";
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import toast from "react-hot-toast";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import secureLocalStorage from "react-secure-storage";
import EmailAlertModal from "./ui/EmailAlertModal";
import { IoChevronBackOutline } from "react-icons/io5";
import { bannerContext } from "./QueryProvider";

interface IVerifySignIn {
	signInCode: string;
}

const UserVerificationForm = () => {
	const [loading, setLoading] = useState(false);
	const [countDown, setCountDown] = useState(0);
	const [showAlertModal, setShowAlertModal] = useState(false);
	const router = useRouter();
	const email = (secureLocalStorage.getItem("signInEmail") as string) ?? "";
	const { setShowEarlyAccessModal } = useContext(bannerContext);

	const {
		handleSubmit,
		formState: { errors, isValid },
		register,
	} = useForm<IVerifySignIn>();

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
				`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/auth/login/request`,
				{
					email,
				}
			);
			return response;
		},
		onSuccess(data) {
			toast.dismiss();
			toast.success(data.data.msg);
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
		setShowEarlyAccessModal(true);

		//TODO:uncomment
		// setLoading(true);
		// try {
		// 	const signInResponse = await signIn("credentials", {
		// 		email,
		// 		password: data.signInCode,
		// 		redirect: false,
		// 		callbackUrl: "/dashboard",
		// 	});
		// 	if (signInResponse?.error) {
		// 		setLoading(false);
		// 		toast.dismiss();
		// 		toast.error(signInResponse.error + " or Invalid token");
		// 		console.log(signInResponse.error);
		// 	}
		// 	if (signInResponse?.ok) {
		// 		toast.success("Verification successful");
		// 		secureLocalStorage.removeItem("signInEmail");
		// 		router.push("/dashboard");
		// 	}
		// } catch (error: any) {
		// 	toast.dismiss();
		// 	setLoading(false);
		// 	toast.error("An error occurred");
		// 	console.log(error);
		// }
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
						disabled={loading}
						placeholder="Verification Code"
						className={`placeholder:text-grey-lightest/60 outline-none text-white border ${
							errors.signInCode
								? "border-crimson focus:border-crimson"
								: isValid
								? "border-brand-green"
								: "border-white"
						} bg-transparent p-2 rounded-md`}
						type="text"
						{...register("signInCode", {
							required: {
								value: true,
								message: "verification code is required",
							},
						})}
					/>
					{errors.signInCode && (
						<p className="text-crimson pt-1 text-text-12">
							{errors.signInCode.message}
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
						disabled={loading}
						type="submit"
						className="w-full block text-center font-normal bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white hover:bg-brand-green button"
					>
						Continue
					</button>
				)}
				<span className="text-white flex items-center gap-3 mt-5 text-text-14 font-light text-right w-full">
					{"Didn't received the code? "}

					{countDown === 0 ? (
						<button
							disabled={loading}
							// onClick={handleResendSignInCode}
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
				<EmailAlertModal email={email} setShowAlertModal={setShowAlertModal} />
			)}
		</>
	);
};

export default UserVerificationForm;
