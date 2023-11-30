"use client";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import TransactionTable from "@/components/TransactionTable";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";

const TransactionsPageClient = () => {
	const { hideSidebar, setHideSidebar, setShowNotification } =
		useContext(AppContext);
	return (
		<div
			onClick={() => setShowNotification(false)}
			className="min-h-screen text-white p-5 my-max"
		>
			<div className="flex items-center flex-col gap-5 py-3">
				{hideSidebar && (
					<div className=" fixed mt-4 z-10 left-5 bg-mid--yellow cursor-pointer hover:bg-brand-green w-fit p-1 rounded-md">
						<TbLayoutSidebarRightExpand
							size={25}
							color="white"
							onClick={() => setHideSidebar(false)}
						/>
					</div>
				)}
			</div>
			<div className="flex flex-col sm:flex-row items-center gap-5 justify-between w-full">
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
			<div className="mt-20">
				<TransactionTable />
			</div>
		</div>
	);
};

export default TransactionsPageClient;
