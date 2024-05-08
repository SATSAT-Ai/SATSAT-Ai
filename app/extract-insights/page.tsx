import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import GlowCard from "@/components/ui/GlowCard";
import GlowCardParent from "@/components/ui/GlowCardParent";
import Spotlight from "@/components/ui/spotlight";
import { featureData } from "@/interface/interface";
import { Metadata } from "next";
import { PiFileXlsFill } from "react-icons/pi";
import { BsFileEarmarkPdfFill } from "react-icons/bs";
import { FaFileCsv } from "react-icons/fa6";
import { AiFillFileWord } from "react-icons/ai";
import GetStartedButton from "@/components/ui/GetStartedButton";
import GetStartedWithBlob from "@/components/GetStartedWithBlob";

export const metadata: Metadata = {
	title: "SatSat-Ai Document scan",
};
const page = () => {
	const featuresData: featureData[] = [
		{
			icon: <BsFileEarmarkPdfFill size={40} color="white" />,
			title: "PDF",
			para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat .",
			id: "pdf",
		},
		{
			icon: <FaFileCsv size={40} color="white" />,
			title: "CSV",
			para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat .",
			id: "csv",
		},
		{
			icon: <AiFillFileWord size={40} color="white" />,
			title: "Word",
			para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat .",
			id: "word",
		},

		{
			icon: <PiFileXlsFill size={40} color="white" />,
			title: "Xls",
			para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat .",
			id: "xls",
		},
	];

	return (
		<>
			<Header />
			<div className="bg-darker">
				<div className=" h-screen relative overflow-clip">
					<Spotlight
						className="top-[-5%] left-[10%] h-[300%] sm:h-[200%] w-[200%] sm:-top-[20px] md:left-60 md:-top-20"
						fill="#29a173"
					/>

					<section className="flex flex-col z-10 relative items-center justify-center h-full">
						<h1 className=" mb-0 bg-gradient-to-bl md:bg-gradient-to-br md:max-w-2xl text-center leading-none from-brand-green to-mid--yellow/90 bg-clip-text text-transparent font-bold mx-auto text-[47px] sm:text-text-50 md:text-text-60 lg:text-text-80">
							SatSat Ai Insight Extraction
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
					<h2 className=" mb-0 bg-gradient-to-br from-brand-green to-mid--yellow/90 bg-clip-text text-left text-transparent max-w-xl mr-auto ml-0 font-bold mx-auto py-5 text-text-20">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
						officiis veniam fuga:
					</h2>
					<GlowCardParent className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl">
						{featuresData.map((data) => {
							return (
								<GlowCard
									key={data.title}
									cardClassName="bg-[#071f07] text-white "
								>
									<Feature
										title={data.title}
										para={data.para}
										icon={data.icon}
									/>
								</GlowCard>
							);
						})}
					</GlowCardParent>
					<GetStartedWithBlob />
				</main>
			</div>
			<Footer />
		</>
	);
};

export default page;
