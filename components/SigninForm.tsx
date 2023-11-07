"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import Checkbox from "@mui/joy/Checkbox";

type FormValues = {
	email: string;
	password: string;
	rememberMe: boolean;
};

const SigninForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<FormValues>();

	const onSubmit = async (data: FormValues) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col md:flex-[.9] gap-3 items-start md:w-full max-w-sm mx-auto"
		>
			<p className="text-mid--yellow text-[27px]">Welcome back!</p>
			<p className="text-mid--yellow">
				Please fill your details to log into your account.
			</p>

			<div className="w-full flex flex-col">
				<label className="mb-2 text-text-normal text-mid--yellow" htmlFor="">
					Email
				</label>
				<input
					className={`placeholder:text-grey-lightest/60 border ${
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

			<div className=" text-white w-full justify-between flex items-center gap-5">
				<Checkbox
					color="success"
					disabled={false}
					label="Remember me"
					size="sm"
					variant="soft"
					style={{ color: "white" }}
					{...register("rememberMe")}
				/>
				<Link href={"#"} className="text-text-normal text-crimson">
					Forgot password?
				</Link>
			</div>
			<button
				className="border mt-5 font-medium text-[17px] active:scale-[1.001] hover:text-darker transition-colors duration-200 hover:border-mid--yellow hover:bg-mid--yellow border-brand-green block w-full p-2 rounded-lg text-mid--yellow"
				type="submit"
			>
				Sign in
			</button>
			<span className="text-white text-center w-full mt-3">
				Dont have an account?{" "}
				<Link className="text-brand-green" href={"/signup"}>
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
