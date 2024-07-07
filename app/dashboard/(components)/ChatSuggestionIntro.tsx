"use client";

import { IoMdHelpCircleOutline } from "react-icons/io";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import { useState, useRef, SetStateAction, Dispatch, useEffect } from "react";
import { IUser } from "./ChatMain";
import ChatInput from "./ChatInput";
import ToggleSidebars from "./ToggleSidebars";
import Image from "next/image";
import SatSatAiLogo from "@/public/SatSat-ai-logo-new.svg";

interface IchatIntro {
	conversationLength: number;
	chatContainerId: string | undefined;
	setConversations: Dispatch<SetStateAction<IUser[]>>;
}

const ChatSuggestionIntro = ({
	conversationLength,
	chatContainerId,
	setConversations,
}: IchatIntro) => {
	const helpOptionsRef = useRef<null | HTMLDivElement>(null);
	const [showHelpOptions, setShowHelpOptions] = useState(false);
	const [loading, setLoading] = useState(false);
	const [chatSuggestions, setChatSuggestions] = useState([
		{
			id: "skdjfksjdf",
			value: "Total income for the past quarter",
		},
		{
			id: "skdwerfjfksjdf",
			value: "Total income for the past quarter",
		},
		{
			id: "skdjsdfrfksjdf",
			value: "Total income for the past quarter",
		},
		{
			id: "skdjferwrksjdf",
			value: "Total income for the past quarter",
		},
	]);

	const fetchChatSuggestions = () => {
		//suggestions
	};

	return (
		<div className="flex flex-col items-center min-h-dvh">
			<ToggleSidebars />
			<div className="grow grid place-content-center h-full overflow-y-auto mb-auto flex-1 w-full">
				<div className="text-white text-text-60 flex mx-auto w-full items-center gap-2 h-auto font-bold justify-center">
					Sat
					<div className="bg-white rounded-full w-[60px] h-[60px] p-2">
						<Image className={"h-full w-full"} src={SatSatAiLogo} alt="logo" />
					</div>
					atAi
				</div>
				<h2 className="font-medium mx-auto w-fit xl:mr-auto xl:w-full">
					Chat suggestions
				</h2>
				<div className="flex w-full flex-wrap xl:grid xl:grid-cols-2 justify-center gap-5">
					{chatSuggestions.map((suggestions) => {
						return (
							<button
								key={suggestions.id}
								type="button"
								className="border border-white/40 py-2 px-4 text-text-12 sm:text-text-normal hover:bg-brand-green/60 active:bg-brand-green/70 rounded-3xl"
							>
								{suggestions.value}
							</button>
						);
					})}
				</div>
			</div>
			{/* <div className="text-white left-auto right-auto p-5 sticky bottom-0 w-full mt-auto">
				<div
					ref={helpOptionsRef}
					className="max-w-3xl absolute  bottom-28 right-5 ml-auto"
				>
					{showHelpOptions && (
						<div className="right-1 absolute bottom-14 bg-[#062506] shadow-md w-[200px] p-3 rounded-lg">
							<ul className="flex cursor-pointer items-start w-full text-[14px] font-medium flex-col gap-1 ">
								<li
									onClick={() => setShowHelpOptions(false)}
									className=" text-[13px] hover:bg-brand-green text-white active:scale-[1.03] p-2 w-full rounded-lg"
								>
									<Link
										target="_blank"
										href="/faq"
										className="flex gap-2 items-center"
									>
										<HiOutlineExternalLink size={20} />
										Help & FAQ
									</Link>
								</li>
								<li
									onClick={() => setShowHelpOptions(false)}
									className="text-[13px] hover:bg-brand-green text-white active:scale-[1.03] p-2 w-full rounded-lg"
								>
									<Link
										target="_blank"
										href={"/contact"}
										className="flex gap-2 items-center"
									>
										<HiOutlineExternalLink size={20} />
										Contact Support
									</Link>
								</li>
								<li
									onClick={() => setShowHelpOptions(false)}
									className="text-[13px] hover:bg-brand-green text-white active:scale-[1.03] p-2 w-full rounded-lg"
								>
									<Link
										target="_blank"
										href={"/terms-and-conditions"}
										className="flex items-center  gap-2"
									>
										<HiOutlineExternalLink size={20} />
										Terms & Conditions
									</Link>
								</li>
							</ul>
						</div>
					)}
					{conversationLength < 1 && (
						<div
							onClick={() => setShowHelpOptions((prev) => !prev)}
							className="ml-auto active:scale-[1.04] cursor-pointer  transition-colors duration-200 p-2 w-fit hover:bg-grey-light rounded-full bg-brand-green-darker"
						>
							<IoMdHelpCircleOutline color="white" size={25} />
						</div>
					)}
				</div>
			</div> */}
			<ChatInput
				setConversations={setConversations}
				chatContainerId={chatContainerId}
				loading={loading}
			/>
		</div>
	);
};

export default ChatSuggestionIntro;
