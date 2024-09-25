import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SalesForm from "@/components/SalesForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SatSat-Ai Sales-Support",
};

const Page = () => {
	return (
		<div className="bg-darker text-white">
			<Header />
			<main className="flex pt-14 gap-4 my-max flex-col justify-center min-h-screen">
				<div className="text-center max-w-lg mx-auto">
					<h1 className="text-text-40 text-brand-green font-bold md:text-text-60">
						Contact Sales
					</h1>
					<p className="text-gray-400">
						Discuss your requirements, learn about pricing, explore enterprise
						plans or request a demo
					</p>
				</div>
				<SalesForm />
			</main>
			<Footer />
		</div>
	);
};

export default Page;
