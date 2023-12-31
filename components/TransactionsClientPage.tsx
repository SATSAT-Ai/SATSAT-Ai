"use client";
import { DateRange } from "react-day-picker";
import TransTable from "./TransTable";
import { useState } from "react";
import { addDays } from "date-fns";
import StatementSelector from "./StatementSelector";

const TransactionsClientPage = () => {
	const statements = ["Mobile Money Statement", "Bank Statement"];
	const [selectedStatement, setSelectedStatement] = useState(statements[0]);
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 5),
	});

	return (
		<div className="min-h-screen text-white sm:py-5 sm:my-max">
			<div className="flex mt-4 justify-center lg:justify-between flex-wrap flex-col-reverse md:flex-row items-center gap-5 w-full">
				<h1 className="text-center m-0 font-semibold text-[27px] md:text-text-40">
					Transaction History
				</h1>
				<div className="w-fit">
					<StatementSelector
						date={date}
						setDate={setDate}
						selectedStatement={selectedStatement}
						setSelectedStatement={setSelectedStatement}
						statements={statements}
					/>
				</div>
			</div>
			<div className="mt-5 relative z-0 my-max  ">
				<div className="w-full min-h-[450px] overflow-x-auto">
					<TransTable />
				</div>
				<p className="text-center text-text-12 my-5">Scroll left or right</p>
			</div>
		</div>
	);
};

export default TransactionsClientPage;

// import * as XLSX from "xlsx";
// import { saveAs } from "file-saver";

// //  custom toolbar component
// const CustomToolbar = ({ data, ...props }) => {
//   const handleExportCSV = () => {
//     // export data as CSV
//   };

//   const handleExportExcel = () => {
//     // convert data to Excel using XLSX
//     const blob = new Blob([XLSX.write(workbook, { type: "xlsx" })], { type: "application/octet-stream" });
//     const file = new File([blob], "data.xlsx", { type: "application/octet-stream" });
//     saveAs(file);
//   };

//   return (
//     <GridToolbar {...props}>
//       <Button onClick={handleExportCSV}>Export to CSV</Button>
//       <Button onClick={handleExportExcel}>Export to Excel</Button>
//     </GridToolbar>
//   );
// };

// // Use the custom toolbar component
// <DataGrid slots={{ toolbar: CustomToolbar }} ...props />
