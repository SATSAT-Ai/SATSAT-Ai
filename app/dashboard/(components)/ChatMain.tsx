"use client";

import { useRef, useState, KeyboardEvent, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { ChatContext } from "@/context/ChatContext";
import ToggleSidebars from "./ToggleSidebars";
import ChatPage from "./ChatPage";
import ChatSuggestionIntro from "./ChatSuggestionIntro";

type MessageFrom = "User" | "Ai";
export interface IUser {
	from: MessageFrom;
	id: string;
	message?: string;
	list?: { id: string; msg: string }[];
	firstText?: string;
	endingText?: string;
}

export interface IdeFault {
	userMessage: string;
}

const ChatMain = ({ chatContainerId }: { chatContainerId?: string }) => {
	const chatContainerRef = useRef<null | HTMLDivElement>(null);
	const helpOptionsRef = useRef<null | HTMLDivElement>(null);
	const [scrollToBottom, setScrollToBottom] = useState(false);
	const [scrollToTop, setScrollToTop] = useState(false);
	const [showHelpOptions, setShowHelpOptions] = useState(false);
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState<IUser[]>([]);
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

	const {
		formState: { errors },
		register,
		watch,
		handleSubmit,
		reset,
		setFocus,
	} = useForm<IdeFault>();

	const { isOldConversation, setIsOldConversation } = useContext(ChatContext);

	const fetchConversations = () => {
		if (chatContainerId) {
			//fetchData for containerID
		} else {
			//create a new id and start a new conversation.
		}
	};

	const fetchChatSuggestions = () => {
		//suggestions
	};

	const handleTextAreaResize = (e: any) => {
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	const onSubmit = (data: IdeFault) => {
		//if there is no chatContainerId create one or add up to existing;
		if (data.userMessage.trim()) {
			//sendMessage;
			setConversations((prev) => [
				...prev,
				{
					id: "skdfksdjf",
					message: data.userMessage,
					from: "User",
				},

				{
					from: "Ai",
					id: "lore34m",
					firstText: "Here is a demo response from SatSat AI.",
					list: [],
					endingText: `Is there anything else you'd like to inquire about?`,
				},
			]);
			setFocus("userMessage", { shouldSelect: true });
			reset();
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		const WatchedUserMessage = watch("userMessage");

		if (e.key === "Enter" && !e.shiftKey) {
			if (chatContainerId && isOldConversation) {
				//remove scroll to top if old conversation is continued
				setIsOldConversation(false);
			}
			e.preventDefault();
			//sendMessage
			if (WatchedUserMessage?.trim()) {
				setConversations((prev) => [
					...prev,
					{
						id: "skdfjkjr",
						message: WatchedUserMessage,
						from: "User",
					},
					{
						from: "Ai",
						id: "lore34m",
						firstText: "Here is a demo response from SatSat AI.",
						list: [
							{ id: "lorem", msg: "January:GHS 1500" },
							{ id: "lorem", msg: "February:GHS 1800" },
							{ id: "lorem", msg: "March:GHS 1400" },
						],
						endingText: `Is there anything else you'd like to inquire about? Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?`,
					},
				]);

				reset();
			}
		}
	};

	const handleScrollToBottom = () => {
		if (chatContainerRef?.current) {
			chatContainerRef.current.scrollTo({
				top: chatContainerRef.current.scrollHeight,
				behavior: "smooth",
			});
		}
	};

	useEffect(() => {
		handleScrollToBottom();

		const handleScroll = () => {
			const containerRef = chatContainerRef.current;
			if (containerRef) {
				const clientHeight = containerRef.clientHeight;
				const scrollHeight = containerRef.scrollHeight;
				const scrollTop = containerRef.scrollTop;

				setScrollToTop(scrollTop === scrollHeight - clientHeight);

				setScrollToBottom(
					clientHeight < scrollHeight &&
						scrollTop + clientHeight < scrollHeight - 180
				);
			}
		};
		const containerRef = chatContainerRef.current;
		containerRef?.addEventListener("scroll", handleScroll);

		return () => {
			containerRef?.removeEventListener("scroll", handleScroll);
		};
	}, [conversations]);

	return (
		<>
			<main className="flex flex-[3] w-full flex-col">
				<div
					ref={chatContainerRef}
					className=" text-white w-full h-full
					custom-scroll2 relative flex flex-col justify-between overflow-y-auto"
				>
					<ToggleSidebars />
					{conversations.length >= 1 ? (
						<ChatPage
							chatContainerRef={chatContainerRef}
							scrollToTop={scrollToTop}
							handleScrollToBottom={handleScrollToBottom}
							scrollToBottom={scrollToBottom}
							isOldConversation={isOldConversation}
							conversations={conversations}
							handleSubmit={handleSubmit}
							onSubmit={onSubmit}
							loading={loading}
							handleTextAreaResize={handleTextAreaResize}
							handleKeyDown={handleKeyDown}
							register={register}
						/>
					) : (
						<ChatSuggestionIntro
							loading={loading}
							handleSubmit={handleSubmit}
							onSubmit={onSubmit}
							handleTextAreaResize={handleTextAreaResize}
							handleKeyDown={handleKeyDown}
							register={register}
							helpOptionsRef={helpOptionsRef}
							showHelpOptions={showHelpOptions}
							chatSuggestions={chatSuggestions}
							setShowHelpOptions={setShowHelpOptions}
							conversationLength={conversations.length}
						/>
					)}
				</div>
			</main>
		</>
	);
};

export default ChatMain;
