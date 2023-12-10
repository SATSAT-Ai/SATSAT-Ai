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
	setHideChatSidebar: Dispatch<SetStateAction<boolean>>;
}

export const ChatContext = createContext<Ichat>({
	hideChatSidebar: false,
	setHideChatSidebar: () => {},
});

const ChatContextProvider = ({ children }: { children: ReactNode }) => {
	const [hideChatSidebar, setHideChatSidebar] = useState(true);

	return (
		<ChatContext.Provider
			value={{
				hideChatSidebar,
				setHideChatSidebar,
			}}
		>
			{children}
		</ChatContext.Provider>
	);
};

export default ChatContextProvider;
