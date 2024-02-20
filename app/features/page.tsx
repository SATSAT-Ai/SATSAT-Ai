import { featuresData } from "@/utils/featuresData";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import GlowCardParent from "@/components/ui/GlowCardParent";
import GlowCard from "@/components/ui/GlowCard";

export const metadata: Metadata = {
	title: "SATSAT-Ai Features",
};

const Features = () => {
	return (
		<>
			<Header />

			<main className="bg-darker min-h-screen w-full py-10 relative overflow-hidden">
				<div className="green-blob w-96 h-96 animate-pulse top-[-10%] md:top-[-20%] left-[50%]"></div>

				<div className="my-max pt-5">
					<h1 className="capitalize mt-16 text-brand-green text-center max-w-5xl mx-auto text-text-40 md:text-text-60 lg:text-text-60">
						Features
					</h1>

					<GlowCardParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-5">
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
				</div>
			</main>
			<Footer />
		</>
	);
};

export default Features;
