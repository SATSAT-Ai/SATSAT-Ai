import ProgressBar from "@/components/ui/ProgressBar";
import PieCharts from "../(components)/PieCharts";
import { ITransactionsData } from "@/interface/interface";
import { Metadata } from "next";
// import SmallCharts from "@/components/ui/SmallCharts";
import CashFLowGraph from "./(components)/CashFlowGraph";
import GetStartedButton from "@/components/ui/GetStartedButton";
import Logo from "@/components/ui/Logo";

export const metadata: Metadata = {
	title: "SatSat-Ai - Insights",
};

const Page = () => {
	const labelData: ITransactionsData[] = [
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
				{
					percentage: "21%",
					name: "Fees",
					color: "#E74694",
				},
			],
		},
		{
			id: "debit_Transaction2",
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
				{
					percentage: "51%",
					name: "Fees",
					color: "#E74694",
				},
			],
		},
	];

	return (
		<div className="py-0 text-white sm:px-3 my-max">
			<section className="flex py-2 justify-between items-center gap-5">
				<h1 className="text-[30px] py-2 m-0 md:text-[45px]">Insights</h1>
				<GetStartedButton
					href="/dashboard/chat"
					name="Continue With Ai"
					className="w-fit text-text-14"
					icon={<Logo type="small-normal" className="w-6 mx-0" />}
					showIcon={true}
					iconPosition="right"
				/>
			</section>
			<div className="flex flex-col md:flex-row flex-wrap justify-between gap-5">
				<div className="flex flex-1 items-center gap-5 justify-between bg-brand-green/20 p-5 shadow-lg rounded-md">
					<div>
						<div>
							<h1 className="m-0 text-text-14 font-medium">Average Revenue</h1>
						</div>
						<h2 className="font-medium text-text-40">$4,000</h2>
					</div>
				</div>
				<div className="flex-1 bg-brand-green/20 p-5 shadow-lg rounded-md">
					<div>
						<h1 className="m-0 text-text-14 font-medium">
							Monthly Average Expense
						</h1>
					</div>
					<h2 className="font-medium text-text-40">$4,000</h2>
				</div>
				<div className="flex-1 bg-brand-green/20 p-5 shadow-lg rounded-md">
					<div>
						<h1 className="m-0 text-text-14 font-medium">
							Monthly Average Expense
						</h1>
					</div>
					<h2 className="font-medium text-text-40">$4,000</h2>
				</div>
			</div>

			<div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap gap-5 mt-5">
				<div className="bg-brand-green/20 p-5 shadow-lg rounded-md">
					<h3 className="m-0 text-text-24 font-medium">Score</h3>
					<p>
						amet commodo ac. Id odio sagittis in massa eget. Vitae mi adipiscing
						quis mauris est egestas. Urna sodales ipsum.{" "}
					</p>
					<div className="flex w-full mt-3 justify-between">
						<p className="font-medium">Your Score</p>
					</div>

					<ProgressBar progressColor="#29a173" className="h-3" />
					<div className="mt-7 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-5">
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-1">
								<span className="text-text-12 md:text-text-14">Lorem</span>
								<ProgressBar
									progressColor="#29a173"
									progressCompleted={20}
									className="h-3"
								/>
							</div>
							<div className="flex items-center gap-1">
								<span className="text-text-12 md:text-text-14">Lorem</span>
								<ProgressBar
									progressColor="#c98821"
									progressCompleted={80}
									className="h-3"
								/>
							</div>
							<div className="flex items-center gap-1">
								<span className="text-text-12 md:text-text-14">Lorem</span>
								<ProgressBar progressColor="#29a173" className="h-3" />
							</div>
							<div className="flex items-center gap-1">
								<span className="text-text-12 md:text-text-14">Lorem</span>
								<ProgressBar progressColor="#E74694" className="h-3" />
							</div>
						</div>
						<div className="flex flex-col gap-4">
							<div className="flex items-center gap-1">
								<span className="text-text-12 md:text-text-14">Lorem</span>
								<ProgressBar progressColor="crimson" className="h-3" />
							</div>
							<div className="flex items-center gap-1">
								<span className="text-text-12 md:text-text-14">Lorem</span>
								<ProgressBar progressColor="black" className="h-3" />
							</div>
							<div className="flex items-center gap-1">
								<span className="text-text-12 md:text-text-14">Lorem</span>
								<ProgressBar
									progressColor="#c98821"
									progressCompleted={50}
									className="h-3"
								/>
							</div>
							<div className="flex items-center gap-1">
								<span className="text-text-12 md:text-text-14">Lorem</span>
								<ProgressBar progressColor="#174634" className="h-3" />
							</div>
						</div>
					</div>
				</div>
				<div className="bg-brand-green/20 p-5 shadow-lg rounded-md">
					<h3 className="m-0 text-text-24 font-medium">lorem</h3>
					<p>
						amet commodo ac. Id odio sagittis in massa eget. Vitae mi adipiscing
						quis mauris est egestas. Urna sodales ipsum.{" "}
					</p>
					{/* ==============dougnut chart====================== */}

					<div className="rounded-lg flex flex-col sm:flex-row flex-wrap xl:flex-nowrap gap-5 mt-5">
						<div className="w-fit mx-auto">
							<PieCharts
								endAngle={360}
								innerRadius={60}
								showPieChartAmount={false}
								showLabelAt={{ bottom: true, top: false }}
								data={[
									{ id: 3, label: "Average Balance", value: 15 },
									{ id: 33, label: "Minimum Balance", value: 10 },
									{ id: 53, label: "Maximum Balance", value: 38 },
									{ id: 83, label: "Maximum Balance", value: 18 },
								]}
								colors={["#c98821", "#29a173", "#E74694"]}
								customLabelData={labelData[0]}
							/>
						</div>
						<div className="w-fit mx-auto">
							<PieCharts
								showLabelAt={{ bottom: true, top: false }}
								endAngle={360}
								innerRadius={60}
								showPieChartAmount={false}
								customLabelData={labelData[1]}
								data={[
									{ id: 3, label: "Average Balance", value: 40 },
									{ id: 33, label: "Minimum Balance", value: 20 },
									{ id: 53, label: "Maximum Balance", value: 38 },
									{ id: 43, label: "Maximum Balance", value: 88 },
								]}
								colors={["#1C64F2", "#16BDCA", "#E74694"]}
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-brand-green/20 mt-5 my-5 p-5 shadow-lg rounded-md w-full">
				<CashFLowGraph />
			</div>
		</div>
	);
};

export default Page;
