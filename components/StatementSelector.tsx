"use client";
import Option from "@mui/joy/Option";
import Select from "@mui/joy/Select";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";

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
						backgroundColor: "gray",
					},
				},
			},
		},
	});

const StatementSelector = () => {
	return (
		<>
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
				</ThemeProvider>
			</LocalizationProvider>
		</>
	);
};

export default StatementSelector;
