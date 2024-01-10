"use client";

import { Ichat } from "@/interface/interface";
import Link from "next/link";
import { PiChatCircleTextFill } from "react-icons/pi";
import { SlOptions } from "react-icons/sl";
import { useState, useRef, useEffect, Dispatch, SetStateAction } from "react";
import { MdDelete } from "react-icons/md";
import { BsArchiveFill } from "react-icons/bs";

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

	const optionRef = useRef<null | HTMLDivElement>(null);

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
		setShowOptions(false);
	};
	const handleArchive = (chatId: string) => {
		//archive chat
		setShowOptions(false);
	};

	return (
		<div
			key={chat.id}
			className={`flex relative items-center gap-0 px-2 hover:bg-white/10 ${
				pathname.includes(chat.id) && "bg-white/10"
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
			<button onClick={() => setShowOptions((prev) => !prev)} type="button">
				<SlOptions
					size={17}
					color="white"
					className={` ${
						pathname.includes(chat.id) ? "flex" : "hidden"
					} cursor-pointer active:scale-[1.02] h-full`}
				/>
			</button>
			{showOptions && (
				<div
					ref={optionRef}
					className="absolute z-10 right-3 top-10 bg-darker p-2 text-white text-[15px] rounded-lg"
				>
					<ul className="flex items-center w-full text-[14px] font-medium flex-col gap-2 ">
						<li
							onClick={() => handleDelete(chat.id)}
							className=" flex items-center gap-2 cursor-pointer active:scale-[1.02] text-crimson hover:text-white hover:bg-crimson rounded-md py-2 px-7"
						>
							<MdDelete size={20} />
							Delete chat
						</li>
						<li
							onClick={() => handleArchive(chat.id)}
							className="flex items-center gap-3 cursor-pointer active:scale-[1.02] text-mid--yellow hover:bg-mid--yellow hover:text-white rounded-md py-2 px-7"
						>
							<BsArchiveFill size={19} />
							Archive
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default SingleChat;
