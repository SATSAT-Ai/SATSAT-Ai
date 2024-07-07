"use client";

import { PieChart } from "@mui/x-charts/PieChart";
import PieChartAmount from "./PieChartAmount";
import { ITransactionsData } from "@/interface/interface";

type dataProp = {
	id: number;
	value: number;
	label: string;
}[];

const PieCharts = ({
	data,
	endAngle = 180,
	title,
	transactionsData,
	colors,
	hideSidebar,
}: {
	data: dataProp;
	endAngle: number;
	title: string;
	transactionsData: ITransactionsData;
	colors: string[];
	hideSidebar: boolean;
}) => {
	const sizing = {
		margin: { right: 5 },
		width: 180,
		height: 180,
		legend: { hidden: true },
	};

	return (
		<div className="bg-brand-green/10 max-w-lg mx-auto lg:max-w-full p-5 w-full rounded-2xl">
			<h2 className="m-0 font-medium uppercase text-text-normal pb-3">
				{title}
			</h2>
			<div
				className={`flex flex-wrap-reverse ${
					hideSidebar ? "lg:flex-nowrap" : "lg:flex-wrap"
				} justify-center items-center gap-4 xl:flex-nowrap`}
			>
				<div className="flex flex-col gap-2" id="walkthrough-3">
					<PieChartAmount amount={"3,000"} />
					{transactionsData.data.map((transaction) => {
						return (
							<div
								key={transaction.name}
								className="flex text-text-12 items-center gap-2"
							>
								<span
									style={{
										backgroundColor: `${transaction.color}`,
									}}
									className="h-3 rounded-md w-4 bg-[gold] block shadow-sm"
								></span>
								{`${transaction.percentage} ${transaction.name}`}
							</div>
						);
					})}
				</div>
				<PieChart
					colors={[...colors]}
					series={[
						{
							data,
							startAngle: -90,
							endAngle,
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
	);
};

export default PieCharts;
