import Header from "@/components/Header";
import SparklesCore from "@/components/ui/Particles";
import Spotlight from "@/components/ui/spotlight";

function SpotlightPreview() {
	return (
		<>
			<Header />
			<main className="bg-darker">
				<div className=" h-screen relative overflow-clip">
					<Spotlight
						className="top-[-5%] left-[10%] sm:-top-[20px] md:left-60 md:-top-20"
						fill="#29a173"
					/>
					<div className="h-full w-full">
						<SparklesCore
							id="tsparticlesfullpage"
							background="transparent"
							minSize={0.8}
							maxSize={1.8}
							particleDensity={25}
							className="w-full h-full"
							particleColor="#29a173"
						/>
					</div>
					<div className=" absolute top-1/2 text-center w-full left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center">
						<h1 className="text-brand-green max-w-3xl m-0 text-text-40 lg:text-text-80">
							Lorem ipsum dolor.
						</h1>
						<p className="text-mid--yellow max-w-xl">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
							qui reiciendis. Magnam iure blanditiis quia.
						</p>
					</div>
				</div>

				<section className="text-white text-center">
					<h2>lorem Ipsum</h2>
				</section>
			</main>
		</>
	);
}
export default SpotlightPreview;
