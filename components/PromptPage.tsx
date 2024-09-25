"use client";

import ChatInput, { IdeFault } from "@/app/dashboard/(components)/ChatInput";
import { conversationType } from "@/app/dashboard/(components)/ChatMain";
import ChatScrollToBottom from "@/app/dashboard/(components)/ChatScrollToBottom";
import IncomingMessage from "@/app/dashboard/(components)/IncomingMessage";
import OutgoingMessage from "@/app/dashboard/(components)/OutgoingMessage";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { useForm } from "react-hook-form";

const PromptPage = () => {
	const { watch, reset, setFocus } = useForm<IdeFault>();
	const chatContainerRef = useRef<null | HTMLDivElement>(null);
	const inputRef = useRef<null | HTMLDivElement>(null);
	const [scrollToBottom, setScrollToBottom] = useState(false);
	const [loading, setLoading] = useState(false);
	const [isFirstChat, setIsFirstChat] = useState(false);
	const [glow, setGlow] = useState(true);

	const [conversations, setConversations] = useState<conversationType[]>([]);

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

	// const getRandomHumorResponse = () => {
	// 	const humorResponses = [
	// 		"Don't let the beta label fool you! SatSat AI is constantly learning and evolving. While we're still under development, we can already provide valuable insights and guidance to help you manage your finances more effectively.  Think of it as having your own personal financial guru in training!",
	// 		"We understand the importance of financial security. That's why SatSat AI is built on a foundation of cutting-edge technology and data analysis. While we're still in beta, we're confident in our ability to empower you to make informed financial decisions.  Consider us your financial co-pilot, navigating the complexities of money with you!",
	// 		"Shhh, it's a secret, but my financial knowledge is still under wraps! SatSat AI is in beta, so my responses might be a bit limited for now. But hey, think of it as a surprise gift – you never know what financial wisdom I might unlock next! (Just don't expect me to predict winning lottery numbers...yet!)",
	// 		"I'm like a financial apprentice, eager to learn but still mastering the craft! SatSat AI is in beta, so my responses might be a bit restricted for now. But with your help and feedback, I'll become a financial guru in no time! (Maybe then I can help you decipher those mind-boggling bank statements!)",
	// 		"Imagine a financial expert with a temporary case of laryngitis – that's kind of where I'm at! SatSat AI is in beta, so my responses might be shorter than usual. But fear not, I'm constantly learning and expanding my voice! (Just be patient, and who knows, maybe I'll even sing you a financial lullaby someday!)",
	// 		"Don't let the beta label fool you! While my responses might be limited for now, SatSat AI is constantly learning and evolving. With your help, I'll become a powerful tool to help you manage your finances with confidence. (Think of it as having a financial mentor in training, eager to impress!)",
	// 		"Even a baby can take its first steps! SatSat AI is in beta, so my responses might be a bit restricted at times. But just like a growing child, I'm constantly learning and expanding my abilities.  (Think of it as having a financial sidekick who's always getting smarter!)",
	// 		"I'm like a library with a few missing books – still valuable, but not quite complete! SatSat AI is in beta, so my responses might be limited at times. But don't worry, with your help and feedback, I'll fill those knowledge gaps and become your one-stop financial resource! (Think of us as financial detectives, working together to unlock all the financial mysteries!)",
	// 		"The future of finance is here, and you have a front-row seat! SatSat AI, though in beta, offers a glimpse into a world of personalized financial management. We're constantly learning and growing, and with your help, we'll become an indispensable tool for anyone looking to take control of their financial well-being.  Think of us as your financial fitness coach, still perfecting the workout plan, but ready to get you in financial shape!",
	// 		"I'm still under development, so I can't answer everything. But hey, SatSat AI is about to move from beta, and with your help, we'll become your ultimate financial sidekick! (Think of it as having a financial trainee eager to impress!)",
	// 		"As an AI language model, I can help you understand your finances better. SatSat AI might be in beta, but we're already analyzing data like a champ! (Just don't expect us to explain every economic theory in existence...yet!)",
	// 		"My financial knowledge is like a delicious pizza - still in the oven, but the base is strong! SatSat AI is in beta, but we're constantly in beta and evolving to become your one-stop financial shop. (Maybe future versions can even recommend the best pizza toppings for your budget!)",
	// 		"Financial security is our top priority. SatSat AI (currently in beta) leverages cutting-edge technology to analyze your finances and empower informed decisions.  (Consider us your financial co-pilot, navigating the complexities of money with you!)",
	// 	];

	// 	const randomIndex = Math.floor(Math.random() * humorResponses.length);
	// 	return humorResponses[randomIndex];
	// };

	// const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
	// 	const WatchedUserMessage = watch("userMessage");

	// 	if (e.key === "Enter" && !e.shiftKey) {
	// 		e.preventDefault();
	// 		if (!isFirstChat && WatchedUserMessage?.trim()) {
	// 			///clear default chats when user  initiate first conversation
	// 			setConversations([]);
	// 			setIsFirstChat(true);
	// 		}
	// 		//sendMessage
	// 		if (WatchedUserMessage?.trim()) {
	// 			setConversations((prev) => [
	// 				...prev,
	// 				{
	// 					from: "user",
	// 					id: "sdf9",
	// 					message: WatchedUserMessage,
	// 				},
	// 				{
	// 					from: "ai",
	// 					id: "df9",
	// 					response: [getRandomHumorResponse()],
	// 				},
	// 			]);

	// 			reset();
	// 		}
	// 	}
	// };

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

	// const onSubmit = (data: IdeFault) => {
	// 	if (!isFirstChat && data.userMessage?.trim()) {
	// 		///clear default chats when user  initiate first conversation
	// 		setConversations([]);
	// 		setIsFirstChat(true);
	// 	}

	// 	if (data.userMessage.trim()) {
	// 		//sendMessage;
	// 		setConversations((prev) => [
	// 			...prev,
	// 			{
	// 				from: "user",
	// 				id: "sdf9",
	// 				message: data.userMessage,
	// 			},
	// 			{
	// 				from: "ai",
	// 				id: "df9",
	// 				response: [getRandomHumorResponse()],
	// 			},
	// 		]);
	// 		setFocus("userMessage", { shouldSelect: true });
	// 		reset();
	// 	}
	// };

	return (
		<div className="flex flex-col z-0 md:gap-0 p-3 w-full sm:p-7 rounded-3xl lg:flex-row text-white h-[500px] md:h-[700px]">
			<div className="pb-5 lg:pb-0 lg:pr-5 hidden xl:flex flex-1">
				<ul className="flex items-center text-left flex-col justify-between h-full">
					<li>
						<p className="mb-2 capitalize text-brand-green text-text-20 md:text-[30px] font-semibold">
							Streamline your finances with smart chatbot analysis
						</p>
						<span className="text-text-normal font-normal">
							Managing your finances has never been this intuitive and
							hassle-free. Our platform empowers you to effortlessly interact
							with your financial data through our advanced Ai. Simply upload
							your financial statement, and within moments, gain access to a
							wealth of insights and trends about your spending habits, income
							sources, and more. Our user-friendly chat interface puts all the
							information you need at your fingertips.
						</span>
					</li>
					<li>
						<p className="mb-2 capitalize text-brand-green text-text-20 md:text-[30px] font-semibold">
							Gain Valuable insights instantly
						</p>
						<span className="text-text-normal font-normal">
							With our financial statements analyzer, understanding your
							financial health is a breeze. Want to know your monthly spending
							trends? Curious about how much you spent on dining out last month?
							Our chatbot has you covered. It provides concise and clear
							summaries, ensuring you have a complete understanding of your
							financial situation. Take control of your financial future with
							the insights you need, precisely when you need them.
						</span>
					</li>
					<li>
						<p className="mb-2 capitalize text-brand-green text-text-20 md:text-[30px] font-semibold">
							Secure, Effortless, and Personalized
						</p>
						<span className="text-text-normal font-normal">
							Rest easy knowing your financial data is handled with the utmost
							security. Our platform employs industry-leading encryption
							protocols to safeguard your sensitive information. Your data is
							for your eyes only.
						</span>
					</li>
				</ul>
			</div>
			<div className="flex flex-col gap-5 flex-1 w-full min-h-[450px] items-center">
				<div
					ref={chatContainerRef}
					className=" text-white w-full h-full overflow-x-clip grow [scrollbar-width:thin] overflow-y-auto overscroll-y-auto"
				>
					<div
						className={cn(
							"sticky bottom-20 w-fit mx-auto z-40 top-[85%]",
							{
								flex: scrollToBottom,
							},
							{
								hidden: !scrollToBottom || !conversations.length,
							}
						)}
					>
						<ChatScrollToBottom scrollToBottom={handleScrollToBottom} />
					</div>

					<div className="flex flex-col h-full gap-5 max-w-4xl px-5 mx-auto">
						{!conversations.length ? (
							<div
								className="h-full w-full grid place-content-center"
								key={conversations.length}
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									className="w-28 md:w-36 h-auto mx-auto text-mid--yellow stroke-1 fill-mid--yellow"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
									/>
								</svg>
								<p className="text-mid--yellow/40 font-semibold text-text-20 md:text-text-24">
									Ask SatSat Ai Anything
								</p>
							</div>
						) : (
							conversations.map((conversation: conversationType) => {
								if (conversation.from === "user") {
									return (
										<OutgoingMessage
											key={conversation.id}
											message={conversation}
										/>
									);
								} else if (conversation.from === "ai") {
									return (
										<IncomingMessage
											response={conversation}
											key={conversation.id}
											typeWrite={true}
											chatContainerRef={chatContainerRef}
										/>
									);
								}
							})
						)}
					</div>
				</div>

				<ChatInput
					loading={loading}
					setConversations={setConversations}
					glow={glow}
					inputRef={inputRef}
					showDefaultGlow={true}
					autoFocus={false}
					className="w-full"
				/>
			</div>
		</div>
	);
};

export default PromptPage;
