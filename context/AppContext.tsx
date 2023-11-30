"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Icontext {
	showModal: boolean;
	modalAction: string;
	hideSidebar: boolean;
	hideChatSidebar: boolean;
	showNotification: boolean;
	setShowModal: Dispatch<SetStateAction<boolean>>;
	setModalAction: Dispatch<SetStateAction<string>>;
	setHideSidebar: Dispatch<SetStateAction<boolean>>;
	setHidChatSidebar: Dispatch<SetStateAction<boolean>>;
	setShowNotification: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<Icontext>({
	showModal: false,
	modalAction: "deleteAccount",
	hideSidebar: false,
	hideChatSidebar: false,
	showNotification: false,
	setShowModal: () => {},
	setModalAction: () => {},
	setHideSidebar: () => {},
	setHidChatSidebar: () => {},
	setShowNotification: () => {},
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [showModal, setShowModal] = useState(false);
	const [modalAction, setModalAction] = useState("deleteAccount");
	const [hideSidebar, setHideSidebar] = useState(false);
	const [hideChatSidebar, setHidChatSidebar] = useState(false);
	const [showNotification, setShowNotification] = useState(false);

	return (
		<AppContext.Provider
			value={{
				showModal,
				setShowModal,
				setModalAction,
				modalAction,
				setHideSidebar,
				hideSidebar,
				showNotification,
				setShowNotification,
				hideChatSidebar,
				setHidChatSidebar,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
