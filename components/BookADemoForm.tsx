"use client";

import { Listbox, Transition } from "@headlessui/react";
import { HiChevronUpDown } from "react-icons/hi2";
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { addDays, format } from "date-fns";
import { DateRange } from "react-day-picker";
import { useState, Fragment } from "react";
import { useForm } from "react-hook-form";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import toast from "react-hot-toast";

type bookDemo = {
	workEmail: string;
	phone: string | number;
	workingForAnAgency: "yes" | "no";
	bookingDate: {
		from: Date;
		to: Date;
	};
};

const BookADemoForm = () => {
	const [loading, setLoading] = useState(false);
	const {
		handleSubmit,
		formState: { errors, isValid },
		register,
		setValue,
		getValues,
	} = useForm<bookDemo>({
		defaultValues: {
			bookingDate: {
				from: new Date(),
				to: addDays(new Date(), 5),
			},
			workingForAnAgency: "yes",
		},
	});

	const [workingForAgency, setWorkingForAgency] = useState("Yes");
	const [date, setDate] = useState<DateRange | undefined>({
		from: new Date(),
		to: addDays(new Date(), 5),
	});

	const onSubmit = async (data: bookDemo) => {
		setLoading(true);
		if (!data?.bookingDate?.from) {
			toast.error("Booking date is required");
		} else {
			try {
				console.log(data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		}
	};

	const shouldDisableDateRange = (date: Date | string) => {
		const futureDate = new Date();
		const parsedArg = new Date(date);
		const currentDateString = format(parsedArg, "yyyy-MM-dd");
		const futureDateString = format(futureDate, "yyyy-MM-dd");

		return futureDateString >= currentDateString;
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className="z-10 relative w-full flex flex-col md:flex-[.9] gap-3 items-start md:w-full max-w-sm mx-auto"
		>
			<div className="w-full flex mt-5 flex-col">
				<label className="mb-2 font-medium text-text-normal text-mid--yellow">
					Work Email (required)
				</label>
				<input
					data-test="email_input"
					disabled={loading}
					className={`focus:outline-none focus:ring focus:ring-offset-2 focus:border-none focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border ${
						errors.workEmail
							? "border-crimson focus:ring-offset-crimson focus:ring-crimson"
							: isValid
							? "border-brand-green focus:ring-offset-brand-green focus:ring-brand-green"
							: "border-white"
					} bg-transparent p-[9px] rounded-lg`}
					type="text"
					placeholder="johndoe@gmail.com"
					{...register("workEmail", {
						required: { value: true, message: "Email is required" },
					})}
				/>
				{errors.workEmail && (
					<p
						data-test="signin_error_message"
						className="text-crimson pt-2 text-text-12"
					>
						{errors.workEmail.message}
					</p>
				)}
			</div>
			<div className="w-full flex mt-3 flex-col">
				<label className="mb-2 font-medium text-text-normal text-mid--yellow">
					I work for an Agency (required)
				</label>
				<Listbox
					{...register("workingForAnAgency", {
						required: { value: true, message: "Field is required" },
					})}
					disabled={loading}
					onChange={(e: any) => (
						setValue("workingForAnAgency", e), setWorkingForAgency(e)
					)}
				>
					<div className="relative">
						<Listbox.Button
							className={` ${
								loading ? "cursor-default" : "cursor-pointer"
							} relative h-11 w-full rounded-lg text-white hover:text-white  text-[14px] py-2 pl-3 pr-10 text-left border focus-visible:border-indigo-500 focus-visible:ring-2focus:outline-none focus:ring focus:border-none focus:ring-offset-2 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm ${
								errors.workingForAnAgency
									? "border-crimson focus:ring-offset-crimson focus:ring-crimson"
									: isValid
									? "border-brand-green focus:ring-offset-brand-green focus:ring-brand-green"
									: "border-white"
							}`}
						>
							<span
								className={`block truncate capitalize ${
									workingForAgency ? "text-white" : "text-grey-lightest/60"
								}`}
							>
								{getValues("workingForAnAgency")}
							</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
								<HiChevronUpDown
									size={25}
									className="h-5 w-5 text-gray-400"
									aria-hidden="true"
								/>
							</span>
						</Listbox.Button>
						<Transition
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options
								data-test="countryOptions"
								className="absolute z-[1] placeholder:text-grey-lightest/60 mt-1 w-full overflow-auto rounded-md  text-[wheat] bg-[#123829] py-1 text-[14px] text-base shadow-lg focus:outline-none sm:text-sm"
							>
								<Listbox.Option
									className={({ active }) =>
										`relative cursor-pointer select-none  py-2 px-7 ${
											active ? "bg-[#071f07]" : "text-[wheat]"
										}`
									}
									value={"Yes"}
									onChange={() => setWorkingForAgency("Yes")}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? "font-medium" : "font-normal"
												}`}
											>
												{"Yes"}
											</span>
										</>
									)}
								</Listbox.Option>
								<Listbox.Option
									className={({ active }) =>
										`relative cursor-pointer select-none  py-2 px-7 ${
											active ? "bg-[#071f07]" : "text-[wheat]"
										}`
									}
									value={"No"}
									onChange={() => setWorkingForAgency("No")}
								>
									{({ selected }) => (
										<>
											<span
												className={`block truncate ${
													selected ? "font-medium" : "font-normal"
												}`}
											>
												{"No"}
											</span>
										</>
									)}
								</Listbox.Option>
							</Listbox.Options>
						</Transition>
					</div>
				</Listbox>

				{
					<p
						data-test={"workingForAgency-error"}
						className="text-crimson h-2 text-text-12"
					>
						{errors.workingForAnAgency?.message}
					</p>
				}
			</div>
			<div className="w-full flex flex-col">
				<label className="mb-2 text-text-normal text-mid--yellow" htmlFor="">
					Phone
				</label>
				<input
					data-test="phone"
					disabled={loading}
					className={`focus:outline-none focus:ring focus:ring-offset-2 focus:border-none focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 disabled:border-grey-lightest disabled:bg-transparent placeholder:text-grey-lightest/60 text-white border ${
						errors.phone
							? "border-crimson focus:ring-offset-crimson focus:ring-crimson"
							: isValid
							? "border-brand-green focus:ring-offset-brand-green focus:ring-brand-green"
							: "border-white"
					} bg-transparent p-[9px] rounded-lg`}
					type="tel"
					placeholder="+233"
					{...register("phone", {
						required: { value: true, message: "Phone is required" },
					})}
				/>
				{
					<p
						data-test={"phone-error"}
						className="text-crimson h-2 text-text-12"
					>
						{errors.phone && errors.phone.message}
					</p>
				}
			</div>
			<label className="text-text-normal text-mid--yellow" htmlFor="">
				Booking date
			</label>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						data-test="booking-form"
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
						initialFocus
						mode="range"
						defaultMonth={date?.from}
						selected={date}
						min={3}
						max={7}
						onSelect={(e) => (
							setDate(e),
							setValue("bookingDate", { from: e?.from!, to: e?.to! })
						)}
						title="Select Date range"
						numberOfMonths={1}
						disabled={shouldDisableDateRange}
					/>
				</PopoverContent>
			</Popover>
			{
				<p
					data-test={"booking-error"}
					className="text-crimson h-2 text-text-12"
				>
					{errors.bookingDate && errors.bookingDate.message}
				</p>
			}

			<button
				data-test="request_demo_button"
				disabled={loading}
				className={`mt-5 disabled:cursor-not-allowed focus:outline-none focus:ring focus:border-none focus:ring-offset-2 focus:ring-offset-brand-green focus:ring-brand-green outline-none focus:ring-opacity-50 font-medium text-[17px] ${
					loading ? "active:scale-100" : "active:scale-[1.01]"
				} text-white transition-colors duration-150 ease-in
				${
					loading
						? "bg-grey-light cursor-default"
						: "hover:bg-brand-green/85 bg-brand-green/90"
				}
				  block w-full p-2 rounded-lg`}
				type="submit"
			>
				{loading ? (
					<LoadingSpinner className=" mx-auto animate-[spin_0.4s_linear_infinite] border-transparent border-t-mid--yellow h-5 w-5" />
				) : (
					"Send Request"
				)}
			</button>
		</form>
	);
};

export default BookADemoForm;
