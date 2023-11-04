import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SATSAT-Ai Contact Support",
};

const page = () => {
	return (
		<>
			<Header />
			<div className=" flex relative overflow-x-clip items-center justify-center min-h-screen bg-darker">
				<div className=" animate-pulse green-blob w-96 h-96 top-[-30%] lg:top-[-30%] left-[50%] "></div>
				<main className="w-full my-max">
					<form className=" active:bg-transparent max-w-xl mx-auto my-20">
						<h1 className="text-center text-brand-green text-text-40 md:text-text-60">
							Contact Us
						</h1>
						<div className="flex flex-col gap-7">
							<div className="flex flex-col sm:flex-row items-center gap-5">
								<div className="w-full mb-5 flex flex-col">
									<label
										className="text-text-normal text-mid--yellow"
										htmlFor="firstname"
									>
										First Name
									</label>
									<input
										className="placeholder:text-grey-lightest/60 border-b border-b-grey-light bg-transparent  outline-none focus:border-b-white"
										type="text"
										value={""}
										id="firstname"
										name="firstName"
									/>
								</div>
								<div className="w-full mb-5 flex flex-col">
									<label
										className="text-text-normal text-mid--yellow"
										htmlFor="lastname"
									>
										Last Name
									</label>
									<input
										className="placeholder:text-grey-lightest/60 border-b border-b-grey-light focus:border-b-white bg-transparent  outline-none"
										type="text"
										value={""}
										name="lastname"
										id="lastname"
									/>
								</div>
							</div>
							<div className="flex flex-col sm:flex-row items-center gap-5">
								<div className="w-full mb-5 flex flex-col">
									<label
										className="text-text-normal text-mid--yellow"
										htmlFor="email"
									>
										Email
									</label>
									<input
										className="placeholder:text-grey-lightest/60 border-b border-b-grey-light bg-transparent  outline-none focus:border-b-white"
										type="email"
										value={""}
										name="email"
										id="email"
									/>
								</div>
								<div className="w-full mb-5 flex flex-col">
									<label
										className="text-text-normal text-mid--yellow"
										htmlFor="number"
									>
										Phone Number
									</label>
									<input
										className="placeholder:text-grey-lightest/60 border-b border-b-grey-light focus:border-b-white bg-transparent  outline-none"
										type="tel"
										value={""}
										name="phone number"
										id="number"
									/>
								</div>
							</div>
						</div>
						<div className="flex flex-col gap-5 mt-7">
							<p className="text-text-normal text-mid--yellow">
								Select subject
							</p>
							<label
								htmlFor="subject"
								className="flex flex-wrap items-center gap-5 justify-between"
							>
								<div className="flex gap-2 items-center">
									<input type="radio" id="general" name="subject" />
									<label
										className="text-grey-lightest"
										id="subject"
										htmlFor="general"
									>
										General Enquiry
									</label>
								</div>
								<div className="flex gap-2 items-center">
									<input type="radio" id="onboarding" name="subject" />
									<label
										id="subject"
										className="text-grey-lightest"
										htmlFor="onboarding"
									>
										Onboarding
									</label>
								</div>
								<div className="flex gap-2 items-center">
									<input type="radio" id="account" name="subject" />
									<label
										id="subject"
										className="text-grey-lightest"
										htmlFor="account"
									>
										Account
									</label>
								</div>
							</label>
						</div>
						<div className="w-full mt-16 flex flex-col">
							<label
								className="mb-2 text-text-normal text-mid--yellow"
								htmlFor="message"
							>
								Message
							</label>
							<textarea
								className="text-white placeholder:text-grey-lightest/60 border-b border-b-grey-light focus:border-b-white bg-transparent outline-none"
								name="message"
								id="message"
								placeholder="Write your message..."
							></textarea>
						</div>
						<button
							type="button"
							className="w-fit hover:bg-brand-green ease-in ml-auto mt-7 block text-center font-normal bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white button"
						>
							Send Message
						</button>
					</form>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default page;
