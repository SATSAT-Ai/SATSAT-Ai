import { Dispatch, SetStateAction } from "react";
import { SiMinutemailer } from "react-icons/si";

const EmailAlertModal = ({
	setShowAlertModal,
	email,
}: {
	setShowAlertModal: Dispatch<SetStateAction<boolean>>;
	email: string;
}) => {
	return (
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
				<p className="font-medium text-[25px] text-mid--yellow leading-tight">{`Didn't Receive the email verification code?`}</p>
				<span className="py-4 block font-normal">
					The email verification has been sent. If you have not received the
					Email after several attempts, please try the following:
				</span>
				<ul className="list-decimal list-inside font-normal">
					<li>Check if it is in your spam/junk mail.</li>
					<li>
						Make sure your email address is{" "}
						<span className="text-mid--yellow">{email}</span> .
					</li>
					<li>
						The message may have been delayed for a few minutes. Try again after
						5mins
					</li>
				</ul>
				<button
					onClick={() => setShowAlertModal(false)}
					className="w-full bg-brand-green/60 hover:bg-brand-green/70 ease transition-colors duration-100 p-2 font-medium rounded-sm mt-5 active:scale-[1.01]"
					type="button"
				>
					OK
				</button>
			</div>
		</div>
	);
};

export default EmailAlertModal;
