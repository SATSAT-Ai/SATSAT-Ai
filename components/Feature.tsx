import { cn } from "@/lib/utils";

const Feature = ({
	title,
	icon,
	para,
	className,
}: {
	title: string;
	para: string;
	icon: any;
	className?: string;
}) => {
	return (
		<div
			className={cn(
				"relative text-white p-3 bg-[#071f07] rounded-lg",
				className
			)}
		>
			{icon}

			<h2 className="text-text-20 font-medium mt-2">{title}</h2>
			<p
				data-test={"active-feature-text"}
				className="mb-3 mt-1 text-white/70 font-normal text-text-normal"
			>
				{para}
			</p>
		</div>
	);
};

export default Feature;
