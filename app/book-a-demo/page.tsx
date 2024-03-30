import Header from "@/components/Header";
import SparklesCore from "@/components/ui/Particles";
import Spotlight from "@/components/ui/spotlight";
import { BsFillCheckCircleFill } from "react-icons/bs";
import BookADemoForm from "@/components/BookADemoForm";
import { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
	title: "SATSAT-Ai Book A Demo",
};

const Page = () => {
	return (
		<>
			<Header />
			<div className="bg-darker">
				<div className=" h-screen relative overflow-clip">
					<Spotlight
						className="top-[-5%] left-[10%] sm:-top-[20px] md:left-60 md:-top-20"
						fill="#29a173"
					/>
					<div className="absolute h-full bottom-0 z-[1] left-0 w-full">
						<SparklesCore
							id="tsparticlesfullpage"
							background="transparent"
							minSize={0.8}
							maxSize={1.3}
							particleDensity={30}
							className="w-full h-full"
							particleColor="#29a173"
						/>
					</div>

					<main className="z-10 grid grid-cols-1 lg:grid-cols-2 h-screen pt-20 items-center justify-between w-full gap-5 max-w-5xl xl:max-w-6xl my-max">
						<div className="hidden lg:flex flex-col text-white">
							<h1 className="mb-3 font-medium text-text-40">
								Speed Up Your Evaluation With A SatSat Ai Demo
							</h1>
							<ul>
								<li className=" flex items-center gap-3">
									<BsFillCheckCircleFill
										size={17}
										className={`${"text-brand-green"} check`}
									/>
									Get a focused overview covering the essentials of SatSat Ai
								</li>
								<li className=" flex items-center gap-3">
									<BsFillCheckCircleFill
										size={17}
										className={`${"text-brand-green"} check`}
									/>
									Navigate pricing plans and the platform with our help and
									experience its functionalities
								</li>
								<li className=" flex items-center gap-3">
									<BsFillCheckCircleFill
										size={17}
										className={`${"text-brand-green"} check`}
									/>
									Have an overview of how SatSat Ai can revolutionize your
									financial analysis
								</li>
							</ul>
							<h2 className="font-medium text-text-40 mt-3">
								Schedule A free SatSat Ai Demo Today!
							</h2>
						</div>

						<BookADemoForm />
					</main>
				</div>
				<Footer />
			</div>
		</>
	);
};
export default Page;
