"use client";

import { Ichat } from "@/interface";
import { useState } from "react";
import { SlOptionsVertical } from "react-icons/sl";

const ChatOptions = ({ chats }: { chats: Ichat[] }) => {
	const [showChatOptions, setShowChatOptions] = useState(false);

	const handleArchiveChats = () => {
		//
	};

	const handleDeleteChats = () => {
		//
	};

	return (
		<>
			{chats.length > 1 && (
				<button
					onClick={() => setShowChatOptions((prev) => !prev)}
					type="button"
					className="] ml-auto relative rounded-full hover:bg-brand-green/50 bg-brand-green-darker text-white p-2 text-center text-text-normal"
				>
					<SlOptionsVertical size={20} color="white" />

					{showChatOptions && (
						<div className="absolute bg-darker bottom-7 z-10 shadow-md p-2 w-max right-4 rounded-lg">
							<ul className="flex items-center w-full text-[14px] font-medium flex-col gap-2 ">
								<li
									onClick={handleArchiveChats}
									className="active:scale-[1.02] hover:bg-mid--yellow rounded-md py-2 px-3"
								>
									Archive All Chats
								</li>
								<li
									onClick={handleDeleteChats}
									className=" active:scale-[1.02] hover:bg-crimson rounded-md py-2 px-3"
								>
									Delete All Chats
								</li>
							</ul>
						</div>
					)}
				</button>
			)}
		</>
	);
};

export default ChatOptions;
