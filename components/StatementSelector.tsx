"use client";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import { DateField } from "@mui/x-date-pickers/DateField";
import { Dispatch, SetStateAction } from "react";

interface Istatement {
	fromDate: dayjs.Dayjs | null;
	toDate: dayjs.Dayjs | null;
	setFromDate: Dispatch<SetStateAction<dayjs.Dayjs | null>>;
	setToDate: Dispatch<SetStateAction<dayjs.Dayjs | null>>;
}

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

const StatementSelector = ({
	fromDate,
	toDate,
	setFromDate,
	setToDate,
}: Istatement) => {
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
					<div className="flex items-center gap-5">
						<DateField
							label="From Date"
							value={fromDate}
							onChange={(newValue) => setFromDate(newValue)}
							format="LL"
							// format="MM-DD-YYYY"
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
							}}
						/>
						<DateField
							label="To Date"
							value={toDate}
							onChange={(newValue) => setToDate(newValue)}
							format="LL"
							// format="MM-DD-YYYY"
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
							}}
						/>
					</div>
				</ThemeProvider>
			</LocalizationProvider>
		</div>
	);
};

export default StatementSelector;
