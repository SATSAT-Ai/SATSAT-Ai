"use client";

import { Dispatch, SetStateAction } from "react";

const Modal = ({
	title,
	body,
	showModal,
	setShowModal,
	modalAction,
}: {
	title: string;
	body?: string;
	showModal: boolean;
	setShowModal?: Dispatch<SetStateAction<boolean>>;
	modalAction?: string;
}) => {
	const handleRemoveModal = () => {};

	const handleSaveModal = () => {
		//intercept settings and save changes
	};

	return (
		<div
			onClick={() => setShowModal && setShowModal(false)}
			className={` ${
				showModal ? "block" : "hidden"
			} fixed top-0 left-0 w-full h-full bg-darker/90 flex items-center justify-center`}
		>
			<div
				onClick={(e) => e.stopPropagation()}
				className="bg-white/80 rounded-lg text-darker p-5"
			>
				<h4
					className={`mb-0 text-text-24 ${
						modalAction == "deleteAccount"
							? "text-[crimson] font-normal"
							: "text-darker"
					}`}
				>
					{title}
				</h4>
				<span className={`text-text-[18px]  font-medium`}>{body}</span>
				<div className="mt-5 flex items-center w-full justify-center gap-4">
					<button
                    onClick={()=> setShowModal && setShowModal(false)}
						className="py-1 rounded px-7 ease-in transition-colors active:scale-[1.01] bg-[crimson] text-white"
						type="button"
					>
						Cancel
					</button>
					<button
						className="py-1 rounded px-7 hover:bg-darker hover:text-white ease-in transition-colors active:scale-[1.01] bg-white text-darker"
						type="button"
					>
						{modalAction == "deleteAccount" ? "Yes" : "Save"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Modal;
