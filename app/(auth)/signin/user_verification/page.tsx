import Header from "@/components/Header";
import UserVerificationForm from "@/components/UserVerificationForm";
import { Metadata } from "next";
import Blob from "@/components/Blob";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
	title: "SatSat-Ai User Verification",
};

const Page = () => {
	return (
		<>
			<Header />
			<div className="pt-20 w-full flex relative overflow-x-clip items-center justify-center min-h-screen bg-darker">
				<Blob
					className="w-96 h-96 top-[-30%] lg:top-[-30%]"
					animation="animate-pulse"
				/>
				<main className="w-full">
					<div className="my-max">
						<div className="max-w-xs mx-auto">
							<Logo type="large" />

							<UserVerificationForm />
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Page;
