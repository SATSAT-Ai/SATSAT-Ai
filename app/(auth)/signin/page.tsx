import Image from "next/image";
import signInImage from "@/public/signinImage.svg";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SignInForm from "@/components/SignInForm";

export const metadata: Metadata = {
	title: "Welcome back to SatSat-Ai",
};

const page = () => {
	return (
		<>
			<Header />
			<div className="bg-darker overflow-clip  pb-7 w-full min-h-screen items-center flex relative">
				<main className="grid grid-cols-1 lg:grid-cols-2 h-screen mt-20 items-center justify-between w-full gap-5 max-w-5xl xl:max-w-6xl my-max">
					<SignInForm />
					<div className="rounded-[40px] hidden lg:flex overflow-clip">
						<Image
							className="object-cover rounded-[40px]"
							src={signInImage}
							height={550}
							width={550}
							alt="signup"
							quality={30}
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
