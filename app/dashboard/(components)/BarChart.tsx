import { ApexOptions } from "apexcharts";
import { spaceGrotesk } from "@/fonts/fonts";
import dynamic from "next/dynamic";

// import ReactApexChart from "react-apexcharts";

const ReactApexChart = dynamic(() => import("react-apexcharts"), {
	ssr: false,
});

interface incomeInterface {
	id: string;
	name: string;
	description: string;
	type: string;
	created_at: string;
	updated_at: null;
}

const BarChart = ({
	chartData,
}: {
	chartData: { seriesData: number[]; categories: string[] };
}) => {
	// Top 5 income sources

	const incomeSources: incomeInterface[] = [
		{
			id: "d56782c2-6214-4286-bf6d-4ea459ec3e9a",
			name: "Regular Income",
			description:
				"Account holder's incoming transactions that are recognised as salary payments from an employer. Typically these transactions occur with some time period regularity, for example, on monthly or weekly or other time period regularity basis",
			type: "INCOME",
			created_at: "2024-04-14T09:13:07.000000Z",
			updated_at: null,
		},

		{
			id: "3ece7592-339d-43e7-b28f-cbd5b33f9f8f",
			name: "Business income",
			description:
				"Account holder's incoming transactions that are recognised as business income or cash deposit that occur with some time period regularity for example, on monthly or weekly or other time period regularity basis",
			type: "INCOME",
			created_at: "2024-04-14T09:13:07.000000Z",
			updated_at: null,
		},

		{
			id: "da72ff9b-3f90-4171-9882-4ab6ccf92a86",
			name: "Gambling",
			description: "Cash deposits that are considered to be from gambling",
			type: "INCOME",
			created_at: "2024-04-14T09:13:07.000000Z",
			updated_at: null,
		},

		{
			id: "1decd228-d92a-4820-9cfe-93ab7c038a08",
			name: "Business inventory",
			description: "All payments made in the purchase of business inventory",
			type: "EXPENSE",
			created_at: "2024-04-14T09:13:07.000000Z",
			updated_at: null,
		},
		{
			id: "72932890-1b50-48d5-9233-6671c37726c3",
			name: "Family support",
			description: "All payments made in the form of family support",
			type: "EXPENSE",
			created_at: "2024-04-14T09:13:07.000000Z",
			updated_at: null,
		},
	];

	const barChartOptions: ApexOptions = {
		colors: ["#29a173"],
		chart: {
			toolbar: {
				show: false,
			},
		},
		theme: {
			mode: "dark",
		},
		series: [
			{
				data: chartData.seriesData,
			},
		],

		plotOptions: {
			bar: {
				borderRadius: 4,
				borderRadiusApplication: "end",
				horizontal: true,
			},
		},
		dataLabels: {
			enabled: true,
			formatter: function (val) {
				return "GHC " + val + ".00";
			},
			style: {
				fontSize: "13px",
				colors: ["#fff"],
				fontWeight: 400,
			},
		},
		yaxis: {
			labels: {
				maxWidth: 100,

				style: {
					colors: "#c98821",
					fontSize: "15px",
					fontFamily: `${spaceGrotesk.style}`,
					fontWeight: 400,
				},
			},
			axisBorder: {},
		},
		grid: {
			strokeDashArray: 4,
			row: {
				colors: ["#c9882120"],
			},

			xaxis: {
				lines: {
					show: true,
				},
			},
			yaxis: {
				lines: {
					show: true,
				},
			},
		},
		xaxis: {
			categories: chartData.categories,
			labels: {
				style: {
					colors: "#c98821",
					fontSize: "15px",
					fontFamily: `${spaceGrotesk.style}`,
					fontWeight: 400,
				},
			},
		},
	};
	return (
		<div className="min-h-[450px] w-full">
			<ReactApexChart
				options={barChartOptions}
				series={barChartOptions.series}
				type="bar"
				height={"100%"}
				width={"100%"}
			/>
		</div>
	);
};

export default BarChart;
