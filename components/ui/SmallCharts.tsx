"use client";

import { ApexOptions } from "apexcharts";
import { ClassValue } from "clsx";
import React from "react";
import ReactApexChart from "react-apexcharts";
import { spaceGrotesk } from "@/fonts/fonts";

interface SmallChartType {
	type?:
		| "line"
		| "area"
		| "bar"
		| "pie"
		| "donut"
		| "radialBar"
		| "scatter"
		| "bubble"
		| "heatmap"
		| "candlestick"
		| "boxPlot"
		| "radar"
		| "polarArea"
		| "rangeBar"
		| "rangeArea"
		| "treemap"
		| undefined;
	className?: ClassValue;
	categories?: string[];
	seriesData?: number[];
}
const SmallCharts = ({
	type = "bar",
	className,
	categories,
	seriesData,
}: SmallChartType) => {
	const options1: ApexOptions = {
		theme: {
			mode: "dark",
		},
		series: [
			{
				data: seriesData!,
			},
		],

		chart: {
			fontFamily: `${spaceGrotesk.style}`,
			toolbar: {
				show: false,
			},

			sparkline: {
				enabled: false,
			},
		},

		plotOptions: {
			bar: {
				borderRadius: 4,
				borderRadiusApplication: "end",
				horizontal: false,
			},
		},

		dataLabels: {
			enabled: true,
			formatter: function (val: string) {
				return val;
			},
			offsetY: -10,
			style: {
				fontSize: "10px",
				colors: ["#fff"],
				fontWeight: 400,
			},
		},
		tooltip: {
			x: {
				show: true,
			},

			marker: {
				show: true,
			},
		},

		yaxis: {
			labels: {
				show: false,
				style: {
					colors: "#c98821",
					fontSize: "12px",
					fontWeight: 400,
				},
			},
		},
		xaxis: {
			categories,
			labels: {
				style: {
					colors: "#c98821",
					fontSize: "12px",
					fontFamily: `${spaceGrotesk.style}`,
					fontWeight: 400,
				},
			},
		},
		grid: {
			show: true,
			strokeDashArray: 4,
			row: {},
			column: {},
			yaxis: {
				lines: {
					show: true,
				},
			},
			xaxis: {
				lines: {
					show: true,
				},
			},
		},

		// },
		// yaxis: {
		// 	labels: {
		// 		style: {
		// 			colors: "#c98821",
		// 			fontSize: "12px",
		// 			fontFamily: `${spaceGrotesk.style}`,
		// 			fontWeight: 400,
		// 		},
		// 	},
		// },
		// xaxis: {
		// 	categories,
		// 	labels: {
		// 		style: {
		// 			colors: "#c98821",
		// 			fontSize: "12px",
		// 			fontFamily: `${spaceGrotesk.style}`,
		// 			fontWeight: 400,
		// 		},
		// 	},
		// },
	};

	return (
		<ReactApexChart
			options={options1}
			series={options1.series}
			type={type}
			height={"auto"}
			width={"100%"}
			className={className}
		/>
	);
};

export default SmallCharts;
