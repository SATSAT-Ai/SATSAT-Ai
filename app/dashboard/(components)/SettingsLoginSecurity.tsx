"use client";

import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { useForm } from "react-hook-form";
import Modal from "@/components/Modal";

type defaultInput = {
	oldEmail: string;
	newEmail: string;
};

const SettingsLoginSecurity = () => {
	const {
		handleSubmit,
		formState: { errors, isValid },
		reset,
		register,
	} = useForm<defaultInput>();

	const onSubmit = (data: defaultInput) => {
		console.log(data);
	};

	const { showModal, setShowModal, modalAction } = useContext(AppContext);

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="bg-white/10 p-5 mx-auto rounded-xl"
		>
			<h2 className="text-text-24 block mb-3 font-semibold">
				Login and Security
			</h2>
			<span className="text-text-16 font-normal">
				Do you want to change your credentials?
			</span>
			<div className="mt-4 flex flex-col gap-5">
				<div className="flex flex-wrap w-full gap-5">
					<div className="w-full">
						<input
							type="email"
							className={`text-white w-full placeholder:text-grey-lightest/60 border ${
								errors.oldEmail
									? "border-crimson focus:border-crimson"
									: isValid
									? "border-brand-green"
									: "border-grey-lightest focus:border-white"
							} rounded-md p-1  placeholder:text-text-normal bg-transparent outline-none focus:outline-none`}
							placeholder="Old Email Address"
							{...register("oldEmail", {
								required: { value: true, message: "Field is required" },
							})}
						/>
						{errors.oldEmail && (
							<p className="text-crimson pt-2 text-text-12">
								{errors.oldEmail.message}
							</p>
						)}
					</div>
					<div className="w-full">
						<input
							type="email"
							className={`text-white w-full placeholder:text-grey-lightest/60 border ${
								errors.newEmail
									? "border-crimson focus:border-crimson"
									: isValid
									? "border-brand-green"
									: "border-grey-lightest focus:border-white"
							} rounded-md p-1  placeholder:text-text-normal bg-transparent outline-none focus:outline-none`}
							placeholder="New Email Address"
							{...register("newEmail", {
								required: { value: true, message: "Field is required" },
							})}
						/>
						{errors.newEmail && (
							<p className="text-crimson pt-2 text-text-12">
								{errors.newEmail.message}
							</p>
						)}
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
				setShowModal={setShowModal}
				modalAction={modalAction}
				showModal={showModal}
				title="Do you want to delete your account?"
			/>
		</form>
	);
};

export default SettingsLoginSecurity;
