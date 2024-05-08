import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PaddleCheckout from "@/components/PaddleCheckout";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SatSat-Ai - Checkout",
};

const Page = () => {
	return (
		<>
			<Header />
			<main className="min-h-screen overflow-clip bg-brand-green-fire relative overflow-x-clip">
				<section className="my-max mt-7 py-24 z-10 relative flex flex-col items-center lg:items-start lg:flex-row gap-5">
					<PaddleCheckout />
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Page;
