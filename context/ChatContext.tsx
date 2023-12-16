"use client";

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
	setHideChatSidebar: Dispatch<SetStateAction<boolean>>;
	setIsOldConversation: Dispatch<SetStateAction<boolean>>;
}

export const ChatContext = createContext<Ichat>({
	hideChatSidebar: false,
	isOldConversation: false,
	setHideChatSidebar: () => {},
	setIsOldConversation: () => {},
});

const ChatContextProvider = ({ children }: { children: ReactNode }) => {
	const [hideChatSidebar, setHideChatSidebar] = useState(true);
	const [isOldConversation, setIsOldConversation] = useState(false);

	return (
		<ChatContext.Provider
			value={{
				hideChatSidebar,
				setHideChatSidebar,
				setIsOldConversation,
				isOldConversation,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatContextProvider;
