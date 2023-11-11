"use client";

import { useState } from "react";
import { AiTwotoneEyeInvisible, AiOutlineEye } from "react-icons/ai";

const PieChartAmount = ({ amount }: { amount: string }) => {
	const [showAmount, setShowAmount] = useState(false);

	return (
		<h4
			onClick={() => setShowAmount(!showAmount)}
			className="text-text-normal text-white cursor-pointer select-none flex items-center gap-2"
		>
			{showAmount ? (
				<AiOutlineEye color="#ffffff60" size={20} className="cursor-pointer" />
			) : (
				<AiTwotoneEyeInvisible
					color="#ffffff60"
					size={20}
					className="cursor-pointer"
				/>
			)}
			{showAmount ? (
				`GHS ${amount}`
			) : (
				<span className="text-text-24 h-5">******</span>
			)}
		</h4>
	);
};

export default PieChartAmount;
