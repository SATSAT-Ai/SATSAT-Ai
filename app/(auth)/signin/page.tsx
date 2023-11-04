import React from "react";
import Image from "next/image";
import signinImage from "@/public/signinImage.svg";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Welcome back to SATSAT Ai",
};

const page = () => {
	return (
		<>
			<Header />
			<div className="bg-darker pb-7 w-full min-h-screen items-center flex relative">
				<div className="yellow-blob w-96 h-96 top-[-40%] left-[20%] md:top-[-25%] md:left-[10%] animate-pulse"></div>

				<main className="grid grid-cols-1 lg:grid-cols-2 h-auto mt-20 items-center justify-between w-full gap-5 max-w-5xl xl:max-w-6xl my-max">
					<div className="flex flex-col md:flex-[.9] gap-3 items-start md:w-full max-w-sm mx-auto">
						{/* <Image src={logo} alt="satsat-ai" height={150} width={150} /> */}
						<p className="text-mid--yellow text-[27px]">Welcome back!</p>
						<p className="text-mid--yellow">
							Please fill your details to log into your account.
						</p>

						<div className="w-full flex flex-col">
							<label
								className="mb-2 text-text-normal text-mid--yellow"
								htmlFor=""
							>
								Email
							</label>
							<input
								className="placeholder:text-grey-lightest/60 border border-white bg-transparent p-2 rounded-lg"
								type="text"
								placeholder="johndoe@gmail.com"
								value={""}
								name="email"
							/>
						</div>

						<div className=" text-white w-full justify-between flex items-center gap-5">
							<span className="flex  items-center gap-2">
								<input type="checkbox" />
								Remember me
							</span>
							<Link href={"#"} className="text-text-normal text-crimson">
								Forget password?
							</Link>
						</div>
						<button
							className="border mt-5 font-medium text-[17px] active:scale-[1.001] hover:text-darker transition-colors duration-200 hover:border-mid--yellow hover:bg-mid--yellow border-brand-green block w-full p-2 rounded-lg text-mid--yellow"
							type="button"
						>
							Sign in
						</button>
						<span className="text-white text-center w-full mt-3">
							Dont have an account?{" "}
							<Link className="text-brand-green" href={"/signup"}>
								Sign up
							</Link>
						</span>
						<div className="flex items-center justify-center w-full">
							<div className=" my-7 w-full h-[1px] gradient3"></div>

							<span className="text-grey-lightest">or</span>
							<div className=" my-7 w-full h-[1px] gradient4"></div>
						</div>
						<button
							className="mt-5 font-semibold text-[17px] transition-colors duration-20 bg-white w-full p-3 rounded-3xl text-darker hover:bg-transparent border flex items-center justify-center gap-3 hover:text-white active:scale-[1.01] hover:border-white"
							type="button"
						>
							Sign in with Google
							<FcGoogle size={25} />
						</button>
					</div>
					<div className="rounded-[40px] hidden lg:flex overflow-clip">
						<Image
							className="object-cover"
							src={signinImage}
							layout="responsive"
							height={750}
							width={600}
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
