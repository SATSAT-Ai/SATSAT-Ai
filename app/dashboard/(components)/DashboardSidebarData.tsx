import Link from "next/link";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { MdClose } from "react-icons/md";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { Dispatch, SetStateAction } from "react";
import { IDashboardSidebarData } from "@/interface/interface";
import PageWithSubPath from "./PageWithSubPath";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import CategoryIcon from "@mui/icons-material/Category";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { Tooltip } from "react-tooltip";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import TryIcon from "@mui/icons-material/Try";
import InsightsIcon from "@mui/icons-material/Insights";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import { isActive } from "@/helpers/isRouteActive";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
interface IDashboardSideber {
	pathname: string;
	setHideSidebar: Dispatch<SetStateAction<boolean>>;
	hideSidebar: boolean;
}

const DashboardSidebarWithData = ({
	pathname,
	setHideSidebar,
	hideSidebar,
}: IDashboardSideber) => {
	const dashboardSidebarData: IDashboardSidebarData[] = [
		{
			icon: <DashboardCustomizeIcon fontSize="medium" />,
			name: "Dashboard",
			path: "/dashboard",
		},
		{
			icon: <InsightsIcon fontSize="medium" />,
			name: "Insights",
			path: "/dashboard/insights",
		},
		{
			path: "/dashboard/transactions",
			icon: <SyncAltIcon fontSize="medium" />,
			name: "Transactions",
			subPaths: [
				{
					path: "/dashboard/transactions/categories",
					name: "Categories",
					icon: <CategoryIcon fontSize="medium" />,
				},
				{
					path: "/dashboard/transactions/budget",
					name: "Budget",
					icon: <PriceCheckIcon fontSize="medium" />,
				},
			],
		},
		{
			path: "/dashboard/upload",
			icon: <UploadFileIcon fontSize="medium" />,
			name: "Upload",
		},
		{
			icon: <TryIcon fontSize="medium" />,
			name: "Chat",
			path: "/dashboard/chat",
		},

		{
			icon: <TextSnippetIcon fontSize="medium" />,
			name: "Invoice",
			path: "/dashboard/invoice",
			subPaths: [
				{
					icon: <ReceiptLongIcon fontSize="medium" />,
					name: "Receipts",
					path: "/dashboard/invoice/receipts",
				},
			],
		},

		{
			icon: <SettingsSuggestIcon fontSize="medium" />,
			name: "Settings",
			path: "/dashboard/settings",
		},
	];
	const isPathActive = isActive(pathname, dashboardSidebarData);

	return (
		<>
			<div className={`h-screen flex w-full items-center md:items-start`}>
				<div className="w-full flex flex-col h-full overflow-y-auto overflow-x-clip">
					<div className="flex items-center justify-between py-4 px-2 md:px-5">
						<div
							className={cn(
								"w-full flex items-center mx-auto font-medium",

								{
									"flex w-fit ": hideSidebar && pathname.includes("/chat"),
								}
							)}
						>
							<Link href={"/"} id="home">
								<Logo className="mx-0 md:hidden" type="small" />
								<Logo
									className="mx-0 hidden md:flex"
									type={hideSidebar ? "small" : "large"}
								/>
								<Tooltip
									variant="light"
									anchorSelect="#home"
									place="right"
									content="Home"
								/>
							</Link>

							{!pathname.includes("/chat") && (
								<div
									id="open-sidebar"
									tabIndex={0}
									className={cn(
										"hidden sm:flex ml-auto md:mx-full cursor-pointer w-fit rounded-md",
										{ "!hidden": !hideSidebar }
									)}
									onClick={() => setHideSidebar((prev) => !prev)}
								>
									<TbLayoutSidebarLeftExpandFilled size={25} color="white" />
									<Tooltip
										variant="light"
										anchorSelect="#open-sidebar"
										place="right"
										content="Open sidebar"
									/>
								</div>
							)}
						</div>
						<div
							id="close-sidebar"
							tabIndex={0}
							className={cn(
								"ml-2 active:scale-[1.06] z-10  md:mx-auto md:mx-full cursor-pointer w-fit rounded-md`",

								{ "md:hidden": hideSidebar }
							)}
							onClick={() => setHideSidebar((prev) => !prev)}
						>
							<MdClose size={25} color="white" />
							<Tooltip
								variant="light"
								className={!hideSidebar ? "hidden" : "hidden lg:flex"}
								anchorSelect="#close-sidebar"
								place="right"
								content="Close sidebar"
							/>
						</div>
					</div>
					<ul
						className={`h-full mt-5 flex grow md:w-full overflow-y-auto w-fit mx-auto overflow-x-hidden flex-col gap-3`}
					>
						{dashboardSidebarData.map((routes: IDashboardSidebarData) => {
							if (routes.subPaths) {
								return (
									<PageWithSubPath
										hideSidebar={hideSidebar}
										key={routes.name}
										routeWithSubpath={routes}
										pathname={pathname}
										setHideSidebar={setHideSidebar}
										isActive={isPathActive}
									/>
								);
							}
							return (
								<li key={routes.name} id={routes.name}>
									<Tooltip
										variant="light"
										className={`text-nowrap ${
											!hideSidebar ? "hidden" : "hidden md:flex"
										}`}
										anchorSelect={`#${routes.name}`}
										place="right"
										content={routes.name}
									/>
									<Link
										onClick={() =>
											setHideSidebar(!pathname.includes("/chat") ? true : false)
										}
										href={routes.path!}
										aria-label={routes.name}
										className={cn(
											"text-text-normal font-medium md:pl-6 w-fit md:mx-full rounded-md md:rounded-none justify-center md:justify-start md:w-full flex  cursor-pointer p-2 items-center gap-3 hover:bg-white/10 relative",
											{
												" bg-mid--yellow md:bg-transparent icon rounded-md shadow-md md:shadow-none text-mid--yellow md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[24px] md:before:rounded-md md:before:w-[4px] md:before:bg-mid--yellow":
													routes.path === isPathActive,
											},
											{ "text-white": routes.path !== isPathActive }
										)}
									>
										<div className="flex items-center gap-3">
											{routes.icon}

											<p
												className={`${
													hideSidebar ? "!hidden" : ""
												} hidden md:flex`}
											>
												{routes.name}
											</p>
										</div>
									</Link>
								</li>
							);
						})}
					</ul>
					<div>
						<Link
							href={"/choose-your-pricing"}
							id="upgrade-plan"
							aria-label="upgrade your plan"
							className={cn("flex flex-col mx-3 w-fit gap-7 py-2", {
								"md:mx-auto": hideSidebar,
							})}
						>
							<div className="md:mb-2 active:scale-[1.01] select-none flex flex-col cursor-pointer gap-3 gradient-upgrade rounded-3xl p-5 shadow-md">
								<div className="mr-auto">
									<RocketLaunchIcon fontSize="large" color={"primary"} />
								</div>

								<div
									className={cn(
										"my-0 hidden md:flex font-medium text-text-normal",

										{ "!hidden": hideSidebar },
										{ flex: !hideSidebar }
									)}
								>
									UPGRADE PLAN
								</div>

								<p
									className={cn(
										"hidden md:flex text-left text-[13px] font-normal",
										{ "!hidden": hideSidebar },
										{ "animate-appear": !hideSidebar }
									)}
								>
									Upgrade your current plan and enjoy amazing features
								</p>
							</div>
						</Link>
						<Tooltip
							variant="light"
							className={!hideSidebar ? "hidden" : "flex"}
							anchorSelect="#upgrade-plan"
							place="right"
							content="Upgrade plan"
						/>
					</div>
				</div>
			</div>
		</>
	);
};
export default DashboardSidebarWithData;
