import { featuresData } from "@/utils/featuresData";
import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "SATSAT-Ai Features",
};

const Features = () => {
	return (
		<>
			<Header />

			<main className="bg-darker min-h-screen w-full py-10 relative overflow-hidden">
				<div className="green-blob w-96 h-96 animate-pulse top-[-10%] md:top-[-20%] left-[50%]"></div>

				<div className="my-max pt-5">
					<h1 className="capitalize mt-16 text-brand-green text-center max-w-5xl mx-auto text-text-40 md:text-text-60 lg:text-text-60">
						Features
					</h1>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-5">
						{featuresData.map((data) => {
							return (
								<div
									key={data.title}
									className="text-white p-4 bg-[#071f07] rounded-2xl"
								>
									{data.icon}
									<h2 className="text-text-20 font-medium mt-2">
										{data.title}
									</h2>
									<p className="mb-3 mt-1 text-white/80 font-normal text-text-normal">
										{data.para}
									</p>
									<Link
										className="text-mid--yellow visited:text-brand-green"
										href={data.link}
									>
										Learn More
									</Link>
								</div>
							);
						})}
					</div>
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Features;
