"use client";

import {
	useRef,
	useEffect,
	useState,
	Dispatch,
	SetStateAction,
	useContext,
} from "react";
import { IUser } from "./ChatMain";
import OutgoingMessage from "./OutgoingMessage";
import IncomingMessage from "./IncomingMessage";
import ChatScrollToTop from "@/app/dashboard/(components)/ChatScrollToTop";
import ChatScrollToBottom from "@/app/dashboard/(components)/ChatScrollToBottom";
import ChatInput from "./ChatInput";
import ToggleSidebars from "./ToggleSidebars";
import { ChatContext } from "@/context/ChatContext";

interface IChatPage {
	conversations: IUser[];
	chatContainerId: string | undefined;
	setConversations: Dispatch<SetStateAction<IUser[]>>;
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
		<div className=" flex flex-col items-center h-dvh overflow-clip">
			<ToggleSidebars />
			<div className="fixed bottom-32 -translate-x-1/2 left-1/2">
				{scrollToTop && isOldConversation && (
					<ChatScrollToTop scrollToTop={handleScrollToTop} />
				)}

				{scrollToBottom && (
					<ChatScrollToBottom scrollToBottom={handleScrollToBottom} />
				)}
			</div>
			<div ref={chatContainerRef} className="h-full w-full overflow-y-auto ">
				<div className="flex flex-col gap-5 max-w-4xl p-5 mx-auto">
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
									conversations={conversations}
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
