"use client";

import { useState } from "react";
import CategoryTable from "@/components/CategoryTable";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";
import DropDown from "./ui/Dropdown";
import { DatePickerWithRange } from "./DateRangePicker";
import { ICategory } from "@/interface/interface";

const CategoryClientPage = () => {
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 5),
	});

	const categoryLists = [
		"Water Bill",
		"Light Bill",
		"Food",
		"Clothing",
		"Entertainment",
	];
	const statements = ["Mobile Money Statement", "Bank Statement"];
	const [selectedDropDownStatement, setSelectedDropDownStatement] = useState(
		statements[0]
	);

	const [selectedDropDownCategory, setSelectedDropDownCategory] = useState(
		categoryLists[0]
	); ///fetch data based on category change

	const [categoryData, setCategoryData] = useState<ICategory[]>([
		///set categorydata based on selectedDropDownCategory
		{
			id: "sdf9sf3434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdf93sdf434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdf9334434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdf9ff3434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
	]);

	return (
		<main className="p-5 min-h-screen">
			<div className="pt-5 mb-10">
				<div className="flex items-center justify-between gap-5 flex-wrap sm:flex-nowrap ">
					<h1 className="text-white text-[35px] w-fit md:text-[45px] m-0 text-center lg:text-left ">
						Categories
					</h1>

					<div className="hidden lg:flex flex-wrap-reverse justify-between gap-5">
						<div className="flex-1">
							<DropDown
								selectedStatement={selectedDropDownCategory}
								setSelectedDropDownStatement={setSelectedDropDownCategory}
								statements={categoryLists}
							/>
						</div>
						<div className="flex items-center gap-5">
							<DatePickerWithRange setDate={setDate} date={date} />
						</div>
					</div>
				</div>
			</div>

			<div
				className={`mt-5 z-0 relative lg:bg-white/10 flex flex-col gap-5 overflow-clip justify-between lg:flex-row h-[600px] md:h-96 lg:rounded-2xl`}
			>
				<div className="lg:hidden flex flex-wrap-reverse justify-between gap-5">
					<div className="flex-1">
						<DropDown
							selectedStatement={selectedDropDownCategory}
							setSelectedDropDownStatement={setSelectedDropDownCategory}
							statements={categoryLists}
						/>
					</div>
					<div className="flex items-center gap-5">
						<DatePickerWithRange setDate={setDate} date={date} />
					</div>
				</div>

				<ul className="hidden lg:flex p-3 flex-1 hover:cursor-pointer h-full overflow-auto custom-scroll2 flex-col gap-2 text-white">
					{categoryLists.map((category, index) => {
						return (
							<li
								onClick={() => setSelectedDropDownCategory(category)}
								className={`${
									selectedDropDownCategory === category
										? "bg-mid--yellow"
										: "bg-white/10"
								} hover:bg-mid--yellow  py-2 px-3 rounded-lg `}
								key={index}
							>
								{category}
							</li>
						);
					})}
				</ul>
				<CategoryTable categoryData={categoryData} />
			</div>
		</main>
	);
};

export default CategoryClientPage;
