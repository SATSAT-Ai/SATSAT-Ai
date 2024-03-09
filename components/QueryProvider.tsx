"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from "react";
import EarlyAccessModal from "./ui/EarlyAccessModal";

interface Ibanner {
	showEarlyAccessModal: boolean;
	setShowEarlyAccessModal: Dispatch<SetStateAction<boolean>>;
}

export const bannerContext = createContext<Ibanner>({
	setShowEarlyAccessModal: () => {},
	showEarlyAccessModal: false,
});

const QueryProvider = ({ children }: { children: ReactNode }) => {
	const [showEarlyAccessModal, setShowEarlyAccessModal] = useState(false);

	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<bannerContext.Provider
				value={{ showEarlyAccessModal, setShowEarlyAccessModal }}
			>
				{children}

				{showEarlyAccessModal && <EarlyAccessModal />}
			</bannerContext.Provider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};

export default QueryProvider;
