import Image from "next/image";
import mtnImage from "../public/mtn.svg";
import vodaphoneImage from "../public/vodaphone.svg";
import ecobankImage from "../public/ecobank.svg";
import absaImage from "../public/absa.svg";
import accessBankImage from "../public/Access-bank.svg";
import airtelTigoImage from "../public/airteltigo.svg";
import calbankImage from "../public/calbank.svg";
import Marquee from "react-fast-marquee";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import { MdStar } from "react-icons/md";
import GetStartedButton from "@/components/ui/GetStartedButton";
import PageScroller from "./dashboard/(components)/PageScroller";
import TypeWriteInView from "@/components/TypeWriteInView";
import GetStartedWithBlob from "@/components/GetStartedWithBlob";
import EarlyAccessModal from "@/components/ui/EarlyAccessModal";
// import { PulseBeams } from "@/components/ui/PulseBeam";
import Feature from "@/components/Feature";
import { featuresData } from "@/utils/featuresData";
import Spotlight from "@/components/ui/spotlight";
import { DatabaseZap, FileText, ShieldAlert, UserRoundCog } from "lucide-react";
import { BotMessageSquare } from "lucide-react";
import Pricing from "@/components/Pricing";
// import priceImage from "@/public/price.avif";
import GlowCardParent from "@/components/ui/GlowCardParent";
import GlowCard from "@/components/ui/GlowCard";

export const metadata: Metadata = {
	title: "Welcome to SatSat-Ai - Chat with your financial documents",
};

export default function Home() {
	return (
		<>
			<Header green={true} />
			<EarlyAccessModal />
			<main className="bg-darker w-full overflow-x-clip">
				<HeroSection />
				<section className="text-center my-max flex flex-col items-center md:flex-row md:flex-wrap xl:flex-nowrap gap-9 sm:gap-5 px-5 md:px-0">
					<div className="max-w-4xl mx-auto xl:max-w-xl w-full">
						<h2 className="text-brand-green font-semibold text-left leading-tight text-text-40 md:text-text-60 mx-auto">
							What Is SatSat Ai?
						</h2>
						<div className="text-mid--yellow text-left h-24 text-text-normal md:text-text-normal">
							<TypeWriteInView
								text="SatSat AI is a financial intelligence platform revolutionizing how you extract value from your financial documents. We empower organizations to save time and resources by unlocking the hidden insights within their data."
								className="md:text-text-normal"
							/>
						</div>
					</div>
					<GlowCardParent className="relative grid gap-5 mx-auto grid-cols-1 sm:grid-cols-2 min-[900px]:grid-cols-3 lg:grid-cols-2 max-w-4xl">
						<GlowCard cardClassName="bg-[#071f07] text-white">
							<Feature
								title={"Data Security and Privacy"}
								para={
									"We prioritize data security. We ensure maximum protection and security."
								}
								icon={<ShieldAlert size={40} className="text-mid--yellow" />}
								titleClassName=" text-mid--yellow"
								className="text-left"
							/>
						</GlowCard>
						<GlowCard cardClassName="bg-[#071f07] text-white ">
							<Feature
								title={"Smart Data Extraction"}
								para={
									"Our AI algorithms automatically identify file and extract key information."
								}
								className="text-left"
								icon={<FileText size={40} className="text-mid--yellow" />}
								titleClassName="text-mid--yellow"
							/>
						</GlowCard>
						<GlowCard cardClassName="bg-[#071f07] text-white ">
							<Feature
								title={"Seamless Storage"}
								para={
									"Processed documents are securely stored in-house for instant retrieval."
								}
								className="text-left"
								icon={<DatabaseZap size={40} className="text-mid--yellow" />}
								titleClassName="text-mid--yellow"
							/>
						</GlowCard>
						<GlowCard cardClassName="bg-[#071f07] text-white ">
							<Feature
								title={"AI model"}
								para={
									"Our model provides insights to your financial data helping you make informed decisions with ease."
								}
								className="text-left"
								icon={
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="#c98821"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="#c98821"
										className="w-10 h-10"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
										/>
									</svg>
								}
								titleClassName="text-mid--yellow"
							/>
						</GlowCard>
					</GlowCardParent>
				</section>
				<section className="max-w-3xl lg:max-w-full mx-auto">
					<h4 className="text-brand-green max-w-4xl leading-tight text-center mb-2 text-text-40 md:text-text-60 mx-auto lg:text-text-80">
						What We Offer
					</h4>
					<p className="text-mid--yellow px-2 h-20 max-w-xl mb-10 mx-auto text-text-normal text-center">
						Our intelligent tools helps you optimize your financial future.
						Uncover more features like fraud detection, credit scoring,
						financial insights, ai chat and many more.
					</p>

					<div className=" px-5 ">
						<div className="border-l border-brand-green/40 grid grid-cols-1 gap-0  lg:grid-cols-4">
							{featuresData.map((data, idx) => {
								return (
									<Feature
										key={data.title}
										idx={idx}
										title={data.title}
										para={data.para.slice(0, 100) + "..."}
										icon={data.icon}
										borderRight={true}
										hidden={[0, 4, 5, 6].includes(idx)}
										borderTop={[2, 3, 7, 8, 9, 10, 11, 12].includes(idx)}
										className=" border-brand-green/40 bg-transparent rounded-none p-7"
										titleClassName="text-text-24"
									/>
								);
							})}
						</div>
					</div>
				</section>
				<Pricing />
				<section className=" z-10 my-max text-center flex flex-col relative">
					<Spotlight
						className="absolute w-[170%] md:w-[250%] lg:w-[120%]"
						fill="#29a173"
					/>
					<h4 className="hidden md:flex text-brand-green max-w-4xl leading-tight text-text-24 sm:text-text-40 md:text-text-60 lg:text-text-80 mx-auto">
						Chat With SatSat Ai
					</h4>
					<p className="hidden md:flex text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
						Querying your financial data has never been easy, with SAT SAT AI
						you need not worry about anything
					</p>

					<div className="mt-20 md:max-w-5xl mx-auto grid gap-10 grid-cols-1 lg:grid-cols-2">
						<div className="text-left relative">
							<h4 className="text-brand-green mb-3 z-10 relative font-semibold text-text-40">
								How To Get Started
							</h4>
							<p className="text-mid--yellow z-10 relative mb-5 max-w-md">
								Enjoy fast, secure and reliable way of Querying your financial
								data with SatSat AI
							</p>

							<div className="relative z-[1] mt-7">
								<GetStartedButton
									className={"w-fit"}
									icon={<MdStar size={25} />}
									showIcon={true}
									name="Get Started Now"
									iconPosition="left"
									data-test="choose-pricing-button"
								/>
							</div>
						</div>
						<div className="flex z-10 relative flex-col sm:flex-row gap-5 lg:flex-row">
							<div className="flex sm:flex-col md:flex-col lg:flex-col gap-5 bg-[#071f0780] lg:bg-[#071f07] px-5 py-5 rounded-3xl">
								<div className=" w-[80px] aspect-square shrink-0 grid place-content-center bg-brand-green-darker rounded-full">
									<UserRoundCog color="white" size={35} />
								</div>
								<div className="flex flex-col items-start">
									<h4 className="text-brand-green mb-2 font-medium text-text-20 text-left">
										Create Your Account
									</h4>
									<p className="text-mid--yellow text-text-14 text-left max-w-2xl">
										Your account and personal identity are guaranteed safe.
									</p>
								</div>
							</div>
							<div className="flex sm:flex-col md:flex-col lg:flex-col gap-5 bg-[#071f0780] lg:bg-[#071f07] px-5 py-5 rounded-3xl">
								<div className="w-[80px] aspect-square shrink-0 grid place-content-center bg-brand-green-darker rounded-full">
									<BotMessageSquare color="white" size={35} />
								</div>

								<div className="flex flex-col items-start">
									<h4 className="text-brand-green font-medium text-text-20 mb-2">
										Start chatting with Ai
									</h4>
									<p className="text-mid--yellow text-text-14 text-left max-w-2xl">
										Upload your financial data and start chatting with SatSat ai
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="text-center flex flex-col w-full overflow-x-auto ">
					<h4 className="text-brand-green max-w-4xl leading-tight text-text-40 md:text-text-60 mx-auto lg:text-text-80">
						Financial Service Providers
					</h4>
					<p className="text-mid--yellow px-2 h-20 max-w-xl mx-auto text-text-normal md:text-text-normal">
						SatSat AI scans documents such as invoices, mobile money statements,
						bank statements, receipts etc. These are some of the service
						providers and banks we provide our services to.
					</p>

					<Marquee
						autoFill
						speed={100}
						gradient
						gradientColor="#050d0a"
						className="mt-10"
					>
						<div className="flex items-center w-full gap-5 justify-between mt-20 h-full">
							<Image
								className=" h-auto w-auto rounded-full relative"
								src={mtnImage}
								width={150}
								height={150}
								alt="vodaphone"
							/>
							<Image
								className=" h-auto w-auto rounded-full relative bottom-28 right-5"
								src={vodaphoneImage}
								width={130}
								height={130}
								alt="mtn"
							/>
							<Image
								className=" h-auto w-auto rounded-full top-5 relative"
								src={absaImage}
								width={150}
								height={150}
								alt="absa"
							/>
							<Image
								className=" h-auto w-auto rounded-full bottom-20 relative"
								src={accessBankImage}
								width={100}
								height={100}
								alt="access bank"
							/>
							<Image
								className=" h-auto w-auto rounded-full mb-7 relative"
								src={ecobankImage}
								width={150}
								height={150}
								alt="ecobank"
							/>
							<Image
								className=" h-auto w-auto rounded-full mb-48 relative"
								src={airtelTigoImage}
								width={100}
								height={100}
								alt="airtelTigo"
							/>
							<Image
								className=" h-[150px] w-[150px] rounded-full right-6 relative"
								src={calbankImage}
								width={150}
								height={150}
								alt="calbank"
							/>
						</div>
					</Marquee>
				</section>

				<section className="text-center flex my-max flex-col ">
					<div className="my-max">
						<h4 className="text-brand-green leading-tight text-text-40 md:text-text-50 lg:text-text-80 max-w-5xl mx-auto">
							Analyze Your Data With SatSat Ai
						</h4>
						<p className="text-mid--yellow max-w-xl h-24 mx-auto text-text-normal md:text-text-normal">
							SatSat AI is a revolutionize how we harness knowledge buried
							within our documents. Whether you are in healthcare, legal,
							finance, or any other industry, SatSat AI empowers you to
							transform your data into a dynamic source of insights.
						</p>

						<div className="py-20">
							<div className="text-left relative max-w-2xl mx-auto">
								<div className="flex mb-10 items-center gap-5 flex-wrap w-full justify-between">
									<span className="text-white text-center font-medium text-[18px]">
										Who we serve
									</span>

									<div className="relative z-[1]">
										<GetStartedButton
											showIcon={true}
											name="Get Started Now"
											data-test="choose-pricing-button"
										/>
									</div>
								</div>
								<div className="flex items-center justify-between gap-5 w-full">
									<ul className="text-white text-[14px] flex flex-col gap-5 relative before:absolute before:top-0 before:left-0 before:h-full before:w-[1px] before:bg-grey-lightest/20">
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] [background:linear-gradient(to_top,#29a173,#c98821)] rounded"></div>
											FINANCE AND BANKING
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] [background:linear-gradient(to_top,#29a173,#c98821)] rounded"></div>
											LEGAL PROFESSIONALS
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] [background:linear-gradient(to_top,#29a173,#c98821)] rounded"></div>
											CORPORATE AND ENTERPRISE
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] [background:linear-gradient(to_top,#29a173,#c98821)] rounded"></div>
											RESEARCH AND ACADEMIA
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] [background:linear-gradient(to_top,#29a173,#c98821)] rounded"></div>
											GOVERNMENT AND PUBLIC SECTOR
										</li>
									</ul>

									<ul className="text-white text-[14px] flex flex-col relative before:absolute before:top-0 before:left-0 before:h-full before:w-[1px] before:bg-grey-lightest/20 gap-5">
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] [background:linear-gradient(to_top,#29a173,#c98821)] rounded"></div>
											HEALTHCARE AND MEDICAL
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] [background:linear-gradient(to_top,#29a173,#c98821)] rounded"></div>
											INSURANCE
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] [background:linear-gradient(to_top,#29a173,#c98821)] rounded"></div>
											SMALL BUSINESS OWNERS
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] [background:linear-gradient(to_top,#29a173,#c98821)] rounded"></div>
											HUMAN RESOURCES
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] [background:linear-gradient(to_top,#29a173,#c98821)] rounded"></div>
											AND MORE!
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<GetStartedWithBlob className="mb-0" />
				{/* <PulseBeams /> */}
				<PageScroller />
			</main>
			<Footer />
		</>
	);
}
