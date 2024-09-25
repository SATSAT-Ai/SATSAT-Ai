"use client";

import { ApexOptions } from "apexcharts";
import { spaceGrotesk } from "@/fonts/fonts";
import ReactApexChart from "react-apexcharts";

const CashFLowGraph = () => {
	const cashFlowData: ApexOptions = {
		chart: {
			selection: {
				enabled: true,
			},
			type: "bar",
			height: 400,
			zoom: {
				enabled: false,
				autoScaleYaxis: true,
			},

			toolbar: {
				show: true,
				tools: {
					pan: false,
				},
			},
		},
		theme: {
			mode: "dark",
		},

		grid: {
			column: {
				colors: ["#29a173"],
				opacity: 0.2,
			},
			xaxis: {
				lines: {
					show: true,
				},
			},
			strokeDashArray: 3,
		},

		annotations: {
			points: [
				{
					// x: "Mar 31,2012",
					seriesIndex: 27.5,
					label: {
						borderColor: "#775DD0",
						offsetY: 0,
						style: {
							color: "#fff",
							background: "red",
						},
						text: "Really bad",
					},
				},
				{
					// x: "Mar 31,2012",
					seriesIndex: 25,
					label: {
						borderColor: "#775DD0",
						offsetY: 0,
						style: {
							color: "#fff",
							background: "#775DD0",
						},
						text: "Really good",
					},
				},
			],
		},
		tooltip: {
			fillSeriesColor: true,
			style: {
				fontFamily: `${spaceGrotesk.style}`,
			},
		},
		series: [
			{
				name: "Cash Flow",
				data: [
					1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09,
					0.34, 3.88, 13.07, 5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8,
					-27.03, -54.4, -47.2, -43.3, -18.6, -48.6, -41.1, -39.6, -37.6, -29.4,
					-21.4, -2.4,
				],
			},
		],
		fill: {
			type: "gradient",
			gradient: {
				shade: "light",
				type: "horizontal",
				shadeIntensity: 0.25,
				gradientToColors: undefined,
				inverseColors: true,
				opacityFrom: 0.85,
				opacityTo: 0.85,
				stops: [50, 0, 100],
			},
		},

		plotOptions: {
			bar: {
				borderRadius: 7,
				colors: {
					ranges: [
						{
							from: -100,
							to: -46,
							color: "#F15B46",
						},
						{
							from: -45,
							to: 0,
							color: "#FEB019",
						},
					],
				},
				columnWidth: "80%",
				dataLabels: {
					orientation: "vertical",
					position: "top", // top, center, bottom
				},
			},
		},
		dataLabels: {
			enabled: true,
			offsetY: 2,
			style: {
				fontSize: "13px",
				colors: ["#fff"],
				fontFamily: `${spaceGrotesk.style}`,
				fontWeight: 500,
			},
		},
		yaxis: {
			title: {
				text: "Cash Flow",
				style: {
					color: "#fff",
					fontSize: "20px",
					fontFamily: `${spaceGrotesk.style}`,
					fontWeight: 500,
				},
			},
			labels: {
				style: {
					colors: "#FEB019",
					fontFamily: `${spaceGrotesk.style}`,
				},
				formatter: function (y) {
					return y.toFixed(0) + "%";
				},
			},
		},
		xaxis: {
			tickPlacement: "on",
			type: "category",

			categories: [
				"2011-01-01",
				"2011-02-01",
				"2011-03-01",
				"2011-04-01",
				"2011-05-01",
				"2011-06-01",
				"2011-07-01",
				"2011-08-01",
				"2011-09-01",
				"2011-10-01",
				"2011-11-01",
				"2011-12-01",
				"2012-01-01",
				"2012-02-01",
				"2012-03-01",
				"2012-04-01",
				"2012-05-01",
				"2012-06-01",
				"2012-07-01",
				"2012-08-01",
				"2012-09-01",
				"2012-10-01",
				"2012-11-01",
				"2012-12-01",
				"2013-01-01",
				"2013-02-01",
				"2013-03-01",
				"2013-04-01",
				"2013-05-01",
				"2013-06-01",
				"2013-07-01",
				"2013-08-01",
				"2013-09-01",
			],
			axisBorder: {
				offsetY: 20,
				show: false,
			},
			labels: {
				show: false,
				formatter: function (value, timestamp) {
					return new Date(value).toLocaleDateString("en-US", {
						month: "short",
						day: "numeric",
						year: "numeric",
					}); // Format date as needed
				},
				rotate: -60,
				style: {
					colors: "#fff",
					fontSize: "12px",
					fontFamily: `${spaceGrotesk.style}`,
				},
			},
			axisTicks: {
				show: false,
			},
		},
	};

	return (
		<ReactApexChart
			type="bar"
			height={400}
			options={cashFlowData}
			series={cashFlowData.series}
		/>
	);
};

export default CashFLowGraph;
