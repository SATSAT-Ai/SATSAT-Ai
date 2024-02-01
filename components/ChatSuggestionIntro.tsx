"use client";

import { IoMdHelpCircleOutline } from "react-icons/io";
import { HiOutlineExternalLink } from "react-icons/hi";
import TelegramIcon from "@mui/icons-material/Telegram";

import Link from "next/link";
import {
	KeyboardEvent,
	MutableRefObject,
	Dispatch,
	SetStateAction,
} from "react";
import { IdeFault } from "./ChatMain";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";

interface IchatIntro {
	handleSubmit: UseFormHandleSubmit<IdeFault, undefined>;
	onSubmit: (data: IdeFault) => void;
	loading: boolean;
	handleTextAreaResize: (e: any) => void;
	handleKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
	register: UseFormRegister<IdeFault>;
	helpOptionsRef: MutableRefObject<HTMLDivElement | null>;
	showHelpOptions: boolean;
	setShowHelpOptions: Dispatch<SetStateAction<boolean>>;
	conversationLength: number;
	chatSuggestions: {
		id: string;
		value: string;
	}[];
}

const ChatSuggestionIntro = ({
	handleSubmit,
	onSubmit,
	loading,
	handleKeyDown,
	handleTextAreaResize,
	register,
	helpOptionsRef,
	showHelpOptions,
	conversationLength,
	setShowHelpOptions,
	chatSuggestions,
}: IchatIntro) => {
	return (
		<>
			<div className="w-full flex h-full flex-col items-center justify-center overflow-y-auto custom-scroll">
				<h1 className="text-white text-text-40 mb-0 text-center sm:text-text-60">
					SATSAT AI
				</h1>
				<div className="text-white mt-10 max-w-xs md:max-w-2xl mx-auto">
					<h2 className="font-medium mx-auto w-fit xl:mr-auto xl:w-full">
						Chat suggestions
					</h2>
					<div className="flex flex-wrap xl:grid xl:grid-cols-2 justify-center gap-5">
						{chatSuggestions.map((suggestions) => {
							return (
								<button
									key={suggestions.id}
									type="button"
									className="border border-white py-2 px-4 text-text-12 sm:text-text-normal hover:bg-brand-green/20 active:scale-[1.01] rounded-3xl"
								>
									{suggestions.value}
								</button>
							);
						})}
					</div>
				</div>
			</div>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="text-white sticky  left-auto right-auto bottom-5 p-5  max-w-3xl mx-auto w-full mt-auto"
			>
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
				<div className="bg-[#071f07] rounded-lg max-w-3xl w-full order-1 mx-auto">
					<div
						tabIndex={0}
						className="flex w-full mt-auto border border-white items-center p-1 justify-between rounded-lg px-2 gap-5"
					>
						<textarea
							disabled={loading}
							rows={1}
							onInput={(e) => handleTextAreaResize(e)}
							autoFocus
							autoCorrect="true"
							onKeyDown={(e) => (handleKeyDown(e), handleTextAreaResize(e))}
							className="w-full text-text-normal scrollbar-hidden placeholder:text-white/70 placeholder:text-text-normal outline-none bg-brand-green border-none h-auto bg-transparent"
							placeholder="Message SATSAT AI..."
							{...register("userMessage", {
								required: false,
							})}
						/>
						<button type="submit" disabled={loading}>
							<TelegramIcon
								tabIndex={0}
								fontSize="large"
								className="active:scale-[1.02]"
								color="inherit"
								aria-hidden="false"
							/>
						</button>
					</div>
				</div>
			</form>
		</>
	);
};

export default ChatSuggestionIntro;
