import { Dispatch, SetStateAction } from "react";
import VerifyOTP from "./VerifyOTP";

export interface IVerifyPhone {
	setCurrentStep: Dispatch<SetStateAction<number>>;
	phone: string;
}

const VerifyPhoneStep = ({ setCurrentStep, phone }: IVerifyPhone) => {
	const maskPhone = () => {
		const lastTwoDigits = phone
			?.split("")
			?.slice(phone.length - 2)
			?.join("");

		const maskedPhone = "*".repeat(phone?.length - 2) + lastTwoDigits;
		if (maskedPhone && phone) {
			return maskedPhone;
		}
	};

	return (
		<div className="max-w-xs ">
			<p className="text-mid--yellow text-left my-6">
				{`An OTP has been sent ${
					maskPhone()
						? `to ${maskPhone()}. OTP is valid for 30 minutes.`
						: ". OTP is valid for 30 minutes."
				}`}
			</p>
			<VerifyOTP setCurrentStep={setCurrentStep} telNumber={phone} />
		</div>
	);
};

export default VerifyPhoneStep;
