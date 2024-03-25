"use client ";

import { Chart as Chartjs, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chartjs.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
	// Top 5 income sources
	return (
		<div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] mx-auto ">
			<Doughnut
				data={{
					labels: [
						"lorem",
						"lorem",
						"lorem",
						"lorem",
						"lorem",
						"lorem",
						"lorem",
					],
					datasets: [
						{
							data: [3, 6, 10, 14, 20, 24, 12],
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
