"use client";

import { africanCountries } from "@/app/(auth)/signup/africanCountries";
import { useState } from "react";
import Select from "react-select";

const Countries = () => {
	const [value, setValue] = useState();
	const Ghana = africanCountries.filter((country) => country.label === "Ghana");

	//styles for select and option
	const colorStyles = {
		control: (styles: any, { isFocused }: { isFocused: boolean }) => ({
			...styles,
			backgroundColor: "transparent",
			borderRadius: "8px",
			color: "white",
			padding: "3px",
			borderColor: isFocused ? "transparent" : "white",
		}),

		placeholder: (styles: any, { isFocused }: { isFocused: boolean }) => ({
			...styles,
			color: isFocused ? "white" : "#a3a3a399",
		}),

		menu: (styles: any) => ({
			...styles,
			backgroundColor: "#050d0a",
			// borderColor: "transparent",
		}),

		option: (
			styles: any,
			{
				isFocused,
				isSelected,
			}: { isFocused: boolean; isSelected: boolean; data: Boolean }
		) => ({
			...styles,
			cursor: "pointer",
			backgroundColor: isFocused || isSelected ? "#29a173" : "transparent",
			color: isSelected ? "#fff" : "white",
			borderColor: "white",
		}),

		singleValue: (styles: any) => ({
			...styles,
			color: "#fff",
		}),
	};

	return (
		<Select
			value={value}
			autoFocus={false}
			id="select"
			styles={colorStyles}
			className="w-full text-grey-lightest "
			options={(Ghana as []) ?? "Ghana"}
			placeholder={"Country..."}
		/>
	);
};

export default Countries;
