"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import LoadingSpinner from "./ui/LoadingSpinner";
import secureLocalStorage from "react-secure-storage";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { signIn } from "next-auth/react";

type FormValues = {
	email: string;
};

const SignInForm = () => {
	const router = useRouter();

	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<FormValues>();

	const [loading, setLoading] = useState(false);

	const sendOneTimeCodeMutation = useMutation({
		mutationKey: ["sendOneTimeCode"],
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
			router.push("/signin/user_verification");
		},
		onError(error) {
			setLoading(false);
			toast.dismiss();
			toast.error(error.message);
			console.log(error);
		},
	});

	const onSubmit = async (data: FormValues) => {
		setLoading(true);
		toast.loading("Please wait...");
		// secureLocalStorage.setItem("signInEmail", data.email);
		// sendOneTimeCodeMutation.mutate(data.email);
		// //!remove
		const signInResponse = await signIn("credentials", {
			email: data.email,
			redirect: false,
			callbackUrl: "/dashboard",
		});

		if (signInResponse?.error) {
			setLoading(false);
			toast.dismiss();
			toast.error(signInResponse.error);
		}
		if (signInResponse?.ok) {
			toast.dismiss();
			toast.success("Logged in successfully");
			router.push("/dashboard");
		}
		// //!remove
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col md:flex-[.9] gap-3 items-start md:w-full max-w-sm mx-auto"
		>
			<div>
				<h1 className="text-mid--yellow text-[27px] mb-1">Welcome back!</h1>
				<p className="text-mid--yellow text-text-normal">
					Please fill your details to log into your account.
				</p>
			</div>

			<div className="w-full flex mt-5 flex-col">
				<label className="mb-2 text-text-normal text-mid--yellow" htmlFor="">
					Email
				</label>
				<input
					disabled={loading}
					className={`disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border ${
						errors.email
							? "border-crimson"
							: isValid
							? "border-brand-green"
							: "border-white"
					} bg-transparent p-2 rounded-lg`}
					type="text"
					placeholder="johndoe@gmail.com"
					{...register("email", {
						required: { value: true, message: "Email is required" },
					})}
				/>
				{errors.email && (
					<p className="text-crimson pt-1 text-text-12">
						{errors.email.message}
					</p>
				)}
			</div>

			<button
				disabled={loading}
				className={`mt-5 font-medium text-[17px] ${
					loading ? "active:scale-100" : "active:scale-[1.01]"
				} text-white transition-colors duration-150 ease-in
				${
					loading
						? "bg-grey-light cursor-default"
						: "hover:bg-mid--yellow/80 bg-brand-green/80"
				}
				  block w-full p-2 rounded-lg`}
				type="submit"
			>
				{loading ? (
					<LoadingSpinner className=" mx-auto animate-[spin_0.4s_linear_infinite] border-transparent border-t-mid--yellow h-5 w-5" />
				) : (
					"Sign in"
				)}
			</button>
			<span className="text-white text-text-14 text-center w-full mt-3">
				{`Don't`} have an account?{" "}
				<Link
					className="text-brand-green text-text-14"
					href={"/choose-your-pricing"}
				>
					Sign up
				</Link>
			</span>
			<div className="flex items-center justify-center w-full">
				<div className=" my-7 w-full h-[1px] gradient3"></div>
				<span className="text-grey-lightest">or</span>
				<div className=" my-7 w-full h-[1px] gradient4"></div>
			</div>
			<button
				disabled={loading}
				className={`mt-5 duration-200 ease-in font-semibold text-[17px] transition-colors duration-20 bg-white w-full p-3 rounded-3xl text-darker ${
					loading
						? "hover:bg-white hover:text-darker"
						: "hover:text-white hover:bg-transparent active:scale-[1.01]"
				} border flex items-center justify-center gap-3 hover:border-white`}
				type="button"
			>
				Sign in with Google
				<FcGoogle size={25} />
			</button>
		</form>
	);
};

export default SignInForm;
