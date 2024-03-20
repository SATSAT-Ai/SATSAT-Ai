"use client";

import { IUser, IdeFault } from "@/app/dashboard/(components)/ChatMain";
import ChatScrollToBottom from "@/app/dashboard/(components)/ChatScrollToBottom";
import IncomingMessage from "@/app/dashboard/(components)/IncomingMessage";
import OutgoingMessage from "@/app/dashboard/(components)/OutgoingMessage";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useState, KeyboardEvent, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

const PromptPage = () => {
	const { register, watch, handleSubmit, reset, setFocus } =
		useForm<IdeFault>();

	const chatContainerRef = useRef<null | HTMLDivElement>(null);
	const inputRef = useRef<null | HTMLDivElement>(null);
	const [scrollToBottom, setScrollToBottom] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isFirstChat, setIsFirstChat] = useState(false);
	const [glow, setGlow] = useState(true);

	const [conversations, setConversations] = useState<IUser[]>([
		{
			id: "skdjfksdjf",
			message: "Can you show me my monthly spending trends?",
			from: "User",
		},

		{
			from: "Ai",
			id: "lorcermk",
			firstText: "Here is a demo response from SatSat AI.",

			list: [
				{ id: "lorem", msg: "January:GHS 1500" },
				{ id: "lorem", msg: "February:GHS 1800" },
				{ id: "lorem", msg: "March:GHS 1400" },
			],
			endingText: `Is there anything else you'd like to inquire about?`,
		},

		{
			id: "skdjfkwer",
			from: "User",
			message: "What about my total income for the past quarter?",
		},
		{
			from: "Ai",
			id: "lorem",
			firstText: "Here is a demo response from SatSat AI.",

			list: [],
			endingText: `Is there anything else you'd like to inquire about?`,
		},
	]);

	const handleScrollToBottom = () => {
		if (chatContainerRef?.current) {
			chatContainerRef.current.scrollTo({
				top: chatContainerRef.current.scrollHeight,
				behavior: "smooth",
			});
		}
	};

	useEffect(() => {
		handleScrollToBottom(); //scroll to chat bottom when page loads

		//show the scrollToBottom icon when user is above threshold
		const handleScroll = () => {
			const containerRef = chatContainerRef.current;
			if (containerRef) {
				const scrollHeight = containerRef.scrollHeight;
				const clientHeight = containerRef.clientHeight;
				const scrollTop = containerRef.scrollTop;

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

	const handleTextAreaResize = (e: any) => {
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		const WatchedUserMessage = watch("userMessage");

		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			if (!isFirstChat && WatchedUserMessage?.trim()) {
				///clear default chats when user  initiate first conversation
				setConversations([]);
				setIsFirstChat(true);
			}
			//sendMessage
			if (WatchedUserMessage?.trim()) {
				setConversations((prev) => [
					...prev,
					{
						id: WatchedUserMessage.slice(0, 10),
						message: WatchedUserMessage?.trim(),
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

				reset();
			}
		}
	};

	useEffect(() => {
		const glowInput = (event: MouseEvent) => {
			if (!inputRef.current?.contains(event.target as Node)) {
				setGlow(true);
			} else {
				setGlow(false);
			}
		};

		window.addEventListener("mousedown", glowInput);

		return () => {
			window.removeEventListener("mousedown", glowInput);
		};
	}, []);

	const onSubmit = (data: IdeFault) => {
		if (!isFirstChat && data.userMessage?.trim()) {
			///clear default chats when user  initiate first conversation
			setConversations([]);
			setIsFirstChat(true);
		}

		if (data?.userMessage?.trim()) {
			//sendMessage;
			setConversations((prev) => [
				...prev,
				{
					id: data.userMessage.slice(0, 10),
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

	return (
		<div className="flex flex-col z-0 md:gap-0 p-3 sm:p-7 lg:flex-row text-white h-full lg:h-[800px] gap-7">
			<div className="pb-5 lg:pb-0 lg:pr-5 flex-1">
				<ul className="flex text-center items-center sm:text-left flex-col gap-5">
					<li>
						<p className="mb-2 capitalize text-brand-green text-text-20 md:text-text-24">
							Streamline your finances with smart chatbot analysis
						</p>
						<span className="text-text-14 sm:text-text-normal font-normal">
							Managing your finances has never been this intuitive and
							hassle-free. Our platform empowers you to effortlessly interact
							with your financial data through our advanced AI chatbot. Simply
							upload your financial statement, and within moments, gain access
							to a wealth of insights and trends about your spending habits,
							income sources, and more. No more crunching numbers or deciphering
							complex spreadsheets. Our user-friendly chat interface puts all
							the information you need at your fingertips.
						</span>
					</li>
					<li>
						<p className="mb-2 capitalize text-brand-green text-text-20 md:text-text-24">
							Gain Valuable insights instantly
						</p>
						<span className="text-text-14 sm:text-text-normal font-normal">
							With our financial statements analyzer, understanding your
							financial health is a breeze. Want to know your monthly spending
							trends? Curious about how much you spent on dining out last month?
							Our chatbot has you covered. It provides concise and clear
							summaries, ensuring you have a complete understanding of your
							financial situation without the headache of navigating complicated
							reports. Take control of your financial future with the insights
							you need, precisely when you need them.
						</span>
					</li>
					<li>
						<p className="mb-2 capitalize text-brand-green text-text-20 md:text-text-24">
							Secure, Effortless, and Personalized
						</p>
						<span className="text-text-14 sm:text-text-normal font-normal">
							Rest easy knowing your financial data is handled with the
							utmost,security. Our platform employs industry-leading encryption
							protocols to safeguard your sensitive information. Your data is
							for your eyes only.
						</span>
					</li>
				</ul>
			</div>
			<div className="flex flex-col gap-5 flex-1 w-full items-center">
				<div
					ref={chatContainerRef}
					className=" text-white px-2 sm:px-5 w-full custom-scroll2 relative overflow-y-auto overflow-x-clip lg:overscroll-y-none h-[450px] md:h-full"
				>
					<div
						className={`bottom-0 ${
							scrollToBottom ? "visible" : "invisible"
						} sticky ml-3 top-[60%] md:top-[75%]`}
					>
						<ChatScrollToBottom scrollToBottom={handleScrollToBottom} />
					</div>

					<ul className="w-full flex flex-col gap-5 h-[450px]">
						{conversations.map((conversation: IUser) => {
							if (conversation.from === "User") {
								return (
									<li key={conversation.id}>
										<OutgoingMessage message={conversation} />
									</li>
								);
							} else if (conversation.from === "Ai") {
								return (
									<li key={conversation.id}>
										<IncomingMessage
											key={conversation.id}
											list={conversation.list!}
											firstText={conversation.firstText as string}
											endingText={conversation.endingText as string}
											typeWrite={false}
										/>
									</li>
								);
							}
						})}
					</ul>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="text-white p-0 w-full mx-2 mt-auto"
				>
					<div className="bg-[#071f07] rounded-lg max-w-3xl mx-auto">
						<div
							className={`before:opacity-0 before:z-[-1] after:z-[-1] after:absolute after:top-[-1px] after:left-[-1px] before:rounded-lg after:rounded-lg rounded-lg before:absolute before:top-[-1px] before:left-[-1px] bg-transparent relative bg-gradient-to-tr from-[#050e0b] to-[#000000] justify-between custom-block text-text-normal text-white font-medium flex items-center gap-2 ${
								glow ? "glow4" : ""
							}`}
						>
							<div
								ref={inputRef}
								tabIndex={0}
								className={`flex w-full mt-auto ${
									glow ? "border-none" : " border-[1px]"
								} border-white border items-center p-1 justify-between rounded-lg px-2 gap-5`}
							>
								<textarea
									disabled={loading}
									rows={1}
									onInput={(e) => handleTextAreaResize(e)}
									autoCorrect="true"
									onKeyDown={(e) => (handleKeyDown(e), handleTextAreaResize(e))}
									className="w-full caret-brand-green text-text-normal scrollbar-hidden placeholder:text-white/70 placeholder:text-text-normal rounded-lg outline-none bg-brand-green border-none h-auto bg-transparent"
									placeholder="Chat SatSat AI..."
									{...register("userMessage", {
										required: false,
									})}
								/>
								<button
									type="submit"
									aria-label="send message"
									disabled={loading}
								>
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
					</div>
				</form>
			</div>
		</div>
	);
};

export default PromptPage;
