import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import DashboardHeader from "@/app/dashboard/(components)/DashboardHeader";
import ContextProvider from "@/context/AppContext";
import { theme } from "./theme";
import ChatContextProvider from "@/context/ChatContext";
import DashboardSidebar from "./(components)/DashboardSidebar";
import WalkThrough from "./(components)/WalkThrough";
import DashboardBackgroundBlobs from "./(components)/DashboardBackgroundBlobs";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="bg-darker">
			<DashboardBackgroundBlobs />
			<div className="flex relative max-w-[1440px] mx-auto overflow-clip">
				<ContextProvider>
					<ThemeProvider theme={theme}>
						<DashboardSidebar />
					</ThemeProvider>
					<div className="flex-[10] h-screen z-10 overflow-x-auto">
						<ThemeProvider theme={theme}>
							<DashboardHeader />
						</ThemeProvider>
						<ChatContextProvider>
							{children}
							{/* <WalkThrough /> */}
						</ChatContextProvider>
					</div>
				</ContextProvider>
			</div>
		</div>
	);
};

export default layout;
