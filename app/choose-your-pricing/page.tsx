import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getServerSession } from "next-auth";

import PricingClientPage from "@/components/PricingClientPage";
import { options } from "../api/auth/[...nextauth]/options";

export const metadata: Metadata = {
	title: "SatSat AI Subscription Plan",
};

const Page = async () => {
	const session = await getServerSession(options);

	return (
		<>
			<Header />
			<main className="min-h-screen overflow-clip bg-darker relative overflow-x-clip">
				<section className="py-24 z-10 relative">
					<h1 className="text-brand-green mb-0 text-center max-w-5xl mx-auto text-text-40 md:text-text-60">
						Choose pricing
					</h1>

					{session?.user.currentPlan && (
						<p className="text-mid--yellow text-center">
							Choose a subscription plan or upgrade from{" "}
							{session?.user?.currentPlan?.toUpperCase()}.
						</p>
					)}

					<PricingClientPage />
				</section>
			</main>
			<Footer />
		</>
	);
};

export default Page;
