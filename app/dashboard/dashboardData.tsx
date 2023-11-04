import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import ChatIcon from "@mui/icons-material/Chat";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const DashboardData = ({ pathname }: { pathname: string }) => {
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
			path: "dashboard/settings",
		},
	];
	return (
		<ul className="mt-5 flex sticky top-2 flex-col gap-1 ">
			{dashboardData.map((routes) => {
				return (
					<li
						key={routes.name}
						className={`${
							pathname === routes.path
								? " text-mid--yellow hover:bg-grey-light before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-[24px] before:rounded-md before:w-[4px] before:bg-mid--yellow"
								: "text-white"
						} text-text-20 pl-6 flex hover:bg-white/10 cursor-pointer p-2 list items-center gap-3 relative`}
					>
						{routes.icon}
						<Link href={routes.path}>{routes.name}</Link>
					</li>
				);
			})}
			<div className="flex flex-col mx-3 mt-4 gap-7">
				<div className="mt-7 active:scale-[1.01] select-none flex flex-col cursor-pointer gap-3 gradient-upgrade rounded-3xl p-5 shadow-md">
					<RocketLaunchIcon fontSize="large" color={"primary"} />
					<h3 className="my-0 font-medium">UPGRADE PLAN</h3>
					<p className="text-text-[15px] font-normal">
						Upgrade your current plan and enjoy amazing features
					</p>
				</div>
				<div className=" bg-white/10 hover:bg-brand-green-darker cursor-pointer active:scale-[1.01] p-3 rounded-md flex items-center gap-3">
					<LogoutIcon fontSize="medium" color={"primary"} />
					Logout
				</div>
				<div className=" bg-white/10 hover:bg-brand-green-darker cursor-pointer justify-between p-3 rounded-md flex items-center gap-2">
					<PersonPinIcon fontSize="large" color={"primary"} />
					Kamasah Dickson
					<MoreVertIcon fontSize="medium" color={"primary"} />
				</div>
			</div>
		</ul>
	);
};
export default DashboardData;
