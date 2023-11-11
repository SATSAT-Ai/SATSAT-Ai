"use client";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	Tooltip,
	PointElement,
	LineElement,
	Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";

const LineChart = () => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Tooltip,
		Filler
	);

	return (
		<div className="mt-7 bg-white/10 p-5 rounded-2xl relative h-auto">
			<Line
				style={{ width: "100%", height: "200px" }}
				options={{
					responsive: true,
					maintainAspectRatio: false,
					aspectRatio: 2,

					plugins: { legend: { display: false } },
					elements: {
						line: {
							tension: 0.4,
							borderWidth: 2,
							borderColor: "#29a173",
						},
					},
					scales: {
						y: {
							beginAtZero: true,
							grid: {
								display: false,
							},
						},
						x: {
							grid: {
								display: false,
							},
						},
					},
				}}
				data={{
					labels: ["Mon", "Tue", "Thu", "Fri", "Sat", "Sun"],
					datasets: [
						{
							data: [400, 920, 415, 732, 235, 435, 623],
							borderWidth: 0,
							fill: true,
							showLine: false,

							backgroundColor: ["rgba(42,162,116,0.1)"],
						},
						{
							data: [400, 720, 115, 332, 235, 835, 623],
							pointBorderColor: "#c18e3b",
							pointBackgroundColor: "#c18e3b",
							borderWidth: 1,
						},
					],
				}}
			/>
		</div>
	);
};

export default LineChart;
