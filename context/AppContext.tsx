"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Icontext {
	showModal: boolean;
	modalAction: string;
	hideSidebar: boolean;
	setShowModal: Dispatch<SetStateAction<boolean>>;
	setModalAction: Dispatch<SetStateAction<string>>;
	setHideSidebar: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<Icontext>({
	showModal: false,
	modalAction: "deleteAccount",
	hideSidebar: false,
	setShowModal: () => {},
	setModalAction: () => {},
	setHideSidebar: () => {},
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [showModal, setShowModal] = useState(false);
	const [modalAction, setModalAction] = useState("deleteAccount");
	const [hideSidebar, setHideSidebar] = useState(true);

	return (
		<AppContext.Provider
			value={{
				showModal,
				setShowModal,
				setModalAction,
				modalAction,
				setHideSidebar,
				hideSidebar,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
