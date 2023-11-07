import React from "react";
import Image from "next/image";
import signinImage from "@/public/signinImage.svg";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SigninForm from "@/components/SigninForm";

export const metadata: Metadata = {
	title: "Welcome back to SATSAT Ai",
};

const Page = () => {
	return (
		<>
			<Header />
			<div className="bg-darker pb-7 w-full min-h-screen items-center flex relative">
				<div className="yellow-blob w-96 h-96 top-[-40%] left-[20%] md:top-[-25%] md:left-[10%] animate-pulse"></div>

				<main className="grid grid-cols-1 lg:grid-cols-2 h-auto mt-20 items-center justify-between w-full gap-5 max-w-5xl xl:max-w-6xl my-max">
					<SigninForm />
					<div className="rounded-[40px] hidden lg:flex overflow-clip">
						<Image
							className="object-cover"
							src={signinImage}
							layout="responsive"
							height={550}
							width={550}
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

export default Page;
