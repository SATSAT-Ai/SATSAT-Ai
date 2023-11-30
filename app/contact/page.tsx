import ContactUsForm from "@/components/ContactUsForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SATSAT-Ai Contact Support",
};

const page = () => {
	return (
		<>
			<Header />
			<div className=" flex relative overflow-x-clip items-center justify-center min-h-screen bg-darker">
				<div className=" animate-pulse green-blob2 w-96 h-96 top-[-30%] lg:top-[-30%] left-[50%] "></div>
				<main className="w-full my-max">
					<ContactUsForm />
				</main>
			</div>
			<Footer />
		</>
	);
};

export default page;
