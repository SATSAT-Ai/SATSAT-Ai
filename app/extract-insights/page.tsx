import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spotlight from "@/components/ui/spotlight";
import { Metadata } from "next";
import GetStartedButton from "@/components/ui/GetStartedButton";
import GetStartedWithBlob from "@/components/GetStartedWithBlob";
import SparklesText from "@/components/ui/SparklesText";
import OnscrollTextReveal from "@/components/ui/OnscrollTextReveal";
import { featureProp, GridCards } from "@/components/ui/GridCard";
import { FileClock, Cpu, BellRing, FileCog } from "lucide-react";
import Marquee from "@/components/ui/Marquee";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/ui/AnimatedBeam";
import { AnimatedList } from "@/components/ui/AnimatedList";
import WordRotate from "@/components/ui/WordRotate";
import { Calendar } from "@/components/ui/calendar";

export const metadata: Metadata = {
	title: "SatSat-Ai Document scan",
};
const page = () => {
	const files: { name: string; body: string }[] = [
		{
			name: "finance.xlsx",
			body: "Spreadsheet application file used for data organization and calculations (XLSX).",
		},
		{
			name: "invoice.xml",
			body: "Flexible data storage format with defined structure (XML).",
		},
		{
			name: "grocery.pdf",
			body: "Document format for preserving layout and formatting (PDF).",
		},
		{
			name: "seed.txt",
			body: "Unformatted text file for storing basic information (TXT).",
		},
	];

	const features: featureProp[] = [
		{
			Icon: FileClock,
			name: "Data extraction across multiple files.",
			className: "col-span-3 lg:col-span-1",
			background: (
				<div>
					<Marquee
						vertical
						pauseOnHover
						className="absolute top-0 left-0 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
					>
						{files.map((f, idx) => (
							<figure
								key={idx}
								className={cn(
									"relative w-60 cursor-pointer overflow-hidden rounded-xl border p-4",
									"border-brand-green/[.2] hover:border-brand-green/[.1] bg-brand-green/[.10] hover:bg-brand-green/[.15]",
									"transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
								)}
							>
								<div className="flex flex-row items-center gap-2">
									<div className="flex flex-col">
										<figcaption className="text-sm font-medium text-white ">
											{f.name}
										</figcaption>
									</div>
								</div>
								<blockquote className="mt-2 text-xs">{f.body}</blockquote>
							</figure>
						))}
					</Marquee>
					<Marquee
						vertical
						reverse
						pauseOnHover
						className="absolute top-0 -right-36 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
					>
						{files.map((f, idx) => (
							<figure
								key={idx}
								className={cn(
									"relative w-60 cursor-pointer overflow-hidden rounded-xl border p-4",
									"border-brand-green/[.2] hover:border-brand-green/[.1] bg-brand-green/[.10] hover:bg-brand-green/[.15]",
									"transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
								)}
							>
								<div className="flex flex-row items-center gap-2">
									<div className="flex flex-col">
										<figcaption className="text-sm font-medium text-white ">
											{f.name}
										</figcaption>
									</div>
								</div>
								<blockquote className="mt-2 text-xs">{f.body}</blockquote>
							</figure>
						))}
					</Marquee>
				</div>
			),
		},

		{
			Icon: Cpu,
			name: " Unfold the magic of AI document processing",
			className: "col-span-3 lg:col-span-2",
			background: (
				<AnimatedBeam className="absolute inset-0 md:right-2 md:top-4 w-[600px] mx-auto border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_6%,#050d0a_120%)] group-hover:scale-105" />
			),
		},

		{
			Icon: BellRing,
			name: "Stay Informed with Real-Time Document Updates",
			className: "col-span-3 lg:col-span-2",
			background: (
				<div className="absolute py-2 inset-0 grid grid-cols-1 md:grid-cols-2 place-content-center">
					<AnimatedList />
					<div className="hidden md:flex items-center justify-center">
						<WordRotate
							className="font-bold"
							words={[
								"Analyze  ",
								"Insightful",
								"Visualize ",
								"Automated",
								"Actionable ",
							]}
						/>
					</div>
				</div>
			),
		},
		{
			Icon: FileCog,
			name: "Take Control of Your Financial Insights",
			className: "col-span-3 lg:col-span-1",
			background: (
				<Calendar
					className={cn(
						"cursor-pointer absolute -right-2 group-hover:scale-105 transition-all duration-300 ease-out top-5 rounded-lg [border:1px_solid_rgba(41,161,115,.2)]"
					)}
				/>
			),
		},
	];

	return (
		<>
			<Header />
			<div className="bg-darker">
				<div className=" h-[90vh] relative overflow-clip">
					<Spotlight
						className="top-[-5%] left-[10%] h-[300%] sm:h-[200%] w-[200%] sm:-top-[20px] md:left-60 md:-top-20"
						fill="#29a173"
					/>

					<section className="flex flex-col z-10 relative items-center justify-center h-full">
						<h1 className=" mb-0 bg-gradient-to-bl md:bg-gradient-to-br md:max-w-2xl text-center leading-none from-brand-green to-mid--yellow/90 bg-clip-text text-transparent font-bold mx-auto text-[47px] sm:text-text-50 md:text-text-60 lg:text-text-80">
							<SparklesText
								text="SatSat Ai Insight Extraction"
								sparklesCount={8}
							/>
						</h1>

						<p className="text-mid--yellow max-w-xs mx-auto text-center py-4">
							Get valuable insights extracted from all your financial documents.
						</p>

						<GetStartedButton
							className="w-fit mt-5"
							data-test="choose-pricing-button"
							showIcon={true}
							name="Get Started Now"
						/>
					</section>
				</div>
				<main className="z-10 relative grid items-center justify-center my-max">
					<GridCards features={features} />
					<OnscrollTextReveal
						text="Ditch the data dive! We conquer PDFs, and Docs, extracting the key info from your statements, bills and invoices. No more manual sorting - just clear insights to manage your finances smarter."
						className="text-white text-text-20 md:text-text-40"
					/>
					<GetStartedWithBlob />
				</main>
			</div>
			<Footer />
		</>
	);
};

export default page;
