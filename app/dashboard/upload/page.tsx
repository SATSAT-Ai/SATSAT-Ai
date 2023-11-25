"use client";

import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { FiUploadCloud } from "react-icons/fi";
import LinearProgress from "@mui/material/LinearProgress";
import CloseIcon from "@mui/icons-material/Close";
import { FiFileText } from "react-icons/fi";
import CircularProgress from "@mui/joy/CircularProgress";
import Image from "next/image";
import bankStatementimage from "@/public/bank-statement.png";
import mobileMoneyStatementImage from "@/public/bill.png";
import { Dispatch, SetStateAction } from "react";
import StatementSelector from "@/components/StatementSelector";

const UploadStepTwo = ({
	selectedStatement,
	setUploadStep,
}: {
	selectedStatement: string | null;
	setUploadStep: Dispatch<SetStateAction<number>>;
}) => {
	return (
		<div className="bg-white/20 p-10 w-full rounded-xl">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-center text-text-24 max-w-md mx-auto">
					Upload Your Financial Data
				</h2>

				<div className="mt-7 p-5 flex-wrap flex items-center gap-5 justify-center border border-dashed rounded-xl">
					<FiUploadCloud size={60} color="white" />
					<p className="text-text-20">Select a file or drag and drop here</p>
					<button
						className="bg-white text-darker py-2 px-3 font-semibold rounded-md shadow-lg hover:bg-brand-green hover:text-white active:scale-[1.02]"
						type="button"
					>
						Select File
					</button>
				</div>
				<div className="mt-7">
					<h3>File Added</h3>
					<div className="h-44 overflow-y-auto flex flex-col gap-3 custom-scroll pr-2 mb-2">
						<div className="bg-white/10 flex items-center gap-5 rounded-md p-4">
							<FiFileText size={25} color="white" />
							<div className="w-full flex flex-col gap-2 justify-center">
								<div className=" w-full flex items-center justify-between">
									<p>Data.pdf</p>
									<span className="font-semibold">2MB</span>
								</div>

								{/* <LinearProgress variant="query" color="inherit" /> */}
							</div>
							<CloseIcon
								fontSize="medium"
								color="inherit"
								className="cursor-pointer active:scale-[1.02]"
							/>
						</div>
					</div>
				</div>
			</div>
			<div className="flex items-center gap-5 justify-end">
				<button
					onClick={() => setUploadStep(1)}
					className="bg-white rounded-lg active:scale-[1.02] hover:bg-darker hover:text-white py-2 px-5 text-grey-light font-medium"
					type="button"
				>
					Back
				</button>
				<button
					className={`${"bg-white"} flex items-center gap-3 rounded-lg active:scale-[1.02] hover:bg-brand-green hover:text-white py-2 px-5 text-darker font-medium`}
					type="button"
				>
					{/* <CircularProgress size="sm" variant="solid" /> */}
					{/* Loading... */}
					Continue
				</button>
			</div>
		</div>
	);
};
const UploadStepOne = ({
	selectedStatement,
	setSelectedStatement,
	setUploadStep,
}: {
	selectedStatement: string | null;
	setSelectedStatement: Dispatch<SetStateAction<string | null>>;
	setUploadStep: Dispatch<SetStateAction<number>>;
}) => {
	const handleMoveForward = () => {
		if (!selectedStatement) {
			return;
		}
		setUploadStep(2);
	};
	return (
		<div className="bg-white/20 p-10 w-full mx-auto rounded-xl">
			<div className="max-w-3xl mx-auto">
				<h2 className="text-center text-[30px] max-w-md mx-auto">
					Select Your Statement to continue
				</h2>

				<ul className="mt-7 p-5 flex-wrap flex items-center gap-7 justify-center">
					<li
						onClick={() => setSelectedStatement("bank-statement")}
						className={`border border-white p-5 ${
							selectedStatement == "bank-statement"
								? "bg-brand-green-darker hover:bg-brand-green-darker"
								: "bg-transparent hover:bg-brand-green-darker/30"
						}  cursor-pointer rounded-lg flex items-center justify-center flex-col max-w-[200px] gap-3`}
					>
						<Image
							src={bankStatementimage}
							height={90}
							width={90}
							alt="bank statement"
						/>
						<p className="font-semibold text-text-20 text-center">
							Bank Statement
						</p>
					</li>
					<li
						onClick={() => setSelectedStatement("mobile-money-statement")}
						className={`border border-white p-5 ${
							selectedStatement == "mobile-money-statement"
								? "bg-brand-green-darker hover:bg-brand-green-darker"
								: "bg-transparent hover:bg-brand-green-darker/30"
						}  cursor-pointer rounded-lg flex items-center justify-center flex-col max-w-[200px] gap-3`}
					>
						<Image
							src={mobileMoneyStatementImage}
							height={90}
							width={90}
							alt="bank statement"
						/>
						<p className="font-semibold text-text-20 text-center">
							Mobile Money
						</p>
					</li>
				</ul>
				<div className="flex items-center mt-5 gap-5 md:justify-end justify-center">
					<button
						onClick={handleMoveForward}
						disabled={!selectedStatement}
						className={`${"bg-white"} flex items-center gap-3 rounded-lg disabled:active:scale-100 disabled:bg-grey-lightest disabled:hover:text-darker disabled:hover:bg-grey-lightest active:scale-[1.02] hover:bg-darker hover:text-white py-2 px-5 text-darker font-medium`}
						type="button"
					>
						{/* <CircularProgress size="sm" variant="solid" /> */}
						{/* Loading... */}
						Continue
					</button>
				</div>
			</div>
		</div>
	);
};

const Page = () => {
	const { hideSidebar, setHideSidebar, setShowNotification } =
		useContext(AppContext);

	const [uploadStep, setUploadStep] = useState(1);
	const [selectedStatement, setSelectedStatement] = useState<null | string>(
		null
	);

	return (
		<div
			onClick={() => setShowNotification(false)}
			className="min-h-screen text-white sm:px-5 my-max z-10 "
		>
			<div className="flex flex-col sm:flex-row items-center gap-5 py-3">
				{hideSidebar && (
					<div
						tabIndex={0}
						className=" focus:bg-brand-green fixed left-5 bg-mid--yellow cursor-pointer hover:bg-brand-green w-fit p-1 rounded-md"
					>
						<TbLayoutSidebarRightExpand
							size={25}
							color="white"
							onClick={() => setHideSidebar(false)}
						/>
					</div>
				)}
				<h1 className="text-text-50 md:text-text-60 text-brand-green text-center lg:text-text-80 m-0 mx-auto w-fit ">
					SATSAT AI
				</h1>
			</div>

			{uploadStep == 1 ? (
				<UploadStepOne
					selectedStatement={selectedStatement}
					setSelectedStatement={setSelectedStatement}
					setUploadStep={setUploadStep}
				/>
			) : (
				<UploadStepTwo
					setUploadStep={setUploadStep}
					selectedStatement={selectedStatement}
				/>
			)}
		</div>
	);
};

export default Page;
