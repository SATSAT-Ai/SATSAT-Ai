"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import logo from "@/public/satsat-logo.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { africanCountries } from "@/utils/africanCountries";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export type FormValues = {
	fullName: string;
	email: string;
	country: string;
};

const SignupForm = () => {
	const [loading, setLoading] = useState(false);

	// const router = useRouter();
	const {
		handleSubmit,
		formState: { errors, isValid },
		register,
	} = useForm<FormValues>();

	const onSubmit = async (data: FormValues) => {
		setLoading(true);
		toast.loading("Please wait...");
		try {
			const response = await axios.post("/api/auth/register", {
				fullName: data.fullName,
				email: data.email,
				country: data.country,
			});

			toast.dismiss();
			toast.success("Signed up successfully!");

			//redirect users based on response
			// router.push("signup/verify");
		} catch (error) {
			toast.dismiss();
			setLoading(false);
			console.log(error);
		}
	};

	const filteredCountry = africanCountries.filter(
		(country) => country.label === "Ghana"
	);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col md:flex-[.9] gap-3 items-start md:w-full max-w-sm mx-auto"
		>
			<Image
				src={logo}
				alt="satsat-ai"
				height={150}
				width={150}
				quality={90}
				priority
			/>
			<p className="text-mid--yellow mt-5 text-text-normal">
				Please fill your detail to create your account.
			</p>
			<div className="w-full mt-5 flex flex-col">
				<label className="mb-2 text-text-normal text-mid--yellow" htmlFor="">
					Full Name
				</label>
				<input
					disabled={loading}
					className={`disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 border ${
						errors.fullName
							? "border-crimson"
							: isValid
							? "border-brand-green"
							: "border-white"
					} bg-transparent p-2 rounded-lg text-white`}
					type="text"
					placeholder="John Doe"
					{...register("fullName", {
						required: { value: true, message: "Field is required" },
					})}
				/>
				{errors.fullName && (
					<p className="text-crimson pt-1 text-text-12">
						{errors.fullName.message}
					</p>
				)}
			</div>
			<div className="w-full flex flex-col">
				<label className="mb-2 text-text-normal text-mid--yellow" htmlFor="">
					Email
				</label>
				<input
					disabled={loading}
					className={`disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 border ${
						errors.email
							? "border-crimson"
							: isValid
							? "border-brand-green"
							: "border-white"
					} bg-transparent p-2 rounded-lg text-white`}
					type="text"
					placeholder="johndoe@gmail.com"
					{...register("email", {
						required: { value: true, message: "Field is required" },
					})}
				/>
				{errors.email && (
					<p className="text-crimson pt-1 text-text-12">
						{errors.email.message}
					</p>
				)}
			</div>
			<div className="w-full flex flex-col">
				<label className="mb-2 text-text-normal text-mid--yellow">
					Country
				</label>
				<Select
					disabled={loading}
					color="neutral"
					placeholder="Country"
					variant="outlined"
					size="md"
					style={{
						backgroundColor: "transparent",
						color: "white",
						borderColor: errors.country
							? "crimson"
							: isValid
							? "#29a173"
							: "white",
					}}
					{...register("country", {
						required: { value: true, message: "Field is required" },
					})}
					defaultValue={"Ghana"}
					onChange={() => {}}
				>
					{filteredCountry.map((country) => {
						return (
							<Option key={country.label} value={country.value}>
								{country.value.toUpperCase()}
							</Option>
						);
					})}
				</Select>
				{errors.country && (
					<p className="text-crimson pt-1 text-text-12">
						{errors.country.message}
					</p>
				)}
			</div>

			<span className="text-white text-text-12 font-light text-right w-full">
				Already having an account?{" "}
				<Link
					className="font-medium text-normal text-mid--yellow"
					href="/signin"
				>
					signin
				</Link>
			</span>
			<button
				disabled={loading}
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
					"Sign up"
				)}
			</button>
			<div className="flex items-center justify-center w-full">
				<div className=" my-7 w-full h-[1px] gradient3"></div>

				<span className="text-grey-lightest">or</span>
				<div className=" my-7 w-full h-[1px] gradient4"></div>
			</div>
			<button
				disabled={loading}
				className={`mt-5 ${
					!loading &&
					"active:scale-[1.01] hover:bg-transparent hover:text-white hover:border-white"
				} font-semibold text-[17px] transition-colors duration-20 bg-white w-full p-3 rounded-3xl text-darker border flex items-center justify-center gap-3`}
				type="button"
			>
				Signup with Google
				<FcGoogle size={25} />
			</button>
		</form>
	);
};

export default SignupForm;
