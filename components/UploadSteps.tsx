"use client";

import { useContext, useState } from "react";
import { AppContext } from "@/context/AppContext";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import UploadStepOne from "@/components/UploadStepOne";
import UploadStepTwo from "@/components/UploadStepTwo";

const UploadSteps = () => {
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
				<h1 className="text-text-50 md:text-text-60 text-brand-green text-center lg:text-[70px] m-0 mx-auto w-fit ">
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

export default UploadSteps;
