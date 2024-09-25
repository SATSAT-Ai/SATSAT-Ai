import devPortalImage from "@/public/devportal.svg";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MdArrowForward } from "react-icons/md";
import CustomGlowButton from "@/components/ui/CustomGlowButton";
import Blob from "@/components/Blob";

const Developers = () => {
	return (
		<div className=" bg-darker min-h-screen">
			<Blob
				className="fixed w-96 h-96 top-[-0%] lg:top-[10%] md:top-[50%] left-[10%]"
				blur={120}
			/>
			<Blob
				className="w-96 fixed h-96 lg:top-[10%] right-[10%]"
				background="#c98821"
				blur={120}
			/>
			<Header />
			<main className="pt-32 relative text-white py-5 z-0  gap-7 grid grid-cols-1 lg:grid-cols-2 my-max">
				<div className=" relative md:pr-7 text-text-normal font-normal">
					<h1 className="[background:radial-gradient(70.71%_70.71%_at_50%_50%,#fff_30%,rgba(255,255,255,0.5)_84.77%)] !bg-clip-text text-transparent mb-5 text-center font-semibold md:text-left max-w-5xl mx-auto text-[30px] md:text-text-40 xl:text-text-50">
						Developer Portal
					</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto
						illo maxime molestias distinctio praesentium ullam corrupti itaque
						dicta nisi quas commodi
					</p>
					<p className="py-5">
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
						ducimus nihil distinctio qui commodi doloribus. Lorem, ipsum dolor
						sit amet consectetur adipisicing elit. Architecto illo maxime
						molestias distinctio praesentium ullam corrupti itaque dicta nisi
						quas commodi
					</p>
					<p className="py-5">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam
						blanditiis assumenda facere. Sequi omnis quo beatae molestiae
						deleniti corporis asperiores fugiat perspiciatis quidem. Eos
						similique cupiditate, rerum natus placeat obcaecati. consectetur
						adipisicing elit. Architecto illo maxime molestias distinctio
						praesentium ullam corrupti itaque dicta nisi quas commodi
					</p>

					<CustomGlowButton
						data-test={"developer-docs-button"}
						className="mt-5 w-fit"
						href="https://satsatai.mintlify.app/introduction"
						target="_blank"
						name="Get Started"
						icon={<MdArrowForward color="white" size="24" />}
						iconPosition="right"
						buttonType="Link"
					/>

					<div className=" absolute bottom-0 h-full w-0 lg:w-[1.7px] top-0 right-0 rounded-lg bg-silver-gradient"></div>
				</div>
				<Image
					className="rounded-[30px] hidden lg:flex w-full h-auto"
					src={devPortalImage}
					alt="developer portal"
					height={550}
					width={550}
					quality={30}
				/>
			</main>
			<Footer />
		</div>
	);
};

export default Developers;
