"use client";

import DonutChart from "@/components/DoughnutChart";
import IncomeTable from "@/components/IncomeTable";
import LineChart from "@/components/LineChart";
import PieCharts from "@/components/PieCharts";
import StatementSelector from "@/components/StatementSelector";
import { AppContext } from "@/context/AppContext";
import { ItransactionsData } from "@/interface";
import Table from "@mui/joy/Table";
import { useContext } from "react";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";

const Page = () => {
	const { hideSidebar, setHideSidebar, setShowNotification } =
		useContext(AppContext);

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
			id: "total_Transaction",
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

	return (
		<div
			onClick={() => setShowNotification(false)}
			className="min-h-screen text-white sm:px-5 my-max z-10 "
		>
			<div className="flex flex-col sm:flex-row items-center gap-5 py-3">
				{hideSidebar && (
					<div
						tabIndex={0}
						className=" focus:bg-brand-green fixed left-5 bg-mid--yellow cursor-pointer hover:bg-brand-green w-fit p-1 rounded-md"
					>
						<TbLayoutSidebarRightExpand
							size={25}
							color="white"
							onClick={() => setHideSidebar(false)}
						/>
					</div>
				)}
				<h1 className="text-[35px] md:text-[45px] m-0 text-center lg:text-left w-full ">
					Dashboard
				</h1>
				{/* statement and date selector */}
				<StatementSelector />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-7">
				<PieCharts
					data={data}
					endAngle={180}
					title="Total Debits "
					transactionsData={transactionsData[0]}
					colors={["#29a173", "#174634", "#c18e3b"]}
				/>
				<PieCharts
					data={data}
					endAngle={180}
					title="Total Credits "
					transactionsData={transactionsData[1]}
					colors={["navy", "crimson", "indigo"]}
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
					title="Total Transactions"
				/>
			</div>
			<div className="my-7 bg-white/10 p-2 sm:p-5 flex-col lg:flex-row flex items-center w-full justify-between gap-7 rounded-2xl">
				<DonutChart />
				<div className="">
					<h3 className="text-text-24 sm:text-[35px] text-white font-bold text-center">
						Top 5 Income Sources
					</h3>
					<div className="overflow-x-auto w-full">
						<IncomeTable />
					</div>
				</div>
			</div>
			<LineChart />
		</div>
	);
};

export default Page;
