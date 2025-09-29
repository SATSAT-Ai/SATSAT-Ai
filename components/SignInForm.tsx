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
import { useSession } from "next-auth/react";
import axios from "axios";
import Spotlight from "./ui/spotlight";
import { signIn } from "next-auth/react";
import { cn } from "@/lib/utils";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const emailSchema = z.object({
	email: z.string().email().default("demo@gmail.com"),
});

export type FormValues = z.infer<typeof emailSchema>;

const SignInForm = () => {
	const router = useRouter();
	const session = useSession();

	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
		setError,
	} = useForm<FormValues>({
		resolver: zodResolver(emailSchema),
		defaultValues: {
			email: "demo@gmail.com",
		},
	});

	const [loading, setLoading] = useState(false);
	const sendOneTimeCodeMutation = useMutation({
		mutationKey: ["sendOneTimeCode"],
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
			router.push("/signin/user_verification");
		},
		onError(error) {
			setLoading(false);
			toast.dismiss();
			toast.error(error.message);
			setError("email", {
				message: "An error occurred",
			});
			console.log(error);
		},
	});

	const onSubmit = async (formValue: FormValues) => {
		const waitListMode = process.env.NEXT_PUBLIC_WAITLIST_MODE === "true";

		if (session && session.data?.user) {
			toast.error("Please sign out first to continue");
		}

		const formDataValues = emailSchema.safeParse(formValue);

		if (formDataValues.error)
			console.log({ success: false, error: formDataValues.error.format() });

		if (formDataValues.success) {
			if (!waitListMode) {
				setLoading(true);
				toast.loading("Please wait...");
				secureLocalStorage.setItem("signInEmail", formDataValues.data.email);
				sendOneTimeCodeMutation.mutate(formDataValues.data.email);
			} else {
				const allowedUsers = [
					"demo@gmail.com",
					"kamasahdickson19@gmail.com",
					"jeanlinux5@gmail.com",
				];
				if (allowedUsers.includes(formDataValues.data.email)) {
					setLoading(true);
					const signInResponse = await signIn("credentials", {
						email: formDataValues.data.email,
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
				} else {
					toast.dismiss();
					toast.error("You are not authorized. Join the waitlist");
				}
			}
		}
	};

	return (
		<>
			<Spotlight
				className="top-[-5%] left-[10%] sm:-top-[20px] md:left-60 md:-top-20"
				fill="#c98821"
			/>
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
					<label
						className="mb-2 hidden md:flex text-text-normal text-mid--yellow"
						htmlFor=""
					>
						Email
					</label>
					<input
						data-test="email_input"
						disabled={loading}
						className={cn(
							"focus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 bg-transparent p-2 rounded-lg text-white border border-white",
							{
								"border-crimson focus:ring-offset-crimson focus:ring-crimson":
									errors.email,
							},
							{
								"border-brand-green focus:ring-offset-brand-green focus:ring-brand-green":
									isValid,
							}
						)}
						type="text"
						placeholder="johndoe@gmail.com"
						{...register("email", {
							required: { value: true, message: "Email is required" },
						})}
					/>
					{errors.email && (
						<p
							data-test="signin_error_message"
							className="text-crimson pt-2 text-text-12"
						>
							{errors.email.message}
						</p>
					)}
				</div>

				<button
					type="submit"
					data-test="signin_user_button"
					disabled={loading}
					className={cn(
						"disabled:cursor-not-allowed focus:outline-none focus:ring focus:border-none focus:ring-offset-2 focus:ring-offset-brand-green text-white transition-colors duration-150 ease-in focus:ring-brand-green outline-none focus:ring-opacity-50 hover:bg-brand-green/85 bg-brand-green/90 w-full p-2 rounded-lg font-medium text-[17px]",
						{
							"active:scale-100 bg-grey-light hover:bg-grey-light cursor-default":
								loading,
						},

						{
							"active:scale-[1.01]": !loading,
						}
					)}
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
						className="text-brand-green text-text-14 focus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 focus:rounded-sm"
						href={"/choose-your-pricing"}
					>
						Sign up
					</Link>
				</span>
				<div className="flex my-3 items-center justify-center w-full">
					<div className=" w-full h-[1px] [background:linear-gradient(to_right,#a3a3a3,#050d0a)]"></div>
					<span className="text-grey-lightest">or</span>
					<div className=" w-full h-[1px] [background:linear-gradient(to_left,#a3a3a3,#050d0a)]"></div>
				</div>
				<button
					disabled={loading}
					className={cn(
						"duration-200 ease-in font-semibold text-[17px] transition-colors duration-20 bg-white w-full p-3 rounded-3xl text-darker border flex items-center justify-center gap-3 hover:border-white",
						{
							"hover:bg-white hover:text-darker": loading,
						},
						{
							"hover:text-white hover:bg-transparent active:scale-[1.01]":
								!loading,
						}
					)}
					type="button"
				>
					Sign in with Google
					<FcGoogle size={25} />
				</button>
			</form>
		</>
	);
};

export default SignInForm;
