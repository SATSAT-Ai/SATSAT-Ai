"use client";

import { IUser } from "@/components/ChatMain";
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from "react";

interface Ichat {
	hideChatSidebar: boolean;
	isOldConversation: boolean;
	conversations: IUser[];
	setHideChatSidebar: Dispatch<SetStateAction<boolean>>;
	setConversations: Dispatch<SetStateAction<IUser[]>>;
	setIsOldConversation: Dispatch<SetStateAction<boolean>>;
}

export const ChatContext = createContext<Ichat>({
	hideChatSidebar: false,
	conversations: [],
	isOldConversation: false,
	setHideChatSidebar: () => {},
	setIsOldConversation: () => {},
	setConversations: () => {},
});

const ChatContextProvider = ({ children }: { children: ReactNode }) => {
	const [hideChatSidebar, setHideChatSidebar] = useState(true);
	const [isOldConversation, setIsOldConversation] = useState(false);
	const [conversations, setConversations] = useState<IUser[]>([]);

	return (
		<ChatContext.Provider
			value={{
				hideChatSidebar,
				setHideChatSidebar,
				setIsOldConversation,
				isOldConversation,
				conversations,
				setConversations,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatContextProvider;
