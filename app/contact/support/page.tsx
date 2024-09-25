import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SupportForm from "@/components/SupportForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SatSat-Ai Contact-Support",
};
const page = () => {
	return (
		<div className="bg-darker text-white">
			<Header />
			<main className="flex pt-14 gap-4 my-max flex-col justify-center min-h-screen">
				<div className="text-center max-w-lg mx-auto">
					<h1 className="text-text-40 text-brand-green font-bold md:text-text-60">
						Contact Support
					</h1>
					<p className="text-gray-400">
						Submit a ticket to our support team or email support@satsatai
						directly.
					</p>
				</div>
				<SupportForm />
			</main>
			<Footer />
		</div>
	);
};

export default page;
