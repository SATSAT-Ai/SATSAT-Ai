import DropDown from "@/components/ui/Dropdown";
import { DatePickerWithRange } from "./DateRangePicker";
import { Dispatch, SetStateAction } from "react";
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
