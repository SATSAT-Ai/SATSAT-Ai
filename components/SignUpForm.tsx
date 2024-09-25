"use client";

import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { useForm } from "react-hook-form";
import { africanCountries } from "@/utils/africanCountries";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, Fragment } from "react";
import toast from "react-hot-toast";
import {
	Listbox,
	ListboxButton,
	ListboxOption,
	ListboxOptions,
	Transition,
} from "@headlessui/react";
import { HiChevronUpDown } from "react-icons/hi2";
import LoadingSpinner from "./ui/LoadingSpinner";
import { useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";

const signUpSchema = z.object({
	fullName: z
		.string()
		.min(5, { message: "fullName must be at least 5 character(s)" })
		.max(40),
	email: z.string().email(),
	phone: z
		.string()
		.min(10, { message: "invalid phone number" })
		.max(12, { message: "invalid phone number" }),
	country: z.object({
		label: z.string(),
		value: z.string(),
	}),
});

export type formSchemaType = z.infer<typeof signUpSchema>;

export interface FormValues extends formSchemaType {
	country: {
		label: string;
		value: string;
	};
}
const SignUpForm = () => {
	const [loading, setLoading] = useState(false);
	const filteredCountry: { value: string; label: string }[] =
		africanCountries.filter((country) => country.label === "Ghana");

	const {
		handleSubmit,
		formState: { errors, isValid },
		register,
		setValue,
		getValues,
	} = useForm<FormValues>({
		resolver: zodResolver(signUpSchema),
		defaultValues: {
			country: {
				label: "Ghana",
				value: "ghana",
			},
		},
	});

	const [selectedCountry, setSelectedCountry] = useState<{
		label: string;
		value: string;
	}>(getValues("country"));

	const searchParams = useSearchParams();
	const plan = searchParams?.get("plan");
	const billingPeriod = searchParams?.get("period");
	const router = useRouter();

	const { data } = useQuery({
		queryKey: ["countryIdKey"],
		queryFn: async () => {
			const response = await axios.get(
				`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/api/countries/index`
			);
			return response.data ?? "";
		},
		refetchOnWindowFocus: false,
	});

	useEffect(() => {
		if (
			!plan ||
			!["pro", "free", "enterprise", "plus"].includes(plan) ||
			!billingPeriod
		) {
			router.replace("/choose-your-pricing");
		}
	}, [billingPeriod, plan, router]);

	const onSubmit = async (formData: FormValues) => {
		setLoading(true);
		toast.loading("Please wait...");

		const formDataValues = signUpSchema.safeParse(formData);

		if (formDataValues.error)
			console.log({ success: false, error: formDataValues.error.format() });
		toast.error("An error occurred validating fields");

		if (formDataValues.success) {
			const { fullName, country } = formDataValues.data;

			if (process.env.NEXT_PUBLIC_WAITLIST_MODE === "false") {
				try {
					const response: {
						data: {
							message: string;
							userId: string;
							phone: string;
							email: string;
						};
						status: string | number;
					} = await axios.post("/api/auth/register", {
						country_id: data?.data?.data[0]?.id,
						email: formDataValues.data.email,
						phone: formDataValues.data.phone,
						starting_plan: plan,
						fullName,
						country,
					});

					toast.dismiss();
					toast.success(response?.data?.message);
					const { userId } = response?.data;

					if (response.status == 200) {
						router.push(
							`/signup/verify?plan=${plan}&userId=${userId}&period=${billingPeriod}`
						);
					}
				} catch (error: any) {
					setLoading(false);
					console.log(error);
					toast.dismiss();
					toast.error(error?.response?.data?.message || error?.message);
				}
			} else {
				toast.dismiss();
				toast.error("Please join the waitlist");
				setLoading(false);
			}
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="flex flex-col md:flex-[.9] gap-1 items-start md:w-full max-w-sm mx-auto"
		>
			<h1 className="text-mid--yellow mb-0 font-medium text-text-20">
				Fill in the details to create your account.
			</h1>
			<div className="w-full mt-3 flex flex-col">
				<label className="my-2 text-text-normal text-mid--yellow">
					Full Name
				</label>
				<input
					data-test="fullName"
					disabled={loading}
					className={cn(
						"focus:outline-none focus:ring  focus:ring-offset-2 focus:border-none focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 border border-white bg-transparent  p-[9px] rounded-lg text-white",
						{
							"border-crimson focus:ring-offset-crimson focus:ring-crimson":
								errors.fullName,
						},
						{
							"border-brand-green focus:ring-offset-brand-green focus:ring-brand-green":
								isValid,
						}
					)}
					type="text"
					placeholder="John Doe"
					{...register("fullName", {
						required: { value: true, message: "Field is required" },
					})}
				/>
				{errors.fullName && (
					<p
						data-test={"fullName-error"}
						className="text-crimson h-2 pt-2 pb-4 text-text-12"
					>
						{errors.fullName.message}
					</p>
				)}
			</div>
			<div className="w-full flex flex-col">
				<label className="my-2 text-text-normal text-mid--yellow" htmlFor="">
					Email
				</label>
				<input
					data-test="email"
					disabled={loading}
					className={cn(
						"focus:outline-none focus:ring  focus:ring-offset-2 focus:border-none focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 border border-white bg-transparent p-[9px] rounded-lg text-white",
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
						required: { value: true, message: "Field is required" },
					})}
				/>
				{errors.email && (
					<p
						data-test={"email-error"}
						className="text-crimson h-2  pt-2 pb-4 text-text-12"
					>
						{errors.email.message}
					</p>
				)}
			</div>
			<div className="flex flex-col min-[350px]:flex-row items-center gap-3 w-full">
				<div className="w-full flex flex-col">
					<label className="my-2 text-text-normal text-mid--yellow">
						Country
					</label>

					<Listbox
						{...register("country", {
							required: { value: true, message: "Country is required" },
						})}
						disabled={loading}
						onChange={(e: any) => (
							setValue("country", {
								label: e?.label,
								value: e?.value!,
							}),
							setSelectedCountry({
								label: e?.label,
								value: e?.value!,
							})
						)}
					>
						<div className="relative">
							<ListboxButton
								className={cn(
									"cursor-pointer relative h-11 w-full rounded-lg text-white hover:text-white  text-[14px] py-2 pl-3 pr-10 text-left border focus-visible:border-indigo-500 focus-visible:ring-2focus:outline-none focus:ring focus:border-none focus:ring-offset-2 focus:ring-offset-brand-green focus:ring-brand-green outline-none border-white focus:ring-opacity-50 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",
									{
										"cursor-default": loading,
									},
									{
										"border-brand-green focus:ring-offset-brand-green focus:ring-brand-green":
											isValid,
									},
									{
										"border-crimson focus:ring-offset-crimson focus:ring-crimson":
											errors.country,
									}
								)}
							>
								<span
									className={`block truncate capitalize ${
										selectedCountry?.label
											? "text-white"
											: "text-grey-lightest/60"
									}`}
								>
									{selectedCountry?.label}
								</span>
								<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
									<HiChevronUpDown
										size={25}
										className="h-5 w-5 text-gray-400"
										aria-hidden="true"
									/>
								</span>
							</ListboxButton>
							<Transition
								as={Fragment}
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								<ListboxOptions
									data-test="countryOptions"
									className="absolute max-h-60 z-[1] placeholder:text-grey-lightest/60 mt-1 w-full overflow-auto rounded-md  text-[wheat] bg-[#123829] py-1 text-[14px] text-base shadow-lg focus:outline-none sm:text-sm"
								>
									{filteredCountry.map((country, countryIdx) => (
										<ListboxOption
											key={countryIdx}
											className={({ active }) =>
												`relative cursor-pointer select-none  py-2 px-7 ${
													active ? "bg-[#071f07]" : "text-[wheat]"
												}`
											}
											value={country}
										>
											{({ selected }) => (
												<>
													<span
														className={`block truncate ${
															selected ? "font-medium" : "font-normal"
														}`}
													>
														{country.value}
													</span>
												</>
											)}
										</ListboxOption>
									))}
								</ListboxOptions>
							</Transition>
						</div>
					</Listbox>

					{
						<p
							data-test={"country-error"}
							className="text-crimson h-2 pt-2 pb-4 text-text-12"
						>
							{errors.country && errors.country.message}
						</p>
					}
				</div>

				<div className="w-full flex flex-col">
					<label className="my-2 text-text-normal text-mid--yellow" htmlFor="">
						Phone
					</label>
					<input
						data-test="phone"
						disabled={loading}
						className={cn(
							"focus:outline-none focus:ring focus:ring-offset-2 focus:border-none focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border border-white bg-transparent p-[9px] rounded-lg",
							{
								"border-crimson focus:ring-offset-crimson focus:ring-crimson":
									errors.phone,
							},
							{
								"border-brand-green focus:ring-offset-brand-green focus:ring-brand-green":
									isValid,
							}
						)}
						type="tel"
						placeholder="+233"
						{...register("phone", {
							required: { value: true, message: "Phone is required" },
						})}
					/>
					{
						<p
							data-test={"phone-error"}
							className="text-crimson h-2 py-2 pb-4 text-text-12"
						>
							{errors.phone && errors.phone.message}
						</p>
					}
				</div>
			</div>

			<span className="text-white text-text-14 font-light text-right w-full">
				Already having an account?{" "}
				<Link
					data-test="signInPage"
					className="focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 focus:rounded-sm focus:outline-none focus:ring focus:border-none focus:ring-offset-1 font-medium text-text-14 text-mid--yellow"
					href="/signin"
				>
					signin
				</Link>
			</span>

			<button
				type="submit"
				data-test="signin_user_button"
				disabled={loading}
				className={cn(
					"disabled:cursor-not-allowed focus:outline-none focus:ring focus:border-none focus:ring-offset-2 focus:ring-offset-brand-green text-white transition-colors duration-150 ease-in focus:ring-brand-green outline-none mt-5 focus:ring-opacity-50 hover:bg-brand-green/85 bg-brand-green/90 w-full p-2 rounded-lg font-medium text-[17px]",
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
					"Sign up"
				)}
			</button>
			<div className="flex items-center justify-center w-full">
				<div className=" my-7 w-full h-[1px] [background:linear-gradient(to_right,#a3a3a3,#050d0a)]"></div>
				<span className="text-grey-lightest">or</span>
				<div className=" my-7 w-full h-[1px] [background:linear-gradient(to_left,#a3a3a3,#050d0a)]"></div>
			</div>
			<button
				data-test="googleButton"
				disabled={loading}
				className={cn(
					"mt-2 transition-colors duration-200 ease-in font-semibold text-[17px] duration-20 bg-white w-full p-3 rounded-3xl text-darker border flex items-center justify-center gap-3",
					{
						"active:scale-[1.01] hover:bg-[#F1D5AF] hover:text-darker hover:border-white":
							!loading,
					}
				)}
				type="button"
			>
				Signup with Google
				<FcGoogle size={25} />
			</button>
		</form>
	);
};

export default SignUpForm;
