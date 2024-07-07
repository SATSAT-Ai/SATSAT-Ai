import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Spotlight from "@/components/ui/spotlight";
import { Metadata } from "next";
import GetStartedButton from "@/components/ui/GetStartedButton";
import GetStartedWithBlob from "@/components/GetStartedWithBlob";
import SparklesText from "@/components/ui/SparklesText";
import { GridCards } from "@/components/ui/GridCard";
import OnscrollTextReveal from "@/components/ui/OnscrollTextReveal";
import { featureProp } from "@/components/ui/GridCard";
import { FileCog, Wrench } from "lucide-react";
import { BsInputCursorText } from "react-icons/bs";
import GaugeCircle from "@/components/ui/GuageCirlce";
import Meteors from "@/components/ui/Meteors";
import { FlipWord } from "@/components/ui/FlipWord";
import { GrScorecard } from "react-icons/gr";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
} from "@/components/ui/command";

export const metadata: Metadata = {
	title: "SatSat-Ai Credit Scoring",
};
const page = () => {
	const features: featureProp[] = [
		{
			Icon: BsInputCursorText,
			name: "Search through your files in one place",
			className: "col-span-3 lg:col-span-2",
			background: (
				<Command className="absolute border-brand-green right-10 top-10 w-[70%] origin-top translate-x-0 border transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] group-hover:-translate-x-10">
					<CommandInput
						className="border-none"
						placeholder="Type a command or search..."
					/>
					<CommandList>
						<CommandEmpty>No results found.</CommandEmpty>
						<CommandGroup heading="Suggestions">
							<CommandItem>Tax_Audit_Preparation.docx</CommandItem>
							<CommandItem>Bank_Statement_Reconciliation.pdf</CommandItem>
							<CommandItem>Tax_Return_Preparation_Checklist.txt</CommandItem>
							<CommandItem>Investment_Plan_Forecast.xlsx</CommandItem>
							<CommandItem>Company_Invoices_Q2.txt</CommandItem>
							<CommandItem>Budget.xlsm</CommandItem>
						</CommandGroup>
					</CommandList>
				</Command>
			),
		},

		{
			Icon: GrScorecard,
			name: "Your credit score at a glance",
			className: "col-span-3 lg:col-span-1 grid place-content-center",
			background: <GaugeCircle className="w-40 h-40" />,
		},
		{
			Icon: Wrench,
			name: " Assess your financial health with unique data",
			className: "col-span-3 lg:col-span-1",
			background: <Meteors />,
		},
		{
			Icon: "",
			name: "",
			className: "col-span-3 lg:col-span-2",
			background: <FlipWord />,
		},
	];

	return (
		<>
			<Header />
			<div className="bg-darker">
				<div className=" h-[95vh] relative overflow-clip">
					<Spotlight
						className="top-[-5%] left-[10%] h-[300%] sm:h-[200%] w-[200%] sm:-top-[20px] md:left-60 md:-top-20"
						fill="#29a173"
					/>

					<section className="flex flex-col z-10 relative items-center justify-center h-full">
						<h1 className=" mb-0 bg-gradient-to-bl md:bg-gradient-to-br md:max-w-3xl text-center leading-none from-brand-green to-mid--yellow/90 bg-clip-text text-transparent font-bold mx-auto text-[47px] sm:text-text-50 md:text-text-60 lg:text-text-80">
							<SparklesText
								text="Alternative Credit Scoring"
								sparklesCount={8}
								starSize={25}
							/>
						</h1>

						<p className="text-mid--yellow max-w-xs mx-auto text-center py-4">
							Use alternative data for credit scoring and more.
						</p>

						<GetStartedButton
							className="w-fit mt-5"
							data-test="choose-pricing-button"
							showIcon={true}
							name="Get Started Now"
						/>
					</section>
				</div>
				<main className="z-10 relative grid items-center my-max">
					<GridCards features={features} />
					<OnscrollTextReveal
						text="Unmask Your Credit Score Mystery! Analyze reports, break down data, and reveal your credit health. No more credit score confusion. Gain clear insights to manage your credit smarter."
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
