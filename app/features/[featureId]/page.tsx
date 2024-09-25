import { featuresData } from "@/utils/featuresData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Feature from "@/components/Feature";
import GlowCardParent from "@/components/ui/GlowCardParent";
import GlowCard from "@/components/ui/GlowCard";
import { featureData } from "@/interface/interface";
import ActiveFeature from "../../../components/ui/ActiveFeature";
import Blob from "@/components/Blob";

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
				<Blob className="w-96 h-96 animate-pulse sm:-top-[11%] -top-[8%] md:-top-[13%] lg:-top-[16%] left-1/2 -translate-x-1/2 mx-auto" />

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
									data-test={"active-feature"}
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

export default TargetFeature;
