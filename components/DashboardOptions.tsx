import PersonPinIcon from "@mui/icons-material/PersonPin";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import InsightsIcon from "@mui/icons-material/Insights";
import TryIcon from "@mui/icons-material/Try";
import { Dispatch, MutableRefObject, SetStateAction } from "react";

interface IdashboardOptions {
	optionsRef: MutableRefObject<HTMLLIElement | null>;
	setShowMoreOptions: Dispatch<SetStateAction<boolean>>;
	handleLogout: () => Promise<void>;
	showMoreOptions: boolean;
	loading: boolean;
}

const DashboardOptions = ({
	optionsRef,
	setShowMoreOptions,
	showMoreOptions,
	handleLogout,
	loading,
}: IdashboardOptions) => {
	return (
		<li ref={optionsRef} className="relative">
			<button
				onClick={() => setShowMoreOptions((prev) => !prev)}
				type="button"
				aria-label="options"
				className="bg-grey-light hover:bg-brand-green transition-colors duration-150 p-2 rounded-lg shadow-sm active:scale-[1.02]"
			>
				<ExpandMoreIcon fontSize="medium" color="primary" />
			</button>

			{showMoreOptions && (
				<div className="bg-[#071f07] no-select border z-40 border-grey-light absolute top-12 right-0 p-3 rounded-xl">
					<div className="flex items-center w-full justify-between gap-5">
						<ul className="flex flex-col">
							<li className=" text-text-normal hover:bg-[#071f07] hover:text-[wheat] transition-color cursor-pointer active:scale-[1.02] text-white rounded-md py-2 px-7">
								<Link
									href={"/dashboard/profile"}
									className="flex items-center gap-2"
								>
									<PersonPinIcon fontSize="medium" color="inherit" />
									Profile
								</Link>
							</li>
							<li className=" md:hidden text-text-normal hover:bg-[#071f07] hover:text-[wheat] transition-color cursor-pointer active:scale-[1.02] text-white rounded-md py-2 px-7">
								<Link href={"/profile"} className="flex items-center gap-2">
									<InsightsIcon
										fontSize="medium"
										color="inherit"
										className="cursor-pointer active:scale-[1.02]"
									/>
									Insights
								</Link>
							</li>
							<li className="md:hidden text-text-normal hover:bg-[#071f07] hover:text-[wheat] transition-color cursor-pointer active:scale-[1.02] text-white rounded-md py-2 px-7">
								<Link href={"/profilt"} className="flex items-center gap-2">
									<TryIcon
										fontSize="medium"
										color="inherit"
										className="cursor-pointer active:scale-[1.02]"
									/>
									Chat AI
								</Link>
							</li>

							<div className=" my-2 w-full h-[1px] bg-white/10"></div>
							<li
								className={`cursor-pointer ${
									loading ? "bg-mid--yellow" : "active:scale-[1.02]"
								} text-white hover:text-white hover:bg-mid--yellow duration-150 transition-colors bg-brand-green rounded-md py-2 text-center px-4`}
							>
								<button
									type="button"
									className="text-[14px] flex w-full text-center justify-center items-center gap-4"
									onClick={handleLogout}
								>
									{loading ? "Signing out" : "Sign Out"}
									{loading && <div className="loader"></div>}
								</button>
							</li>
						</ul>
					</div>
				</div>
			)}
		</li>
	);
};

export default DashboardOptions;
