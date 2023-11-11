import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ChatIcon from "@mui/icons-material/Chat";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LogoutIcon from "@mui/icons-material/Logout";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Logo from "@/public/satsat-logo.svg";

const DashboardData = ({
	pathname,
	setHideSidebar,
}: {
	pathname: string;
	setHideSidebar: Dispatch<SetStateAction<boolean>>;
}) => {
	const dashboardData = [
		{
			icon: (
				<DashboardIcon
					color={pathname == "/dashboard" ? "secondary" : "primary"}
					fontSize="medium"
				/>
			),
			name: "Dashboard",
			path: "/dashboard",
		},
		{
			icon: (
				<CurrencyExchangeIcon
					color={
						pathname == "/dashboard/transactions" ? "secondary" : "primary"
					}
					fontSize="medium"
				/>
			),
			name: "Transactions",
			path: "/dashboard/transactions",
		},
		{
			icon: (
				<ChatIcon
					fontSize="medium"
					color={pathname == "/dashboard/chat" ? "secondary" : "primary"}
				/>
			),
			name: "Chat",
			path: "/dashboard/chat",
		},
		{
			icon: (
				<ReceiptLongIcon
					fontSize="medium"
					color={pathname == "/dashboard/receipts" ? "secondary" : "primary"}
				/>
			),
			name: "Receipts",
			path: "/dashboard/receipts",
		},
		{
			icon: (
				<TextSnippetIcon
					fontSize="medium"
					color={pathname == "/dashboard/invoice" ? "secondary" : "primary"}
				/>
			),
			name: "Invoice",
			path: "/dashboard/invoice",
		},

		{
			icon: (
				<SettingsSuggestIcon
					color={pathname == "/dashboard/settings" ? "secondary" : "primary"}
					fontSize="medium"
				/>
			),
			name: "Settings",
			path: "/dashboard/settings",
		},
	];
	return (
		<>
			<ul className=" justify-between min-h-screen flex w-full sticky top-0 items-center md:items-start flex-col gap-2 ">
				<li className="w-full">
					<Link href={"/"} className="hidden md:flex">
						<Image
							className="mx-auto w-fit pt-4"
							src={Logo}
							height={110}
							width={110}
							alt="SATSAT-Ai"
						/>
					</Link>
				</li>
				<div
					onClick={() => setHideSidebar(true)}
					className="md:ml-6 mx-auto md:mx-full cursor-pointer mb-5 hover:bg-brand-green w-fit p-1 rounded-md"
				>
					<TbLayoutSidebarRightExpand color="white" size={25} />
				</div>
				<li className="w-full flex flex-col gap-2">
					{dashboardData.map((routes) => {
						return (
							<Link
								href={routes.path}
								key={routes.name}
								className={`${
									pathname === routes.path
										? " bg-mid--yellow md:bg-transparent icon rounded-md shadow-md md:shadow-none text-mid--yellow md:hover:bg-grey-light md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[24px] md:before:rounded-md md:before:w-[4px] md:before:bg-mid--yellow"
										: "text-white"
								} text-text-normal md:pl-6 w-fit mx-auto md:mx-full rounded-md md:rounded-none justify-center md:justify-start md:w-full flex md:hover:bg-white/10  cursor-pointer p-2 items-center gap-3 relative`}
							>
								<div className="flex items-center gap-3">
									{routes.icon}
									<p className="hidden md:flex">{routes.name}</p>
								</div>
							</Link>
						);
					})}
				</li>
				<li className="flex flex-col mx-3 md:mt-4 gap-7">
					<div className="md:mt-7 active:scale-[1.01] select-none flex flex-col cursor-pointer gap-3 gradient-upgrade rounded-3xl p-5 shadow-md">
						<RocketLaunchIcon fontSize="large" color={"primary"} />
						<h3 className="my-0 hidden md:flex font-medium text-text-normal">
							UPGRADE PLAN
						</h3>
						<p className="hidden md:flex text-[13px] font-normal">
							Upgrade your current plan and enjoy amazing features
						</p>
					</div>
					<div className="bg-white/10 w-fit mb-3 md:w-full mx-auto hover:bg-brand-green-darker cursor-pointer active:scale-[1.01] p-3 rounded-md flex items-center gap-3">
						<LogoutIcon fontSize="medium" color={"primary"} />
						<p className="hidden md:flex">Logout</p>
					</div>
				</li>
			</ul>
		</>
	);
};
export default DashboardData;
