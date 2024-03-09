"use client";
import Modal from "@/components/Modal";
import { useState, useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { useForm } from "react-hook-form";
import SettingsLoginSecurity from "./SettingsLoginSecurity";

type defaultInput = {
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	bio: string;
};

const SettingsSteps = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
		reset,
	} = useForm<defaultInput>();

	const [steps, setSteps] = useState(1);

	const { showModal, setShowModal, hideSidebar, setHideSidebar } =
		useContext(AppContext);

	const handleDeleteAccount = () => {
		setShowModal(true);
	};

	const handleTextAreaResize = (e: any) => {
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	const onSubmit = (data: defaultInput) => {
		console.log(data);
	};

	return (
		<>
			<div className="flex items-center flex-col gap-5 py-3">
				<h1 className="text-[35px] md:text-[45px] m-0 text-center lg:text-left w-full ">
					Settings
				</h1>
			</div>
			<div className="relative flex items-start h-full gap-5 flex-col sm:flex-row mt-7 justify-between max-w-3xl">
				<div className="flex flex-col gap-14 sm:gap-40 h-full">
					<div className="mb-auto">
						<p
							onClick={() => setSteps(1)}
							className={`${
								steps == 1 ? "text-mid--yellow" : "text-white"
							} cursor-pointer`}
						>
							Edit Profile
						</p>
						<p
							onClick={() => setSteps(2)}
							className={`${
								steps == 1 ? "text-white" : "text-mid--yellow"
							} cursor-pointer`}
						>
							Login & Security
						</p>
					</div>
					{steps == 2 && (
						<p
							onClick={handleDeleteAccount}
							className="text-crimson cursor-pointer"
						>
							Delete Your Account
						</p>
					)}
				</div>
				{steps == 1 ? (
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="bg-white/10 p-5 rounded-xl mx-auto max-w-2xl"
					>
						<h2 className="text-text-20 text-center md:text-text-24 md:text-left font-semibold">
							Edit Your Account Information
						</h2>
						<div className="mt-4 flex flex-col gap-5">
							<div className="flex flex-col sm:flex-row w-full gap-5">
								<div className="w-full">
									<input
										type="text"
										className={`text-white w-full placeholder:text-grey-lightest/60 border ${
											errors.firstName
												? "border-crimson focus:border-crimson"
												: isValid
												? "border-brand-green"
												: "border-grey-lightest focus:border-white"
										} rounded-md p-1  placeholder:text-text-normal bg-transparent outline-none focus:outline-none`}
										placeholder="First Name"
										{...register("firstName", {
											required: { value: true, message: "Field is required" },
										})}
									/>
									{errors.firstName && (
										<p className="text-crimson pt-1 text-text-12">
											{errors.firstName.message}
										</p>
									)}
								</div>
								<div className="w-full">
									<input
										type="text"
										className={`w-full text-white placeholder:text-grey-lightest/60 border ${
											errors.lastName
												? "border-crimson focus:border-crimson"
												: isValid
												? "border-brand-green"
												: "border-grey-lightest focus:border-white"
										} rounded-md p-1  placeholder:text-text-normal bg-transparent outline-none focus:outline-none`}
										placeholder="Last Name"
										{...register("lastName", {
											required: { value: true, message: "Field is required" },
										})}
									/>
									{errors.lastName && (
										<p className="text-crimson pt-1 text-text-12">
											{errors.lastName.message}
										</p>
									)}
								</div>
							</div>
							<div className="flex w-full flex-col sm:flex-row gap-5">
								<div className="w-full">
									<input
										type="tel"
										className={`w-full text-white placeholder:text-grey-lightest/60 border ${
											errors.phone
												? "border-crimson focus:border-crimson"
												: isValid
												? "border-brand-green"
												: "border-grey-lightest focus:border-white"
										} rounded-md p-1  placeholder:text-text-normal bg-transparent outline-none focus:outline-none`}
										placeholder="Phone number"
										{...register("phone", {
											required: { value: true, message: "Field is required" },
										})}
									/>
									{errors.phone && (
										<p className="text-crimson pt-1 text-text-12">
											{errors.phone.message}
										</p>
									)}
								</div>
								<div className="w-full">
									<input
										type="email"
										className={`w-full text-white placeholder:text-grey-lightest/60 border ${
											errors.email
												? "border-crimson focus:border-crimson"
												: isValid
												? "border-brand-green"
												: "border-grey-lightest focus:border-white"
										} rounded-md p-1  placeholder:text-text-normal bg-transparent outline-none focus:outline-none`}
										placeholder="Email"
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
							</div>
							<div className="flex flex-col gap-2">
								<span>Bio</span>
								<div className="w-full">
									<textarea
										onInput={(e) => handleTextAreaResize(e)}
										placeholder="Write your bio here e.g your interests"
										id=""
										{...register("bio", {
											required: false,
										})}
										className={`text-white placeholder:text-grey-lightest/60 border ${
											errors.bio
												? "border-crimson focus:border-crimson"
												: isValid
												? "border-brand-green"
												: "border-grey-lightest focus:border-white"
										} rounded-md p-1 w-full placeholder:text-text-normal bg-transparent outline-none focus:outline-none`}
									></textarea>
								</div>
							</div>
							<div className="mt-5 flex flex-col sm:flex-row items-center w-full justify-end gap-4">
								<button
									onClick={() => reset()}
									className="py-2 w-full px-8 shadow-md rounded-lg hover:bg-darker hover:text-white ease-in transition-colors active:scale-[1.01] bg-white text-darker"
									type="button"
								>
									Cancel
								</button>
								<button
									className="py-2 w-full shadow-md rounded-lg hover:bg-mid--yellow active:scale-[1.01] ease-in transition-colors px-9 bg-brand-green-darker"
									type="submit"
								>
									Update
								</button>
							</div>
						</div>
						<Modal
							showModal={showModal}
							title="You have unsaved changes"
							body="Do you want to save your changes?"
						/>
					</form>
				) : (
					<SettingsLoginSecurity />
				)}
			</div>
		</>
	);
};

export default SettingsSteps;
