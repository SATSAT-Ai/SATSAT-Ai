import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
	title: "SatSat-Ai Contact-Us",
};

const page = () => {
	return (
		<>
			<Header />
			<div className=" pt-12 flex relative overflow-x-clip items-center justify-center min-h-screen bg-darker">
				<main className="text-white">
					<h1 className=" text-text-50 text-brand-green md:text-text-60 text-center font-bold">
						Contact Us
					</h1>
					<p className="max-w-lg mx-auto text-gray-400 text-center mb-7">
						Get in touch with our sales and support team for onboarding support,
						demos or product support
					</p>

					<div className=" my-max md:max-w-4xl mx-auto border border-white/10 rounded-md grid grid-cols-1 md:grid-cols-2 gap-5">
						<div className="p-9 border-white/10 border-b md:border-b-0  md:border-r">
							<h2 className="font-bold text-text-20 mb-1">Sales</h2>
							<p className="max-w-sm text-gray-400">
								Discuss requirements,request a demo or learn about pricing.
							</p>
							<Link
								href={"/contact/sales"}
								className="mt-4 block w-fit bg-mid--yellow text-white p-2 px-4 hover:bg-mid--yellow/80 active:bg-mid--yellow transition-all font-normal rounded-lg"
							>
								Contact Sales
							</Link>
						</div>
						<div className="p-9">
							<h2 className="font-bold text-text-20 mb-1">Support</h2>
							<p className="max-w-sm text-gray-400">
								Submit a ticket to our team or email support@satsatai directly.
							</p>
							<Link
								href={"/contact/support"}
								className="mt-4 block w-fit bg-mid--yellow text-white p-2 px-4 hover:bg-mid--yellow/80 active:bg-mid--yellow transition-all font-normal rounded-lg"
								type="button"
							>
								Submit ticket
							</Link>
						</div>
						{/* <ContactUsForm /> */}
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default page;
