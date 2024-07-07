import { Fragment, Dispatch, SetStateAction } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronUpDown } from "react-icons/hi2";

interface Iselect {
	setSelectedDropDownStatement: Dispatch<SetStateAction<string>>;
	selectedStatement: string;
	statements: string[];
}

export default function DropDown({
	selectedStatement,
	setSelectedDropDownStatement,
	statements,
}: Iselect) {
	return (
		<Listbox value={selectedStatement} onChange={setSelectedDropDownStatement}>
			<div className="relative mt-1">
				<Listbox.Button className="relative w-full rounded-lg bg-brand-green-darker/80 hover:text-white cursor-pointer text-[wheat] text-[14px] py-2 pl-3 pr-10 text-left border border-[wheat] hover:bg-[#123829] focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
					<span className="block truncate">{selectedStatement}</span>
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
					<Listbox.Options className="absolute z-[1] mt-1 max-h-60 w-full overflow-auto rounded-md  text-[wheat] bg-[#123829] py-1 text-[14px] text-base shadow-lg focus:outline-none sm:text-sm">
						{statements.map((statement, statementIdx) => (
							<Listbox.Option
								key={statementIdx}
								className={({ active }) =>
									`relative cursor-pointer select-none py-2 px-7 ${
										active ? "bg-[#071f07]" : "text-[wheat]"
									}`
								}
								value={statement}
							>
								{({ selected }) => (
									<>
										<span
											className={`block truncate ${
												selected ? "font-medium" : "font-normal"
											}`}
										>
											{statement}
										</span>
									</>
								)}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Transition>
			</div>
		</Listbox>
	);
}
