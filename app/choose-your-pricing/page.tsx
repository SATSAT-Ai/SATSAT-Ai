import { BsFillCheckCircleFill } from "react-icons/bs";
import { Iprices } from "@/interface/interface";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MdVerified } from "react-icons/md";
import SubscribeButton from "@/components/SubscribeButton";
import { pricingData } from "@/pricingData";

export const metadata: Metadata = {
	title: "SATSAT AI subscription plan",
};

const page = () => {
	return (
		<>
			<Header />
			<main className="min-h-screen bg-darker relative overflow-x-clip">
				<div className=" animate-pulse green-blob2 w-96 h-96 top-[-5%] md:top-[-10%] right-[-50%] md:right-[-15%]"></div>
				<div className=" animate-pulse yellow-blob3 w-96 h-96 bottom-[-10%] md:bottom-[0%] left-[-10%]"></div>
				<section>
					<h1 className="text-brand-green mb-3 text-center max-w-5xl mx-auto text-text-40 md:text-text-60">
						Choose pricing
					</h1>

					<p className="text-brand-green text-center">
						Choose a subscription plan or upgrade from {"FREE"}.
					</p>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center w-full gap-5 mt-7 my-max">
						{pricingData.map((prices: Iprices) => {
							return (
								<div
									key={prices.id}
									className={`h-ful cursor-pointer ${
										prices.category == "plus" ? "unique" : "card" //custom classnames
									} hover:text-white relative lg:h-auto p-6 max-w-sm md:max-w-full w-full mx-auto rounded-xl bg-white text-white`}
								>
									<h2
										className={`  text-center text-text-24 uppercase text-brand-green`}
									>
										{prices.category}
									</h2>
									{prices.category == "plus" && (
										<MdVerified
											color="white"
											className="w-fit ml-auto verify absolute top-5 right-3"
											size={30}
										/>
									)}
									<ul className="flex flex-col gap-3">
										{prices.privileges.map((privileges) => {
											return (
												<li
													className=" flex items-center gap-3"
													key={privileges}
												>
													<BsFillCheckCircleFill
														size={20}
														className={`${"text-brand-green"} check`}
													/>
													{privileges}
												</li>
											);
										})}
									</ul>
									<div className="border-b-2 line border-dashed border-grey-lightest my-5" />
									<h3 className=" text-center text-text-normal font-medium">
										{prices.price}
									</h3>
									{prices.category == "enterprise" ? (
										<SubscribeButton
											name="Contact Sales"
											type="contact-sales"
										/>
									) : (
										<SubscribeButton name="Signup" type="signup" />
									)}
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
