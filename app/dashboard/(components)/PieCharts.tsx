"use client";

import { PieChart } from "@mui/x-charts/PieChart";
import PieChartAmount from "./PieChartAmount";
import { ITransactionsData } from "@/interface/interface";
import { cn } from "@/lib/utils";

type dataProp = {
	id: number;
	value: number;
	label: string;
}[];

interface LabelData extends ITransactionsData {}

const PieCharts = ({
	data,
	endAngle = 180,
	customLabelData,
	colors,
	hideLegend = true,
	showPieChartAmount = true,
	innerRadius = 30,
	showLabelAt = {
		bottom: false,
		top: true,
	},
}: {
	data: dataProp;
	endAngle?: number;
	customLabelData?: LabelData;
	colors: string[];
	hideLegend?: boolean;
	showPieChartAmount?: boolean;
	innerRadius?: number;
	showLabelAt?: {
		bottom?: boolean;
		top?: boolean;
	};
}) => {
	return (
		<>
			<div
				className={cn(
					"flex flex-wrap-reverse justify-center lg:flex-nowrap items-center gap-2 w-full"
				)}
			>
				<div className="flex flex-col gap-2" id="walkthrough-3">
					{showPieChartAmount && <PieChartAmount amount={"3,000"} />}
					{showLabelAt.top &&
						customLabelData?.data?.map((transaction) => {
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
					width={200}
					height={200}
					margin={{
						right: 5,
					}}
					sx={{
						["& .MuiPieArc-root"]: {
							stroke: "white !important",
						},
					}}
					colors={[...colors]}
					series={[
						{
							data,
							startAngle: -90,
							endAngle,
							cornerRadius: 5,
							innerRadius,
							outerRadius: 90,
							paddingAngle: 5,
							highlightScope: { faded: "global", highlighted: "item" },

							faded: {
								innerRadius,
								additionalRadius: -30,
								color: "gray",
							},
						},
					]}
					slotProps={{
						legend: {
							hidden: hideLegend,
						},
					}}
				/>
			</div>
			{showLabelAt.bottom && (
				<div className="flex flex-wrap mt-3 items-center gap-5 w-full">
					{customLabelData?.data?.map((transaction) => {
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
			)}
		</>
	);
};

export default PieCharts;
