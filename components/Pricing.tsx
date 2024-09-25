"use client";

import { pricingData } from "@/utils/pricingData";
import { CheckIcon } from "lucide-react";
import { useState } from "react";
import Toggler from "./ui/Toggler";
import SubscribeButton from "./SubscribeButton";
import TopShade from "@/app/dashboard/(components)/TopShade";

const Pricing = () => {
	const [enabled, setEnabled] = useState(true);

	return (
		<div className="text-center flex flex-col relative">
			<TopShade className="absolute from-darker h-16 blur-none to-transparent top-60%" />
			<div className="absolute -z-1 inset-0 h-[600px] w-full opacity-[0.13] bg-[linear-gradient(to_right,#2aa274_1px,transparent_1px),linear-gradient(to_bottom,#2aa274_1px,transparent_1px)] bg-[size:6rem_4rem] [mask-image:radial-gradient(ellipse_60%_70%_at_50%_5%,#fff_70%,transparent_110%)] bg-[green]/70"></div>
			<div className="px-5 pb-20 pt-10 text-center">
				<section className="mx-auto py-24 max-w-4xl">
					<h4 className="text-brand-green max-w-2xl leading-none text-center mb-5 my-max text-text-40 md:text-text-50 mx-auto lg:text-text-80">
						The right pricing for you.
					</h4>

					<Toggler enabled={enabled} setEnabled={setEnabled} />
				</section>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
					{pricingData.map((prices) => (
						<div
							key={prices.id}
							className="flex z-10 flex-col justify-between rounded-3xl bg-transparent/10 hover:bg-transparent/40 transition-all p-3 shadow-xl sm:p-9 text-left [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]"
						>
							<div>
								<h3 className="text-text-40 uppercase font-semibold leading-7 text-brand-green text-center">
									{prices.category}
								</h3>
								<div className="mt-4 flex items-baseline gap-x-2">
									{prices.category !== "free" && (
										<>
											<p className="text-text-40 font-bold mx-auto tracking-tight text-gray-100 text-center block">
												{enabled ? prices.annualPrice : prices.price}
												{prices.category !== "enterprise" && (
													<span className="text-gray-700 font-medium text-text-24">
														{enabled ? "/Annual" : "/Monthly"}
													</span>
												)}
											</p>
										</>
									)}
								</div>

								<ul
									role="list"
									className="mt-10 space-y-4 text-sm leading-6 text-gray-200"
								>
									{prices.privileges.map((feature) => (
										<li key={feature} className="flex gap-x-3">
											<CheckIcon
												className="h-6 w-5 flex-none text-brand-green/90"
												aria-hidden="true"
											/>
											{feature}
										</li>
									))}
								</ul>
							</div>

							{prices.category == "enterprise" ? (
								<SubscribeButton
									billing_period={enabled ? "annual" : "monthly"}
									data-test={`category-${prices?.id?.toLowerCase()}`}
									name="Contact Sales"
									buttonType={prices.category}
									className="mt-8 block rounded-lg bg-brand-green/90 px-3.5 py-2 text-center text-sm font-medium leading-6 text-white shadow-sm hover:bg-brand-green/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green/90"
								/>
							) : (
								<SubscribeButton
									billing_period={enabled ? "annual" : "monthly"}
									data-test={`category-${prices?.id?.toLowerCase()}`}
									name="Signup"
									buttonType={prices.category}
									className="mt-8 block rounded-lg bg-brand-green/90 px-3.5 py-2 text-center text-sm font-medium leading-6 text-white shadow-sm hover:bg-brand-green/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green/90"
								/>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Pricing;
