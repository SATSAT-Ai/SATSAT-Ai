import {
	addMonths,
	getWeekOfMonth,
	addWeeks,
	differenceInWeeks,
	differenceInDays,
	format,
	addDays,
	isWithinInterval,
	getDay,
	startOfWeek,
	differenceInYears,
	addYears,
	startOfMonth,
	endOfMonth,
	differenceInMonths,
	endOfYear,
} from "date-fns";
import {
	generateDayData,
	generateMonthTotal,
	generateWeekTotal,
	generateYearTotal,
	timeStamps,
} from "./dateRangeTotals";

type period = "days" | "weeks" | "months" | "years";

export const generateMixedCharData = (
	from: Date,
	to: Date,
	dateRangeWithValue: {
		date: number;
		value: number;
	}[]
): { [key: string]: number } | undefined => {
	const getPeriod = (from: Date, to: Date): period => {
		const theDifferenceInDays = differenceInDays(to, from!) + 1;

		if (theDifferenceInDays <= 7) {
			if (from?.getMonth() !== to?.getMonth()) {
				return "months";
			}
			return "days";
		} else if (theDifferenceInDays <= 31) {
			if (from?.getMonth() !== to?.getMonth()) {
				return "months";
			}
			return "weeks";
		} else if (theDifferenceInDays <= 366) {
			return "months";
		}
		return "years";
	};

	if (from && to) {
		const period: period = getPeriod(from, to);

		const data: { [key: string]: number } = {};

		if (period === "days") {
			console.log(period);

			//*days

			(data.days as unknown as {}) = generateDayData(
				from,
				to,
				timeStamps
				// dateRangeWithValue
			);
		} else if (period === "weeks") {
			console.log(period);
			//*week

			const selectedWeek = getWeekOfMonth(from);
			const fullWeeks =
				Math.floor(differenceInDays(to, from) / 7) + selectedWeek - 1; // Adjusting for starting week

			const daysDifference = differenceInDays(to, from) + 1;

			if (daysDifference >= 9) {
				for (let i = selectedWeek; i <= fullWeeks; i++) {
					const monthName = format(from, "MMMM");
					const weekKey = `${monthName} Week ${i}`;

					const weekSumValue = () => {
						return timeStamps
							.filter((entry) => {
								const daySelected = getDay(from);
								const weekStart = startOfWeek(from, {
									weekStartsOn: daySelected,
								});
								const startOfCurrentWeek = addWeeks(
									weekStart,
									i - selectedWeek
								);
								const endOfCurrentWeek = addDays(startOfCurrentWeek, 6);

								console.log(format(startOfCurrentWeek, "EEE MMM dd yyy"));
								console.log(format(endOfCurrentWeek, "EEE MMM dd yyy"));

								return isWithinInterval(entry.date, {
									start: startOfCurrentWeek,
									end: endOfCurrentWeek,
								});
							})
							.reduce((acc, entry) => acc + entry.value, 0);
					};

					data[weekKey] = weekSumValue() || 0;
				}
				//*days
				const endingWeek = differenceInWeeks(to, from) * 7;
				(data.days as unknown as {}) = generateDayData(
					addDays(from, endingWeek),
					to,
					timeStamps
				);
			} else {
				(data.days as unknown as {}) = generateDayData(from, to, timeStamps);
			}
		} else if (period === "months") {
			console.log(period);

			// *prevMonthWeek

			const monthStart = new Date(to.getFullYear(), to.getMonth(), 1);
			const startOfPrevMonth = new Date(to.getFullYear(), to.getMonth() - 1, 1);
			const selectedPrevWeek = getWeekOfMonth(startOfPrevMonth);
			const prevMonthFullWeeks =
				Math.floor(differenceInDays(to, startOfPrevMonth) / 7) +
				selectedPrevWeek; // Adjust for starting week of prev month weeks
			const prevMonths = Math.max(
				1,
				Math.floor(differenceInDays(monthStart, from) / 30)
			);

			const selectedWeek = getWeekOfMonth(monthStart);
			const fullWeeks =
				Math.floor(differenceInDays(to, monthStart) / 7) + selectedWeek - 1; // Adjusting this for starting week

			if (prevMonthFullWeeks <= 5) {
				for (let i = selectedPrevWeek; i <= prevMonths - 1; i++) {
					const monthName = format(addMonths(from, i - 1), "MMM yyyy");
					const monthStart = startOfMonth(addMonths(from, i - 1));
					const monthEnd = endOfMonth(monthStart);
					data[monthName] = generateMonthTotal(monthStart, monthEnd) || 0;
				}
				//* month and year e.g Jan 2024
				for (let i = selectedPrevWeek; i <= prevMonthFullWeeks; i++) {
					const weekStart = addWeeks(startOfPrevMonth, i - 1);
					const monthName = format(weekStart, "MMM yyyy");
					const weekKey = `${monthName} Week ${i}`;
					data[weekKey] = generateWeekTotal(weekStart) || 0; //*
				}
			} else {
				// *Month as in Jan - Dec
				for (let i = 1; i <= prevMonths; i++) {
					const monthName = format(addMonths(from, i - 1), "MMM yyyy");
					const monthStart = startOfMonth(addMonths(from, i - 1));
					const monthEnd = endOfMonth(monthStart);
					data[monthName] = generateMonthTotal(monthStart, monthEnd) || 0; //*
				}
			}

			// *weeks
			for (let i = selectedWeek; i <= fullWeeks; i++) {
				const weekStart = addWeeks(monthStart, i - selectedWeek);
				const monthName = format(weekStart, "MMM yyyy");
				const weekKey = `${monthName} Week ${i}`;
				data[weekKey] = generateWeekTotal(weekStart) || 0;
			}

			// * days
			const endingWeek = differenceInWeeks(to, monthStart) * 7;

			(data.days as unknown as {}) = generateDayData(
				addDays(monthStart, endingWeek),
				to,
				timeStamps
			);
		}

		// ============================================
		else if (period === "years") {
			console.log(period);

			const fullYears = differenceInYears(to, from);

			for (let i = 0; i < fullYears; i++) {
				const yearStart = addYears(from, i);
				const yearEnd = endOfYear(yearStart);

				const years = addYears(from, i);
				const year = years.getFullYear();

				data[`Year ${year}`] = generateYearTotal(yearStart, yearEnd) || 0;
			}

			// Months
			const startOfCurrentMonth = startOfMonth(
				new Date(to.getFullYear(), 0, 1)
			);

			const monthEnd = endOfMonth(startOfCurrentMonth);
			const fullMonths = differenceInMonths(to, startOfCurrentMonth);

			for (let i = 1; i <= fullMonths; i++) {
				const monthName = format(
					addMonths(startOfCurrentMonth, i - 1),
					"MMM yyyy"
				);
				data[monthName] =
					generateMonthTotal(startOfCurrentMonth, monthEnd) || 0;
			}

			// Weeks
			const startOfCurrentMonthWeek = startOfMonth(to);
			const fullWeeks = differenceInWeeks(to, startOfCurrentMonthWeek);

			for (let i = 1; i <= fullWeeks; i++) {
				const weekStart = addWeeks(startOfCurrentMonthWeek, i - 1);
				const monthName = format(weekStart, "MMM yyyy");
				const weekKey = `${monthName} Week ${i}`;
				data[weekKey] = generateWeekTotal(weekStart) || 0;
			}

			// Remaining Days
			(data.days as unknown as {}) = generateDayData(
				addDays(startOfCurrentMonthWeek, fullWeeks * 7),
				to,
				timeStamps
			);
		}

		const flattenObject = (data: {
			[key: string]: number;
		}): { [key: string]: number } => {
			return Object.assign(
				{},
				...Object.entries(data).flatMap(([key, value]: any) => {
					return typeof value === "object" && value !== null
						? flattenObject(value)
						: { [key]: value };
				})
			);
		};

		return flattenObject(data);
	} else {
		return undefined;
	}
};
