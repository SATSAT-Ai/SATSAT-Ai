import Link from "next/link";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
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
import { ArrowLeftToLine, Rocket } from "lucide-react";

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
					<div className="flex items-center overflow-clip justify-between py-4 px-2 md:px-5">
						<div
							className={cn(
								"w-full flex items-center mx-auto font-medium gap-2",

								{
									"flex w-fit ": hideSidebar && pathname.includes("/chat"),
								}
							)}
						>
							<Link href={"/"} id="home">
								<Logo
									className="mx-0 text-nowrap"
									type={hideSidebar ? "small-normal" : "normal"}
								/>
								<Tooltip
									variant="light"
									anchorSelect="#home"
									place="right"
									content="Home"
									className={hideSidebar ? "hidden md:flex" : "hidden"}
								/>
							</Link>
						</div>
						<button
							type="button"
							id="close-sidebar"
							tabIndex={0}
							className={cn(
								"ml-2 z-10 border relative -left-1 md:left-3 border-brand-green bg-brand-green/30 rounded-md md:mx-auto md:mx-full hover:bg-brand-green/40 p-1 w-fit rounded-md`",

								{ "md:hidden": hideSidebar }
							)}
							onClick={() => setHideSidebar((prev) => !prev)}
						>
							<ArrowLeftToLine size={20} className="text-white " />
							<Tooltip
								variant="light"
								anchorSelect="#close-sidebar"
								place="right"
								content="Close sidebar"
								className="hidden md:flex"
							/>
						</button>
					</div>
					<ul
						className={`h-full overflow-x-clip mt-5 px-2 md:px-0 flex grow overflow-y-auto [scrollbar-width:thin] w-full mx-auto flex-col gap-3`}
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
										className={cn(
											"text-nowrap",
											{
												hidden: !hideSidebar,
											},
											{
												"hidden md:flex": hideSidebar,
											}
										)}
										anchorSelect={`#${routes.name}`}
										place="right"
										content={routes.name}
									/>
									<Link
										href={routes.path!}
										aria-label={routes.name}
										className={cn(
											"text-text-normal font-medium pl-4 md:mx-0 md:pl-6 rounded-md md:rounded-none w-full flex items-start cursor-pointer py-2 gap-3 hover:bg-white/10 relative",
											{
												" bg-brand-green/30 hover:bg-brand-green/40 md:bg-mid--yellow hover:border-white/30 md:hover:bg-mid--yellow md:hover:bg-white/10 text-white md:bg-transparent rounded-md shadow-md md:shadow-none md:text-mid--yellow md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[24px] md:before:rounded-md md:before:w-[4px] md:before:bg-mid--yellow transition-all":
													routes.path === isPathActive,
											},

											{ "text-white": routes.path !== isPathActive }
										)}
									>
										<div className="flex items-center gap-3">
											{routes.icon}

											<p
												className={cn("flex", {
													"md:hidden": hideSidebar,
												})}
											>
												{routes.name}
											</p>
										</div>
									</Link>
								</li>
							);
						})}
					</ul>

					<div className="px-3">
						<Link
							href={"/choose-your-pricing"}
							id="upgrade-plan"
							aria-label="upgrade your plan"
							className={cn("flex flex-col w-fit text-nowrap gap-7 py-2", {
								"md:mx-auto": hideSidebar,
							})}
						>
							<div className="md:mb-2 active:scale-[1.01] select-none flex flex-col cursor-pointer gap-3 [background:linear-gradient(40deg,#2e2e48,#005031)] hover:[background:linear-gradient(80deg,#2e2e48,#005031)] transition-all duration-150 rounded-3xl p-5 shadow-md overflow-clip">
								<div className="mr-auto">
									<Rocket size={30} color="white" />
								</div>

								<div
									className={cn(
										"my-0 hidden lg:flex font-medium text-text-normal",

										{ "!hidden": hideSidebar }
									)}
								>
									UPGRADE PLAN
								</div>

								<p
									className={cn(
										"hidden lg:flex text-left text-[13px] text-wrap font-normal",
										{ "!hidden": hideSidebar }
									)}
								>
									Upgrade your current plan and enjoy amazing features
								</p>
							</div>
						</Link>
						<Tooltip
							variant="light"
							className={!hideSidebar ? "hidden" : "hidden md:flex"}
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
