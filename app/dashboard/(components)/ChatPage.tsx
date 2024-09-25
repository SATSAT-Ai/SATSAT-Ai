"use client";

import {
	useRef,
	useEffect,
	useState,
	Dispatch,
	SetStateAction,
	useContext,
	useCallback,
} from "react";
import { conversationType } from "./ChatMain";
import OutgoingMessage from "./OutgoingMessage";
import IncomingMessage from "./IncomingMessage";
import ChatScrollToTop from "@/app/dashboard/(components)/ChatScrollToTop";
import ChatScrollToBottom from "@/app/dashboard/(components)/ChatScrollToBottom";
import ChatInput from "./ChatInput";
import { ChatContext } from "@/context/ChatContext";
import TopShade from "./TopShade";

interface IChatPage {
	chatContainerId: string | undefined;
	conversations: conversationType[];
	setConversations: Dispatch<SetStateAction<conversationType[]>>;
}

const ChatPage = ({
	conversations,
	chatContainerId,
	setConversations,
}: IChatPage) => {
	const chatContainerRef = useRef<null | HTMLDivElement>(null);
	const [scrollToTop, setScrollToTop] = useState(false);
	const [scrollToBottom, setScrollToBottom] = useState(false);
	const [loading, setLoading] = useState(false);
	const { isOldConversation } = useContext(ChatContext);

	const fetchConversations = () => {
		if (chatContainerId) {
			//fetchData for containerID
		} else {
			//create a new id and start a new conversation.
		}
	};

	const handleScrollToTop = () => {
		if (chatContainerRef?.current) {
			chatContainerRef.current.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		}
	};

	const handleScrollToBottom = useCallback(() => {
		if (chatContainerRef?.current) {
			chatContainerRef.current.scrollTo({
				top: chatContainerRef.current.scrollHeight,
				behavior: "smooth",
			});
		}
	}, []);

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
	}, [conversations, handleScrollToBottom]);

	return (
		<div className="h-full flex relative flex-col">
			<TopShade />
			<div className="absolute bottom-32 z-10 -translate-x-1/2 left-1/2">
				{scrollToTop && isOldConversation && (
					<ChatScrollToTop scrollToTop={handleScrollToTop} />
				)}

				{scrollToBottom && (
					<ChatScrollToBottom scrollToBottom={handleScrollToBottom} />
				)}
			</div>
			<div
				ref={chatContainerRef}
				className="h-full w-full pt-20 overflow-y-auto scrollbar-hidden"
			>
				<div className="flex flex-col gap-5 max-w-4xl pb-10 px-5 mx-auto">
					{conversations.map((conversation: conversationType) => {
						if (conversation.from === "user") {
							return (
								<OutgoingMessage key={conversation.id} message={conversation} />
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
					})}
				</div>
			</div>

			<ChatInput
				setConversations={setConversations}
				chatContainerId={chatContainerId}
				loading={loading}
			/>
		</div>
	);
};

export default ChatPage;
