import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spotlight from "@/components/ui/spotlight";
import { Metadata } from "next";
import GetStartedButton from "@/components/ui/GetStartedButton";
import GetStartedWithBlob from "@/components/GetStartedWithBlob";
import SparklesText from "@/components/ui/SparklesText";
import OnscrollTextReveal from "@/components/ui/OnscrollTextReveal";
import { OrbitingCircles } from "@/components/ui/OrbitCirlcle";
import ScrollBasedVelocity from "@/components/ui/ScrollBasedVelocity";
import WordRotate from "@/components/ui/WordRotate";
import Marquee from "@/components/ui/Marquee";
import { FileTextIcon, FileStack, ScanFace } from "lucide-react";
import { featureProp, GridCards } from "@/components/ui/GridCard";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
	title: "SatSat-Ai Document scan",
};
const page = () => {
	const files = [
		{
			name: "Financial_Disclosure.xlsx",
			body: "Spreadsheet application file used for data organization and calculations (XLSX).",
		},
		{
			name: "Investment_Portfolio_Perf.xml",
			body: "Flexible data storage format with defined structure (XML).",
		},
		{
			name: "Tax_Audit_Preparation.pdf",
			body: "Document format for preserving layout and formatting (PDF).",
		},
		{
			name: "Merger_Acquisition_Propo.txt",
			body: "Unformatted text file for storing basic information (TXT).",
		},
	];
	const features: featureProp[] = [
		{
			Icon: FileTextIcon,
			name: "The Power of AI-Driven Document Processing",
			className: "col-span-3 lg:col-span-1",
			background: (
				<Marquee
					pauseOnHover
					className="absolute top-10 [--duration:20s] h-[240px] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
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
			),
		},

		{
			Icon: ScanFace,
			name: "Document Identification at a Glance",
			className: "col-span-3 lg:col-span-2",
			background: (
				<div className="absolute inset-0 place-content-center">
					<OrbitingCircles />
				</div>
			),
		},

		{
			Icon: "",
			name: "",
			className: "col-span-3 lg:col-span-2",
			background: (
				<ScrollBasedVelocity
					text=" Let SatSat-AI do the work of deciphering statements to unlock financial clarity."
					className="text-mid--yellow font-semibold text-text-24"
					default_velocity={2}
					retro={true}
				/>
			),
		},
		{
			Icon: FileStack,
			name: "Automated Document Processing",
			className: "col-span-3 lg:col-span-1",
			background: (
				<div className="absolute inset-0 place-content-center">
					<WordRotate
						className="font-bold"
						words={["Statements", "Invoices", "Receipts", "And More"]}
						retro={true}
					/>
				</div>
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

					<section className="pt-20 pb-0 flex flex-col z-10 relative items-center justify-center h-full">
						<h1 className=" mb-0 md:max-w-2xl text-center leading-none font-bold mx-auto text-[47px] sm:text-text-60 lg:text-text-80">
							<SparklesText text="SatSat Ai Document Scan" sparklesCount={8} />
						</h1>
						<p className="text-mid--yellow max-w-xs mx-auto text-center py-4">
							Scan your mobile money, bank statements, Invoices, receipts and
							more
						</p>

						<GetStartedButton
							className="w-fit mt-5"
							data-test="choose-pricing-button"
							showIcon={true}
							name="Get Started Now"
						/>
					</section>
				</div>
				<div className="my-max">
					<GridCards features={features} />
				</div>

				<main className="z-10 w-full relative grid items-center justify-center my-max">
					<h2 className=""></h2>
					<OnscrollTextReveal
						text="We see through paper! PDFs, Docs and more - vanish the clutter. We grab the details, you keep the insights."
						retro={true}
						className="text-text-20 md:text-text-40 lg:text-text-50"
					/>
					<GetStartedWithBlob />
				</main>
			</div>
			<Footer />
		</>
	);
};

export default page;
