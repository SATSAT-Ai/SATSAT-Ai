import Image from "next/image";
import Link from "next/link";
import promptPageDemo from "../public/Prompt-page-demo.svg";
import chatBot from "../public/chatbot.svg";
import createAccountImage from "../public/create-account.svg";
import chatWithAiImage from "../public/chat-with-ai.svg";
import { MdArrowForward } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import mtnImage from "../public/mtn.svg";
import vodaphoneImage from "../public/vodaphone.svg";
import ecobankImage from "../public/ecobank.svg";
import absaImage from "../public/absa.svg";
import accessBankImage from "../public/Access-bank.svg";
import airtelTigoImage from "../public/airteltigo.svg";
import calbankImage from "../public/calbank.svg";
import Marquee from "react-fast-marquee";
import PageScroller from "@/components/PageScroller";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "Welcome to SATSAT-Ai",
};

export default function Home() {
	return (
		<>
			<Header />
			<div className="bg-darker min-h-screen overflow-clip relative">
				<div className=" h-screen text-center flex flex-col relative z-0 ">
					<div className="green-blob w-96 h-96 animate-pulse top-[-55%] md:top-[-40%] left-[50%]"></div>
					<section className="my-max flex flex-col items-center justify-center h-[80%] w-full">
						<h1 className="text-brand-green max-w-5xl mx-auto text-text-40 md:text-text-60 lg:text-text-80">
							SATSAT Ai
						</h1>
						<p className="text-mid--yellow text-text-normal md:text-text-normal">
							Query your financial data with natural language.
						</p>
						<Link
							href={"/choose-your-pricing"}
							className="flex animate-pulse hover:animate-none bg-brand-green hover:bg-mid--yellow transition-colors duration-200 items-center gap-2 active:scale-[1.01] text-white w-fit mx-auto mt-5 button"
						>
							Get Started
						</Link>
					</section>
				</div>
				<main className="md:py-36">
					<div className="my-max">
						<div className="flex relative rounded-3xl my-shadow mx-auto max-w-4xl items-center justify-center">
							<div className="green-blob w-96 h-96 top-[50%] left-[-50%] md:left-[-20%]"></div>
							<div className="yellow-blob w-96 h-96 top-[20%] right-[-30%]"></div>
							<Image
								className="rounded-3xl z-0"
								src={promptPageDemo}
								height={700}
								width={900}
								alt="prompt page"
								priority
							/>
						</div>
						<section className="text-center flex flex-col">
							<h2 className="text-brand-green text-text-40 md:text-text-60 lg:text-text-80 max-w-5xl mx-auto">
								WHAT IS SATSAT Ai?
							</h2>
							<p className="text-mid--yellow max-w-lg mx-auto text-text-normal md:text-text-normal">
								SATSAT Ai is your all-in-one intelligence platform. It combines
								cutting edge AI technology to query your data with natural
								language.
							</p>
							<div className=" relative mt-10 md:mt-20 grid gap-5 mx-auto grid-cols-1 sm:grid-cols-2 max-w-4xl">
								<div className="yellow-blob w-72 h-72 md:w-96 md:h-96 top-[60%] md:top-[20%] right-[-30%]"></div>

								<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-center justify-center">
									<Image src={chatBot} height={50} width={50} alt="chatbot" />
									<h3 className="text-text-20 mb-2">Effortless Ingestion</h3>
									<p className="text-grey-lightest">
										Upload your financial data and SATSAT Ai takes care of the
										rest.
									</p>
								</div>
								<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-center justify-center">
									<Image src={chatBot} height={50} width={50} alt="chatbot" />
									<h3 className="text-text-20 mb-2">Smart Data Extraction</h3>
									<p className="text-grey-lightest">
										Our AI algorithms automatically identify file and extract
										key information.
									</p>
								</div>
								<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-center justify-center">
									<Image src={chatBot} height={50} width={50} alt="chatbot" />
									<h3 className="text-text-20 ">Seamless Storage</h3>
									<p className="text-grey-lightest">
										Processed documents are securely stored in-house for instant
										retrieval.
									</p>
								</div>
								<div className="text-white z-0 p-5 rounded-3xl  sm:bg-brand-green-darker flex flex-col items-center justify-center">
									<Link
										href={"/choose-your-pricing"}
										className="flex items-center gap-3 hover:border-mid--yellow md:hover:border-darker border border-white active:scale-[1.01] button  hover:bg-mid--yellow md:hover:bg-darker rounded-2xl transition-all bg-brand-green-darker"
									>
										Get started
										<MdArrowForward color="white" size="25" />
									</Link>
								</div>
							</div>
						</section>
						<section className="text-center flex flex-col">
							<h3 className="text-brand-green text-text-40 md:text-text-60 lg:text-text-80 max-w-5xl mx-auto">
								WHY SATSAT Ai?
							</h3>
							<p className="text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
								SATSAT Ai is an intelligence platform; it is a paradigm shift in
								how you harness the wisdom hidden within your documents. We are
								here to empower your organization, save you time and resources.
							</p>

							<div className=" relative  mt-10 md:mt-20 mx-auto max-w-4xl">
								<h3 className=" text-center  text-text-normal md:text-text-20 max-w-4xl mr-auto md:text-left text-mid--yellow">
									Here is what sets SATSAT Ai apart:
								</h3>
								<div className=" grid gap-5 grid-cols-1 sm:grid-cols-2">
									<div className="green-blob w-72 h-72 md:w-96 md:h-96 top-[60%] md:top-[20%] right-[-30%]"></div>

									<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-start text-left justify-center">
										<Image src={chatBot} height={50} width={50} alt="chatbot" />
										<h3 className="text-text-20 mb-3">
											Lightning-Fast Answers, Anytime, Anywhere
										</h3>
										<p className="text-grey-lightest">
											Your employees can access answers to their questions in
											mere seconds without wading through endless documents on
											their drives. SATSAT Ai scans, understands, and presents
											relevant information ensuring you spend less time
											searching and more time acting
										</p>
									</div>
									<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-start text-left justify-center">
										<Image src={chatBot} height={50} width={50} alt="chatbot" />
										<h3 className="text-text-20 ">
											Collaborative Intelligence
										</h3>
										<p className="text-grey-lightest">
											Our platform fosters interactive collaboration, allowing
											your teams to work together in real-time, share insights,
											and collectively find answers on a dedicated chat board.
										</p>
									</div>
									<div className="text-white p-10 rounded-3xl bg-white/10 flex flex-col items-start text-left justify-center">
										<Image src={chatBot} height={50} width={50} alt="chatbot" />
										<h3 className="text-text-20">Data Security and Privacy</h3>
										<p className="text-grey-lightest">
											We understand the importance of data security. SATSAT Ai
											ensures maximum protection behind your firewall, so you
											can harness the power of AI with peace of mind.
										</p>
									</div>
									<div className="text-white z-0 p-5 rounded-3xl sm:bg-brand-green-darker flex flex-col items-center justify-center">
										<Link
											href={"/choose-your-pricing"}
											className="flex items-center gap-2 border-[1px] active:scale-[1.01] border-white button md:hover:border-darker hover:border-mid--yellow hover:bg-mid--yellow md:hover:bg-darker rounded-2xl transition-all bg-brand-green-darker"
										>
											Get started
											<MdArrowForward color="white" size="25" />
										</Link>
									</div>
								</div>
							</div>
						</section>
						<section className=" z-10  text-center flex flex-col ">
							<h4 className="text-brand-green text-text-40 md:text-text-60 lg:text-text-80 max-w-5xl mx-auto">
								CHAT WITH SATSAT Ai
							</h4>
							<p className="text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
								Querying your financial data has never been easy, with SAT SAT
								Ai you dont need to worry about anything
							</p>

							<div className="mt-20 md:max-w-5xl mx-auto grid gap-10 grid-cols-1 lg:grid-cols-2">
								<div className="text-left relative">
									<div className="yellow-blob w-72 h-72 md:w-96 md:h-96 top-[70%] left-[-35%] md:top-[-25%]"></div>

									<h4 className="text-brand-green mb-3 font-semibold text-text-20 md:text-text-40">
										How To Get Started
									</h4>
									<p className="text-mid--yellow mb-5 max-w-md">
										Enjoy fast, secure and reliable way of Querying financial
										data with SATSAT Ai
									</p>
									<Link
										href={"/choose-your-pricing"}
										className="flex w-fit items-center gap-3 active:scale-[1.01] text-white button hover:bg-white hover:text-darker transition-all bg-brand-green-darker"
									>
										Get started
									</Link>
								</div>
								<div className="flex flex-col sm:flex-row gap-5 lg:flex-col">
									<div className="flex sm:flex-col md:flex-col lg:flex-row gap-5 bg-white/10 md:px-7 md:py-5 px-5 py-5 rounded-3xl md:rounded-3xl">
										<Image
											src={createAccountImage}
											height={70}
											width={70}
											alt="create-account"
										/>
										<div className="flex flex-col items-start">
											<h4 className="text-brand-green mb-2">
												Create Your Account
											</h4>
											<p className="text-mid--yellow text-left max-w-2xl">
												Your account and personal identity are guaranteed safe.
											</p>
										</div>
									</div>
									<div className="flex sm:flex-col md:flex-col lg:flex-row gap-5 bg-white/10 md:px-7 md:py-5 px-5 py-5 rounded-3xl md:rounded-3xl">
										<Image
											src={chatWithAiImage}
											height={70}
											width={70}
											alt="create-account"
										/>
										<div className="flex flex-col items-start">
											<h4 className="text-brand-green mb-2">
												Start chatting with Ai
											</h4>
											<p className="text-mid--yellow text-left max-w-2xl">
												upload your financial data and start chatting with sat
												sat ai
											</p>
										</div>
									</div>
								</div>
							</div>
						</section>
					</div>
					<section className="text-center flex flex-col w-full overflow-x-auto ">
						<h4 className="text-brand-green text-text-40 md:text-text-60 max-w-5xl mx-auto lg:text-text-80">
							FINANCIAL SERVICE PROVIDERS
						</h4>
						<p className="text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
							SATSAT Ai can scan documents like invoices, mobile money
							statements, bank statements and receipts. These are some of the
							banks and mobile money service providers
						</p>

						{/* <ServiceProviders /> */}

						<Marquee autoFill speed={100} gradient gradientColor="#050d0a">
							<div className="flex items-center w-full gap-5 justify-between mt-20 h-full">
								<Image
									className="rounded-full relative h-full"
									src={mtnImage}
									width="150"
									height={150}
									alt="mtn"
								/>
								<Image
									className="rounded-full h-full relative bottom-28"
									src={vodaphoneImage}
									width="130"
									height={130}
									alt="mtn"
								/>
								<Image
									className="rounded-full top-5 relative h-full"
									src={absaImage}
									width="150"
									height={150}
									alt="mtn"
								/>
								<Image
									className="rounded-full bottom-20 relative h-full"
									src={accessBankImage}
									width="100"
									height={100}
									alt="mtn"
								/>
								<Image
									className="rounded-full mb-7 relative  h-full"
									src={ecobankImage}
									width="150"
									height={150}
									alt="mtn"
								/>
								<Image
									className="rounded-full mb-48 relative  h-full"
									src={airtelTigoImage}
									width="100"
									height={100}
									alt="mtn"
								/>
								<Image
									className=" relative right-6 rounded-full h-full"
									src={calbankImage}
									width="140"
									height={140}
									alt="mtn"
								/>
							</div>
						</Marquee>
					</section>

					{/* ===========Analize=================== */}

					<section className="text-center flex flex-col ">
						<div className="my-max">
							<h4 className="text-brand-green text-text-40 md:text-text-50 lg:text-text-80 max-w-5xl mx-auto">
								ANALYSING YOUR DATA WITH SATSAT Ai
							</h4>
							<p className="text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
								SATSAT Ai is a revolution in how we harness knowledge buried
								within our documents. Whether you are in healthcare, legal,
								finance, or any other industry, SATSAT Ai empowers you to
								transform your data into a dynamic source of insights.
							</p>

							<div className="py-20">
								<div className="text-left relative max-w-2xl mx-auto">
									<div className="yellow-blob w-72 h-72 md:w-96 md:h-96 top-[70%] left-[-30%] md:top-[20%]"></div>
									<div className="green-blob w-72 h-72 md:w-96 md:h-96 top-[70%] right-[-70%] md:top-[20%]"></div>
									<div className="flex mb-10 items-center gap-5 justify-between">
										<span className="text-white text-center font-semibold text-text-20">
											Who we serve
										</span>
										<Link
											href={"/choose-your-pricing"}
											className="flex text-text-[18px] items-center gap-3 active:scale-[1.01] text-white button hover:bg-white hover:text-darker rounded-3xl transition-all border border-white"
										>
											<AiFillStar size={25} color="#29a173" />
											Get started
										</Link>
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
				</main>
			</div>
			<Footer />
		</>
	);
}
