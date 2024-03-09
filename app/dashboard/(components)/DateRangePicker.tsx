import { Dispatch, SetStateAction } from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { DateRange } from "react-day-picker";

interface IdateRange {
	setDate: Dispatch<SetStateAction<DateRange | undefined>>;
	date: DateRange | undefined;
	className?: string;
	parsedTimeStamps?: Date[];
}

export function DatePickerWithRange({
	className,
	setDate,
	date,
	parsedTimeStamps,
}: IdateRange) {
	//*disable dates which are not included in transaction
	const shouldDisableDateRange = (date: Date | string) => {
		const parsedDates = parsedTimeStamps?.map((dateString: Date): string => {
			return format(dateString, "yyyy-MM-dd");
		});

		const parsedArg = new Date(date);
		const currentDateString = format(parsedArg, "yyyy-MM-dd");
		return !parsedDates?.includes(currentDateString);
	};

	return (
		<div
			className={cn("grid gap-2 text-[13px] ", className)}
			id="walkthrough-2"
		>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant={"outline"}
						className={cn(
							"w-full justify-start text-left text-[wheat] font-normal",
							!date && "text-muted-foreground"
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4 text-[inherit]" />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, "LLL dd, y")} -{" "}
									{format(date.to, "LLL dd, y")}
								</>
							) : (
								format(date.from, "LLL dd, y")
							)
						) : (
							<span className="text-white">Select Date range</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-full p-0 relative -left-10" align="start">
					<Calendar
						// disabled={shouldDisableDateRange}
						initialFocus
						mode="range"
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						title="Select Date range"
						numberOfMonths={1}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
