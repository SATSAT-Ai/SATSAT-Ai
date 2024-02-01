const startDate = 1704067200; // January 1, 2024, timestamp
const daysInJanuary = 31;
const daysInFebruary = 29; // Leap year

export const timeStampsAndValue: { [key: string]: number } = {};

for (let i = 0; i < daysInJanuary + daysInFebruary; i++) {
	const currentTimestamp = startDate + i * 24 * 60 * 60; // Adding a day's worth of seconds
	const value = Math.floor(Math.random() * 1000);

	timeStampsAndValue[currentTimestamp] = value;
}

// console.log(timeStampsAndValue);
