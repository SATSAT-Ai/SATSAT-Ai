"use client";

import { IDashboardSidebarData } from "@/interface/interface";
import Link from "next/link";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { Tooltip } from "react-tooltip";
import { Dispatch, SetStateAction } from "react";

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

	const [showSub, setShowSub] = useState(() =>
		pathname.includes(routeWithSubpath.path)
	);

	useEffect(() => {
		if (showSub) {
			setShowSubpath(true);
		}
	}, [showSub]);

	const subpathHeight = routeWithSubpath.subPaths?.map((paths) => paths); // used to determine the height of subpath container based on number of paths

	return (
		<>
			<Tooltip
				className={!hideSidebar ? "hidden" : "hidden md:flex"}
				place="right-start"
				anchorSelect={`#${routeWithSubpath.name}`}
				content={routeWithSubpath.name}
			/>
			{routeWithSubpath?.subPaths?.map((subpath) => {
				return (
					<Tooltip
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
				className={`${
					showSub
						? ` rounded-md md:shadow-none relative md:pb-0 bg-brand-green/10`
						: !showSubpath
						? "md:hover:bg-white/10"
						: "text-white"
				} text-text-normal  rounded-md md:rounded-none  md:justify-start md:w-full flex cursor-pointer items-center gap-3 relative`}
			>
				<div
					className={`flex gap-2 flex-col duration-100 ${
						showSubpath ? "animate-accordion-up" : "h-10 md:h-11"
					} overflow-hidden  w-full `}
					style={{
						height: showSubpath
							? subpathHeight?.length! > 1
								? "138px"
								: "90px"
							: "40px",
					}}
				>
					<div
						className={`${
							routeWithSubpath.path === isActive
								? "md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[24px] md:before:rounded-md md:before:w-[4px] md:before:bg-mid--yellow bg-mid--yellow text-white md:text-mid--yellow hover:bg-white/10 md:bg-transparent rounded-md shadow-md md:shadow-none"
								: "hover:bg-white/10"
						} text-text-normal w-fit md:mx-full rounded-md md:hover:bg-transparent md:rounded-none justify-center md:justify-start md:w-full flex items-center  cursor-pointer md:gap-6 gap-3 p-2 md:pl-6 md:py-2 relative`}
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
								onClick={() => (setShowSubpath(true), setShowSub(true))}
								fontSize="medium"
								color="inherit"
							/>
						) : (
							showSubpath && (
								<ExpandLessIcon
									onClick={() => (setShowSubpath(false), setShowSub(false))}
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
										className={`${
											subpath.path === isActive
												? "md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[24px] md:before:rounded-md md:before:w-[4px] md:before:bg-mid--yellow bg-mid--yellow md:bg-transparent icon shadow-md md:shadow-none text-mid--yellow "
												: "text-white "
										} hover:bg-white/10 text-text-normal 0 justify-start mr-auto w-full rounded-md md:rounded-none  md:justify-start md:w-full flex cursor-pointer px-3 md:px-0 md:pl-6 py-2 items-center gap-3 relative`}
									>
										{subpath.icon}
										<div
											className={`${hideSidebar && "!hidden"} hidden md:flex`}
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
