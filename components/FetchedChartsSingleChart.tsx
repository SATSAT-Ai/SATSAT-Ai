"use client";

import { Ichat } from "@/interface";
import Link from "next/link";
import { PiChatCircleTextFill } from "react-icons/pi";
import { SlOptionsVertical } from "react-icons/sl";
import { useState, useRef } from "react";

const FetchedChartsSingleChart = ({
	pathname,
	chat,
}: {
	pathname: string;
	chat: Ichat;
}) => {
	const [showOptions, setShowOptions] = useState(false);

	const chatRef = useRef();

	const handleDelete = (chatId: string) => {
		//delete chat
	};

	return (
		<div
			key={chat.id}
			className="flex relative items-center gap-0 link-parent hover:bg-white/10 rounded-xl"
		>
			<Link
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
			<SlOptionsVertical
				ref={chatRef}
				size={15}
				color="white"
				className={` ${
					pathname.includes(chat.id) ? "" : "option"
				} cursor-pointer`}
				onClick={() => setShowOptions((prev) => !prev)}
			/>
			{showOptions && (
				<div className="absolute z-10 right-3 top-10 bg-darker p-2 text-white text-[15px] rounded-lg">
					<ul className="flex items-center w-full text-[14px] font-medium flex-col gap-2 ">
						<li
							onClick={() => (handleDelete(chat.id), setShowOptions(false))}
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

export default FetchedChartsSingleChart;
