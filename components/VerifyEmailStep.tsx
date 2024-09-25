"use client";

import { Dispatch, SetStateAction, useState } from "react";
import VerifyEmailAddress from "./VerifyEmailAddress";
import { SiMinutemailer } from "react-icons/si";

export interface IVerifyEmail {
	setCurrentStep: Dispatch<SetStateAction<number>>;
	email: string;
}

const VerifyEmailStep = ({ setCurrentStep, email }: IVerifyEmail) => {
	const [showAlertModal, setShowAlertModal] = useState(false);

	const maskEmail = () => {
		const userName = email?.split("@")[0];
		const domain = email?.split("@")[1];

		if (userName) {
			const maskedUsername =
				userName?.split("")[0] + "*".repeat(userName?.length - 1);
			if (maskedUsername && domain) {
				return maskedUsername + "@" + domain;
			}
		}
	};

	return (
		<div className="max-w-xs">
			<p className="text-mid--yellow text-left text-text-normal my-6">
				{`Please enter the 6-digit verification code that was ${
					maskEmail() ? `sent to ${maskEmail()}.` : "sent."
				}The code is valid for 30 minutes.`}
			</p>
			<VerifyEmailAddress
				setShowAlertModal={setShowAlertModal}
				setCurrentStep={setCurrentStep}
				email={email}
			/>
			{showAlertModal && (
				<div
					onClick={() => setShowAlertModal(false)}
					className="w-full h-screen bg-darker/80 p-2 grid place-content-center text-white z-30 absolute top-0 left-0"
				>
					<div
						onClick={(e) => e.stopPropagation()}
						className="bg-[#071f07] shadow-md max-w-[350px] p-5 rounded-lg"
					>
						<SiMinutemailer
							size={40}
							className="text-mid--yellow mx-auto mb-3 leading-tight"
						/>
						<h2 className="font-medium text-text-24 text-mid--yellow">{`Didn't Receive the email verification code?`}</h2>
						<p className="py-4 font-normal">
							Email verification has been sent. If you have not received the
							verification code after several attempts, please try the
							following:
						</p>
						<ul className="list-decimal list-inside font-normal">
							<li>
								Check if it is in your
								<span className="text-mid--yellow"> Spam/junk </span> mail.
							</li>
							<li>
								Make sure your email address is{" "}
								<span className="text-mid--yellow">{email}</span> .
							</li>
							<li>
								The message may have been delayed for a few minutes. Try again
								after 5mins
							</li>
						</ul>
						<button
							data-test="modal"
							onClick={() => setShowAlertModal(false)}
							className="w-full bg-brand-green/60 hover:bg-brand-green/70 ease transition-colors duration-100 p-2 font-medium rounded-sm mt-5 active:scale-[1.01]"
							type="button"
						>
							OK
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default VerifyEmailStep;
