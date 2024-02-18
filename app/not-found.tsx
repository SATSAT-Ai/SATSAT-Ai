"use client";

import NotfoundImage from "../public/Notfound.svg";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function NotFound() {
	const router = useRouter();
	const pathname = usePathname();

	const redirectToDocs = () => {
		router.push("/docs/getting-started");
	};

	const redirectToHome = () => {
		router.push("/");
	};

	return (
		<main className="bg-darker min-h-screen w-full relative pb-20">
			<div className="flex items-center justify-center w-full h-full pt-20">
				<Image src={NotfoundImage} width={200} height={300} alt="404" />
			</div>
			<p className="text-mid--yellow text-center py-5">
				The page you are looking for cannot be found.
			</p>

			{pathname?.startsWith("/docs/") || pathname === "/docs" ? (
				<button
					className=" active:scale-[1.01] button w-fit hover:bg-brand-green border border-white block mx-auto transition-all text-white hover:border-none"
					onClick={redirectToDocs}
				>
					Head to Documentation{" "}
				</button>
			) : (
				<button
					className=" active:scale-[1.01] button w-fit hover:bg-brand-green border border-white block mx-auto transition-all text-white hover:border-none"
					onClick={redirectToHome}
				>
					Back to Home
				</button>
			)}
		</main>
	);
}
