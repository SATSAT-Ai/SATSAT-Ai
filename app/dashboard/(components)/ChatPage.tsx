"use client";

import { MutableRefObject, KeyboardEvent } from "react";
import { IUser, IdeFault } from "./ChatMain";
import { UseFormHandleSubmit, UseFormRegister } from "react-hook-form";
import OutgoingMessage from "./OutgoingMessage";
import IncomingMessage from "./IncomingMessage";
import ChatScrollToTop from "@/app/dashboard/(components)/ChatScrollToTop";
import ChatScrollToBottom from "@/app/dashboard/(components)/ChatScrollToBottom";
import ChatInput from "./ChatInput";

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
							// chatContainerRef={chatContainerRef}
						/>
					);
				}
			})}

			<form
				onSubmit={handleSubmit(onSubmit)}
				className="text-white sticky bottom-5 w-full p-5 mt-auto"
			>
				<ChatInput
					handleKeyDown={handleKeyDown}
					handleTextAreaResize={handleTextAreaResize}
					loading={loading}
					register={register}
				/>
			</form>
		</div>
	);
};

export default ChatPage;
