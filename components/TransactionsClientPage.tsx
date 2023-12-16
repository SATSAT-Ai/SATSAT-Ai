"use client";
import TransTable from "./TransTable";
import DropDown from "./ui/Dropdown";
import { useState } from "react";

const TransactionsClientPage = () => {
	const statements = ["Mobile Money Statement", "Bank Statement"];
	const [selectedStatement, setSelectedStatement] = useState(statements[0]);

	return (
		<div className="min-h-screen text-white sm:py-5 sm:my-max">
			<div className="flex mt-4 justify-center lg:justify-between flex-wrap flex-col-reverse md:flex-row items-center gap-5 w-full">
				<h1 className="text-center m-0 font-semibold text-[27px] md:text-text-40">
					Transaction History
				</h1>
				<DropDown
					selectedStatement={selectedStatement}
					setSelectedDropDownStatement={setSelectedStatement}
					statements={statements}
				/>
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
