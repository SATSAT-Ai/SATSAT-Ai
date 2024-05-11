"use client";
import Link from "next/link";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { TbZoomInArea, TbZoomOutArea } from "react-icons/tb";
import { FaHandSparkles } from "react-icons/fa6";
import { BiReset } from "react-icons/bi";

interface optionsProps extends ApexOptions {
	toolbar: {
		show: boolean;
		tools: {
			download: boolean;
			selection: boolean;
			zoom: boolean;
			zoomin: boolean;
			zoomout: boolean;
			pan: boolean;
			reset: boolean;
		};
	};
}
const ChartBox = () => {
	const options: optionsProps = {
		chart: {
			animations: {
				enabled: true,
				easing: "easeinout",
				speed: 1200,
				animateGradually: {
					enabled: true,
					delay: 250,
				},
				dynamicAnimation: {
					enabled: true,
					speed: 100,
				},
			},
		},
		toolbar: {
			show: true,
			tools: {
				download: true,
				selection: true,
				zoom: true,
				zoomin: true,
				zoomout: true,
				pan: true,
				reset: true,
			},
		},

		tooltip: {
			enabled: true,
			x: {
				show: false,
			},
		},
		fill: {
			type: "gradient",
			gradient: {
				opacityFrom: 0.55,
				opacityTo: 0,
				shade: "#1C64F2",
				gradientToColors: ["#1C64F2"],
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			width: 6,
		},
		grid: {
			show: false,
			strokeDashArray: 4,
			padding: {
				left: 2,
				right: 2,
				top: 0,
			},
		},
		series: [
			{
				name: "client lorem",
				data: [6500, 6418, 6456, 6526, 6356, 6456],
				color: "#1A56DB",
			},
		],
		xaxis: {
			categories: [
				"Mon",
				"02 February",
				"03 February",
				"04 February",
				"05 February",
				"06 February",
				"07 February",
			],
			labels: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			show: false,
		},
	};

	return (
		<div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
			<div className="flex justify-between">
				<div>
					<h5 className="leading-none text-3xl font-semibold text-gray-900 dark:text-white pb-2">
						Lorem ipsum
					</h5>
					<p className="text-base text-text-24 font-bold text-[#1A56DB]">
						GHS2,000.00
					</p>
				</div>
				{/* <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
					12%
					<svg
						className="w-3 h-3 ms-1"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 14"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M5 13V1m0 0L1 5m4-4 4 4"
						/>
					</svg>
				</div> */}
			</div>

			<Chart
				options={options}
				series={options.series}
				type="area"
				width={"100%"}
				height={150}
			/>

			{/* <Link
				href="#"
				className="uppercase ml-auto w-full text-sm font-semibold text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
			>
				Details
			</Link> */}
		</div>
	);
};

export default ChartBox;
