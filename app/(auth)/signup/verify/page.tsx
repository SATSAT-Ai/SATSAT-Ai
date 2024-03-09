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
				<div className=" animate-pulse green-blob2 w-96 h-96 top-[-50%] lg:top-[-30%] left-[50%] "></div>

				<main className="my-max">
					<VerificationStages />
				</main>
			</div>
		</>
	);
};

export default Page;
