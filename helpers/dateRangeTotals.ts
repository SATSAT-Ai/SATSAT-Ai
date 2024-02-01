import { addDays, differenceInDays, isWithinInterval } from "date-fns";
import { format } from "date-fns";

export const timeStamps = [
	{ date: 1704067200000, value: 10 },
	{ date: 1704153600000, value: 10 },
	{ date: 1704240000000, value: 10 },
	{ date: 1704326400000, value: 10 },
	{ date: 1704412800000, value: 10 },
	{ date: 1704499200000, value: 10 },
	{ date: 1704585600000, value: 10 },
	{ date: 1704672000000, value: 20 },
	{ date: 1704758400000, value: 20 },
	{ date: 1704844800000, value: 20 },
	{ date: 1705104000000, value: 20 },
	{ date: 1705190400000, value: 20 },
	{ date: 1705363200000, value: 20 },
	{ date: 1705449600000, value: 20 },
	{ date: 1705536000000, value: 30 },
	{ date: 1705622400000, value: 30 },
	{ date: 1705708800000, value: 30 },
	{ date: 1705795200000, value: 30 },
	{ date: 1705881600000, value: 30 },
	{ date: 1705968000000, value: 30 },
	{ date: 1706054400000, value: 30 },
	{ date: 1706140800000, value: 40 },
	{ date: 1706227200000, value: 40 },
	{ date: 1706313600000, value: 40 },
	{ date: 1706400000000, value: 40 },
	{ date: 1706486400000, value: 40 },
	{ date: 1706572800000, value: 40 },
	{ date: 1706659200000, value: 40 },
	{ date: 1706745600000, value: 50 },
	{ date: 1706832000000, value: 50 },
	{ date: 1706918400000, value: 50 },
	{ date: 1707004800000, value: 50 },
	{ date: 1707091200000, value: 50 },
	{ date: 1707177600000, value: 60 },
	{ date: 1707264000000, value: 60 },
	{ date: 1707350400000, value: 60 },
	{ date: 1707436800000, value: 60 },
	{ date: 1707523200000, value: 60 },
	{ date: 1707609600000, value: 60 },
	{ date: 1707696000000, value: 60 },
	{ date: 1707782400000, value: 70 },
	{ date: 1707868800000, value: 70 },
	{ date: 1707955200000, value: 70 },
	{ date: 1708041600000, value: 70 },
	{ date: 1708128000000, value: 70 },
	{ date: 1708214400000, value: 70 },
	{ date: 1708300800000, value: 70 },
	{ date: 1708387200000, value: 80 },
	{ date: 1708473600000, value: 80 },
	{ date: 1708560000000, value: 80 },
	{ date: 1708646400000, value: 80 },
	{ date: 1708732800000, value: 80 },
	{ date: 1708819200000, value: 80 },
	{ date: 1708905600000, value: 80 },
	{ date: 1708992000000, value: 90 },
	{ date: 1709078400000, value: 90 },
	{ date: 1709164800000, value: 90 },
];

export const generateYearTotal = (startOfYear: Date, endOfYear: Date) => {
	console.log("Year start:", startOfYear);
	console.log("Year end:", endOfYear);

	const yearData = timeStamps.filter((entry) => {
		const entryDate = new Date(entry.date);
		return isWithinInterval(entryDate, {
			start: startOfYear,
			end: endOfYear,
		});
	});

	const totalForYear = yearData.reduce((acc, entry) => acc + entry.value, 0);

	return totalForYear;
};

export const generateMonthTotal = (startOfMonth: Date, monthEnd: Date) => {
	// Calculate the total for the month
	const monthData = timeStamps.filter((entry) => {
		const entryDate = new Date(entry.date);
		return isWithinInterval(entryDate, {
			start: startOfMonth,
			end: monthEnd,
		});
	});

	const totalForMonth = monthData.reduce((acc, entry) => acc + entry.value, 0);

	return totalForMonth;
};

export const generateWeekTotal = (weekStart: Date) => {
	const weekData = timeStamps.filter((entry) => {
		const daysBetween = differenceInDays(entry.date, weekStart);
		return daysBetween >= 0 && daysBetween < 7;
	});

	const totalForWeek = weekData.reduce((acc, entry) => acc + entry.value, 0);
	return totalForWeek;
};

export const generateDayData = (
	from: Date,
	to: Date,
	dateRangeWithValue: {
		date: number;
		value: number;
	}[]
): { [key: string]: number } => {
	const data: { [key: string]: number } = {};

	for (let day = from; day <= to; day = addDays(day, 1)) {
		const formattedDay = format(day, "EEE MMM dd yyy");
		const matchingEntry = timeStamps.find(
			(entry) => Math.floor(day.getTime()) === entry.date
		);

		if (matchingEntry) {
			data[formattedDay] = matchingEntry.value;
		} else {
			data[formattedDay] = 0;
		}
	}

	return data;
};
