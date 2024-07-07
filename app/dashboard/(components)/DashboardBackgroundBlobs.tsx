"use client";
import { usePathname } from "next/navigation";
import { useCallback, useEffect } from "react";

const DashboardBackgroundBlobs = () => {
	const pathname = usePathname();

	const generateColors = useCallback(() => {
		if (pathname?.includes("/chat") || pathname === "/dashboard") {
			return ["green-blob4", "green-blob4"];
		}
		return ["green-blob4", "yellow-blob2"];
	}, [pathname]);

	useEffect(() => {
		generateColors();
	}, [generateColors]);

	return (
		<>
			<div
				className={`${
					generateColors()[Math.floor(Math.random() * generateColors()?.length)]
				} !fixed w-96 h-96 top-[-0%] lg:top-[10%] md:top-[50%] left-[35%]`}
			></div>
			<div
				className={`${
					generateColors()[Math.floor(Math.random() * generateColors()?.length)]
				} w-96 !fixed h-96 top-[-20%] sm:top-[-10%] lg:top-[-5%] right-[0%]`}
			></div>
		</>
	);
};

export default DashboardBackgroundBlobs;
