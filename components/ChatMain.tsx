"use client";
import IncomingMessage from "@/components/IncomingMessage";
import OutgoingMessage from "@/components/OutgoingMessage";
import ChatScrolltoBottom from "@/components/ChatScrolltoBottom";
import ChatScrolltoTop from "@/components/ChatScrolltoTop";
import { useEffect, useRef, useState } from "react";

const ChatMain = () => {
	const chatContainerRef = useRef<null | HTMLElement>(null);
	const [isScrolledtoTop, setIsScrolledToTop] = useState(true);
	const [isScrolledtoBottom, setIsScrolledtoBottom] = useState(false);

	const scrolltoTop = () => {
		if (chatContainerRef?.current) {
			chatContainerRef.current.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	const scrollToBottom = () => {
		if (chatContainerRef?.current) {
			chatContainerRef.current.scrollTo({
				top: chatContainerRef.current.scrollHeight,
				behavior: "smooth",
			});
		}
	};

	useEffect(() => {
		scrollToBottom();

		const handleScroll = () => {
			const scrollTop = chatContainerRef.current?.scrollTop as number;
			const clientHeight = chatContainerRef.current?.clientHeight as number;
			const scrollHeight = chatContainerRef.current?.scrollHeight as number;

			setIsScrolledToTop(
				scrollTop <= ((scrollHeight / 1.5).toFixed(1) as unknown as number)
			);

			setIsScrolledtoBottom(clientHeight + scrollTop === scrollHeight);
		};
		const containerRef = chatContainerRef.current;
		containerRef?.addEventListener("scroll", handleScroll);

		return () => {
			containerRef?.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<main
			ref={chatContainerRef}
			className=" text-white w-full flex flex-col gap-5  p-2 
					custom-scroll2 relative overflow-auto h-screen max-w-3xl mx-auto"
		>
			{!isScrolledtoBottom && (
				<ChatScrolltoBottom
					scrollToBottom={scrollToBottom}
					isScrolledtoTop={isScrolledtoTop}
				/>
			)}

			{!isScrolledtoTop && <ChatScrolltoTop scrolltoTop={scrolltoTop} />}
			{/* chats */}
			<OutgoingMessage message="Can you show me my monthly spending trends?" />
			<IncomingMessage
				message={{
					id: "lorem",
					firstText: `Of course! Here's a breakdown of your monthly spending trends`,
					list: [
						{ id: "lorem", title: "", msg: "January:GHS 1500" },
						{ id: "loreem", title: "", msg: "Febuary:GHS 1800" },
						{ id: "3loreem", title: "", msg: "March:GHS 1400" },
					],
					endingText: `Is there anything else you'd like to inquire about?`,
				}}
			/>
			<OutgoingMessage message="What about my total income for the past quarter?" />
			<IncomingMessage
				message={{
					id: "lorem",
					firstText: `Your total income for the past quarter is GHS 10,500.`,
					list: [],
					endingText: `Is there anything else you'd like to inquire about?`,
				}}
			/>
			<OutgoingMessage message="What about my total income for the past quarter?" />
			<IncomingMessage
				message={{
					id: "lorem",
					firstText: `Your total income for the past quarter is GHS 10,500.`,
					list: [],
					endingText: `Is there anything else you'd like to inquire about?`,
				}}
			/>
			<OutgoingMessage message="What about my total income for the past quarter?" />
			<IncomingMessage
				message={{
					id: "lorem",
					firstText: `Your total income for the past quarter is GHS 10,500.`,
					list: [],
					endingText: `Is there anything else you'd like to inquire about?`,
				}}
			/>
			<OutgoingMessage message="What about my total income for the past quarter?" />
			<IncomingMessage
				message={{
					id: "lorem",
					firstText: `Your total income for the past quarter is GHS 10,500.`,
					list: [],
					endingText: `Is there anything else you'd like to inquire about?`,
				}}
			/>
			<OutgoingMessage message="What about my total income for the past quarter?" />
			<IncomingMessage
				message={{
					id: "lorem",
					firstText: `Your total income for the past quarter is GHS 10,500.`,
					list: [],
					endingText: `Is there anything else you'd like to inquire about?`,
				}}
			/>
			<OutgoingMessage message="What about my total income for the past quarter?" />
			<IncomingMessage
				message={{
					id: "lorem",
					firstText: `Your total income for the past quarter is GHS 10,500.`,
					list: [],
					endingText: `Is there anything else you'd like to inquire about?`,
				}}
			/>
		</main>
	);
};

export default ChatMain;
