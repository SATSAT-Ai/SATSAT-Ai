import Blob from "@/components/Blob";
import Header from "@/components/Header";
import VerificationStages from "@/components/VerificationStages";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SatSat-Ai User Verification",
};

const Page = () => {
	return (
		<>
			<Header />
			<div className=" pt-20 flex relative overflow-x-clip items-center justify-center min-h-screen bg-darker">
				<Blob
					className="w-96 h-96 top-[-50%] lg:top-[-30%]"
					animation="animate-pulse"
				/>

				<main className="my-max">
					<VerificationStages />
				</main>
			</div>
		</>
	);
};

export default Page;
