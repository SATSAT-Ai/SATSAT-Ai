"use client";
import { useState } from "react";
import ChatPage from "./ChatPage";
import ChatSuggestionIntro from "./ChatSuggestionIntro";

export type IUser = {
	from: "user";
	id: string;
	message: string;
};

export type IAi = {
	from: "ai";
	id: string;
	response: string[];
};

export type conversationType = IUser | IAi;

const ChatMain = ({ chatContainerId }: { chatContainerId?: string }) => {
	const [conversations, setConversations] = useState<conversationType[]>([]);

	return (
		<>
			<main className="flex flex-[3] w-full flex-col text-white relative overflow-clip">
				{conversations.length >= 1 ? (
					<ChatPage
						setConversations={setConversations}
						conversations={conversations}
						chatContainerId={chatContainerId}
					/>
				) : (
					<ChatSuggestionIntro
						setConversations={setConversations}
						chatContainerId={chatContainerId}
						conversationLength={conversations.length}
					/>
				)}
			</main>
		</>
	);
};

export default ChatMain;
