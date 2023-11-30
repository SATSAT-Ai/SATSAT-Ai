"use client";

import { useForm } from "react-hook-form";

interface defaultValues {
	verification_code: string;
}

const VerifyAccount = () => {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<defaultValues>();

	const onSubmit = (data: defaultValues) => {
		console.log(data);
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className="w-full mb-5 flex flex-col">
				<label className="mb-2 text-text-normal text-mid--yellow" htmlFor="">
					Code
				</label>
				<input
					className={`placeholder:text-grey-lightest/60 outline-none text-white border ${
						errors.verification_code
							? "border-crimson focus:border-crimson"
							: isValid
							? "border-brand-green"
							: "border-white focus:border-crimson"
					} bg-transparent p-2 rounded-lg`}
					type="text"
					{...register("verification_code", {
						required: {
							value: true,
							message: "verification code is required",
						},
					})}
				/>
				{errors.verification_code && (
					<p className="text-crimson pt-1 text-text-12">
						{errors.verification_code.message}
					</p>
				)}
			</div>
			<button
				type="submit"
				className="w-full block text-center font-normal hover:bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green button"
			>
				Continue
			</button>
			<span className="text-white text-text-normal font-light text-right w-full">
				{"Didn't received any code? "}
				<button
					type="button"
					className="mt-5 font-medium text-normal text-brand-green"
				>
					Resend
				</button>
			</span>
		</form>
	);
};

export default VerifyAccount;
