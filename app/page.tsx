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
import Link from "next/link";
import chatBot from "../public/chatbot.svg";
import createAccountImage from "../public/create-account.svg";
import chatWithAiImage from "../public/chat-with-ai.svg";
import { MdStar } from "react-icons/md";
import GetStartedButton from "@/components/ui/GetStartedButton";
import PageScroller from "./dashboard/(components)/PageScroller";
import TypeWriteInView from "@/components/TypeWriteInView";
import Blob from "@/components/Blob";
import GetStartedWithBlob from "@/components/GetStartedWithBlob";
import EarlyAccessModal from "@/components/ui/EarlyAccessModal";
// import { PulseBeams } from "@/components/ui/PulseBeam";
import Feature from "@/components/Feature";
import { featuresData } from "@/utils/featuresData";
import Spotlight from "@/components/ui/spotlight";

export const metadata: Metadata = {
	title: "Welcome to SatSat-Ai - Chat with your financial documents",
};

export default function Home() {
	return (
		<>
			<Header green={true} />
			<EarlyAccessModal />
			<main className="bg-darker overflow-x-clip">
				<HeroSection />
				<section className="text-center flex flex-col my-max">
					<h2 className="text-brand-green max-w-4xl leading-tight text-text-24 sm:text-text-40 md:text-text-60 lg:text-text-80 mx-auto">
						What Is SatSat Ai?
					</h2>
					<div className="text-mid--yellow max-w-lg mx-auto text-text-normal md:text-text-normal">
						<TypeWriteInView
							text="SatSat AI is your all-in-one intelligence platform. It combines
							cutting edge AI technology to query your financial data with
							natural language."
						/>
					</div>
					<div className=" relative mt-10 z-0 md:mt-20 grid gap-5 mx-auto grid-cols-1 sm:grid-cols-2 max-w-4xl">
						<Blob
							blur={120}
							className="bg-mid--yellow/70 -z-10 w-72 h-72 md:w-96 md:h-96 top-[60%] md:top-[20%] right-[-30%]"
						/>
						<Blob
							blur={120}
							className="bg-brand-green/70 w-72 -z-10 h-72 md:w-96 md:h-96 top-[70%] -left-[10%] md:top-[40%]"
						/>

						<div className="text-white p-10 rounded-3xl bg-[#071f0780] flex flex-col items-center justify-center">
							<Image
								src={chatBot}
								height={100}
								width={100}
								className="h-[100px] w-[100px]"
								alt="chatbot"
							/>
							<h3 className="text-text-20 font-medium mb-2">
								Effortless Ingestion
							</h3>
							<p className="text-white/70">
								Upload your financial data and SatSat AI takes care of the rest.
							</p>
						</div>
						<div className="text-white p-10 rounded-3xl bg-[#071f0780] flex flex-col items-center justify-center">
							<Image
								src={chatBot}
								height={100}
								width={100}
								className="h-[100px] w-[100px]"
								alt="chatbot"
							/>
							<h3 className="text-text-20 mb-2 font-medium">
								Smart Data Extraction
							</h3>
							<p className="text-white/70">
								Our AI algorithms automatically identify file and extract key
								information.
							</p>
						</div>
						<div className="text-white p-10 rounded-3xl bg-[#071f0780] flex flex-col items-center justify-center">
							<Image
								src={chatBot}
								height={100}
								width={100}
								className="h-[100px] w-[100px]"
								alt="chatbot"
							/>
							<h3 className="text-text-20 font-medium ">Seamless Storage</h3>
							<p className="text-white/70">
								Processed documents are securely stored in-house for instant
								retrieval.
							</p>
						</div>
						<div className="text-white gap-5 z-0 p-5 rounded-3xl  sm:bg-[#071f0790] flex flex-col items-center justify-center">
							<Link
								href={"/book-a-demo"}
								className="flex transition-colors font-medium duration-200 items-center gap-2 active:scale-[1.01] text-white hover:underline w-fit px-7  rounded-3xl mx-auto"
							>
								Book a demo
							</Link>

							<GetStartedButton
								data-test="choose-pricing-button"
								showIcon={true}
								name="Get Started Now"
							/>
						</div>
					</div>
				</section>

				<section className="text-center flex flex-col my-max">
					<h3 className="text-brand-green max-w-4xl leading-tight text-text-24 sm:text-text-40 md:text-text-60 lg:text-text-80 mx-auto">
						Why SatSat Ai?
					</h3>
					<div className="text-mid--yellow max-w-xl h-[104px] mx-auto text-text-normal md:text-text-normal">
						<TypeWriteInView
							text="SatSat AI is an financial intelligence platform; a paradigm
							shift in how you harness the wisdom hidden within your financial
							documents. We are here to empower your organization, save you time
							and resources. Here is what sets SatSat AI apart:"
						/>
					</div>

					<div className=" relative  mt-10 md:mt-20 mx-auto max-w-4xl">
						<div className=" grid gap-5 grid-cols-1 z-0 relative sm:grid-cols-2">
							<Blob
								blur={120}
								className="-translate-x-1/2 bg-brand-green/70 -z-10 w-72 h-72 md:w-96 md:h-96 top-[40%] md:top-[25%] right-[30%]"
							/>
							<Blob
								blur={120}
								className="bg-mid--yellow/70 -translate-x-1/2 -z-10 w-72 h-72 md:w-96 md:h-96 top-[60%] md:top-[20%] right-[-30%]"
							/>

							<div className="text-white p-10 rounded-3xl bg-[#071f0780] flex flex-col items-center text-center justify-center">
								<Image
									src={chatBot}
									height={100}
									width={100}
									className="h-[100px] w-[100px]"
									alt="chatbot"
								/>
								<h3 className="text-text-20 font-medium mb-3">
									Data Security and Privacy
								</h3>
								<p className="text-white/70">
									We understand the importance of data security. SatSat AI
									ensures maximum protection and security using cutting edge
									industry security and privacy practices, so you can harness
									the power of AI with peace of mind.
								</p>
							</div>
							<div className="text-white p-10 rounded-3xl bg-[#071f0780] flex flex-col items-center text-center justify-center">
								<Image
									src={chatBot}
									height={100}
									width={100}
									className="h-[100px] w-[100px]"
									alt="chatbot"
								/>
								<h3 className="text-text-20 font-medium mb-3 ">
									Collaborative Intelligence
								</h3>
								<p className="text-white/70">
									Our platform fosters interactive collaboration, allowing your
									teams to work together in real-time, share insights, and
									collectively find answers on a dedicated chat board.
								</p>
							</div>
							<div className="text-white p-10 rounded-3xl bg-[#071f0780] flex flex-col items-center text-center justify-center">
								<Image
									src={chatBot}
									height={100}
									width={100}
									className="h-[100px] w-[100px]"
									alt="chatbot"
								/>
								<h3 className="text-text-20 font-medium mb-3">
									Lightning-Fast Answers, Anytime, Anywhere
								</h3>
								<p className="text-white/70">
									Your employees can access answers to their questions in mere
									seconds without wading through endless documents. SatSat AI
									scans, understands, and presents relevant information ensuring
									you spend less time searching and more time acting
								</p>
							</div>

							<div className="text-white gap-5 z-0 p-5 rounded-3xl  sm:bg-[#071f0790] flex flex-col items-center justify-center">
								<Link
									href={"/book-a-demo"}
									className="flex transition-colors font-medium duration-200 items-center gap-2 active:scale-[1.01] text-white hover:underline w-fit px-7  rounded-3xl mx-auto"
								>
									Book a demo
								</Link>
								<GetStartedButton
									data-test="choose-pricing-button"
									showIcon={true}
									name="Get Started Now"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* <section className="max-w-3xl lg:max-w-full mx-auto  backdrop-blur-xl saturate-150 p-3 md:p-5 rounded-xl w-full">
						<h4 className="text-brand-green m-0 text-text-24 sm:text-text-40 md:text-text-60 lg:text-text-80 max-w-5xl mx-auto">
							Lorem ipsum dolor sit amet.
						</h4>
						<TypeWriteInView
							className="text-center max-w-2xl mx-auto md:my-3"
							typeWriteType="smoothWriter"
							text="SatSat AI is your all-in-one intelligence platform. It combines
							cutting edge AI technology to query your financial data with
							natural language."
						/>
						<AnimatedTabs />
					</section> */}
				<section className=" z-10 my-max text-center flex flex-col relative">
					<Spotlight
						className="absolute w-[170%] md:w-[250%] lg:w-[120%]"
						// className="top-[-5%] left-[10%] h-[300%] sm:h-[200%] w-[200%] sm:-top-[20px] md:left-60 md:-top-20"
						fill="#29a173"
					/>
					<h4 className="hidden md:flex text-brand-green max-w-4xl leading-tight text-text-24 sm:text-text-40 md:text-text-60 lg:text-text-80 mx-auto">
						Chat With SatSat Ai
					</h4>
					<div className="hidden md:flex text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
						<TypeWriteInView
							text="Querying your financial data has never been easy, with SAT SAT AI
							you need not worry about anything"
						/>
					</div>

					<div className="mt-20 md:max-w-5xl mx-auto grid gap-10 grid-cols-1 lg:grid-cols-2">
						<div className="text-left relative">
							<h4 className="text-brand-green mb-3 z-10 relative font-semibold text-text-24 md:text-text-40">
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
								<div className="h-[80px] w-[80px] relative before:absolute before:inset-0 before:h-[80px] before:w-[80px] before:bg-brand-green/50 before:border before:border-brand-green before:mix-blend-hard-light before:rounded-full">
									<Image
										src={createAccountImage}
										height={10}
										width={10}
										alt="create-account"
										className="h-full w-full object-contain"
									/>
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
								<div className="h-[80px] w-[80px] relative before:absolute before:inset-0 before:h-[80px] before:w-[80px] before:bg-brand-green/50 before:border before:border-brand-green before:mix-blend-hard-light before:rounded-full">
									<Image
										src={chatWithAiImage}
										height={10}
										width={10}
										alt="create-account"
										className="h-full w-full object-contain"
									/>
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
					<h4 className="text-brand-green max-w-4xl leading-tight text-text-24 sm:text-text-40 md:text-text-60 mx-auto lg:text-text-80">
						Financial Service Providers
					</h4>
					<div className="text-mid--yellow px-2 h-20 max-w-xl mx-auto text-text-normal md:text-text-normal">
						<TypeWriteInView
							text="SatSat AI scans documents such as invoices, mobile money
							statements, bank statements, receipts etc. These are some of the
							service providers and banks we provide our services to."
						/>
					</div>

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
				<section className="max-w-3xl lg:max-w-full mx-auto">
					<h4 className="text-brand-green max-w-4xl leading-tight text-center mb-5 my-max text-text-24 sm:text-text-40 md:text-text-60 mx-auto lg:text-text-80">
						What We Offer
					</h4>
					<div className="text-mid--yellow px-2 h-20 max-w-xl mb-10 mx-auto text-text-normal text-center">
						<TypeWriteInView text="Our intelligent tools helps you optimize your financial future. Uncover more features like fraud detection, credit scoring, financial insights, ai chat and many more." />
					</div>

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
				<section className="text-center flex my-max flex-col ">
					<div className="my-max">
						<h4 className="text-brand-green leading-tight text-text-24 sm:text-text-40 md:text-text-50 lg:text-text-80 max-w-5xl mx-auto">
							Analyze Your Data With SatSat Ai
						</h4>
						<div className="text-mid--yellow max-w-xl h-24 mx-auto text-text-normal md:text-text-normal">
							<TypeWriteInView
								text="SatSat AI is a revolutionize how we harness knowledge buried
								within our documents. Whether you are in healthcare, legal,
								finance, or any other industry, SatSat AI empowers you to
								transform your data into a dynamic source of insights."
							/>
						</div>

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
											<div className="h-5 w-[2px] gradient rounded"></div>
											FINANCE AND BANKING
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] gradient rounded"></div>
											LEGAL PROFESSIONALS
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] gradient rounded"></div>
											CORPORATE AND ENTERPRISE
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] gradient rounded"></div>
											RESEARCH AND ACADEMIA
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] gradient rounded"></div>
											GOVERNMENT AND PUBLIC SECTOR
										</li>
									</ul>

									<ul className="text-white text-[14px] flex flex-col relative before:absolute before:top-0 before:left-0 before:h-full before:w-[1px] before:bg-grey-lightest/20 gap-5">
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] gradient rounded"></div>
											HEALTHCARE AND MEDICAL
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] gradient rounded"></div>
											INSURANCE
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] gradient rounded"></div>
											SMALL BUSINESS OWNERS
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] gradient rounded"></div>
											HUMAN RESOURCES
										</li>
										<li className="flex items-center gap-3">
											<div className="h-5 w-[2px] gradient rounded"></div>
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
