"use client";

import { Dispatch, SetStateAction, useState } from "react";
import VerifyEmailAddress from "./VerifyEmailAddress";
import EmailAlertModal from "./ui/EmailAlertModal";

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
				<EmailAlertModal email={email} setShowAlertModal={setShowAlertModal} />
			)}
		</div>
	);
};

export default VerifyEmailStep;
