import { ReactNode } from "react";
import SidebarEnterprise from "./(components)/SidebarEnterprise";

const layout = ({ children }: { children: ReactNode }) => {
	return (
		<div className="flex h-full gap-5 bg-[#0E1621]">
			<SidebarEnterprise />
			<main className="flex-[10] overflow-y-auto h-screen">{children}</main>
		</div>
	);
};

export default layout;
