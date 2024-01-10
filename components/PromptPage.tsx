"use client";

import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";
import TelegramIcon from "@mui/icons-material/Telegram";
import {
	useState,
	KeyboardEvent,
	useRef,
	useLayoutEffect,
	useEffect,
} from "react";
import { AiMessage, IUser, IdeFault } from "./ChatMain";
import { useForm } from "react-hook-form";
import ChatScrolltoBottom from "@/components/ChatScrolltoBottom";

const PromptPage = () => {
	const { register, watch, handleSubmit, reset, setFocus } =
		useForm<IdeFault>();

	const chatContainerRef = useRef<null | HTMLDivElement>(null);
	const inputRef = useRef<null | HTMLDivElement>(null);
	const [scrollToBottom, setScrollToBottom] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isFirstChat, setIsFirstChat] = useState(false);
	const [glow, setGlow] = useState(true);

	const [conversations, setConversations] = useState([
		{
			message: "Can you show me my monthly spending trends?",
			from: "User",
		},
		{
			id: "lorcerm",
			from: "Ai",
			firstText: `Of course! Here's a breakdown of your monthly spending trends`,
			list: [
				{ id: "lorem", title: "", msg: "January:GHS 1500" },
				{ id: "loreem", title: "", msg: "Febuary:GHS 1800" },
				{ id: "3loreem", title: "", msg: "March:GHS 1400" },
			],
			endingText: `Is there anything else you'd like to inquire about?`,
		},
		{
			from: "User",
			message: "What about my total income for the past quarter?",
		},
		{
			from: "Ai",
			id: "lorem",
			firstText: `Your total income for the past quarter is GHS 10,500.`,
			list: [],
			endingText: `Is there anything else you'd like to inquire about?`,
		},
	]);

	useLayoutEffect(() => {
		handleScrollToBottom();

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
			//sendMesssage
			if (WatchedUserMessage?.trim()) {
				setConversations((prev) => [
					...prev,
					{
						message: WatchedUserMessage,
						from: "User",
					},
					{
						from: "Ai",
						id: "lore34m",
						firstText: `Here is a demo response from satsat Ai.`,
						list: [],
						endingText: `Is there anything else you'd like to inquire about?`,
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
		//if there is no chatContainerId create one or add up to existing;
		if (data?.userMessage?.trim()) {
			//sendMessage;

			setConversations((prev) => [
				...prev,
				{
					message: data.userMessage,
					from: "User",
				},
				{
					from: "Ai",
					id: "lore34m",
					firstText: `Alright your total income for the past quarter is GHS 10,500.`,
					list: [],
					endingText: `Is there anything else you'd like to inquire about?`,
				},
			]);
			setFocus("userMessage", { shouldSelect: true });
			reset();
		}
	};

	return (
		<div className="flex flex-col z-0 md:gap-0 p-5 sm:p-7 lg:flex-row text-grey-lightest h-full lg:h-[800px] gap-7">
			<div className="pb-5 lg:pb-0 lg:pr-5 flex-1">
				<ul className="flex text-center items-center sm:text-left gap-3 flex-col">
					<li>
						<p className="mb-2 capitalize text-brand-green text-text-20">
							Streamline your finances with smart chatbot analysis
						</p>
						<span className="text-text-normal font-normal">
							Managing your finances has never been this intuitive and
							hassle-free. Our platform empowers you to effortlessly interact
							with your financial data through our advanced AI chatbot. Simply
							upload your bank statement, and within moments, gain access to a
							wealth of insights and trends about your spending habits, income
							sources, and more. No more crunching numbers or deciphering
							complex spreadsheets. Our user-friendly chat interface puts all
							the information you need at your fingertips.
						</span>
					</li>
					<li>
						<p className="mb-2 capitalize text-brand-green text-text-20">
							Gain Valuable insights instantly
						</p>
						<span className="text-text-normal font-normal">
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
						<p className="mb-2 capitalize text-brand-green text-text-20">
							Secure, Effortless, and Personalized
						</p>
						<span className="text-text-normal font-normal">
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
					className=" text-white p-5 w-full custom-scroll2 relative overflow-y-auto overflow-x-clip lg:overscroll-y-none h-[450px] md:h-full"
				>
					<div
						className={`bottom-0 ${
							scrollToBottom ? "visible" : "invisible"
						} sticky ml-3 top-[60%] md:top-[75%]`}
					>
						<ChatScrolltoBottom scrollToBottom={handleScrollToBottom} />
					</div>

					<ul className="w-full flex flex-col gap-5 h-[450px]">
						{conversations.map((conversation) => {
							if (conversation.from === "User") {
								return (
									<li key={conversation.message}>
										<OutgoingMessage
											message={conversation as IUser}
											fontSize={17}
										/>
									</li>
								);
							} else if (conversation.from === "Ai") {
								return (
									<li key={conversation.id}>
										<IncomingMessage
											message={conversation as unknown as AiMessage}
											fontSize={17}
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
									placeholder="Chat SATSAT AI..."
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
