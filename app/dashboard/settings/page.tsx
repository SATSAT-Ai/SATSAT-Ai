"use client";
import Modal from "@/components/Modal";
import SettingsLoginSecurity from "@/components/SettingsLoginSecurity";
import { useState, useContext } from "react";
import { AppContext } from "@/context/AppContext";

const Page = () => {
	const [steps, setSteps] = useState(1);

	const { showModal, setShowModal } = useContext(AppContext);

	const handleDeleteAccount = () => {
		setShowModal(true);
	};

	//     const [text, setText] = useState("");

	//     const handleInputChange = (e) => {
	//       setText(e.target.value);
	//     };

	//     const handleTextAreaResize = (e) => {
	//       e.target.style.height = "auto";
	//       e.target.style.height = `${e.target.scrollHeight}px`;
	//     };

	//     <textarea
	//     value={text}
	//     onChange={handleInputChange}
	//     onInput={handleTextAreaResize}
	//     placeholder="Type here..."
	//   />

	return (
		<div className="min-h-screen text-white p-5">
			<h1 className="text-text-40">Settings</h1>

			<div className="relative z-10 flex items-start h-full gap-5 flex-col lg:flex-row mt-7 justify-between max-w-3xl">
				<div className="flex flex-col gap-40 h-full">
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
							Delete Account
						</p>
					)}
				</div>
				{steps == 1 ? (
					<form action="" className="bg-white/20 p-5 rounded-xl">
						<span className="text-text-24 font-semibold">
							Edit your account information
						</span>
						<div></div>
						<div className="mt-4 flex flex-col gap-5">
							<div className="flex gap-5">
								<input
									type="text"
									className="border  focus:outline-none focus:border-white border-grey-lightest p-1 rounded-md placeholder:text-text-normal bg-transparent "
									placeholder="First Name"
									name="firstname"
									value={""}
								/>
								<input
									type="text"
									className="border  focus:outline-none focus:border-white border-grey-lightest p-1 rounded-md placeholder:text-text-normal bg-transparent "
									placeholder="Last Name"
									name="lastname"
									value={""}
								/>
							</div>
							<div className="flex gap-5">
								<input
									type="tel"
									className="border  focus:outline-none focus:border-white border-grey-lightest p-1 rounded-md placeholder:text-text-normal bg-transparent "
									placeholder="Phone number"
									value={""}
								/>
								<input
									type="email"
									className="border  focus:outline-none focus:border-white border-grey-lightest p-1 rounded-md placeholder:text-text-normal bg-transparent "
									placeholder="Email"
									value={""}
								/>
							</div>
							<div className="flex flex-col gap-2">
								<span>Bio</span>
								<textarea
									placeholder="write your bio here e.g your interests"
									name=""
									id=""
									className=" focus:outline-none focus:border-white border w-full resize-none border-grey-lightest p-1 rounded-md placeholder:text-text-normal bg-transparent "
								></textarea>
							</div>
							<div className="mt-5 flex  items-center w-full justify-end gap-4">
								<button
									className="py-2 px-7 hover:bg-darker hover:text-white ease-in transition-colors active:scale-[1.01] bg-white text-darker"
									type="button"
								>
									Cancel
								</button>
								<button
									className="py-2 hover:bg-mid--yellow active:scale-[1.01] ease-in transition-colors px-7 bg-brand-green-darker"
									type="button"
								>
									Save
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
		</div>
	);
};

export default Page;
