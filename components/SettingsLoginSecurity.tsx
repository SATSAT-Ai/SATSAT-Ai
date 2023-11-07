"use client";

import Modal from "./Modal";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const SettingsLoginSecurity = () => {
	const { showModal, setShowModal, modalAction } = useContext(AppContext);

	return (
		<form action="" className="bg-white/20 p-5 rounded-xl">
			<span className="text-text-24 block font-semibold">
				Login and Security
			</span>
			<span className="text-text-16 font-normal">
				Do you want to change your credentials?
			</span>
			<div className="mt-4 flex flex-col gap-5">
				<div className="flex gap-5">
					<input
						type="email"
						className="border  focus:outline-none focus:border-white border-grey-lightest p-1 rounded-md placeholder:text-text-normal bg-transparent "
						placeholder="Old Email Address"
						value={""}
					/>
					<input
						type="email"
						className="border  focus:outline-none focus:border-white border-grey-lightest p-1 rounded-md placeholder:text-text-normal bg-transparent "
						placeholder="New Email Address"
						value={""}
					/>
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
				setShowModal={setShowModal}
				modalAction={modalAction}
				showModal={showModal}
				title="Do you want to delete your account?"
			/>
		</form>
	);
};

export default SettingsLoginSecurity;
