"use client";
import DropDown from "@/components/ui/Dropdown";
import { DatePickerWithRange } from "./DateRangePicker";
import { Dispatch, SetStateAction, useState } from "react";
import { DateRange } from "react-day-picker";

interface Istatement {
	setDate: Dispatch<SetStateAction<DateRange | undefined>>;
	date: DateRange | undefined;
	statements: string[];
}

const StatementSelector = ({ setDate, date, statements }: Istatement) => {
	const [selectedStatement, setSelectedStatement] = useState(statements[0]);

	return (
		<div
			className={` flex md:flex-nowrap flex-wrap flex-col min-[410px]:flex-row min-[410px]:justify-between lg:justify-end items-center w-full justify-center gap-5`}
		>
			<DropDown
				selectedStatement={selectedStatement}
				setSelectedDropDownStatement={setSelectedStatement}
				statements={statements}
			/>
			<div className="flex items-center gap-5 ">
				<DatePickerWithRange setDate={setDate} date={date} />
			</div>
		</div>
	);
};

export default StatementSelector;
