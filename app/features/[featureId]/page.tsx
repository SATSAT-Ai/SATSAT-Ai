import { featuresData } from "@/utils/featuresData";
import { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import GlowCardParent from "@/components/ui/GlowCardParent";
import GlowCard from "@/components/ui/GlowCard";
import { featureData } from "@/interface/interface";
import ActiveFeature from "../../../components/ui/ActiveFeature";


export const generateMetadata = ({
	params: { featureId },
}: {
	params: { featureId: string };
}) => {
	const findFeature = featuresData.find((feature) => feature.id === featureId);

	if (findFeature) {
		return {
			title: `SATSAT-Ai - ${findFeature.title}`,
		};
	}
	return {
		title: "SATSAT-Ai Features",
	};
};

const TargetFeature = ({
	params: { featureId },
}: {
	params: { featureId: string };
}) => {
	return (
		<>
			<Header />

			<main className="bg-darker min-h-screen w-full relative overflow-hidden">
				<div className="green-blob w-96 h-96 animate-pulse top-[-10%] md:top-[-20%] left-[50%]"></div>

				<div className="my-max py-20">
					<h1 className="capitalize mb-0 py-10 text-brand-green text-center max-w-5xl mx-auto text-text-40 md:text-text-60 lg:text-text-60">
						Features
					</h1>
					{/* pt-20 */}
					<GlowCardParent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
						{featuresData.map((data: featureData) => {
							if (data.id === featureId) {
								return <ActiveFeature activeFeatureData={data} key={data.id} />;
							}
							return (
								<GlowCard
									key={data.title}
									cardClassName="bg-[#071f07] text-white "
								>
									<Feature
										title={data.title}
										link={data.link}
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

export default TargetFeature;
