"use client";
import { Data } from "@/interface/interface";
import { getProviderImage } from "@/utils/providerImages";
import Image from "next/image";
import { useState } from "react";
import { GiCash } from "react-icons/gi";
import TransactionDetailsAiSuggestion from "./TransactionDetailsAiSuggestion";
import FromTransDetails from "./FromTransDetails";
import ToTransDetails from "./ToTransDetails";
import {
	LucideArrowUpRightFromCircle,
	LucideArrowDownRightFromCircle,
} from "lucide-react";

const TransactionDetails = ({ transData }: { transData: Data[] }) => {
	const [showMore, setShowMore] = useState(5);
	const [showMoreAiSugestions, setShowMoreAiSugestions] = useState(0);
	const [detailsLength, setDetailsLength] = useState(0);
	const [loading, setLoading] = useState(false);

	//useQuery

	// const fetchTransactionDetail = () => {
	// 	try {
	// 		setLoading(true);
	// 	} catch (error) {
	// 		setLoading(false);
	// 	}
	// };

	return (
		<main className=" flex flex-col p-5 lg:flex-row gap-5 justify-center w-full relative z-0">
			<div className="text-white w-full flex flex-col gap-5 flex-[2]">
				<div className="lg:hidden">
					<TransactionDetailsAiSuggestion
						showMoreAiSugestions={showMoreAiSugestions}
						detailsLength={detailsLength}
						showMore={showMore}
						loading={loading}
					/>
				</div>
				{Object.entries(transData).map(([key, value]) => {
					const imageSrc = getProviderImage(value.Provider);

					return (
						<div
							key={value.id + key}
							className="bg-[#2aa27438] rounded-2xl shadow-md p-4"
						>
							<div className="flex py-3 justify-between items-center gap-5">
								<h1 className="m-0 flex flex-col gap-1 text-[27px]">
									<span className="font-medium flex items-center gap-1 text-text-12 uppercase">
										<GiCash size={22} /> Amount
									</span>
									GHS {value.Amount}.00
								</h1>
								<Image
									src={imageSrc}
									alt={value.Provider}
									height={50}
									width={50}
									className="rounded-full"
									priority
								/>
							</div>
							<div className=" relative bottom-0 h-[1px] w-full right-0 rounded-lg bg-silver-gradient2"></div>

							<div className="flex flex-col gap-5 justify-between pt-5">
								{Object.entries(value)
									.slice(0, showMore)
									.map(([keys, values]) => {
										if (keys === "reconcilable") {
											values = value.reconcilable.toString();
										}
										if (keys === "Amount") {
											return;
										}
										if (!keys.startsWith("To") && !keys.startsWith("From")) {
											return (
												<div
													key={values}
													className="flex w-full items-center text-text-normal justify-between gap-5"
												>
													<p className="capitalize text-text-normal text-[#ffffffde] ">
														{keys}
													</p>
													<p className="capitalize">{values}</p>
												</div>
											);
										}
										return;
									})}
							</div>
							<div className="flex flex-wrap md:flex-nowrap lg:flex-wrap xl:flex-nowrap mt-7 items-center gap-5  justify-between">
								<button
									disabled={showMore === Object.keys(value).length - 1} // -1 = amount value
									className={`p-3  shadow-lg w-full disabled:active:scale-100 disabled:border-none disabled:bg-[#80808062] transition-all duration-150 active:scale-[1.01] bg-brand-green-darker hover:bg-mid--yellow border hover:border-transparent   rounded-lg text-white`}
									type="button"
									onClick={() => {
										if (showMore === Object.keys(value).length - 1) {
											return;
										} else {
											setShowMore(showMore + 5);
											setShowMoreAiSugestions(showMoreAiSugestions + 1);
											setDetailsLength(Object.keys(value).length - 1);
										}
									}}
								>
									Show More Details
								</button>
								<button
									disabled={showMore === 5}
									className={`p-3 shadow-md transition-colors duration-150 disabled:active:scale-100 active:scale-[1.01] disabled:bg-[#80808062] bg-brand-green-darker w-full hover:bg-mid--yellow rounded-lg text-white`}
									type="button"
									onClick={() => {
										if (showMore === 5) {
											return;
										} else {
											setShowMore(showMore - 5);
										}
									}}
								>
									Show Less Details
								</button>
							</div>
						</div>
					);
				})}
			</div>
			<div className="text-white w-full flex-[3] flex flex-col gap-5">
				<div className="hidden lg:flex">
					<TransactionDetailsAiSuggestion
						showMoreAiSugestions={showMoreAiSugestions}
						detailsLength={detailsLength}
						showMore={showMore}
						loading={loading}
					/>
				</div>

				<div className="bg-[#2aa27438] flex-[5] rounded-2xl shadow-md p-4">
					<h3 className="mb-2 flex items-center gap-2">
						<LucideArrowUpRightFromCircle size={25} />
						From
					</h3>
					<FromTransDetails transData={transData} />
					<div className="mt-5">
						<h3 className="mb-2 flex items-center gap-2">
							<LucideArrowDownRightFromCircle size={25} />
							To
						</h3>
						<ToTransDetails transData={transData} />
					</div>
				</div>
			</div>
		</main>
	);
};

export default TransactionDetails;
