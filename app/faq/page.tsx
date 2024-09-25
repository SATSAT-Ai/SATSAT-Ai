import Lamp from "@/components/ui/Lamp";
import Header from "@/components/Header";
import { Metadata } from "next";
import Footer from "@/components/Footer";
import Faq from "@/components/ui/Faq";
import GetStartedWithBlob from "@/components/GetStartedWithBlob";

export const metadata: Metadata = {
	title: "SatSat Ai - FAQ",
};

const Page = () => {
	return (
		<div className="bg-darker ">
			<Header />
			<Lamp className="pt-14" />

			<div className="my-max px-0 md:max-w-3xl mx-auto pb-10 -mt-20 z-20 relative text-white md:px-5">
				<Faq
					faqs={[
						{
							title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
							content:
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque excepturi error inventore ipsam porro molestias possimus aliquam fugit corporis esse.",
						},
						{
							title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
							content:
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque excepturi error inventore ipsam porro molestias possimus aliquam fugit corporis esse.",
						},
						{
							title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
							content:
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque excepturi error inventore ipsam porro molestias possimus aliquam fugit corporis esse.",
						},
						{
							title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
							content:
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque excepturi error inventore ipsam porro molestias possimus aliquam fugit corporis esse.",
						},
						{
							title: "Lorem ipsum dolor sit amet consectetur adipisicing.",
							content:
								"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque excepturi error inventore ipsam porro molestias possimus aliquam fugit corporis esse.",
						},
					]}
				/>
			</div>
			<GetStartedWithBlob className="mb-0" />

			<Footer />
		</div>
	);
};
export default Page;
