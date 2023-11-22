import { IdashboardData } from "@/interface";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

const PageWithSubPath = ({
	routeWithSubpath,
	pathname,
	showSubpath,
	setShowSubpath,
}: {
	routeWithSubpath: IdashboardData[];
	pathname: string;
	setShowSubpath: Dispatch<SetStateAction<boolean>>;
	showSubpath: boolean;
}) => {
	return routeWithSubpath.map((routes) => {
		return (
			<div
				key={routes.name}
				className={`${
					pathname === routes.path
						? ` md:bg-transparent icon rounded-md md:shadow-none text-mid--yellow md:hover:bg-white/10 ${
								!showSubpath &&
								"md:before:absolute bg-mid--yellow hover:bg-white/10 md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[24px] md:before:rounded-md md:before:w-[4px] md:before:bg-mid--yellow"
						  }`
						: !showSubpath
						? "md:hover:bg-white/10"
						: "text-white"
				} text-text-normal md:pl-6  mx-auto md:mx-full rounded-md md:rounded-none justify-center md:justify-start md:w-full flex  cursor-pointer md:p-1 items-center gap-3 relative`}
			>
				<div
					className={`flex gap-2 flex-col ${
						showSubpath ? "h-fit" : "h-10 md:h-9 "
					} overflow-hidden  w-full`}
				>
					<Link
						href={routes.path!}
						onClick={() => setShowSubpath((prev) => !prev)}
						className={`${
							pathname === routes.path
								? " bg-mid--yellow hover:bg-white/10 md:bg-transparent icon rounded-md shadow-md md:shadow-none text-mid--yellow"
								: "text-white hover:bg-white/10"
						} text-text-normal w-fit mx-auto md:mx-full rounded-md md:hover:bg-transparent md:rounded-none justify-center md:justify-start md:w-full flex   cursor-pointer p-2 md:p-0 md:py-2 items-center gap-3 relative`}
					>
						{routes.icon}
						<p className="hidden md:flex">{routes.name}</p>
					</Link>
					<div className="flex items-center gap-2 w-full md:ml-1 flex-col">
						{routes.subPaths?.map((subpath) => {
							return (
								<Link
									href={subpath.path}
									key={subpath.path}
									className={`${
										pathname === subpath.path
											? " bg-mid--yellow md:bg-transparent icon  shadow-md md:shadow-none text-mid--yellow  md:before:absolute md:before:left-0 md:before:top-1/2 md:before:-translate-y-1/2 md:before:h-[24px] md:before:rounded-md md:before:w-[4px] md:before:bg-mid--yellow"
											: "text-white hover:bg-white/10"
									} text-text-normal md:pl-6 w-fit mx-auto md:mx-full rounded-md md:rounded-none justify-center md:justify-start md:w-full flex cursor-pointer p-2 items-center gap-3 relative`}
								>
									{routes.icon}
									<div className="hidden md:flex">{subpath.name}</div>
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		);
	});
};

export default PageWithSubPath;
