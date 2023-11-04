import React from "react";
import { pricingData } from "./pricingdata";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { Iprices } from "@/interface";
import Link from "next/link";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "SATSAT-Ai subscription plan",
};

const page = () => {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-darker relative overflow-x-clip">
				<div className=" animate-pulse green-blob w-96 h-96 top-[-5%] md:top-[-10%] right-[-50%] md:right-[-15%]"></div>
				<div className=" animate-pulse yellow-blob w-96 h-96 bottom-[-10%] md:bottom-[0%] left-[-10%]"></div>
				<section>
					<h1 className="text-brand-green text-center max-w-5xl mx-auto text-text-40 md:text-text-60">
						Choose pricing
					</h1>

					<p className="text-brand-green text-center">
						{/* change name based on current subscription plan */}
						Choose a subscription plan or upgrade from {"FREE"}.
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center w-full gap-5 mt-7 my-max">
						{pricingData.map((prices: Iprices) => {
							return (
								<div
									key={prices.id}
									className="h-full lg:h-auto p-6 max-w-sm md:max-w-full w-full mx-auto rounded-xl bg-white text-white"
								>
									<h2
										className={`${
											prices.category == "plus"
												? "text-mid--yellow"
												: "text-brand-green"
										} text-center text-text-24 uppercase text-brand-green`}
									>
										{prices.category}
									</h2>
									<ul className="flex flex-col gap-3">
										{prices.priviledges.map((priviledges) => {
											return (
												<li
													className="text-darker flex items-center gap-3"
													key={priviledges}
												>
													<BsFillCheckCircleFill
														size={20}
														className={`${
															prices.category == "plus"
																? "text-mid--yellow"
																: "text-brand-green"
														}`}
													/>
													{priviledges}
												</li>
											);
										})}
									</ul>
									<div className="border-b-2 border-dashed border-grey-lightest my-5" />
									<h3 className="text-darker text-center text-text-24 font-bold">
										{prices.price}
									</h3>
									<Link
										className="w-full block text-center font-normal hover:bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green button"
										href={"#"}
									>
										Signup
									</Link>
								</div>
							);
						})}
					</div>
				</section>
			</main>
			<Footer />
		</>
	);
};

export default page;
