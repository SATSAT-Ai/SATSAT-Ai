"use client";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

const newTheme = (theme: any) =>
	createTheme({
		...theme,
		components: {
			MuiDateCalendar: {
				styleOverrides: {
					root: {
						color: "white",
						borderRadius: 2,
						borderWidth: 1,
						borderColor: "white",
						border: "1px solid",
						backgroundColor: "#2f4f4f",
						//other styles are in the globals.scss
					},
				},
			},
		},
	});

const StatementSelector = () => {
	const [value, setValue] = useState<Dayjs | null>(dayjs("2022-04-17")); // use value to query
	const dateStrings = ["2022-04-17", "2021-04-17", "2021-04-20", "2011-07-27"]; //! sort data

	// convert date strings to Day.js objects
	const parsedDates = dateStrings.map((dateString) => dayjs(dateString));
	// determine if a date should be disabled
	const shouldDisableDate = (date: Dayjs) => {
		// current date to  string
		const currentDateString = date.format("YYYY-MM-DD");
		// Check if the current date is in the dateStrings array
		return !dateStrings.includes(currentDateString);
	};

	// prevent duplicates from parsedDates
	const uniqueYears = Array.from(
		new Set(parsedDates.map((date) => date.year()))
	);

	const shouldDisableYear = (year: Dayjs) => {
		// Disable all years except those in the dateStrings array
		return !uniqueYears.includes(year.year());
	};

	return (
		<div className="flex items-center justify-center gap-5 flex-wrap sm:flex-nowrap ">
			<Select
				variant="solid"
				sx={{ width: 250 }}
				color="success"
				className="bg-white/10 "
				defaultValue={"bank statement"}
			>
				<Option value={"bank statement"}>Bank Statement</Option>
				<Option value={"mobile money statement"}>Mobile Money Statement</Option>
			</Select>
			<LocalizationProvider dateAdapter={AdapterDayjs}>
				<ThemeProvider theme={newTheme}>
					<DesktopDatePicker
						onChange={(newValue) => setValue(newValue)}
						value={value}
						shouldDisableYear={shouldDisableYear}
						shouldDisableDate={shouldDisableDate}
						label="Select Date"
						sx={{
							backgroundColor: "#ffffff10",
							borderRadius: 2,
							svg: { color: "white" },
							input: { color: "white" },
							label: { color: "white" },

							"& .MuiOutlinedInput-root": {
								"&:hover > fieldset": {
									borderColor: "#C7C8CD",
								},
							},
						}}
						slotProps={{
							textField: { size: "small", color: "success" },
							toolbar: { toolbarFormat: "ddd DD MMMM", hidden: false },
						}}
						defaultValue={dayjs(dateStrings[0])}
					/>
				</ThemeProvider>
			</LocalizationProvider>
		</div>
	);
};

export default StatementSelector;
