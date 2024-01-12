import DashboardSidebar from "@/components/DashboardSidebar";
import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import DashboardHeader from "@/components/DashboardHeader";
import ContextProvider from "@/context/AppContext";
import { theme } from "./theme";
import ChatContextProvider from "@/context/ChatContext";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="bg-darker">
			<div className="green-blob !fixed w-96 h-96 top-[-0%] lg:top-[10%] md:top-[50%] left-[35%]"></div>
			<div className="yellow-blob2 w-96 !fixed h-96 top-[-20%] sm:top-[-10%] lg:top-[-5%] right-[0%]"></div>
			<div className="flex relative max-w-[1440px] mx-auto">
				<ContextProvider>
					<ThemeProvider theme={theme}>
						<DashboardSidebar />
					</ThemeProvider>
					<div className="flex-[10] h-full z-10 overflow-x-auto">
						<ThemeProvider theme={theme}>
							<DashboardHeader />
						</ThemeProvider>
						<ChatContextProvider>{children}</ChatContextProvider>
					</div>
				</ContextProvider>
			</div>
		</div>
	);
};

export default layout;
