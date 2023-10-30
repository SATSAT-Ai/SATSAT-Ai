import Header from "@/components/Header";
import Link from "next/link";
import Image from "next/image";
import promptPageDemo from "../public/Prompt-page-demo.svg";
import chatBot from "../public/chatbot.svg";
import createAccountImage from "../public/create-account.svg";
import chatWithAiImage from "../public/chat-with-ai.svg";
import { MdArrowForward } from "react-icons/md";

export default function Home() {
	return (
		<div className="bg-darker min-h-screen overflow-hidden relative">
			<div className="green-blob w-96 h-96 top-[-10%] left-1/2"></div>
			<Header />
			<div className="my-max">
				<section className=" z-10 py-48 text-center flex flex-col ">
					<h1 className="text-brand-green text-text-50 md:text-text-60 lg:text-text-80">
						SATSAT Ai
					</h1>
					<p className="text-mid--yellow text-text-normal md:text-text-normal">
						Query your financial data with natural language.
					</p>
					<Link
						className="flex items-center gap-2 active:scale-[1.01] text-white w-fit mx-auto mt-4 bg-brand-green button"
						href={"/signup"}
					>
						Get Started
						<MdArrowForward color="white" size="25" />
					</Link>
				</section>
				<main className="py-10 md:py-36 ">
					<div className="px-5">
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
						<section className="text-center flex flex-col py-40">
							<h2 className="text-brand-green mb-3 text-text-40 md:text-text-60 lg:text-text-80">
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
									<h3 className="text-text-20 mb-2">Seamless Storage:</h3>
									<p className="text-grey-lightest">
										Processed documents are securely stored in-house for instant
										retrieval.
									</p>
								</div>
								<div className="text-white z-0 p-5 rounded-3xl sm:bg-brand-green-darker flex flex-col items-center justify-center">
									<button
										type="button"
										className="flex items-center gap-3 border-[1px] active:scale-[1.01] border-white button hover:bg-darker transition-all bg-brand-green-darker"
									>
										Get started
										<MdArrowForward color="white" size="25" />
									</button>
								</div>
							</div>
						</section>
						<section className="text-center flex flex-col py-40">
							<h3 className="text-brand-green mb-3 text-text-40 md:text-text-60 lg:text-text-80">
								WHY SATSAT Ai?
							</h3>
							<p className="text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
								SATSAT Ai is an intelligence platform; it is a paradigm shift in
								how you harness the wisdom hidden within your documents. We are
								here to empower your organization, save you time and resources.
							</p>

							<div className=" relative  mt-10 md:mt-20 mx-auto max-w-4xl">
								<h3 className=" my-5 text-center  text-text-normal md:text-text-20 font-medium max-w-4xl mr-auto md:text-left text-mid--yellow">
									Here is what set SATSAT Ai apart:
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
										<h3 className="text-text-20 mb-3">
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
										<h3 className="text-text-20 mb-3">
											Data Security and Privacy
										</h3>
										<p className="text-grey-lightest">
											We understand the importance of data security. SATSAT Ai
											ensures maximum protection behind your firewall, so you
											can harness the power of AI with peace of mind.
										</p>
									</div>
									<div className="text-white z-0 p-5 rounded-3xl sm:bg-brand-green-darker flex flex-col items-center justify-center">
										<button
											type="button"
											className="flex items-center gap-2 border-[1px] active:scale-[1.01] border-white button hover:bg-darker transition-all bg-brand-green-darker"
										>
											Get started
											<MdArrowForward color="white" size="25" />
										</button>
									</div>
								</div>
							</div>
						</section>
						<section className=" z-10  text-center flex flex-col ">
							<h4 className="text-brand-green text-text-40 md:text-text-60 lg:text-text-80">
								CHAT WITH SATSAT Ai
							</h4>
							<p className="text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
								Querying your financial data has never been easy, with SAT SAT
								Ai you dont need to worry about anything
							</p>

							<div className="mt-20 md:max-w-5xl mx-auto grid gap-10 grid-cols-1 lg:grid-cols-2">
								<div className="text-left relative">
									<div className="yellow-blob w-72 h-72 md:w-96 md:h-96 top-[70%] left-[-30%] md:top-[20%]"></div>

									<h4 className="text-brand-green mb-3 font-semibold text-text-20 md:text-text-40">
										How To Get Started
									</h4>
									<p className="text-mid--yellow mb-5 max-w-md">
										Enjoy fast, secure and reliable way of Querying financial
										data with SATSAT Ai
									</p>
									<button
										type="button"
										className="flex items-center gap-3 active:scale-[1.01] text-white button hover:bg-white hover:text-darker transition-all bg-brand-green-darker"
									>
										Get started
									</button>
								</div>
								<div className="flex flex-col sm:flex-row gap-5 lg:flex-col">
									<div className="flex sm:flex-col md:flex-col lg:flex-row gap-5 bg-white/10 md:px-7 md:py-5 px-5 py-5 rounded-2xl md:rounded-3xl">
										<Image
											src={createAccountImage}
											height={70}
											width={70}
											alt="create-account"
										/>
										<div className="flex flex-col gap-2 items-start">
											<h4 className="text-brand-green">Create Your Account</h4>
											<p className="text-mid--yellow text-left max-w-2xl">
												Your account and personal identity are guaranteed safe.
											</p>
										</div>
									</div>
									<div className="flex sm:flex-col md:flex-col lg:flex-row gap-5 bg-white/10 md:px-7 md:py-5 px-5 py-5 rounded-2xl md:rounded-3xl">
										<Image
											src={chatWithAiImage}
											height={70}
											width={70}
											alt="create-account"
										/>
										<div className="flex flex-col gap-2 items-start">
											<h4 className="text-brand-green">
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
						<section className="mt-52  text-center flex flex-col ">
							<h4 className="text-brand-green text-text-40 md:text-text-60 lg:text-text-80">
								Eget ut adipiscing in ac
							</h4>
							<p className="text-mid--yellow max-w-xl mx-auto text-text-normal md:text-text-normal">
								SATSAT Ai is more than just a product. It is a revolution in how
								we harness knowledge buried within our documents. Whether you
								are in healthcare, legal, finance, or any other industry, SATSAT
								Ai empowers you to transform your data into a dynamic source of
								insights.
							</p>
						</section>
					</div>
				</main>
			</div>
		</div>
	);
}
