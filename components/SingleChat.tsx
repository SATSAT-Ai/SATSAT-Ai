"use client";

import { Ichat } from "@/interface";
import Link from "next/link";
import { PiChatCircleTextFill } from "react-icons/pi";
import { SlOptionsVertical } from "react-icons/sl";
import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";

const SingleChat = ({
	pathname,
	chat,
	setIsOldConversation,
}: {
	pathname: string;
	chat: Ichat;
	setIsOldConversation: Dispatch<SetStateAction<boolean>>;
}) => {
	const [showOptions, setShowOptions] = useState(false);

	const optionRef = useRef<null | HTMLButtonElement>(null);

	useEffect(() => {
		const handleClickOutSide = (event: any) => {
			if (!optionRef.current?.contains(event.target)) {
				setShowOptions(false);
			}
		};

		window.addEventListener("mousedown", handleClickOutSide);
		return () => {
			window.removeEventListener("mousedown", handleClickOutSide);
		};
	}, [optionRef]);

	const handleDelete = (chatId: string) => {
		//delete chat
	};

	return (
		<div
			key={chat.id}
			className={`flex relative items-center gap-0 px-1 hover:bg-white/10 ${
				showOptions && "bg-white/10"
			} rounded-xl`}
		>
			<Link
				onClick={() => setIsOldConversation(true)}
				scroll={false}
				href={
					pathname === `dashboard/chat/${chat.id}`
						? `${chat.id}`
						: `/dashboard/chat/${chat.id}`
				}
				className="flex text-white  cursor-pointer p-2 items-center gap-2 text-[14px] font-medium"
			>
				<PiChatCircleTextFill size={25} className="cursor-pointer" />
				{chat.title}
			</Link>
			<button
				onClick={() => setShowOptions((prev) => !prev)}
				ref={optionRef}
				type="button"
			>
				<SlOptionsVertical
					size={17}
					color="white"
					className={` ${
						pathname.includes(chat.id) ? "flex" : "hidden"
					} cursor-pointer active:scale-[1.02] h-full`}
				/>
			</button>
			{showOptions && (
				<div className="absolute z-10 right-3 top-10 bg-darker p-2 text-white text-[15px] rounded-lg">
					<ul className="flex items-center w-full text-[14px] font-medium flex-col gap-2 ">
						<li
							onClick={() => handleDelete(chat.id)}
							className=" cursor-pointer active:scale-[1.02] text-crimson hover:text-white hover:bg-crimson rounded-md py-2 px-7"
						>
							Delete
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default SingleChat;
