import Footer from "@/components/Footer";
import Header from "@/components/Header";
import VerifyAccount from "@/components/VerifyAccount";
import Logo from "@/public/satsat-logo.svg";
import Image from "next/image";

const page = () => {
	return (
		<>
			<Header />
			<div className=" flex relative overflow-x-clip items-center justify-center min-h-screen bg-darker">
				<div className=" animate-pulse green-blob2 w-96 h-96 top-[-30%] lg:top-[-30%] left-[50%] "></div>
				<main>
					<div className="my-max">
						<div className="max-w-xs mx-auto">
							<Image
								src={Logo}
								className="mx-auto"
								height={130}
								width={130}
								alt="SATSAT-Ai"
								priority
							/>
							<p className="text-mid--yellow text-center my-6">
								Enter the signup code we just sent to
								{/* render dynamic email address */}
								{" kamasahdickson19@gmail.com"}
							</p>
							<VerifyAccount />
						</div>
					</div>
				</main>
			</div>
			<Footer />
		</>
	);
};

export default page;
