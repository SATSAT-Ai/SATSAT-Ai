"use client";

import { useState } from "react";
import { AiTwotoneEyeInvisible, AiOutlineEye } from "react-icons/ai";

const PieChartAmount = ({ amount }: { amount: string }) => {
	const [showAmount, setShowAmount] = useState(false);

	return (
		<h3
			onClick={() => setShowAmount(!showAmount)}
			tabIndex={0}
			className="text-text-normal mb-2 text-white cursor-pointer select-none flex items-center gap-2"
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
				<span>{`GHS ${amount}`}</span>
			) : (
				<span className="text-text-24 h-5">******</span>
			)}
		</h3>
	);
};

export default PieChartAmount;
