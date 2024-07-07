"use client";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Tooltip,
	PointElement,
	LineElement,
	Filler,
	plugins,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { DateRange } from "react-day-picker";
import { DatePickerWithRange } from "./DateRangePicker";
import { Dispatch, SetStateAction, useState } from "react";
import { generateMixedCharData } from "@/helpers/generateMixedChartData";
import { useEffect } from "react";
interface ILine {
	parsedTimeStamps: Date[];
	date: DateRange | undefined;
	setDate: Dispatch<SetStateAction<DateRange | undefined>>;
	dateRangeWithValue: {
		date: number;
		value: number;
	}[];
}
const LineChart = ({
	date: transactionDateRange,
	setDate,
	parsedTimeStamps,
	dateRangeWithValue,
}: ILine) => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Tooltip,
		Filler,
		plugins
	);

	const [labels, setLabels] = useState<string[]>([]);
	const [values, setValues] = useState<number[]>([]);

	useEffect(() => {
		const labels = generateMixedCharData(
			transactionDateRange?.from!,
			transactionDateRange?.to!,
			dateRangeWithValue
		)
			? Object?.keys(
					generateMixedCharData(
						transactionDateRange?.from!,
						transactionDateRange?.to!,
						dateRangeWithValue
					)!
			  )
			: [];
		const values = generateMixedCharData(
			transactionDateRange?.from!,
			transactionDateRange?.to!,
			dateRangeWithValue
		)
			? Object?.values(
					generateMixedCharData(
						transactionDateRange?.from!,
						transactionDateRange?.to!,
						dateRangeWithValue
					)!
			  )
			: [];

		setValues(values);
		setLabels(labels);
	}, [
		dateRangeWithValue,
		transactionDateRange?.from,
		transactionDateRange?.to,
	]);

	return (
		<div className="bg-brand-green/10 rounded-2xl p-5 my-7">
			<div className=" hidden md:flex w-fit ml-auto">
				<DatePickerWithRange
					date={transactionDateRange}
					setDate={setDate}
					parsedTimeStamps={parsedTimeStamps}
				/>
			</div>
			<div className="relative h-80">
				<Line
					style={{ width: "100%", height: "300px" }}
					plugins={[
						{
							id: "lines",
							beforeDatasetsDraw(chart) {
								const {
									ctx,
									tooltip,
									chartArea: { top, bottom },
								} = chart;

								if (tooltip?.getActiveElements().length) {
									const { x } = tooltip.getActiveElements()[0].element;

									ctx.beginPath();
									ctx.strokeStyle = "#29a173";
									ctx.lineWidth = 1;
									ctx.moveTo(x, top);
									ctx.lineTo(x, bottom);
									ctx.setLineDash([6, 0]);
									ctx.stroke();
									ctx.restore();
								}
							},
						},
					]}
					options={{
						interaction: {
							mode: "index",
						},

						responsive: true,
						maintainAspectRatio: false,
						aspectRatio: 2,

						plugins: {
							legend: { display: false },
							tooltip: {
								intersect: true,
								usePointStyle: true,
								callbacks: {
									label: (context) => {
										return "Ghc " + context.formattedValue;
									},
								},

								position: "average",
								backgroundColor: "#123829",
								bodyColor: "#fff",
								yAlign: "bottom",
							},
						},
						elements: {
							line: {
								tension: 0.4,
								borderWidth: 3,
								borderColor: "#29a173",
							},
						},
						scales: {
							y: {
								beginAtZero: true,
								border: { color: "#29a173" },
								grid: {
									display: false,
								},
								ticks: {
									color: "#ddd",
									font: {
										weight: "bold",
									},
								},
							},
							x: {
								grid: {
									display: false,
								},
								ticks: {
									color: "#ddd",
									font: {
										weight: "bold",
									},
								},
							},
						},
					}}
					data={{
						labels: labels,
						datasets: [
							{
								data: values,
								pointBorderColor: "#c18e3b",
								pointBackgroundColor: "#c18e3b",
								pointHoverRadius: 10,
								pointHitRadius: 15,
								pointHoverBorderWidth: 3,
								pointHoverBackgroundColor: "white",
								pointHoverBorderColor: "#29a173",
								backgroundColor: ["rgba(42, 162, 116, 0.1)"],
								borderWidth: 1,
								fill: true,
								showLine: true,
							},
						],
					}}
				/>
			</div>
		</div>
	);
};

export default LineChart;
