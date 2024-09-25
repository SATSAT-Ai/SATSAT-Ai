import { ReactNode } from "react";
import DashboardHeader from "@/app/dashboard/(components)/DashboardHeader";
import ContextProvider from "@/context/AppContext";
import ChatContextProvider from "@/context/ChatContext";
import DashboardSidebar from "./(components)/DashboardSidebar";
// import WalkThrough from "./(components)/WalkThrough";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="dashboard-background [background-image:url(../public/dashboard-background.png)] bg-center bg-no-repeat bg-cover bg-darker h-screen">
			<div className="flex relative max-w-[1440px] mx-auto overflow-clip">
				<ContextProvider>
					<DashboardSidebar />
					<div className="flex-[10] h-screen z-10 overflow-x-auto">
						<DashboardHeader />
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
