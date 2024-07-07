import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OnscrollTextReveal from "@/components/ui/OnscrollTextReveal";
import GetStartedWithBlob from "@/components/GetStartedWithBlob";

const page = () => {
	return (
		<>
			<Header className="z-30" />
			<main className="z-10 w-full py-10 bg-darker  text-white">
				<div className="my-max z-20 my-max px-5 my-5 md:h-screen relative">
					<GetStartedWithBlob
						showButton={false}
						className="mb-10"
						animation="animate-pulse"
					/>

					<p className="hidden md:flex text-text-20 font-semibold md:text-text-40 text-gray-200">
						SatSat Ai is ipsum dolor sit, amet consectetur adipisicing elit.
						Accusamus in numquam commodi, iure nisi ex ab aut ullam molestias
						assumenda, animi exercitationem quisquam possimus ipsam quod!
						Sapiente velit, perferendis pariatur
					</p>
					<p className="md:hidden text-text-20 md:text-text-40 lg:text-text-50">
						we amet consectetur adipisicing elit. Teneturmolestias officia ad et
						quos quia eligendi dolorum, eos errornostrum iusto odit! Consequatur
						aliquam impedit enim omnis excepturiea aut illo ratione veniam.
						Pariatur quidem id qui, quibusdam ipsumerror dicta eveniet nam modi
					</p>
				</div>
				{/* //mobile */}
				<div className="px-5 my-max">
					<p className="md:hidden my-7 text-text-20 md:text-text-40 lg:text-text-50">
						sit amet consectetur adipisicing elit. Teneturmolestias officia ad
						et quos quia eligendi dolorum, eos errornostrum iusto odit!
						Consequatur aliquam impedit enim omnis excepturiea aut illo ratione
						veniam. Pariatur quidem id qui, quibusdam ipsumerror dicta eveniet
						nam modi
					</p>
					{/* //desktop */}
					<OnscrollTextReveal
						text=" We amet consectetur adipisicing elit. Teneturmolestias officia ad et quos quia eligendi dolorum, eos errornostrum iusto odit! Consequatur aliquam impedit enim omnis excepturiea aut illo ratione veniam. Pariatur quidem id qui, quibusdam ipsumerror dicta eveniet nam modi"
						className=" hidden md:flex items-start h-[70vh] text-text-20 relative mx-0 md:text-[35px] lg:text-text-50"
					/>
					{/* //mobile */}
					<p className="md:hidden text-text-20 md:text-text-40 lg:text-text-50">
						sit amet consectetur adipisicing elit. Teneturmolestias officia ad
						et quos quia eligendi dolorum, eos errornostrum iusto odit!
						Consequatur aliquam impedit enim omnis excepturiea aut illo ratione
						veniam. Pariatur quidem id qui, quibusdam ipsumerror dicta eveniet
						nam modi
					</p>
					{/* //desktop */}
					<OnscrollTextReveal
						text=" Your amet consectetur adipisicing elit. Teneturmolestias officia ad et quos quia eligendi dolorum, eos errornostrum iusto odit! Consequatur aliquam impedit enim omnis excepturiea aut illo ratione veniam. Pariatur quidem id qui, quibusdam ipsumerror dicta eveniet nam modi  "
						className="h-[70vh] hidden md:flex items-start text-text-20 mx-0 md:text-[35px] lg:text-text-50"
						retro={true}
					/>
				</div>
			</main>

			<Footer />
		</>
	);
};

export default page;
