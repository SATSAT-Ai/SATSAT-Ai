"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";

interface Icontext {
	showModal: boolean;
	modalAction: string;
	setShowModal: Dispatch<SetStateAction<boolean>>;
	setModalAction: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<Icontext>({
	showModal: false,
	modalAction: "deleteAccount",
	setShowModal: () => {},
	setModalAction: () => {},
});

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [showModal, setShowModal] = useState(false);
	const [modalAction, setModalAction] = useState("deleteAccount");

	return (
		<AppContext.Provider
			value={{ showModal, setShowModal, setModalAction, modalAction }}
		>
			{children}
		</AppContext.Provider>
	);
};

export default ContextProvider;
