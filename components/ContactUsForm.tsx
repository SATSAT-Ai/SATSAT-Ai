"use client";

import { useForm } from "react-hook-form";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

type FormValues = {
	firstName: string;
	lastName: string;
	email: string;
	subject: string;
	message: string;
	phoneNumber: string;
};

const ContactUsForm = () => {
	const {
		handleSubmit,
		formState: { errors, isValid },
		register,
		control,
	} = useForm<FormValues>();

	const onSubmit = (data: FormValues) => {
		console.log(data);
	};

	const handleTextAreaResize = (e: any) => {
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className=" active:bg-transparent max-w-xl mx-auto py-28"
		>
			<h1 className="text-center mb-10 text-brand-green text-text-40 md:text-text-60">
				Contact Us
			</h1>
			<div className="flex flex-col sm:gap-5">
				<div className="flex flex-col sm:flex-row items-center sm:gap-5">
					<div className="w-full mb-5 flex flex-col">
						<label
							className="text-text-normal mb-2 text-mid--yellow"
							htmlFor="firstName"
						>
							First Name
						</label>
						<input
							className={`focus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border ${
								errors.firstName
									? "border-crimson focus:ring-offset-crimson focus:ring-crimson"
									: isValid
									? "border-brand-green focus:ring-offset-brand-green focus:ring-brand-green"
									: "border-[#444c48]"
							} bg-transparent p-2 rounded-lg`}
							type="text"
							id="firstName"
							{...register("firstName", {
								required: { value: true, message: "Field is required" },
								maxLength: 20,
								minLength: 7,
							})}
						/>
						{errors.firstName && (
							<p className="text-crimson pt-2 text-text-12">
								{errors.firstName.message}
							</p>
						)}
					</div>
					<div className="w-full mb-5 flex flex-col">
						<label
							className="text-text-normal mb-2 text-mid--yellow"
							htmlFor="lastname"
						>
							Last Name
						</label>
						<input
							className={`focus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border ${
								errors.lastName
									? "border-crimson focus:ring-offset-crimson focus:ring-crimson"
									: isValid
									? "border-brand-green focus:ring-offset-brand-green focus:ring-brand-green"
									: "border-[#444c48]"
							} bg-transparent p-2 rounded-lg`}
							type="text"
							id="lastname"
							{...register("lastName", {
								required: { value: true, message: "Field is required" },
								maxLength: 15,
								minLength: 7,
							})}
						/>
						{errors.lastName && (
							<p className="text-crimson pt-2 text-text-12">
								{errors.lastName.message}
							</p>
						)}
					</div>
				</div>
				<div className="flex flex-col sm:flex-row items-center sm:gap-5">
					<div className="w-full mb-5 flex flex-col">
						<label
							className="text-text-normal mb-2 text-mid--yellow"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className={`focus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border ${
								errors.email
									? "border-crimson focus:ring-offset-crimson focus:ring-crimson"
									: isValid
									? "border-brand-green focus:ring-offset-brand-green focus:ring-brand-green"
									: "border-[#444c48]"
							} bg-transparent p-2 rounded-lg`}
							type="email"
							id="email"
							{...register("email", {
								required: { value: true, message: "Field is required" },
							})}
						/>
						{errors.email && (
							<p className="text-crimson pt-2 text-text-12">
								{errors.email.message}
							</p>
						)}
					</div>
					<div className="w-full mb-5 flex flex-col">
						<label
							className="text-text-normal mb-2 text-mid--yellow"
							htmlFor="number"
						>
							Phone Number
						</label>
						<input
							className={`focus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border ${
								errors.phoneNumber
									? "border-crimson focus:ring-offset-crimson focus:ring-crimson"
									: isValid
									? "border-brand-green focus:ring-offset-brand-green focus:ring-brand-green"
									: "border-[#444c48]"
							} bg-transparent p-2 rounded-lg`}
							type="tel"
							id="number"
							{...register("phoneNumber", {
								required: { value: true, message: "Field is required" },
							})}
						/>
						{errors.phoneNumber && (
							<p className="text-crimson pt-2 text-text-12">
								{errors.phoneNumber.message}
							</p>
						)}
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-5">
				<p className="text-text-normal text-mid--yellow">Select subject</p>
				<Select
					color="neutral"
					placeholder="Subject"
					variant="outlined"
					size="md"
					style={{
						backgroundColor: "transparent",
						color: errors.subject ? "crimson" : isValid ? "#29a173" : "white",
						borderColor: errors.subject
							? "crimson"
							: isValid
							? "#29a173"
							: "#444c48",
					}}
					{...register("subject", {
						required: { value: true, message: "Field is required" },
					})}
					defaultValue={""}
					onChange={() => {}}
				>
					<Option value={"General Enquiry"}>General Enquiry</Option>
					<Option value={"Onboarding"}>Onboarding</Option>
					<Option value={"Account"}>Account</Option>
					<Option value={"Sales"}>Sales</Option>
				</Select>
				{errors.subject && (
					<p className="text-crimson pt-2 text-text-12">
						{errors.subject.message}
					</p>
				)}
			</div>
			<div className="w-full mt-10 flex flex-col">
				<label className="mb-2 text-text-normal text-mid--yellow">
					Message
				</label>
				<textarea
					onInput={(e) => handleTextAreaResize(e)}
					className={`focus:outline-none focus:ring focus:border-none focus:ring-offset-1 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border ${
						errors.message
							? "border-crimson focus:ring-offset-crimson focus:ring-crimson"
							: isValid
							? "border-brand-green focus:ring-offset-brand-green focus:ring-brand-green"
							: "border-[#444c48]"
					} bg-transparent p-2 rounded-lg`}
					id="message"
					placeholder="Write your message..."
					{...register("message", {
						required: { value: true, message: "Field is required" },
					})}
				></textarea>
				{errors.message && (
					<p className="text-crimson pt-2 text-text-12">
						{errors.message.message}
					</p>
				)}
			</div>
			<button
				type="submit"
				className="w-fit hover:bg-brand-green ease-in ml-auto mt-7 block text-center font-normal bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white button"
			>
				Send Message
			</button>
		</form>
	);
};

export default ContactUsForm;
