import DashboardSidebar from "@/components/DashboardSidebar";
import Footer from "@/components/Footer";
import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";
import DashboardHeader from "@/components/DashboardHeader";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<ThemeProvider theme={theme}>
			{/* dashboardbg */}
			<div className="flex relative bg-darker min-h-screen ">
				<div className="green-blob w-96 h-96 top-[-50%] md:top-[10%] left-[35%]"></div>
				<div className="yellow-blob w-96 h-96 top-[-10%] md:top-[0%] right-[0%]"></div>

				<div className="flex-grow-0 flex-shrink-0 flex-[255px]">
					<DashboardSidebar />
				</div>
				<div className="flex-[10]">
					<DashboardHeader />
					{children}
					{/* <Footer /> */}
				</div>
			</div>
		</ThemeProvider>
	);
};

export default layout;
