import DashboardSidebar from "@/components/DashboardSidebar";
import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import DashboardHeader from "@/components/DashboardHeader";
import ContextProvider from "@/context/AppContext";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			<div className="flex relative bg-darker min-h-screen">
				<div className="green-blob !fixed w-96 h-96 top-[-50%] md:top-[10%] left-[35%]"></div>
				<div className="yellow-blob w-96 !fixed h-96 top-[-10%] md:top-[0%] right-[0%]"></div>

				<ContextProvider>
					<DashboardSidebar />
					<div className="flex-[10]">
						<DashboardHeader />
						{children}
					</div>
				</ContextProvider>
			</div>
		</ThemeProvider>
	);
};

export default layout;
