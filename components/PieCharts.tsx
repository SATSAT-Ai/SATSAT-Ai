"use client";

import { PieChart } from "@mui/x-charts/PieChart";
import PieChartAmount from "./PieChartAmount";

const PieCharts = () => {
	const data = [
		{ id: 0, value: 10, label: "series A" },
		{ id: 1, value: 15, label: "series B" },
		{ id: 2, value: 20, label: "series C" },
	];

	const sizing = {
		margin: { right: 5 },
		width: 180,
		height: 180,
		legend: { hidden: true },
	};

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 mt-7">
			<div className="bg-white/10 p-5 w-full rounded-2xl">
				<h3 className="m-0 font-medium uppercase text-text-normal pb-3">
					Total Transfers Made
				</h3>
				<div className="flex flex-wrap-reverse md:flex-nowrap justify-center items-center gap-4">
					<div className="flex flex-col gap-2">
						<PieChartAmount amount={"3,000"} />
						<div className="flex text-[13px] items-center gap-2">
							<span className="h-3 rounded-md w-4 bg-[#29a173] block shadow-sm"></span>
							62% Transfer
						</div>
						<div className="flex text-[13px] items-center gap-2">
							<span className="h-3 rounded-md w-4 bg-[#174634] block shadow-sm"></span>
							13% E-Levy
						</div>
						<div className="flex text-[13px] items-center gap-2">
							<span className="h-3 rounded-md w-4 bg-[#c18e3b] block shadow-sm"></span>
							23% Fees
						</div>
					</div>
					<PieChart
						colors={["#29a173", "#174634", "#c18e3b"]}
						series={[
							{
								data,
								startAngle: -90,
								endAngle: 180,
								cornerRadius: 5,
								innerRadius: 30,
								outerRadius: 90,
								paddingAngle: 5,
								highlightScope: { faded: "global", highlighted: "item" },
								faded: {
									innerRadius: 30,
									additionalRadius: -30,
									color: "gray",
								},
							},
						]}
						{...sizing}
					/>
				</div>
			</div>
			<div className="bg-white/10 p-5 w-full rounded-2xl">
				<h3 className="m-0 font-medium uppercase text-text-normal pb-3">
					Total Transfers Made
				</h3>
				<div className="flex flex-wrap-reverse md:flex-nowrap justify-center items-center gap-4">
					<div className="flex flex-col gap-2">
						<PieChartAmount amount={"3,000"} />
						<div className="flex text-[13px] items-center gap-2">
							<span className="h-3 rounded-md w-4 bg-[#29a173] block shadow-sm"></span>
							62% Transfer
						</div>
						<div className="flex text-[13px] items-center gap-2">
							<span className="h-3 rounded-md w-4 bg-[#174634] block shadow-sm"></span>
							13% E-Levy
						</div>
						<div className="flex text-[13px] items-center gap-2">
							<span className="h-3 rounded-md w-4 bg-[#c18e3b] block shadow-sm"></span>
							23% Fees
						</div>
					</div>
					<PieChart
						colors={["#29a173", "#174634", "#c18e3b"]}
						series={[
							{
								data,
								startAngle: -90,
								endAngle: 180,
								cornerRadius: 5,
								innerRadius: 30,
								outerRadius: 90,
								paddingAngle: 5,
								highlightScope: { faded: "global", highlighted: "item" },
								faded: {
									innerRadius: 30,
									additionalRadius: -30,
									color: "gray",
								},
							},
						]}
						{...sizing}
					/>
				</div>
			</div>
			<div className="bg-white/10 p-5 w-full rounded-2xl">
				<h3 className="m-0 font-medium uppercase text-text-normal pb-3">
					Total Transfers Made
				</h3>
				<div className="flex flex-wrap-reverse md:flex-nowrap justify-center items-center gap-4">
					<div className="flex flex-col gap-2">
						<PieChartAmount amount={"3,000"} />
						<div className="flex text-[13px] items-center gap-2">
							<span className="h-3 rounded-md w-4 bg-[#29a173] block shadow-sm"></span>
							62% Transfer
						</div>
						<div className="flex text-[13px] items-center gap-2">
							<span className="h-3 rounded-md w-4 bg-[#174634] block shadow-sm"></span>
							13% E-Levy
						</div>
						<div className="flex text-[13px] items-center gap-2">
							<span className="h-3 rounded-md w-4 bg-[#c18e3b] block shadow-sm"></span>
							23% Fees
						</div>
					</div>
					<PieChart
						colors={["#29a173", "#174634", "#c18e3b"]}
						series={[
							{
								data,
								startAngle: -90,
								endAngle: 180,
								cornerRadius: 5,
								innerRadius: 30,
								outerRadius: 90,
								paddingAngle: 5,
								highlightScope: { faded: "global", highlighted: "item" },
								faded: {
									innerRadius: 30,
									additionalRadius: -30,
									color: "gray",
								},
							},
						]}
						{...sizing}
					/>
				</div>
			</div>
		</div>
	);
};

export default PieCharts;
