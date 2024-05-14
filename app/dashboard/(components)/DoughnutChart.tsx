"use client ";

import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chartjs.register(ArcElement, Tooltip, Legend);

interface incomeInterface {
	id: string;
	name: string;
	description: string;
	type: string;
	created_at: string;
	updated_at: null;
}

const DoughnutChart = () => {
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
	return (
		<div className="h-[250px] w-[250px] sm:w-[450px] sm:h-[450px] md:w-[500px] md:h-[500px] mx-auto ">
			<Doughnut
				data={{
					labels: incomeSources.map((income) => income.name),
					datasets: [
						{
							data: [10, 14, 20, 24, 12],
							backgroundColor: [
								"#29a173",
								"#123829",
								"#c18e3b",
								"crimson",
								"purple",
								"indigo",
								"black",
							],
							borderColor: "#ffffff10",
							borderRadius: 10,
							offset: 35,
						},
					],
				}}
				options={{
					cutout: "40%",
					plugins: {
						legend: {
							display: true,
							position: "right",
							align: "center",
							labels: {
								padding: 10,
								font: {
									size: 16,
									family: "'Poppins', sans-serif",
									weight: "bold",
								},
							},
						},
					},
					color: "white",
					responsive: true,
					maintainAspectRatio: true,
				}}
			/>
		</div>
	);
};

export default DoughnutChart;
