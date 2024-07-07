"use client";

import { AppContext } from "@/context/AppContext";
import { IncomeStreams, ITransactionsData } from "@/interface/interface";
import { useContext, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import StatementSelector from "./StatementSelector";
import PieCharts from "./PieCharts";
import DoughnutChart from "./DoughnutChart";
import IncomeTable from "./IncomeTable";
import LineChart from "./LineChart";
import Skeleton from "@mui/material/Skeleton";
import { timeStampsAndValue } from "@/helpers/TestTimeStamp";
import secureLocalStorage from "react-secure-storage";

const DashboardClientPage = () => {
	const { hideSidebar, setHideSidebar } = useContext(AppContext);

	const data = [
		{ id: 0, value: 10, label: "series A" },
		{ id: 1, value: 15, label: "series B" },
		{ id: 2, value: 20, label: "series C" },
	];

	const data2 = [
		{ id: 0, value: 10, label: "series A" },
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
				{
					percentage: "31%",
					name: "E-Levy",
					color: "#174634",
				},
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
				{
					percentage: "31%",
					name: "E-Levy",
					color: "crimson",
				},
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
					name: "Transactions",
					color: "gold",
				},
				{
					percentage: "11%",
					name: "E-Levy",
					color: "gold",
				},
				{
					percentage: "61%",
					color: "gold",
					name: "Fees",
				},
			],
		},
	];

	const statements = ["Mobile Money", "Bank Statement"];

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
	]);

	//remove verified email which is still in secureStorage
	const verifiedEmail =
		(secureLocalStorage.getItem("signInEmail") as string) ?? "";
	if (verifiedEmail) {
		secureLocalStorage.removeItem("signInEmail");
	}

	const dateRanges: Date[] = [];
	const dateRangeWithValue = [];

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

	// show sidebar on larger screens initial
	useEffect(() => {
		if (window.innerWidth > 768) {
			setHideSidebar(false);
		}
	}, [setHideSidebar]);

	return (
		<div className="text-white sm:px-3 my-max2 z-10 overflow-clip ">
			<section
				className={`flex flex-col max-w-[512px] lg:max-w-full max-[1024px]:mx-auto lg:flex-nowrap justify-between flex-wrap ${
					hideSidebar
						? "sm:flex-row sm:max-w-full"
						: "sm:flex-col sm:max-w-[512px]"
				} items-center gap-5 md:flex-row py-3`}
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
				className={`grid grid-cols-1 ${
					hideSidebar ? "sm:grid-cols-2" : "sm:grid-cols-1"
				} lg:grid-cols-3 gap-5 mt-7`}
			>
				{/* <Skeleton
					animation="wave"
					variant="rectangular"
					height={250}
					sx={{ bgcolor: "#ffffff2f", borderRadius: "15px" }}
					
				/> */}
				<PieCharts
					data={data}
					endAngle={180}
					title="Total Debits "
					transactionsData={transactionsData[0]}
					colors={["#29a173", "#174634", "#29a17313"]}
					hideSidebar={hideSidebar}
				/>
				<PieCharts
					data={data}
					endAngle={180}
					title="Top Credits "
					transactionsData={transactionsData[1]}
					colors={["navy", "crimson", "indigo"]}
					hideSidebar={hideSidebar}
				/>
				<PieCharts
					transactionsData={transactionsData[2]}
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
					title="Top Debits"
					hideSidebar={hideSidebar}
				/>
			</div>

			{/* <Skeleton
				animation="wave"
				variant="rectangular"
				height={440}
				sx={{ bgcolor: "#ffffff2f", borderRadius: "15px", marginBlock: "28px" }}
			/> */}
			<div className="my-7 bg-brand-green/10 p-2 sm:p-5 grid grid-cols-1 items-center lg:grid-cols-2 w-full justify-between gap-7 rounded-2xl">
				<DoughnutChart />
				<div>
					<h3 className="text-text-24 sm:text-[35px] text-white font-bold text-center">
						Top 5 Income Streams
					</h3>
					<div className="overflow-x-auto w-full">
						<IncomeTable incomeData={incomeStreams} />
					</div>
				</div>
			</div>

			{/* <Skeleton
				animation="wave"
				variant="rectangular"
				height={440}
				sx={{ bgcolor: "#ffffff2f", borderRadius: "15px", marginBlock: "28px" }}
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
