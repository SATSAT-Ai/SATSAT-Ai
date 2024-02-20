import devPortalImage from "@/public/devportal.svg";
import Image from "next/image";
import "../globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MdArrowForward } from "react-icons/md";
import CustomGlowButton from "@/components/ui/CustomGlowButton";

const Developers = () => {
	return (
		<div className=" bg-darker min-h-screen">
			<div className="green-blob !fixed w-96 h-96 top-[-0%] lg:top-[10%] md:top-[50%] left-[35%]"></div>
			<div className="yellow-blob2 w-96 !fixed h-96 top-[-20%] sm:top-[-10%] lg:top-[-5%] right-[0%]"></div>
			<Header position="sticky" />
			<main className="relative text-white py-5 z-0  gap-7 grid grid-cols-1 md:grid-cols-2 my-max">
				<div className=" relative md:pr-7 text-text-normal font-normal">
					<h1 className="silver-text mb-5 text-center font-semibold md:text-left max-w-5xl mx-auto text-[30px] md:text-text-40 xl:text-text-50">
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

					<button type="button" aria-label="get started now" className="mt-5">
						<CustomGlowButton
							href="/developers/getting-started"
							name="Get Started"
							icon={<MdArrowForward color="white" size="24" />}
							iconPosition="right"
						/>
					</button>

					<div className=" absolute bottom-0 h-full w-0 md:w-[1.7px] top-0 right-0 rounded-lg bg-silver-gradient"></div>
				</div>
				<Image
					className="rounded-[30px] w-full h-auto"
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
