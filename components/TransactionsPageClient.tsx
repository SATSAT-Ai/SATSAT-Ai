"use client";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import TransTable from "./TransTable";

const TransactionsPageClient = () => {
	const {
		hideSidebar,
		setHideSidebar,
		setShowNotification,
		setShowMoreOptions,
	} = useContext(AppContext);

	return (
		<div
			onClick={() => (setShowNotification(false), setShowMoreOptions(false))}
			className="min-h-screen text-white sm:p-5 sm:my-max"
		>
			<div className="flex items-center flex-col gap-5 py-3">
				{hideSidebar && (
					<div className=" fixed mt-4 z-10 md:hidden left-5 bg-mid--yellow cursor-pointer hover:bg-brand-green w-fit p-1 rounded-md">
						<TbLayoutSidebarRightExpand
							size={25}
							color="white"
							onClick={() => setHideSidebar(false)}
						/>
					</div>
				)}
			</div>
			<div className="flex flex-col sm:flex-row items-center gap-5 justify-end w-full">
				<Select
					variant="solid"
					sx={{ width: 250 }}
					color="success"
					className="bg-white/10 border border-white/20 "
					defaultValue={"bank statement"}
				>
					<Option value={"bank statement"}>Bank Statement</Option>
					<Option value={"mobile money statement"}>
						Mobile Money Statement
					</Option>
				</Select>
			</div>
			<div className="mt-5 transWidth !max-w-[270px] sm:!max-w-[450px] lg:!max-w-[750px] xl:!max-w-[1000px]   mx-auto overflow-clip ">
				<h1 className="text-center font-semibold text-[27px] sm:text-text-40">
					Transaction History
				</h1>
				<TransTable />
			</div>
		</div>
	);
};

export default TransactionsPageClient;

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
