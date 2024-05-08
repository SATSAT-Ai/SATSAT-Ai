import SatSatAiLogo from "@/public/satsat-logo.svg";
import Image from "next/image";
import Blob from "@/components/Blob";
import GetStartedButton from "@/components/ui/GetStartedButton";

const GetStartedWithBlob = () => {
	return (
		<div className="py-20 relative flex flex-col items-center">
			<Blob
				animation="animate-pulse"
				className="md:left-1/2 md:-translate-x-1/2 sm:h-72"
				blur={45}
				background="#2aa27435"
			/>

			<Image
				className="h-[100px] w-[250px] md:h-[150px] md:w-[300px]"
				src={SatSatAiLogo}
				height={300}
				width={300}
				alt="SatSat-Ai"
				priority
			/>

			<div className="relative z-[1]">
				<GetStartedButton
					showIcon={true}
					name="Get Started Now"
					data-test="choose-pricing-button"
				/>
			</div>
		</div>
	);
};

export default GetStartedWithBlob;
