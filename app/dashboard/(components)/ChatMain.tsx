"use client";
import { useEffect, useState } from "react";
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
	const [conversations, setConversations] = useState<IUser[]>([
		// {
		// 	from: "Ai",
		// 	id: Math.floor(Math.random() * 1000).toString(),
		// 	firstText: "Here is a demo response from SatSat AI.",
		// 	list: [
		// 		{
		// 			id: Math.floor(Math.random() * 1000).toString(),
		// 			msg: "January:GHS 1500",
		// 		},
		// 		{
		// 			id: Math.floor(Math.random() * 1000).toString(),
		// 			msg: "February:GHS 1800",
		// 		},
		// 		{
		// 			id: Math.floor(Math.random() * 1000).toString(),
		// 			msg: "March:GHS 1400",
		// 		},
		// 	],
		// 	endingText: `Is there anything else you'd like to inquire about? Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you`,
		// },
		// {
		// 	from: "Ai",
		// 	id: Math.floor(Math.random() * 1000).toString(),
		// 	firstText: "Here is a demo response from SatSat AI.",
		// 	list: [
		// 		{
		// 			id: Math.floor(Math.random() * 1000).toString(),
		// 			msg: "January:GHS 1500",
		// 		},
		// 		{
		// 			id: Math.floor(Math.random() * 1000).toString(),
		// 			msg: "February:GHS 1800",
		// 		},
		// 		{
		// 			id: Math.floor(Math.random() * 1000).toString(),
		// 			msg: "March:GHS 1400",
		// 		},
		// 	],
		// 	endingText: `Is there anything else you'd like to inquire about? Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you'd like to inquire about?Is there anything else you`,
		// },
	]);

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
