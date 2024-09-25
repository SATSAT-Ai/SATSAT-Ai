"use client";

import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";
const PieChartAmount = ({
	amount,
	className,
}: {
	amount: string;
	className?: ClassValue;
}) => {
	const [showAmount, setShowAmount] = useState(false);

	return (
		<h3
			onClick={() => setShowAmount(!showAmount)}
			tabIndex={0}
			className={cn(
				"text-text-normal mb-2 text-white cursor-pointer select-none flex items-center gap-2",
				className
			)}
		>
			{showAmount ? (
				<Eye color="#c98821" size={20} className="cursor-pointer" />
			) : (
				<EyeOff color="#c98821" size={20} className="cursor-pointer" />
			)}
			{showAmount ? (
				<span>{`GHS ${amount}`}</span>
			) : (
				<span className="text-text-24 h-5 leading-tight">******</span>
			)}
		</h3>
	);
};

export default PieChartAmount;
