"use client";

import IncomingMessage from "@/components/IncomingMessage";
import OutgoingMessage from "@/components/OutgoingMessage";
import ChatScrolltoBottom from "@/components/ChatScrolltoBottom";
import ChatScrolltoTop from "@/components/ChatScrolltoTop";
import { useRef, useState, KeyboardEvent, useLayoutEffect } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useForm } from "react-hook-form";

type Messagefrom = "User" | "Ai";
export interface IUser {
	from: Messagefrom;
	message: string;
}

interface AiMessage {
	from: Messagefrom;
	id: string;
	firstText: string;
	list: { id: string; title: string; msg: string }[];
	endingText: string;
}

interface Idefault {
	userMessage: string;
}

const ChatMain = ({ chatContainerId }: { chatContainerId?: string }) => {
	const chatContainerRef = useRef<null | HTMLElement>(null);
	const [scrollToBottom, setScrollToBottom] = useState(false);
	const [scrollToTop, setScrollToTop] = useState(false);

	const {
		formState: { errors },
		register,
		watch,
		handleSubmit,
		reset,
		setFocus,
	} = useForm<Idefault>();

	// const [conversations, setConversations] = useState<IUser[]>([
	// 	{
	// 		from: "User",
	// 		message: "Can you show me my monthly spending trends?",
	// 	},
	// 	{
	// 		id: "lorem",
	// 		from: "Ai",
	// 		firstText: `Of course! Here's a breakdown of your monthly spending trends`,
	// 		list: [
	// 			{ id: "lorem", title: "", msg: "January:GHS 1500" },
	// 			{ id: "loreem", title: "", msg: "Febuary:GHS 1800" },
	// 			{ id: "3loreem", title: "", msg: "March:GHS 1400" },
	// 		],
	// 		endingText: `Is there anything else you'd like to inquire about?`,
	// 	},
	// 	{
	// 		from: "User",
	// 		message: "What about my total income for the past quarter?",
	// 	},
	// 	{
	// 		id: "lorem",
	// 		from: "Ai",
	// 		firstText: `Of course! Here's a breakdown of your monthly spending trends`,
	// 		list: [
	// 			{ id: "lorem", title: "", msg: "January:GHS 1500" },
	// 			{ id: "loreem", title: "", msg: "Febuary:GHS 1800" },
	// 			{ id: "3loreem", title: "", msg: "March:GHS 1400" },
	// 		],
	// 		endingText: `Is there anything else you'd like to inquire about?`,
	// 	},
	// 	{
	// 		from: "User",
	// 		message: "What about my total income for the past quarter?",
	// 	},
	// 	{
	// 		id: "lorem",
	// 		from: "Ai",
	// 		firstText: `Of course! Here's a breakdown of your monthly spending trends`,
	// 		list: [
	// 			{ id: "lorem", title: "", msg: "January:GHS 1500" },
	// 			{ id: "loreem", title: "", msg: "Febuary:GHS 1800" },
	// 			{ id: "3loreem", title: "", msg: "March:GHS 1400" },
	// 		],
	// 		endingText: `Is there anything else you'd like to inquire about?`,
	// 	},
	// 	{
	// 		from: "User",
	// 		message: "What about my total income for the past quarter?",
	// 	},
	// ]);

	const [conversations, setConversations] = useState<IUser[]>([]);

	const fetchConversations = () => {
		if (chatContainerId) {
			//fetchdata for containerID
		} else {
			//create a new id and start a new conv.
		}
	};

	const handleTextAreaResize = (e: any) => {
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	const onSubmit = (data: Idefault) => {
		//if there is no chatContainerId create one or add up to existing;
		if (data.userMessage.trim()) {
			//sendMessage;

			setConversations((prev) => [
				...prev,
				{
					message: data.userMessage,
					from: "User",
				},
			]);
			setFocus("userMessage", { shouldSelect: true });
			reset();
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		const WatchedUserMessage = watch("userMessage");

		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			//sendMesssage
			if (WatchedUserMessage?.trim()) {
				setConversations((prev) => [
					...prev,
					{
						message: WatchedUserMessage,
						from: "User",
					},
				]);

				reset();
			}
		}
	};

	const scrolltoTop = () => {
		if (chatContainerRef?.current) {
			chatContainerRef.current.scrollTo({
				top: 0,
				behavior: "smooth",
			});
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

	useLayoutEffect(() => {
		handleScrollToBottom();

		const handleScroll = () => {
			const containerRef = chatContainerRef.current;
			if (containerRef) {
				const scrollHeight = containerRef.scrollHeight;
				const clientHeight = containerRef.clientHeight;
				const scrollTop = containerRef.scrollTop;

				setScrollToTop(scrollTop === scrollHeight - clientHeight);

				setScrollToBottom(
					clientHeight < scrollHeight &&
						scrollTop + clientHeight < scrollHeight - 100
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
			{conversations.length >= 1 ? (
				<main
					ref={chatContainerRef}
					className=" text-white w-full flex flex-col gap-5  p-5 
				custom-scroll2 relative overflow-auto h-screen max-w-4xl mx-auto"
				>
					{scrollToTop && <ChatScrolltoTop scrolltoTop={scrolltoTop} />}

					{scrollToBottom && (
						<ChatScrolltoBottom scrollToBottom={handleScrollToBottom} />
					)}

					{/* main chats */}
					{conversations.map((conversation) => {
						if (conversation.from === "User") {
							return (
								<OutgoingMessage
									key={conversation.message}
									message={conversation as IUser}
								/>
							);
						} else if (conversation.from === "Ai") {
							return (
								<IncomingMessage
									key={conversation.message}
									message={conversation as unknown as AiMessage}
								/>
							);
						}
					})}
				</main>
			) : (
				<main className=" flex flex-col h-full items-center justify-center px-3">
					<h1 className="text-white text-text-40 text-center sm:text-text-60">
						SATSAT AI
					</h1>
					<div className="text-white mt-10 max-w-xs md:max-w-full">
						<h2 className="font-medium mx-auto w-fit xl:mr-auto xl:w-full">
							Chat suggestions
						</h2>
						<div className="flex justify-center flex-wrap gap-5">
							<div className="flex flex-col gap-5">
								<button
									type="button"
									className="border border-white py-2 px-4 text-text-12 sm:text-text-normal hover:bg-brand-green/20 active:scale-[1.01] rounded-3xl"
								>
									Total income for the past quarter
								</button>
								<button
									type="button"
									className="border border-white py-2 px-4 text-text-12 sm:text-text-normal hover:bg-brand-green/20 active:scale-[1.01] rounded-3xl"
								>
									Total income for the past quarter
								</button>
							</div>
							<div className="flex flex-col gap-5">
								<button
									type="button"
									className="border border-white py-2 px-4 text-text-12 sm:text-text-normal hover:bg-brand-green/20 active:scale-[1.01] rounded-3xl"
								>
									Total income for the past quarter
								</button>
								<button
									type="button"
									className="border border-white py-2 px-4 text-text-12 sm:text-text-normal hover:bg-brand-green/20 active:scale-[1.01] rounded-3xl"
								>
									Total income for the past quarter
								</button>
							</div>
						</div>
					</div>
				</main>
			)}
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="text-white sticky bottom-0 p-5  "
			>
				<div className="bg-[#071f07] rounded-lg max-w-3xl mx-auto">
					<div
						tabIndex={0}
						className="flex  w-full mt-auto border border-white items-center p-1 justify-between rounded-lg px-2 gap-5"
					>
						<textarea
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
						<button type="submit">
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

export default ChatMain;
