import { BarChart } from "@mui/x-charts/BarChart";
import { BarSeriesType } from "@mui/x-charts/models";
export default function DebitBarChart({
	series,
}: {
	series: {
		label: string[];
		data: number[];
		type: string;
	};
}) {
	const processedSeries: BarSeriesType[] = [series].map((data) => ({
		data: data.data,
		color: "#c98821",
		faded: "global",
		type: "bar",
		valueFormatter: (v) => {
			return `Ghc ${v}`;
		},
		highlightScope: {
			highlighted: "item",
			faded: "global",
		},
	}));

	return (
		<div>
			<BarChart
				height={200}
				series={processedSeries}
				skipAnimation={false}
				slotProps={{
					legend: { hidden: true },
				}}
				xAxis={[
					{
						data: series.label,
						scaleType: "band",
					},
				]}
				axisHighlight={{
					y: "line",
				}}
				sx={(theme) => (
					(theme.palette.mode = "dark"),
					(theme.palette.background.paper = "#003000"),
					(theme.palette.text.primary = "white"),
					(theme.palette.text.secondary = "white"),
					(theme.shape.borderRadius = 5),
					{
						"& .MuiChartsAxis-tick": {
							stroke: "white !important",
						},
						"& .MuiTooltip-tooltip": {
							backgroundColor: "black !important",
							stroke: "white !important",
						},
						"& .MuiChartsAxis-line": {
							stroke: "white !important",
						},
					}
				)}
			/>
		</div>
	);
}
