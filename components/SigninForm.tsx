"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Checkbox from "@mui/joy/Checkbox";
import { signIn } from "next-auth/react";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter, useSearchParams } from "next/navigation";

type FormValues = {
	email: string;
	rememberMe: boolean;
};

const SigninForm = () => {
	const searchParams = useSearchParams();
	const router = useRouter();
	const params = new URLSearchParams(searchParams);

	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<FormValues>();

	const [loading, setLoading] = useState(false);

	const onSubmit = async (data: FormValues) => {
		setLoading(true);

		toast.loading("Please wait...");

		try {
			const response = await signIn("credentials", {
				email: data.email,
				redirect: false,
				callbackUrl: "/dashboard",
			});

			// if (data.rememberMe) {
			// 	// do something or persist session
			// }

			// if (data.email) {
			// 	params.set("email", data.email);
			// 	router.refresh();
			// 	router.replace(`/signin/verify?${params}`);
			// }

			if (response?.ok && !loading) {
				toast.dismiss();
				toast.success("Logged in successfully!");
				// params.set("email", data.email);
				router.push("/dashboard");

				// router.replace(`/signin/verify?${params}`);
			}
			if (response?.error) {
				setLoading(false);
				toast.dismiss();
				toast.error(response.error);
				console.log(response?.error);
			}
		} catch (e) {
			setLoading(false);
			toast.error("Error signing in!");
			console.log(e);
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col md:flex-[.9] gap-3 items-start md:w-full max-w-sm mx-auto"
		>
			<div>
				<p className="text-mid--yellow text-[27px] mb-1">Welcome back!</p>
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

			{/* <div className=" text-white w-full justify-between flex items-center gap-5">
				<Checkbox
					color="success"
					disabled={loading}
					label="Remember me"
					size="sm"
					variant="soft"
					style={{ color: "white" }}
					{...register("rememberMe")}
				/>
			</div> */}
			<button
				className={`border mt-5 font-medium text-[17px] active:scale-[1.001] hover:text-darker transition-colors duration-200 
				${
					loading
						? "bg-grey-light cursor-default"
						: "border-brand-green text-mid--yellow hover:bg-mid--yellow hover:border-mid--yellow "
				}
				  block w-full p-2 rounded-lg`}
				type="submit"
			>
				{loading ? (
					<p className="text-center gap-4 text-white">Please wait...</p>
				) : (
					"Sign in"
				)}
			</button>
			<span className="text-white text-text-12 text-center w-full mt-3">
				{`Don't`} have an account?{" "}
				<Link className="text-brand-green" href={"/choose-your-pricing"}>
					Sign up
				</Link>
			</span>
			<div className="flex items-center justify-center w-full">
				<div className=" my-7 w-full h-[1px] gradient3"></div>

				<span className="text-grey-lightest">or</span>
				<div className=" my-7 w-full h-[1px] gradient4"></div>
			</div>
			<button
				className="mt-5 font-semibold text-[17px] transition-colors duration-20 bg-white w-full p-3 rounded-3xl text-darker hover:bg-transparent border flex items-center justify-center gap-3 hover:text-white active:scale-[1.01] hover:border-white"
				type="button"
			>
				Sign in with Google
				<FcGoogle size={25} />
			</button>
		</form>
	);
};

export default SigninForm;
