import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Logo from "@/public/satsat-logo.svg";
import Image from "next/image";

const Page = () => {
	return (
		<>
			<Header />
			<div className=" flex relative overflow-x-clip items-center justify-center min-h-screen bg-darker">
				<div className=" animate-pulse green-blob w-96 h-96 top-[-30%] lg:top-[-30%] left-[50%] "></div>
				<main>
					<div className="my-max">
						<div className="max-w-xs mx-auto">
							<Image
								src={Logo}
								className="mx-auto"
								height={130}
								width={130}
								alt="SATSAT-Ai"
							/>
							<p className="text-mid--yellow text-center my-6">
								Enter the sign in code we just sent to
								{/* render dynamic imail address */}
								{" kamasahdickson19@gmail.com"}
							</p>
							<div className="w-full mb-5 flex flex-col">
								<label
									className="mb-2 text-text-normal text-mid--yellow"
									htmlFor=""
								>
									Code
								</label>
								<input
									className="placeholder:text-grey-lightest/60 border border-white bg-transparent p-2 rounded-lg"
									type="text"
									value={""}
									name="code"
								/>
							</div>
							<button
								type="button"
								className="w-full block text-center font-normal hover:bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green button"
							>
								Continue
							</button>
							<span className="text-white text-text-normal font-light text-right w-full">
								{"Didn't received any code? "}
								<button
									type="button"
									className="mt-5 font-medium text-normal text-brand-green"
								>
									Resend
								</button>
							</span>
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default Page;
