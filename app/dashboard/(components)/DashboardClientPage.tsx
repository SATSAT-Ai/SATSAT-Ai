"use client";
import { IncomeStreams, ITransactionsData } from "@/interface/interface";
import { useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import StatementSelector from "./StatementSelector";
import PieCharts from "./PieCharts";
import IncomeTable from "./IncomeTable";
import LineChart from "./LineChart";
// import Skeleton from "@mui/material/Skeleton";
import { timeStampsAndValue } from "@/helpers/TestTimeStamp";
import secureLocalStorage from "react-secure-storage";
import BarChart from "./BarChart";
// import SmallCharts from "@/components/ui/SmallCharts";
import { cn } from "@/lib/utils";
import DebitBarChart from "./DebitBarchart";
// import Loading from "@/app/loading";

const DashboardClientPage = () => {
	const data = {
		label: ["A", "B", "C", "D", "E"],
		data: [15, 20, 30, 4, 6],
		type: "bar",
	};

	const data2 = [
		{ id: 0, value: 10, label: "series-1 A" },
		{ id: 1, value: 15, label: "series B" },
		{ id: 2, value: 20, label: "series C" },
		{ id: 3, value: 26, label: "series D" },
		{ id: 4, value: 30, label: "series E" },
		{ id: 5, value: 50, label: "series F" },
	];

	const transactionsData: ITransactionsData[] = [
		{
			id: "debit_Transaction",
			data: [
				{
					percentage: "62%",
					name: "Debit",
					color: "#29a173",
				},
				// {
				// 	percentage: "31%",
				// 	name: "E-Levy",
				// 	color: "#174634",
				// },
				{
					percentage: "11%",
					name: "Fees",
					color: "#c18e3b",
				},
			],
		},
		{
			id: "credit_Transaction",
			data: [
				{
					percentage: "22%",
					name: "Credits",
					color: "navy",
				},
				// {
				// 	percentage: "31%",
				// 	name: "E-Levy",
				// 	color: "crimson",
				// },
				{
					percentage: "11%",
					name: "Fees",
					color: "indigo",
				},
			],
		},
		{
			id: "top_Transaction",
			data: [
				{
					percentage: "73%",
					name: "Trans.",
					color: "gold",
				},
				// {
				// 	percentage: "11%",
				// 	name: "E-Levy",
				// 	color: "gold",
				// },
				{
					percentage: "61%",
					color: "gold",
					name: "Fees",
				},
			],
		},
	];

	const statements = ["Mobile Money", "Bank Statement"];
	const dateRanges: Date[] = [];
	const dateRangeWithValue: any[] = [];

	for (const timeStamp in timeStampsAndValue) {
		const parsedDate = parseInt(timeStamp) * 1000;
		const value = timeStampsAndValue[parseInt(timeStamp)];

		dateRanges.push(new Date(parsedDate));
		dateRangeWithValue.push({ date: parsedDate, value });
	}
	// Sort by date
	dateRanges.sort((a: Date, b: Date) => a.getTime() - b.getTime());
	dateRangeWithValue.sort((a, b) => a.date - b.date);

	const [date, setDate] = useState<DateRange | undefined>({
		from: dateRanges[1],
		to: addDays(dateRanges[1], 6),
	});
	const [incomeStreams, setIncomeStreams] = useState<IncomeStreams[]>([
		{
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 6,
			amount: 24,
		},
		{
			date: "12-01-2023",
			name: "Ice cream sandwich",
			number: 237,
			amount: 9.0,
		},
		{
			date: "12-01-2023",
			name: "Eclair",
			number: 262,
			amount: 19.0,
		},
		{
			date: "12-01-2023",
			name: "Cupcake",
			number: 305,
			amount: 3.7,
		},
		{
			date: "12-01-2023",
			name: "Gingerbread",
			number: 345,
			amount: 16.7,
		},
		{
			date: "13-01-2023",
			name: "Croissant",
			number: 159,
			amount: 6.0,
		},
		{
			date: "13-01-2023",
			name: "Donut",
			number: 452,
			amount: 25.0,
		},
		{
			date: "13-01-2023",
			name: "Pancake",
			number: 189,
			amount: 7.0,
		},
		{
			date: "14-01-2023",
			name: "Muffin",
			number: 408,
			amount: 12.0,
		},
		{
			date: "14-01-2023",
			name: "Cookie",
			number: 200,
			amount: 9.5,
		},
		{
			date: "15-01-2023",
			name: "Brownie",
			number: 318,
			amount: 14.0,
		},
		{
			date: "15-01-2023",
			name: "Tiramisu",
			number: 275,
			amount: 18.0,
		},
		{
			date: "16-01-2023",
			name: "Cheesecake",
			number: 500,
			amount: 22.0,
		},
		{
			date: "16-01-2023",
			name: "Apple pie",
			number: 150,
			amount: 11.0,
		},
		{
			date: "17-01-2023",
			name: "Chocolate cake",
			number: 425,
			amount: 20.0,
		},
		{
			date: "17-01-2023",
			name: "Lemon tart",
			number: 190,
			amount: 15.0,
		},
		{
			date: "18-01-2023",
			name: "Macarons",
			number: 550,
			amount: 30.0,
		},
		{
			date: "18-01-2023",
			name: "Fruit salad",
			number: 80,
			amount: 8.0,
		},
		{
			date: "19-01-2023",
			name: "Cinnamon roll",
			number: 280,
			amount: 13.0,
		},
		{
			date: "19-01-2023",
			name: "Carrot cake",
			number: 320,
			amount: 17.0,
		},
	]);

	const [startIndex, setStartIndex] = useState(0);
	const itemsPerPage = 5;
	const currentProducts = incomeStreams
		.sort((a, b) => b.amount - a.amount)
		.map((streams, idx) => {
			return {
				streamNo: idx + 1,
				...streams,
			};
		})
		.slice(startIndex, startIndex + itemsPerPage);

	const handleNext = () => {
		if (startIndex + itemsPerPage < incomeStreams.length) {
			setStartIndex(startIndex + itemsPerPage);
		}
	};

	const handlePrev = () => {
		if (startIndex - itemsPerPage >= 0) {
			setStartIndex(startIndex - itemsPerPage);
		}
	};

	//remove verified email which is still in secureStorage
	const verifiedEmail =
		(secureLocalStorage.getItem("signInEmail") as string) ?? "";
	if (verifiedEmail) {
		secureLocalStorage.removeItem("signInEmail");
	}

	const generateBarChartData = (): {
		seriesData: number[];
		categories: string[];
	} => {
		const seriesData: number[] = [];
		const categories: string[] = [];

		currentProducts.forEach((stream) => {
			seriesData.push(stream.amount);
			categories.push(stream.name);
		});

		return { seriesData, categories };
	};

	return (
		<div className="text-white sm:px-3 my-max z-10 overflow-clip ">
			<section
				className={cn(
					"flex w-full flex-wrap lg:flex-nowrap items-center gap-5 flex-row py-3 lg:max-w-full max-[1024px]:mx-auto sm:text-darker justify-between"
				)}
			>
				<h1 className="text-[35px] text-white w-full md:text-[45px] m-0 text-center min-[410px]:text-left lg:text-left ">
					Dashboard
				</h1>
				{/* statement and date selector */}
				<StatementSelector
					date={date}
					setDate={setDate}
					statements={statements}
				/>
			</section>

			<div
				className={cn(
					"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-7"
				)}
			>
				{/* <Skeleton
					animation="wave"
					variant="rectangular"
					height={280}
					sx={{
						bgcolor: "#17463490",
						borderRadius: "15px",
						border: 1,
						borderColor: "#ffffff40",
					}}
				/> */}
				<div className="bg-brand-green/20 shadow-lg p-5 w-full rounded-2xl">
					<h2 className="m-0 font-medium uppercase text-text-normal pb-3">
						{"Total Debits"}
					</h2>
					<PieCharts
						data={data2}
						endAngle={180}
						customLabelData={transactionsData[0]}
						colors={["#29a173", "#174634", "#29a17313"]}
					/>
				</div>
				<div className="bg-brand-green/20 shadow-lg p-5 w-full rounded-2xl">
					<h2 className="m-0 font-medium uppercase text-text-normal pb-3">
						{"Recent 5 Debits"}
					</h2>
					<div
						className={cn(
							"flex gap-5 items-center flex-wrap-reverse xl:flex-nowrap"
						)}
					>
						<div className="w-full">
							<DebitBarChart series={data} />
						</div>
					</div>
				</div>
				<div className="bg-brand-green/20 shadow-lg p-5 w-full rounded-2xl">
					<h2 className="m-0 font-medium uppercase text-text-normal pb-3">
						{"Top 5 Debits"}
					</h2>
					<PieCharts
						customLabelData={transactionsData[2]}
						data={data2}
						endAngle={360}
						colors={[
							"#29a173",
							"#174634",
							"#c18e3b",
							"navy",
							"crimson",
							"indigo",
						]}
					/>
				</div>
			</div>

			{/* <Skeleton
				animation="wave"
				variant="rectangular"
				height={440}
					sx={{
						bgcolor: "#17463490",
						borderRadius: "15px",
						border: 1,
						borderColor: "#ffffff40",
					}}
				
			/> */}
			<div className="my-5 bg-brand-green/10 p-2 sm:p-5 grid grid-cols-1 items-center lg:grid-cols-2 w-full justify-between gap-7 rounded-2xl">
				<BarChart chartData={generateBarChartData()} />
				<div>
					<h3 className="text-text-24 sm:text-[35px] text-white font-bold text-center">
						Top 5 Income Streams
					</h3>
					<div className="overflow-x-auto w-full">
						<IncomeTable incomeData={currentProducts} />
						<div className="mt-4 w-fit ml-auto flex items-center gap-5">
							<button
								onClick={handlePrev}
								disabled={startIndex == 0}
								className="py-1 font-normal disabled:cursor-not-allowed disabled:bg-gray-700 hover:bg-brand-green/80 transition-all active:bg-brand-green px-4 rounded-md bg-brand-green"
								type="button"
							>
								Prev
							</button>
							<button
								disabled={startIndex + itemsPerPage >= incomeStreams.length}
								onClick={handleNext}
								className={cn(
									"py-1 font-normal disabled:cursor-not-allowed disabled:bg-gray-700 hover:bg-brand-green/80 transition-all active:bg-brand-green px-4 rounded-md bg-brand-green"
								)}
								type="button"
							>
								Next
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* <Skeleton
				animation="wave"
				variant="rectangular"
				height={440}
					sx={{
						bgcolor: "#17463490",
						borderRadius: "15px",
						border: 1,
						borderColor: "#ffffff40",
					}}
			/> */}
			<LineChart
				date={date}
				setDate={setDate}
				parsedTimeStamps={dateRanges}
				dateRangeWithValue={dateRangeWithValue}
			/>
		</div>
	);
};

export default DashboardClientPage;
