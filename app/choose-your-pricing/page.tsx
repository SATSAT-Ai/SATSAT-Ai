import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
	title: "SatSat AI Subscription Plan",
};

const Page = async () => {
	return (
		<>
			<Header />
			<main className="min-h-screen overflow-clip bg-darker relative overflow-x-clip">
				<Pricing />
			</main>
			<Footer />
		</>
	);
};

export default Page;
