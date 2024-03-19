"use client";
import { featureData } from "@/interface/interface";
import { useRef, useEffect } from "react";
import Feature from "../Feature";

const ActiveFeature = ({
	activeFeatureData,
}: {
	activeFeatureData: featureData;
}) => {
	const targetRef = useRef<null | HTMLDivElement>(null);

	useEffect(() => {
		if (targetRef.current) {
			targetRef.current.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	return (
		<div
			ref={targetRef}
			className="relative z-10 scroll-m-20"
			key={activeFeatureData.id}
		>
			<div
				data-test={`${activeFeatureData.id}-active`}
				className={`p-3 h-full before:opacity-30 before:hover:opacity-30 before:z-[-1] after:z-[-1]  before:rounded-2xl after:absolute after:rounded-2xl after:top-[-1px] after:left-[-1px]  before:absolute before:top-[-1px] before:left-[-1px] bg-transparent relative rounded-2xl bg-gradient-to-tr from-[#071f07] to-[#071f07] justify-between custom-block glow text-text-normal text-white font-medium flex items-center gap-2`}
			>
				<Feature
					title={activeFeatureData.title}
					para={activeFeatureData.para}
					icon={activeFeatureData.icon}
				/>
			</div>
		</div>
	);
};

export default ActiveFeature;
