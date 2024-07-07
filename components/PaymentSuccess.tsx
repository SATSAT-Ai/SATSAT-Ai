"use client";

import paymentSuccessImage from "@/public/payment-success.svg";
import Image from "next/image";
import LoadingSpinner from "./ui/LoadingSpinner";
import confettiData from "@/utils/confetti.json";
import Lottie from "react-lottie";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useState } from "react";

const PaymentSuccess = () => {
	const [loading, setLoading] = useState(true);

	// const authorizeNewSignedUpUser = useMutation({
	// 	mutationKey: ["authorizeNewSignedUpUser"],
	// 	mutationFn: (email: string) => {
	// 		const response = axios.post(
	// 			`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/api/auth/login/request`,
	// 			{
	// 				email,
	// 			}
	// 		);
	// 		return response;
	// 	},
	// 	onSuccess(data) {
	// 		toast.dismiss();
	// 		toast.success(data.data.message);
	// 	},
	// 	onError(error) {
	// 		setLoading(false);
	// 		toast.dismiss();
	// 		toast.error(error.message);
	// 		console.log(error);
	// 	},
	// });

	return (
		<main className="w-full grid place-content-center bg-darker text-white h-screen relative ">
			<div className="absolute z-10 mx-auto inset-0 ">
				<Lottie
					options={{
						loop: false,
						animationData: confettiData,
						rendererSettings: {
							preserveAspectRatio: "xMidYMid slice",
						},
					}}
				/>
			</div>
			<div className="flex z-20 items-center flex-col">
				<Image
					src={paymentSuccessImage}
					className="w-16 h-auto"
					alt="payment successful"
				/>
				<h1 className="text-text-24 font-semibold md:text-text-24 m-0 my-3">
					Payment successful
				</h1>
				<p className="max-w-md mx-auto text-center">
					Wohoo! Your payment was successful, and your order was complete
				</p>

				<button
					disabled={loading}
					className="cursor-not-allowed flex items-center gap-5 bg-brand-green/60 py-2 rounded-lg font-medium mt-3 px-14 text-white"
				>
					<LoadingSpinner className="mx-auto animate-[spin_0.4s_linear_infinite] border-transparent rounded-full border-2 border-t-white h-6 w-6" />
					Redirecting...
				</button>
			</div>
		</main>
	);
};

export default PaymentSuccess;
