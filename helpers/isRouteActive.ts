import { IDashboardSidebarData } from "@/interface/interface";

export const isActive = (
	pathname: string,
	dashboardSidebarData: IDashboardSidebarData[]
): string => {
	const currentPath = pathname.split("/");

	if (currentPath.length >= 4) {
		const processedBrowserPathname = currentPath.slice(0, -1).join("/");

		const isPathSame = dashboardSidebarData.find(
			(path) => path.path === processedBrowserPathname
		);

		const isIgnoredSubpaths = ["categories", "budget", "receipts"];
		const ignored = isIgnoredSubpaths.some((subpath) =>
			currentPath.includes(subpath as string)
		);

		if (!isPathSame) {
			//consider subpaths
			const isSubpathSame = dashboardSidebarData
				.filter((path) => path.subPaths)
				.flatMap((filteredPaths) => filteredPaths.subPaths)
				.find((subpath) => subpath?.path === processedBrowserPathname);

			if (isSubpathSame) {
				return isSubpathSame.path;
			}
			if (ignored) {
				return pathname;
			}
		}

		if (isPathSame && !ignored) {
			return isPathSame.path;
		}
	}
	return pathname;
};
