import Header from "@/components/Header";
import Logo from "@/public/satsat-logo.svg";
import Image from "next/image";
import UserVerificationForm from "@/components/UserVerificationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SatSat-Ai User Verification",
};

const Page = () => {
	return (
		<>
			<Header />
			<div className="pt-20 w-full flex relative overflow-x-clip items-center justify-center min-h-screen bg-darker">
				<div className=" animate-pulse green-blob2 w-96 h-96 top-[-30%] lg:top-[-30%] left-[50%] "></div>
				<main className="w-full">
					<div className="my-max">
						<div className="max-w-xs mx-auto">
							<Image
								src={Logo}
								className="mx-auto"
								height={130}
								width={130}
								alt="SaTSaT-Ai"
								priority
							/>

							<UserVerificationForm />
						</div>
					</div>
				</main>
			</div>
		</>
	);
};

export default Page;
