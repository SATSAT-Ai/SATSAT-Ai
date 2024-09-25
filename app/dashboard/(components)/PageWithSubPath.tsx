"use client";

import { IDashboardSidebarData } from "@/interface/interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Tooltip } from "react-tooltip";
import { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

const PageWithSubPath = ({
	routeWithSubpath,
	pathname,
	hideSidebar,
	setHideSidebar,
	isActive,
}: {
	routeWithSubpath: IDashboardSidebarData;
	pathname: string;
	hideSidebar: boolean;
	setHideSidebar: Dispatch<SetStateAction<boolean>>;
	isActive: string;
}) => {
	const [showSubpath, setShowSubpath] = useState(false);

	const [showSubPathOnPageReload, setShowSubPathOnPageReload] = useState(() =>
		pathname.includes(routeWithSubpath.path)
	); //update the subpath styles on page reload

	useEffect(() => {
		if (showSubPathOnPageReload) {
			setShowSubpath(true);
		}
	}, [showSubPathOnPageReload]);

	const subpathHeight = routeWithSubpath.subPaths?.map((paths) => paths); // used to determine the height of subpath container based on number of paths

	return (
		<>
			<Tooltip
				variant="light"
				className={!hideSidebar ? "hidden" : "hidden md:flex"}
				place="right-start"
				anchorSelect={`#${routeWithSubpath.name}`}
				content={routeWithSubpath.name}
			/>
			{routeWithSubpath?.subPaths?.map((subpath) => {
				return (
					<Tooltip
						variant="light"
						key={subpath.name}
						className={!hideSidebar ? "hidden" : "hidden md:flex"}
						anchorSelect={`#${subpath.name}`}
						content={subpath.name}
						place="right"
					/>
				);
			})}
			<li
				id={routeWithSubpath.name}
				className={cn(
					"text-text-normal rounded-md md:rounded-none md:justify-start md:w-full flex cursor-pointer items-center gap-3 relative",
					{
						"rounded-md md:shadow-none relative md:pb-0 bg-brand-green/10":
							showSubPathOnPageReload,
					},
					{ "md:hover:bg-white/10 bg-transparent": !showSubPathOnPageReload }
				)}
			>
				<div
					className={cn(
						"flex gap-2 flex-col duration-100 overflow-hidden w-full",
						{
							"animate-accordion-up": showSubpath,
						},
						{ "h-10 md:h-11": !showSubpath }
					)}
					style={{
						height: showSubpath
							? subpathHeight?.length! > 1
								? "138px"
								: "90px"
							: "40px",
					}}
				>
					<div
						className={cn(
							"text-text-normal md:mx-full rounded-md md:hover:bg-transparent md:rounded-none flex items-center cursor-pointer  gap-3 py-2 pl-4 w-full md:mx-0 md:pl-6 md:py-2 relative",
							{
								"md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[24px] md:before:rounded-md md:before:w-[4px] md:before:bg-mid--yellow bg-mid--yellow text-white md:text-mid--yellow hover:bg-white/10 md:bg-transparent rounded-md shadow-md md:shadow-none":
									routeWithSubpath.path === isActive,
							},
							{ "hover:bg-white/10": routeWithSubpath.path !== isActive }
						)}
					>
						<Link
							onClick={() =>
								setHideSidebar(!pathname.includes("/chat") ? true : false)
							}
							className="flex gap-3 items-center"
							href={routeWithSubpath.path}
							aria-label={routeWithSubpath.name}
						>
							{routeWithSubpath.icon}
							<p className={`${hideSidebar && "!hidden"} hidden md:flex`}>
								{routeWithSubpath.name}
							</p>
						</Link>
						{!showSubpath ? (
							<ExpandMoreIcon
								onClick={() => (
									setShowSubpath(true), setShowSubPathOnPageReload(true)
								)}
								fontSize="medium"
								color="inherit"
							/>
						) : (
							showSubpath && (
								<ExpandLessIcon
									onClick={() => (
										setShowSubpath(false), setShowSubPathOnPageReload(false)
									)}
									fontSize="medium"
									color="inherit"
								/>
							)
						)}
					</div>
					<div className="flex items-center gap-2 w-full flex-col">
						{routeWithSubpath.subPaths?.map((subpath) => {
							return (
								<div key={subpath.name} className="w-full">
									<Link
										onClick={() =>
											setHideSidebar(!pathname.includes("/chat") ? true : false)
										}
										href={subpath.path}
										id={subpath.name}
										aria-label={subpath.name}
										className={cn(
											"hover:bg-white/10 text-text-normal pl-4 md:mx-0 md:pl-6 justify-start mr-auto w-full rounded-md md:rounded-none  md:justify-start md:w-full flex cursor-pointer py-2 items-center gap-3 relative",
											{
												"md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[24px] md:before:rounded-md md:before:w-[4px] md:before:bg-mid--yellow bg-brand-green/30 md:bg-transparent icon shadow-md md:shadow-none md:text-mid--yellow":
													subpath.path === isActive,
											},
											{ "text-white": subpath.path !== isActive }
										)}
									>
										{subpath.icon}
										<div
											className={cn({
												hidden: hideSidebar,
												"md:flex": !hideSidebar,
											})}
										>
											{subpath.name}
										</div>
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</li>
		</>
	);
};

export default PageWithSubPath;
