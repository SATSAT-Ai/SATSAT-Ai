"use client";

import { MdVerified } from "react-icons/md";
import SubscribeButton from "@/components/SubscribeButton";
import { pricingData } from "@/utils/pricingData";
import Toggler from "@/components/ui/Toggler";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useState } from "react";
import { IPrices } from "@/interface/interface";

const PricingClientPage = () => {
	const [enabled, setEnabled] = useState(true);

	return (
		<>
			<Toggler enabled={enabled} setEnabled={setEnabled} />
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center w-full gap-5 mt-5 my-max">
				{pricingData.map((prices: IPrices) => {
					return (
						<div
							key={prices.id}
							className={`h-full cursor-pointer ${
								prices.category == "plus" ? "unique" : "card" //custom classnames
							} hover:text-white relative lg:h-auto p-6 max-w-sm md:max-w-full w-full mx-auto rounded-2xl bg-white text-white`}
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
										<li className=" flex items-center gap-3" key={privileges}>
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
							<h3 className=" flex flex-col text-center font-medium">
								{prices.category !== "free" &&
									prices.category !== "enterprise" && (
										<p
											className={`${
												enabled ? "visible" : "invisible"
											} line-through font-medium text-text-20 ${
												prices.category == "plus"
													? "text-mid--yellow"
													: "text-brand-green"
											}`}
										>
											$
											{Number(
												prices.annualPrice?.slice(
													1,
													prices.annualPrice.indexOf("/")
												)
											) * 2}
										</p>
									)}
								<p className="text-text-20 sm:text-text-24 ">
									{enabled ? prices.annualPrice : prices.price}
								</p>
							</h3>

							{prices.category == "enterprise" ? (
								<SubscribeButton
									data-test={`category-${prices?.id?.toLowerCase()}`}
									name="Contact Sales"
									buttonType={prices.category}
								/>
							) : (
								<SubscribeButton
									data-test={`category-${prices?.id?.toLowerCase()}`}
									name="Signup"
									buttonType={prices.category}
								/>
							)}
						</div>
					);
				})}
			</div>
		</>
	);
};

export default PricingClientPage;
