import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const Feature = ({
	title,
	icon,
	para,
	className,
	borderTop,
	borderBottom,
	borderLeft,
	borderRight,
	hidden,
	idx,
	paragraphClassName,
	titleClassName,
}: {
	title: string;
	para: string;
	icon: any;
	className?: string;
	borderTop?: boolean;
	borderLeft?: boolean;
	borderBottom?: boolean;
	borderRight?: boolean;
	hidden?: boolean;
	idx?: number;
	paragraphClassName?: ClassValue;
	titleClassName?: ClassValue;
}) => {
	return (
		<div
			className={cn(
				"relative text-white p-3 bg-[#071f07] rounded-lg",
				className,
				{ "border-r": borderRight },
				{ "border-l": borderLeft },
				{ "border-t": borderTop },
				{ "border-b": borderBottom },
				{ hidden: hidden },
				{ "lg:border-t-0": [2, 3, 7].includes(idx!) }
			)}
		>
			{icon}

			<h2 className={cn("text-text-20 font-medium m-0 my-2", titleClassName)}>
				{title}
			</h2>
			<p
				data-test={"active-feature-text"}
				className={cn(
					"text-white/60 font-normal text-text-normal",
					paragraphClassName
				)}
			>
				{para}
			</p>
		</div>
	);
};

export default Feature;
