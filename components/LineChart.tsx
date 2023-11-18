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

const LineChart = () => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Tooltip,
		Filler,
		plugins
	);

	return (
		<div className="my-7 bg-white/10 p-5 rounded-2xl relative h-auto">
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
								afterTitle: (context) => {
									// return "Custom Tooltip title";
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
							data: [400, 620, 345, 372, 435, 623],
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
	);
};

export default LineChart;
