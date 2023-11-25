"use client";

import { ThemeProvider } from "@emotion/react";
import { ReactNode } from "react";
import { theme } from "../dashboard/theme";
import ContextProvider from "@/context/AppContext";
import ChatSidebar from "@/components/ChatSidebar";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex w-full relative bg-darker min-h-screen">
			<div className="green-blob !fixed w-96 h-96 top-[-50%] md:top-[10%] left-[35%]"></div>
			<div className="yellow-blob w-96 !fixed h-96 top-[-10%] md:top-[0%] right-[0%]"></div>

			<ContextProvider>
				<ThemeProvider theme={theme}>
					<ChatSidebar />
				</ThemeProvider>
				<div className="flex-[10] z-10">{children}</div>
			</ContextProvider>
		</div>
	);
};

export default layout;
