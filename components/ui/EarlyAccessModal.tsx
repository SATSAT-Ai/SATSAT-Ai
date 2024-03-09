"use client";

import boldLogo from "@/public/bold-logo.svg";
import Image from "next/image";
import { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import EarlyBirdImage from "@/public/EarlyBird.svg";
import { MdClose } from "react-icons/md";
import toast from "react-hot-toast";
import { bannerContext } from "../QueryProvider";

interface ISubScribe {
	subScribe_email: string;
}

const EarlyAccessModal = () => {
	const {
		handleSubmit,
		register,
		formState: { errors, isValid },
	} = useForm<ISubScribe>();

	const [loading, setLoading] = useState(false);
	const [glow, setGlow] = useState(true);
	const { setShowEarlyAccessModal } = useContext(bannerContext);

	const onSubmit = (data: ISubScribe) => {
		try {
			// setLoading(true);
			// setGlow(false);
			console.log(data.subScribe_email);
		} catch (error) {
			setLoading(true);
			// toast.dismiss();
			// toast.error(error);
		}
	};

	useEffect(() => {
		if (errors.subScribe_email) {
			toast.dismiss();
			toast.error(errors?.subScribe_email?.message!);
		}
	}, [errors.subScribe_email]);

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setShowEarlyAccessModal(false);
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [setShowEarlyAccessModal]);

	return (
		<section className="overscroll-none overflow-y-auto select-none h-screen fixed top-0 left-0 right-0 p-3 grid grid-cols-1 lg:grid-cols-2 w-full z-30 bg-darker/95 items-center justify-between gap-10">
			<MdClose
				onClick={() => setShowEarlyAccessModal(false)}
				size={25}
				color="white"
				className="fixed top-5 right-7 cursor-pointer active:scale-[1.02]"
			/>
			<div className="flex flex-col gap-5 justify-between">
				<div>
					<Image
						src={boldLogo}
						alt="coming-soon"
						height={700}
						width={700}
						className="w-full h-12 md:h-[70px]"
						priority
					/>
					<p className="silver-text text-text-40 leading-normal text-center font-bold md:text-text-60 lg:text-[70px]">
						Coming Soon
					</p>
				</div>
				<form onSubmit={handleSubmit(onSubmit)}>
					<p className="silver-text text-text-normal md:text-text-20 text-center">
						Join the waitlist to be one of the first to be notified.
					</p>
					<div className="max-w-sm sm:max-w-md md:max-w-lg mx-auto">
						<div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
							<div className="w-full flex-[2] mt-5 ">
								<div
									className={`before:opacity-0 w-full mx-auto rounded-xl before:z-[-1] after:z-[-1] after:absolute after:top-[-1px] after:left-[-1px] before:rounded-lg after:rounded-xl before:absolute before:top-[-1px] before:left-[-1px] bg-transparent relative bg-gradient-to-tr from-[#050e0b] to-[#000000] justify-between custom-block text-text-normal text-white font-medium flex items-center gap-2 ${
										!loading && glow ? "glow4" : ""
									}`}
								>
									<input
										disabled={loading}
										className={`${
											glow ? "border-none" : "border border-white"
										} rounded-xl w-full  disabled:border-grey-lightest outline-none disabled:bg-transparent placeholder:text-grey-lightest/60 text-white  ${
											errors.subScribe_email
												? "border-crimson"
												: isValid
												? "border-brand-green"
												: "border-white"
										} bg-transparent p-2 rounded-lg`}
										type="text"
										placeholder="johndoe@gmail.com"
										{...register("subScribe_email", {
											required: { value: true, message: "Field is required" },
										})}
									/>
								</div>
							</div>
							<button
								className={`w-full flex-1  mt-5 font-normal text-[17px] active:scale-[1.001] bg-brand-green/80 text-white transition-colors duration-200 
				${
					loading
						? "bg-grey-light cursor-default"
						: "text-mid--yellow hover:bg-mid--yellow/80 "
				}
				  block w-full p-2 rounded-xl`}
								type="submit"
							>
								{loading ? (
									<p className="text-center gap-4 text-white">Please wait...</p>
								) : (
									"SubScribe"
								)}
							</button>
						</div>
					</div>
				</form>
			</div>
			<div className="rounded-[40px] w-fit hidden lg:flex  mx-auto overflow-clip">
				<Image
					className="object-cover rounded-[40px]"
					src={EarlyBirdImage}
					height={550}
					width={550}
					alt="earlyBird"
					quality={30}
					priority
				/>
			</div>
		</section>
	);
};

export default EarlyAccessModal;
