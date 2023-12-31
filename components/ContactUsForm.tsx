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
		//use an email provider to process data
		console.log(data);
	};

	const handleTextAreaResize = (e: any) => {
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className=" active:bg-transparent max-w-xl mx-auto my-20"
		>
			<h1 className="text-center mb-10 text-brand-green text-text-40 md:text-text-60">
				Contact Us
			</h1>
			<div className="flex flex-col gap-7">
				<div className="flex flex-col sm:flex-row items-center gap-5">
					<div className="w-full mb-5 flex flex-col">
						<label
							className="text-text-normal text-mid--yellow"
							htmlFor="firstname"
						>
							First Name
						</label>
						<input
							className={`text-white placeholder:text-grey-lightest/60 border-b ${
								errors.firstName
									? "border-b-crimson focus:border-b-crimson"
									: isValid
									? "border-b-brand-green"
									: "border-b-grey-light focus:border-b-white"
							}  bg-transparent  outline-none `}
							type="text"
							id="firstname"
							{...register("firstName", {
								required: { value: true, message: "Field is required" },
								maxLength: 20,
								minLength: 7,
							})}
						/>
						{errors.firstName && (
							<p className="text-crimson pt-1 text-text-12">
								{errors.firstName.message}
							</p>
						)}
					</div>
					<div className="w-full mb-5 flex flex-col">
						<label
							className="text-text-normal text-mid--yellow"
							htmlFor="lastname"
						>
							Last Name
						</label>
						<input
							className={`text-white placeholder:text-grey-lightest/60 border-b ${
								errors.lastName
									? "border-b-crimson focus:border-b-crimson"
									: isValid
									? "border-b-brand-green"
									: "border-b-grey-light focus:border-b-white"
							}  bg-transparent  outline-none `}
							type="text"
							id="lastname"
							{...register("lastName", {
								required: { value: true, message: "Field is required" },
								maxLength: 15,
								minLength: 7,
							})}
						/>
						{errors.lastName && (
							<p className="text-crimson pt-1 text-text-12">
								{errors.lastName.message}
							</p>
						)}
					</div>
				</div>
				<div className="flex flex-col sm:flex-row items-center gap-5">
					<div className="w-full mb-5 flex flex-col">
						<label
							className="text-text-normal text-mid--yellow"
							htmlFor="email"
						>
							Email
						</label>
						<input
							className={`text-white placeholder:text-grey-lightest/60 border-b ${
								errors.email
									? "border-b-crimson focus:border-b-crimson"
									: isValid
									? "border-b-brand-green"
									: "border-b-grey-light focus:border-b-white"
							}  bg-transparent  outline-none `}
							type="email"
							id="email"
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
					<div className="w-full mb-5 flex flex-col">
						<label
							className="text-text-normal text-mid--yellow"
							htmlFor="number"
						>
							Phone Number
						</label>
						<input
							className={`text-white placeholder:text-grey-lightest/60 border-b ${
								errors.phoneNumber
									? "border-b-crimson focus:border-b-crimson"
									: isValid
									? "border-b-brand-green"
									: "border-b-grey-light focus:border-b-white"
							}  bg-transparent  outline-none `}
							type="tel"
							id="number"
							{...register("phoneNumber", {
								required: { value: true, message: "Field is required" },
							})}
						/>
						{errors.phoneNumber && (
							<p className="text-crimson pt-1 text-text-12">
								{errors.phoneNumber.message}
							</p>
						)}
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-5 mt-7">
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
					<p className="text-crimson pt-1 text-text-12">
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
					className={`text-white scrollbar-hidden placeholder:text-grey-lightest/60 border-b ${
						errors.message
							? "border-b-crimson focus:border-b-crimson"
							: isValid
							? "border-b-brand-green"
							: "border-b-grey-light focus:border-b-white"
					}  bg-transparent  outline-none `}
					id="message"
					placeholder="Write your message..."
					{...register("message", {
						required: { value: true, message: "Field is required" },
					})}
				></textarea>
				{errors.message && (
					<p className="text-crimson pt-1 text-text-12">
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
