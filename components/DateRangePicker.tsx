"use client";

import { useState, Dispatch, SetStateAction } from "react";
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
}

export function DatePickerWithRange({ className, setDate, date }: IdateRange) {
	const [isCalendarOpen, setIsCalendarOpen] = useState(false);

	return (
		<div className={cn("grid gap-2 text-[13px]", className)}>
			<Popover open={isCalendarOpen} onOpenChange={setIsCalendarOpen}>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant={"outline"}
						className={cn(
							"w-full justify-start text-left text-[wheat] font-normal",
							!date && "text-muted-foreground"
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
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
							<span>Select Date range</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className="w-full p-0 " align="start">
					<Calendar
						initialFocus
						mode="range"
						defaultMonth={date?.from}
						selected={date}
						onSelect={setDate}
						// onSelect={(selectedDate) => (
						// 	setDate(selectedDate),
						// 	selectedDate?.from && selectedDate?.to && setIsCalendarOpen(false)
						// )}
						title="Select Date range"
						numberOfMonths={1}
					/>
				</PopoverContent>
			</Popover>
		</div>
	);
}
