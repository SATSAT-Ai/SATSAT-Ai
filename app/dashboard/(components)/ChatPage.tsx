"use client";

import { MutableRefObject, KeyboardEvent } from "react";
import { IUser, IdeFault } from "./ChatMain";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import TelegramIcon from "@mui/icons-material/Telegram";
import OutgoingMessage from "./OutgoingMessage";
import IncomingMessage from "./IncomingMessage";
import ChatScrollToTop from "@/app/dashboard/(components)/ChatScrollToTop";
import ChatScrollToBottom from "@/app/dashboard/(components)/ChatScrollToBottom";

interface IChatPage {
	chatContainerRef: MutableRefObject<HTMLElement | null>;
	isOldConversation: boolean;
	scrollToTop: boolean;
	scrollToBottom: boolean;
	handleScrollToBottom: () => void;
	conversations: IUser[];
	handleSubmit: UseFormHandleSubmit<IdeFault, undefined>;
	onSubmit: (data: IdeFault) => void;
	loading: boolean;
	handleTextAreaResize: (e: any) => void;
	handleKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
	register: UseFormRegister<IdeFault>;
}

const ChatPage = ({
	chatContainerRef,
	isOldConversation,
	scrollToTop,
	handleScrollToBottom,
	scrollToBottom,
	onSubmit,
	loading,
	conversations,
	handleSubmit,
	handleTextAreaResize,
	register,
	handleKeyDown,
}: IChatPage) => {
	const handleScrollToTop = () => {
		if (chatContainerRef?.current) {
			chatContainerRef.current.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className=" flex flex-col gap-5 h-full pt-5 px-5">
			<div className="fixed bottom-32 -translate-x-1/2 left-1/2">
				{scrollToTop && isOldConversation && (
					<ChatScrollToTop scrollToTop={handleScrollToTop} />
				)}

				{scrollToBottom && (
					<ChatScrollToBottom scrollToBottom={handleScrollToBottom} />
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
						/>
					);
				}
			})}

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="text-white sticky bottom-5 w-full p-5 mt-auto"
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
							placeholder="Message SatSat AI..."
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
		</div>
	);
};

export default ChatPage;
