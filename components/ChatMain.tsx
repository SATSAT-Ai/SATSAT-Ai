"use client";

import IncomingMessage from "@/components/IncomingMessage";
import OutgoingMessage from "@/components/OutgoingMessage";
import ChatScrolltoBottom from "@/components/ChatScrolltoBottom";
import ChatScrolltoTop from "@/components/ChatScrolltoTop";
import { useRef, useState, KeyboardEvent, useContext, useEffect } from "react";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useForm } from "react-hook-form";
import { ChatContext } from "@/context/ChatContext";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { HiOutlineExternalLink } from "react-icons/hi";
import Link from "next/link";
import ToggleSidebars from "./ToggleSidebars";

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
	const chatContainerRef = useRef<null | HTMLElement>(null);
	const helpOptionsRef = useRef<null | HTMLDivElement>(null);
	const [scrollToBottom, setScrollToBottom] = useState(false);
	const [scrollToTop, setScrollToTop] = useState(false);
	const [showHelpOptions, setShowHelpOptions] = useState(false);
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState<IUser[]>([]);

	const {
		formState: { errors },
		register,
		watch,
		handleSubmit,
		reset,
		setFocus,
	} = useForm<IdeFault>();

	const { isOldConversation, setIsOldConversation } = useContext(ChatContext);

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

	const fetchConversations = () => {
		if (chatContainerId) {
			//fetchdata for containerID
		} else {
			//create a new id and start a new conv.
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
					firstText: "Here is a demo response from satsat Ai.",
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
			//sendMesssage
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
						firstText: "Here is a demo response from satsat Ai.",
						list: [],
						endingText: `Is there anything else you'd like to inquire about? Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?`,
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

	// const onTypingChange = () => {
	// 	handleScrollToBottom();
	// };
	return (
		<>
			<main
				ref={chatContainerRef}
				className=" text-white w-full h-full
					custom-scroll2 relative flex flex-col justify-between overflow-y-auto"
			>
				<ToggleSidebars />
				{conversations.length >= 1 ? (
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
									<OutgoingMessage
										key={conversation.id}
										message={conversation}
									/>
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
										onKeyDown={(e) => (
											handleKeyDown(e), handleTextAreaResize(e)
										)}
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
				) : (
					<>
						<div className="w-full flex  flex-col h-full items-center justify-center overflow-y-auto custom-scroll">
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
										onKeyDown={(e) => (
											handleKeyDown(e), handleTextAreaResize(e)
										)}
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
					</>
				)}
			</main>
		</>
	);
};

export default ChatMain;
