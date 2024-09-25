import signupImage from "@/public/signupImage.svg";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignUpForm from "@/components/SignUpForm";
import Image from "next/image";
import Blob from "@/components/Blob";

export const metadata: Metadata = {
	title: "SatSat-Ai Get started!",
};
const page = () => {
	return (
		<>
			<Header />
			<div className="bg-darker pb-7 w-full min-h-screen items-center flex relative">
				<Blob
					animation="animate-pulse"
					className="w-96 h-96 -top-[40%] left-[10%] md:left-[23%] xl:w-[700px]"
				/>
				<main className="grid grid-cols-1 lg:grid-cols-2 mt-28 h-full items-center justify-between w-full gap-5 max-w-5xl xl:max-w-6xl my-max">
					<SignUpForm />
					<div className="rounded-[40px] z-10 hidden lg:flex overflow-clip">
						<Image
							className="object-cover h-auto rounded-[40px]"
							src={signupImage}
							width={600}
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
