import { BentoCard, BentoGrid } from "@/components/ui/BentoGrid";

import { ReactNode } from "react";

export interface featureProp {
	name: string;
	className?: string;
	background: ReactNode;
	Icon?: any;
	coverBottom?: boolean;
}

export function GridCards({ features }: { features: featureProp[] }) {
	return (
		<BentoGrid>
			{features.map((feature, idx) => (
				<BentoCard
					className={feature.className}
					coverBottom={[0, 2, 3].includes(idx)}
					key={idx}
					{...feature}
					Icon={feature.Icon || (() => null)} // Add this line to handle missing Icon prop
				/>
			))}
		</BentoGrid>
	);
}
