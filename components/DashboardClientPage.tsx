"use client";

import DonutChart from "@/components/DoughnutChart";
import IncomeTable from "@/components/IncomeTable";
import LineChart from "@/components/LineChart";
import PieCharts from "@/components/PieCharts";
import StatementSelector from "@/components/StatementSelector";
import { AppContext } from "@/context/AppContext";
import { IncomeStreams, ItransactionsData } from "@/interface/interface";
import { useContext, useEffect, useState } from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import { timeStampsAndValue } from "@/TesttimeStamp";

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

	const transactionsData: ItransactionsData[] = [
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

	const [selectedStatement, setSelectedStatement] = useState(statements[0]);

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
		from: dateRanges[0] ?? new Date(),
		to: addDays(dateRanges[0], 6),
	});

	// show sidebar on larger screens initial
	useEffect(() => {
		if (window.innerWidth > 768) {
			setHideSidebar(false);
		}
	}, [setHideSidebar]);

	return (
		<div className="text-white sm:px-3 my-max2 z-10 overflow-clip ">
			<div
				className={`flex flex-col lg:flex-nowrap justify-between flex-wrap ${
					hideSidebar ? "sm:flex-row" : "sm:flex-col"
				} items-center gap-5 md:flex-row ${
					!hideSidebar && "md:justify-center"
				} py-3`}
			>
				<h1 className="text-[35px] text-white w-fit md:text-[45px] m-0 text-center lg:text-left ">
					Dashboard
				</h1>
				{/* statement and date selector */}
				<StatementSelector
					date={date}
					setDate={setDate}
					selectedStatement={selectedStatement}
					setSelectedStatement={setSelectedStatement}
					statements={statements}
				/>
			</div>
			<div
				className={`grid grid-cols-1 ${
					hideSidebar ? "sm:grid-cols-2" : "sm:grid-cols-1"
				} lg:grid-cols-3 gap-5 mt-7`}
			>
				<PieCharts
					data={data}
					endAngle={180}
					title="Total Debits "
					transactionsData={transactionsData[0]}
					colors={["#29a173", "#174634", "#c18e3b"]}
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
			<div className="my-7 bg-white/10 p-2 sm:p-5 grid grid-cols-1 items-center lg:grid-cols-2 w-full justify-between gap-7 rounded-2xl">
				<DonutChart />
				<div className="">
					<h3 className="text-text-24 sm:text-[35px] text-white font-bold text-center">
						Top 5 Income Streams
					</h3>
					<div className="overflow-x-auto w-full">
						<IncomeTable incomeData={incomeStreams} />
					</div>
				</div>
			</div>
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
