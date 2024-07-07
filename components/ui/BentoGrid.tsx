import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { featureProp } from "./GridCard";

const BentoGrid = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
				className
			)}
		>
			{children}
		</div>
	);
};

const BentoCard = ({
	name,
	className,
	background,
	Icon,
	coverBottom,
}: featureProp) => (
	<div
		key={name}
		className={cn(
			"relative group col-span-3 overflow-hidden rounded-xl",
			"transform-gpu text-white [border:1px_solid_rgba(41,161,115,.1)] [box-shadow:0_-20px_80px_-20px_#29a1731a_inset]",
			className
		)}
	>
		{background}
		<div className="z-10 flex absolute bottom-0 transform-gpu flex-col gap-1 p-6 translate-y-5 transition-all duration-300 group-hover:-translate-y-10">
			<Icon className="h-10 w-10 origin-left transform-gpu text-brand-green group-hover:text-brand-green transition-all duration-300 ease-in-out group-hover:scale-75" />
			<h3 className="text-xl max-w-[24rem] font-medium group-hover:font-semibold text-[27px] text-brand-green/45 group-hover:text-white ">
				{name}
			</h3>
		</div>
		<div
			className={cn(
				"pointer-events-none absolute inset-0 transform-gpu transition-all bg-brand-green-darker/[.1] duration-300 group-hover:bg-brand-green-darker/[.2]",
				{
					"before:absolute before:bottom-0 before:h-[40%] mt-auto before:w-full before:bg-gradient-to-t before:from-darker before:from-[50%] group-hover:before:from-[60%] before:z-20 ease-out":
						coverBottom,
				},
				{
					"before:absolute before:bottom-0 before:h-[25%] mt-auto before:w-full before:bg-gradient-to-t before:from-darker before:from-[50%] before:z-20 ease-out":
						!coverBottom,
				},
				{ "group-hover:bg-brand-green-darker/[.1]": !name }
			)}
		/>
	</div>
);

export { BentoCard, BentoGrid };
