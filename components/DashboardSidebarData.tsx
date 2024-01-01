import Link from "next/link";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ChatIcon from "@mui/icons-material/Chat";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { MdClose } from "react-icons/md";
import { TbLayoutSidebarLeftExpandFilled } from "react-icons/tb";
import { Dispatch, SetStateAction } from "react";
import Image from "next/image";
import Logo from "@/public/satsat-logo.svg";
import LogoSmall from "@/public/satsat-icon.svg";
import { IDashboardSidebarData } from "@/interface";
import PageWithSubPath from "./PageWithSubPath";
import UploadFileIcon from "@mui/icons-material/UploadFile";
import PaidIcon from "@mui/icons-material/Paid";
import CategoryIcon from "@mui/icons-material/Category";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import { Tooltip } from "react-tooltip";

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
			icon: <DashboardIcon fontSize="medium" />,
			name: "Dashboard",
			path: "/dashboard",
		},
		{
			path: "/dashboard/transactions",
			icon: <PaidIcon fontSize="medium" />,
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
			icon: <ChatIcon fontSize="medium" />,
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

	const isActive = (): string => {
		const currentPath = pathname.split("/");

		if (currentPath.length >= 4) {
			const processedBrowserPathname = currentPath.slice(0, -1).join("/");

			const isPathSame = dashboardSidebarData.find(
				(path) => path.path === processedBrowserPathname
			);

			if (!isPathSame) {
				const isSubpathSame = dashboardSidebarData
					.filter((path) => path.subPaths)
					.flatMap((filteredPaths) => filteredPaths.subPaths)
					.find((subpath) => subpath?.path === processedBrowserPathname);

				if (isSubpathSame) return isSubpathSame.path;
			}
		}
		return pathname;
	};

	return (
		<>
			<div
				className={`pt-4 h-screen flex w-full sticky top-0 items-center md:items-start flex-col gap-3 `}
			>
				<div className="w-full h-full overflow-y-auto custom-scroll2">
					<div
						id="close-sidebar"
						tabIndex={0}
						className={`${
							hideSidebar && "md:hidden"
						} md:ml-6 ml-2 md:absolute right-2 md:top-8 active:scale-[1.06] z-10 top-1 md:mx-auto md:mx-full cursor-pointer my-5 md:my-0 w-fit p-1 rounded-md`}
						onClick={() => setHideSidebar((prev) => !prev)}
					>
						<MdClose size={25} color="white" />
						<Tooltip
							className={!hideSidebar ? "hidden" : "hidden lg:flex"}
							anchorSelect="#close-sidebar"
							place="right"
							content="Close sidebar"
						/>
					</div>
					<div
						className={`w-full pb-3 hidden md:block font-medium ${
							hideSidebar && pathname.includes("/chat")
								? "flex !w-fit pl-6"
								: hideSidebar
								? "!hidden"
								: ""
						}`}
					>
						<Link href={"/"} className="lg:flex">
							<Image
								className="mx-auto w-fit pt-4"
								src={
									pathname.includes("/chat") && hideSidebar ? LogoSmall : Logo
								}
								height={110}
								width={110}
								alt="SATSAT-Ai"
							/>
						</Link>
					</div>

					{!pathname.includes("/chat") && (
						<div
							id="open-sidebar"
							tabIndex={0}
							className={` ${
								!hideSidebar && "!hidden"
							} md:ml-6 hidden sm:flex mx-auto md:mx-full cursor-pointer my-5 w-fit p-1 rounded-md`}
							onClick={() => setHideSidebar((prev) => !prev)}
						>
							<TbLayoutSidebarLeftExpandFilled size={25} color="white" />
							<Tooltip
								anchorSelect="#open-sidebar"
								place="right"
								content="Open sidebar"
							/>
						</div>
					)}
					<div className="flex flex-col gap-5 h-[88%] justify-between">
						<ul className="flex md:w-full w-fit mx-auto flex-col gap-3">
							{dashboardSidebarData.map((routes: IDashboardSidebarData) => {
								if (routes.subPaths) {
									return (
										<PageWithSubPath
											hideSidebar={hideSidebar}
											key={routes.name}
											routeWithSubpath={routes}
											pathname={pathname}
											setHideSidebar={setHideSidebar}
											isActive={isActive}
										/>
									);
								}
								return (
									<li key={routes.name} id={routes.name}>
										<Tooltip
											className={!hideSidebar ? "hidden" : "hidden md:flex"}
											anchorSelect={`#${routes.name}`}
											place="right"
											content={routes.name}
										/>
										<Link
											onClick={() =>
												setHideSidebar(
													!pathname.includes("/chat") ? true : false
												)
											}
											href={routes.path!}
											aria-label={routes.name}
											className={`${
												routes.path === isActive()
													? " bg-mid--yellow md:bg-transparent icon rounded-md shadow-md md:shadow-none text-mid--yellow md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[24px] md:before:rounded-md md:before:w-[4px] md:before:bg-mid--yellow"
													: "text-white"
											} text-text-normal font-medium md:pl-6 w-fit md:mx-full rounded-md md:rounded-none justify-center md:justify-start md:w-full flex  cursor-pointer p-2 items-center gap-3 hover:bg-white/10 relative`}
										>
											<div className="flex items-center gap-3">
												{routes.icon}

												<p
													className={`${
														hideSidebar && "!hidden"
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
						<Link
							href={"#"}
							id="upgrade-plan"
							aria-label="upgrade your plan"
							className={`${
								hideSidebar && "md:mx-auto"
							} flex flex-col mx-3 w-fit gap-7`}
						>
							<div className="md:mb-5 active:scale-[1.01] select-none flex flex-col cursor-pointer gap-3 gradient-upgrade rounded-3xl p-5 shadow-md">
								<div className="mr-auto">
									<RocketLaunchIcon fontSize="large" color={"primary"} />
								</div>

								<div
									className={`${
										hideSidebar && "!hidden"
									} my-0 hidden md:flex font-medium text-text-normal`}
								>
									UPGRADE PLAN
								</div>

								<p
									className={`${
										hideSidebar && "!hidden"
									} hidden md:flex text-left text-[13px] font-normal`}
								>
									Upgrade your current plan and enjoy amazing features
								</p>
							</div>
						</Link>
						<Tooltip
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
