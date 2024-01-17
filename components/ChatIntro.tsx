"use client";

import IncomingMessage from "@/components/IncomingMessage";
import OutgoingMessage from "@/components/OutgoingMessage";
import ChatScrolltoBottom from "@/components/ChatScrolltoBottom";
import ChatScrolltoTop from "@/components/ChatScrolltoTop";
import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	KeyboardEvent,
} from "react";
import { IUser, IdeFault } from "./ChatMain";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { IoMdHelpCircleOutline } from "react-icons/io";
import TelegramIcon from "@mui/icons-material/Telegram";

interface IChatIntro {
	chatContainerRef: MutableRefObject<HTMLElement | null>;
	isOldConversation: boolean;
	scrollToTop: boolean;
	scrollToBottom: boolean;
	handleScrollToBottom: () => void;
	conversations: IUser[];
	handleSubmit: UseFormHandleSubmit<IdeFault, undefined>;
	onSubmit: (data: IdeFault) => void;
	loading: boolean;
	setShowHelpOptions: Dispatch<SetStateAction<boolean>>;
	handleTextAreaResize: (e: any) => void;
	handleKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
	helpOptionsRef: MutableRefObject<HTMLDivElement | null>;
	register: UseFormRegister<IdeFault>;
	showHelpOptions: boolean;
}

const ChatIntro = ({
	chatContainerRef,
	isOldConversation,
	scrollToTop,
	handleScrollToBottom,
	scrollToBottom,
	onSubmit,
	loading,
	conversations,
	handleSubmit,
	setShowHelpOptions,
	handleTextAreaResize,
	helpOptionsRef,
	register,
	handleKeyDown,
	showHelpOptions,
}: IChatIntro) => {
	const scrolltoTop = () => {
		if (chatContainerRef?.current) {
			chatContainerRef.current.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className=" flex flex-col gap-5 pt-5 px-5">
			<div className="fixed bottom-24 -translate-x-1/2 left-1/2">
				{scrollToTop && isOldConversation && (
					<ChatScrolltoTop scrolltoTop={scrolltoTop} />
				)}

				{scrollToBottom && (
					<ChatScrolltoBottom scrollToBottom={handleScrollToBottom} />
				)}
			</div>

			{conversations.map((conversation: IUser) => {
				if (conversation.from === "User") {
					return (
						<OutgoingMessage key={conversation.id} message={conversation} />
					);
				} else if (conversation.from === "Ai") {
					return (
						<IncomingMessage
							endingText={conversation.endingText as string}
							key={conversation.id}
							list={conversation.list!}
							firstText={conversation.firstText as string}
							typeWrite={true}
							// onTypingChange={onTypingChange}
						/>
					);
				}
			})}

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="text-white sticky bottom-3 p-5 mt-auto"
			>
				<div className="bg-[#071f07] rounded-lg max-w-3xl mx-auto">
					<div
						tabIndex={0}
						className="flex  w-full mt-auto border border-white items-center p-1 justify-between rounded-lg px-2 gap-5"
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
				<div ref={helpOptionsRef}>
					{showHelpOptions && (
						<div className="absolute bottom-36 right-16 bg-[#062506] shadow-md w-[200px] p-3 rounded-lg">
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
					{conversations.length < 1 && (
						<div
							onClick={() => setShowHelpOptions((prev) => !prev)}
							className="absolute active:scale-[1.04] bottom-24 cursor-pointer transition-colors duration-200 p-2 w-fit hover:bg-grey-light rounded-full bg-brand-green-darker right-16 "
						>
							<IoMdHelpCircleOutline color="white" size={25} />
						</div>
					)}
				</div>
			</form>
		</div>
	);
};

export default ChatIntro;
