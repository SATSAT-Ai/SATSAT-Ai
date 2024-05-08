import Image from "next/image";
import signupImage from "@/public/signupImage.svg";

import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignUpForm from "@/components/SignUpForm";

export const metadata: Metadata = {
	title: "SatSat-Ai Get started!",
};
const page = () => {
	return (
		<>
			<Header />
			<div className="bg-darker pb-7 w-full min-h-screen items-center flex relative">
				<div className="green-blob2 w-96 h-96 top-[-40%] !blur-[150px] left-[20%] md:top-[-25%] md:left-[10%] animate-pulse"></div>
				<main className="grid grid-cols-1 lg:grid-cols-2 mt-24 h-full items-center justify-between w-full gap-5 max-w-5xl xl:max-w-6xl my-max">
					<SignUpForm />
					<div className="rounded-[40px] hidden lg:flex overflow-clip">
						<Image
							className="object-cover rounded-[40px]"
							src={signupImage}
							height={600}
							width={550}
							quality={40}
							alt="signup"
							priority
						/>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default page;
