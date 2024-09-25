import NotfoundImage from "../public/Notfound.svg";
import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
	return (
		<main className="bg-darker min-h-screen w-full relative pb-20">
			<div className="flex items-center justify-center w-full h-full pt-20">
				<Image src={NotfoundImage} width={200} height={300} alt="404" />
			</div>
			<p className="text-mid--yellow text-center py-5">
				The page you are looking for cannot be found.
			</p>

			<Link
				href="/"
				className=" active:scale-[1.01] p-3 px-4 active:bg-brand-green border-none rounded-lg bg-brand-green w-fit hover:bg-brand-green/70 border border-white block mx-auto transition-all text-white hover:border-none"
			>
				Back to Home
			</Link>
		</main>
	);
}
