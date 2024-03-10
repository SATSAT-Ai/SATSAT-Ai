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
import TypeWriteInview from "@/components/TypeWriteInView";
import GetStartedButton from "@/components/ui/GetStartedButton";
import PageScroller from "./dashboard/(components)/PageScroller";

export const metadata: Metadata = {
	title: "Welcome to SatSat-Ai - Chat with your financial documents",
};

export default function Home() {
	return (
		<>
			<Header />
			<main className="bg-darker  overflow-x-clip">
				<HeroSection />

				<div className="my-max">
					<section className="text-center flex flex-col">
						<h2 className="text-brand-green text-text-24 sm:text-text-40 md:text-text-60 lg:text-text-80 max-w-5xl mx-auto">
							WHAT IS SATSAT AI?
						</h2>
						<div className="text-mid--yellow max-w-lg mx-auto text-text-normal md:text-text-normal">
							<TypeWriteInview
								text="SatSat AI is your all-in-one intelligence platform. It combines
							cutting edge AI technology to query your financial data with
							natural language."
							/>
						</div>
						<div className=" relative mt-10 z-0 md:mt-20 grid gap-5 mx-auto grid-cols-1 sm:grid-cols-2 max-w-4xl">
							<div className="yellow-blob -z-10 w-72 h-72 md:w-96 md:h-96 top-[60%] md:top-[20%] right-[-30%]"></div>

							<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-center justify-center">
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
									Upload your financial data and SatSat AI takes care of the
									rest.
								</p>
							</div>
							<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-center justify-center">
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
							<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-center justify-center">
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
							<div className="text-white gap-5 z-0 p-5 rounded-3xl  sm:bg-brand-green-darker flex flex-col items-center justify-center">
								<Link
									href={"/book-a-demo"}
									className="flex transition-colors font-medium duration-200 items-center gap-2 active:scale-[1.01] text-white hover:underline w-fit px-7  rounded-3xl mx-auto"
								>
									Book a demo
								</Link>

								<GetStartedButton showIcon={true} name="Get Started Now" />
							</div>
						</div>
					</section>
					<section className="text-center flex flex-col">
						<h3 className="text-brand-green text-text-24 sm:text-text-40 md:text-text-60 lg:text-text-80 max-w-5xl mx-auto">
							WHY SATSAT AI?
						</h3>
						<div className="text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
							<TypeWriteInview
								text="SatSat AI is an financial intelligence platform; a paradigm
							shift in how you harness the wisdom hidden within your financial
							documents. We are here to empower your organization, save you time
							and resources. Here is what sets SatSat AI apart:"
							/>
						</div>

						<div className=" relative  mt-10 md:mt-20 mx-auto max-w-4xl">
							<div className=" grid gap-5 grid-cols-1 z-0 relative sm:grid-cols-2">
								<div className="green-blob -z-10 w-72 h-72 md:w-96 md:h-96 top-[60%] md:top-[25%] right-[-30%]"></div>
								<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-center text-center justify-center">
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
								<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-center text-center justify-center">
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
										Our platform fosters interactive collaboration, allowing
										your teams to work together in real-time, share insights,
										and collectively find answers on a dedicated chat board.
									</p>
								</div>
								<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-center text-center justify-center">
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
										scans, understands, and presents relevant information
										ensuring you spend less time searching and more time acting
									</p>
								</div>

								<div className="text-white gap-5 z-0 p-5 rounded-3xl  sm:bg-brand-green-darker flex flex-col items-center justify-center">
									<Link
										href={"/book-a-demo"}
										className="flex transition-colors font-medium duration-200 items-center gap-2 active:scale-[1.01] text-white hover:underline w-fit px-7  rounded-3xl mx-auto"
									>
										Book a demo
									</Link>
									<GetStartedButton showIcon={true} name="Get Started Now" />
								</div>
							</div>
						</div>
					</section>
					<section className=" z-10  text-center flex flex-col ">
						<h4 className="text-brand-green text-text-24 sm:text-text-40 md:text-text-60 lg:text-text-80 max-w-5xl mx-auto">
							CHAT WITH SATSAT AI
						</h4>
						<div className="text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
							<TypeWriteInview
								text="Querying your financial data has never been easy, with SAT SAT AI
							you need not worry about anything"
							/>
						</div>

						<div className="mt-20 md:max-w-5xl mx-auto grid gap-10 grid-cols-1 lg:grid-cols-2">
							<div className="text-left relative">
								<div className="yellow-blob w-72 h-72 md:w-96 md:h-96 top-[70%] left-[-35%] md:top-[-25%]"></div>

								<h4 className="text-brand-green mb-3 font-semibold text-text-24 md:text-text-40">
									How To Get Started
								</h4>
								<p className="text-mid--yellow mb-5 max-w-md">
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
									/>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row gap-5 lg:flex-row">
								<div className="flex sm:flex-col md:flex-col lg:flex-col gap-5 bg-[#071f07] px-5 py-5 rounded-3xl">
									<Image
										src={createAccountImage}
										height={10}
										width={10}
										alt="create-account"
										className="h-[80px] w-[80px]"
									/>
									<div className="flex flex-col items-start">
										<h4 className="text-brand-green mb-2 font-medium text-text-20">
											Create Your Account
										</h4>
										<p className="text-mid--yellow text-text-14 text-left max-w-2xl">
											Your account and personal identity are guaranteed safe.
										</p>
									</div>
								</div>
								<div className="flex sm:flex-col md:flex-col lg:flex-col gap-5 bg-[#071f07] px-5 py-5 rounded-3xl">
									<Image
										src={chatWithAiImage}
										height={10}
										width={10}
										alt="create-account"
										className="h-[80px] w-[80px]"
									/>
									<div className="flex flex-col items-start">
										<h4 className="text-brand-green font-medium text-text-20 mb-2">
											Start chatting with Ai
										</h4>
										<p className="text-mid--yellow text-text-14 text-left max-w-2xl">
											Upload your financial data and start chatting with SatSat
											ai
										</p>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
				<div>
					<section className="text-center flex flex-col w-full overflow-x-auto ">
						<h4 className="text-brand-green  my-max text-text-24 sm:text-text-40 md:text-text-60 mx-auto lg:text-text-80">
							FINANCIAL SERVICE PROVIDERS
						</h4>
						<div className="text-mid--yellow px-2 max-w-xl mx-auto text-text-normal md:text-text-normal">
							<TypeWriteInview
								text="SatSat AI scans documents such as invoices, mobile money
							statements, bank statements, receipts etc. These are some of the
							service providers and banks we provide our services to."
							/>
						</div>

						<Marquee autoFill speed={100} gradient gradientColor="#050d0a">
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

					<section className="text-center flex flex-col ">
						<div className="my-max">
							<h4 className="text-brand-green text-text-24 sm:text-text-40 md:text-text-50 lg:text-text-80 max-w-5xl mx-auto">
								ANALYZING YOUR DATA WITH SATSAT AI
							</h4>
							<div className="text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
								<TypeWriteInview
									text="SatSat AI is a revolution in how we harness knowledge buried
								within our documents. Whether you are in healthcare, legal,
								finance, or any other industry, SatSat AI empowers you to
								transform your data into a dynamic source of insights."
								/>
							</div>

							<div className="py-20">
								<div className="text-left relative max-w-2xl mx-auto">
									<div className="yellow-blob2 w-72 h-72 md:w-96 md:h-96 top-[70%] left-[-30%] md:top-[20%]"></div>
									<div className="green-blob2 w-72 h-72 md:w-96 md:h-96 top-[70%] right-[-70%] md:top-[20%]"></div>
									<div className="flex mb-10 items-center gap-5 flex-wrap w-full justify-between">
										<span className="text-white text-center font-medium text-[18px]">
											Who we serve
										</span>

										<div className="relative z-[1]">
											<GetStartedButton
												showIcon={true}
												name="Get Started Now"
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
					<PageScroller />
				</div>
			</main>
			<Footer />
		</>
	);
}
