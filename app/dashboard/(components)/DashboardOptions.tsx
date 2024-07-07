import PersonPinIcon from "@mui/icons-material/PersonPin";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import { Dispatch, MutableRefObject, SetStateAction } from "react";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

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
				className="bg-brand-green/40 hover:bg-brand-green transition-colors duration-150 p-2 rounded-lg shadow-sm active:bg-brand-green/50"
			>
				<ExpandMoreIcon fontSize="medium" color="primary" />
			</button>

			{showMoreOptions && (
				<div className="bg-[#071f07] w-52 no-select border z-40 border-grey-light absolute top-12 right-0 p-3 rounded-xl">
					<div className="flex items-center w-full justify-center gap-5">
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
							<li className="text-text-normal hover:bg-[#071f07] hover:text-[wheat] transition-color cursor-pointer active:scale-[1.02] text-white rounded-md py-2 px-7">
								<Link
									href={"/dashboard/whats-new"}
									className="flex items-center gap-2"
								>
									<RocketLaunchIcon fontSize="medium" color="inherit" />
									{`What's new`}
								</Link>
							</li>

							<li className=" my-2 w-full h-[1px] bg-white/10"></li>
							<li
								className={`cursor-pointer ${
									loading ? "bg-mid--yellow" : "active:scale-[1.02]"
								} text-white hover:text-white hover:bg-mid--yellow duration-150 transition-colors bg-brand-green rounded-md py-2 text-center px-4`}
							>
								<button
									disabled={loading}
									type="button"
									className="text-[14px] flex w-full text-center justify-center items-center gap-4"
									onClick={handleLogout}
								>
									{loading ? "Signing out" : "Sign Out"}
									{loading && (
										<LoadingSpinner className="animate-[spin_0.4s_linear_infinite] border-transparent border-t-white h-4 w-4" />
									)}
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
