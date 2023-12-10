"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Icontext {
	showModal: boolean;
	modalAction: string;
	hideSidebar: boolean;
	showNotification: boolean;
	showMoreOptions: boolean;
	setShowModal: Dispatch<SetStateAction<boolean>>;
	setModalAction: Dispatch<SetStateAction<string>>;
	setHideSidebar: Dispatch<SetStateAction<boolean>>;
	setShowNotification: Dispatch<SetStateAction<boolean>>;
	setShowMoreOptions: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<Icontext>({
	showModal: false,
	modalAction: "deleteAccount",
	hideSidebar: false,
	showNotification: false,
	showMoreOptions: false,
	setShowModal: () => {},
	setModalAction: () => {},
	setHideSidebar: () => {},
	setShowNotification: () => {},
	setShowMoreOptions: () => {},
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [showModal, setShowModal] = useState(false);
	const [modalAction, setModalAction] = useState("deleteAccount");
	const [hideSidebar, setHideSidebar] = useState(true);
	const [showNotification, setShowNotification] = useState(false);
	const [showMoreOptions, setShowMoreOptions] = useState(false);

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
				showMoreOptions,
				setShowMoreOptions,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
