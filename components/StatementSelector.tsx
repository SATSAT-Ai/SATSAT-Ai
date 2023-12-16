"use client";
import { DatePickerWithRange } from "./DateRangePicker";
import { AppContext } from "@/context/AppContext";
import { useContext, Dispatch, SetStateAction } from "react";
import DropDown from "./ui/Dropdown";
import { DateRange } from "react-day-picker";

interface Istatement {
	setDate: Dispatch<SetStateAction<DateRange | undefined>>;
	date: DateRange | undefined;
	setSelectedStatement: Dispatch<SetStateAction<string>>;
	selectedStatement: string;
	statements: string[];
}

const StatementSelector = ({
	setDate,
	date,
	setSelectedStatement,
	selectedStatement,
	statements,
}: Istatement) => {
	const { hideSidebar } = useContext(AppContext);
	return (
		<div
			className={` ${
				hideSidebar ? "sm:justify-between" : "sm:justify-center"
			} flex items-center w-full lg:justify-end justify-center gap-5 flex-wrap md:flex-nowrap`}
		>
			<DropDown
				selectedStatement={selectedStatement}
				setSelectedDropDownStatement={setSelectedStatement}
				statements={statements}
			/>
			<div className="flex items-center gap-5">
				<DatePickerWithRange setDate={setDate} date={date} />
			</div>
		</div>
	);
};

export default StatementSelector;
