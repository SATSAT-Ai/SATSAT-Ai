"use client";

import { Ichat } from "@/interface/interface";
import { useState, useEffect, useRef } from "react";
import { BsArchiveFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { SlOptionsVertical } from "react-icons/sl";

const ChatsOptions = ({ chats }: { chats: Ichat[] }) => {
	const chatsOptions = useRef<null | HTMLDivElement>(null);

	const [showChatOptions, setShowChatOptions] = useState(false);

	const handleArchiveChats = () => {
		//
	};

	const handleDeleteChats = () => {
		//
	};

	useEffect(() => {
		const toggleOptions = (event: MouseEvent) => {
			if (!chatsOptions.current?.contains(event.target as Node)) {
				setShowChatOptions(false);
			}
		};

		window.addEventListener("mousedown", toggleOptions);
		return () => {
			window.removeEventListener("mousedown", toggleOptions);
		};
	}, [chatsOptions]);

	return (
		<>
			{chats.length > 1 && (
				<div
					onClick={() => setShowChatOptions((prev) => !prev)}
					ref={chatsOptions}
					className="ml-auto"
				>
					<button
						type="button"
						className=" relative rounded-full hover:bg-brand-green/50 bg-brand-green-darker text-white p-2 text-center text-text-normal"
					>
						<SlOptionsVertical size={20} color="white" />

						{showChatOptions && (
							<div className="absolute bg-darker bottom-7 z-10 shadow-md p-2 w-max right-4 rounded-lg">
								<ul className="flex items-center w-full text-[14px] font-medium flex-col gap-2 ">
									<li
										onClick={handleArchiveChats}
										className="active:scale-[1.02] flex items-center gap-2 hover:bg-mid--yellow rounded-md py-2 px-3"
									>
										<BsArchiveFill size={20} />
										Archive All Chats
									</li>
									<li
										onClick={handleDeleteChats}
										className=" flex items-center gap-2 text-crimson hover:text-white active:scale-[1.02] hover:bg-crimson rounded-md py-2 px-3"
									>
										<MdDelete size={22} />
										Delete All Chats
									</li>
								</ul>
							</div>
						)}
					</button>
				</div>
			)}
		</>
	);
};

export default ChatsOptions;
