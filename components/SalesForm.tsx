"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import contactSales from "@/actions";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSupportSchema } from "@/lib/zodSchema";
import { toast } from "react-hot-toast";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export type salesProp = z.infer<typeof contactSupportSchema>;

const SalesForm = () => {
	const {
		register,
		formState: { errors, isValid },
		handleSubmit,
		reset,
	} = useForm<salesProp>({
		resolver: zodResolver(contactSupportSchema),
	});
	const [loading, setLoading] = useState(false);

	const handleTextAreaResize = (e: any) => {
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	const onSubmit = async (data: salesProp) => {
		setLoading(true);
		const results = await contactSales(data);

		if (results) {
			setLoading(false);
			if ("error" in results && results.error) {
				console.error(results.error);
				toast.error("Something went wrong, please try again later");
			} else if ("data" in results) {
				toast.success("Message sent successfully");
				reset();
			}
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="border border-white/10 p-5 max-w-2xl w-full mx-auto rounded-md"
		>
			<div className="w-full mb-5 flex flex-col">
				<label
					className="text-text-normal mb-2 text-mid--yellow"
					htmlFor="firstName"
				>
					First Name
				</label>
				<input
					data-test="firstName"
					className={cn(
						"bg-transparent p-2 rounded-lgfocus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest rounded-lg border-white/10 disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border",
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
					id="fullName"
					placeholder="John Doe"
					{...register("fullName")}
				/>
				{errors.fullName && (
					<p
						data-test="fullName-error"
						className="text-crimson pt-1 text-text-12"
					>
						{errors.fullName.message}
					</p>
				)}
			</div>
			<div className="w-full mb-5 flex flex-col">
				<label
					className="text-text-normal mb-2 text-mid--yellow"
					htmlFor="companyEmail"
				>
					Company Email
				</label>
				<input
					data-test="companyEmail"
					className={cn(
						"bg-transparent p-2 rounded-lgfocus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest rounded-lg border-white/10 disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border",
						{
							"border-crimson focus:ring-offset-crimson focus:ring-crimson":
								errors.companyEmail,
						},
						{
							"border-brand-green focus:ring-offset-brand-green focus:ring-brand-green":
								isValid,
						}
					)}
					type="email"
					placeholder="johndoe@gmail.com"
					{...register("companyEmail")}
					id="companyEmail"
				/>
				{errors.companyEmail && (
					<p
						data-test="companyEmail-error"
						className="text-crimson pt-2 text-text-12"
					>
						{errors.companyEmail.message}
					</p>
				)}
			</div>
			<div className="w-full mt-10 flex flex-col">
				<label className="mb-2 text-text-normal text-mid--yellow">
					Your company needs
				</label>
				<textarea
					data-test="message"
					onInput={(e) => handleTextAreaResize(e)}
					className={cn(
						"bg-transparent p-2 rounded-lgfocus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest rounded-lg border-white/10 disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border",
						{
							"border-crimson focus:ring-offset-crimson focus:ring-crimson":
								errors.helpNeeded,
						},
						{
							"border-brand-green focus:ring-offset-brand-green focus:ring-brand-green":
								isValid,
						}
					)}
					rows={4}
					id="message"
					placeholder="How can we help?"
					{...register("helpNeeded")}
				></textarea>
				{errors.helpNeeded && (
					<p
						data-test="helpNeeded-error"
						className="text-crimson pt-2 text-text-12"
					>
						{errors.helpNeeded.message}
					</p>
				)}
			</div>
			<button
				data-test="submit-form"
				disabled={loading}
				type="submit"
				className={cn(
					"mt-5 block w-fit ml-auto p-2 px-5 rounded-lg text-white transition-colors duration-150 ease-in disabled:cursor-not-allowed focus:outline-none focus:ring focus:border-none focus:ring-offset-2 focus:ring-offset-brand-green bg-brand-green/90 enabled:active:bg-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 font-medium text-[17px]",
					{
						"bg-grey-light cursor-default": loading,

						"hover:bg-brand-green/80": !loading,
					}
				)}
			>
				{loading ? (
					<LoadingSpinner
						showLoadingText={true}
						className="mx-auto z-20 animate-[spin_0.4s_linear_infinite] border-transparent rounded-full border-2 border-t-white h-5 w-5"
					/>
				) : (
					"Send Message"
				)}
			</button>
		</form>
	);
};

export default SalesForm;
