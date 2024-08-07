"use client";

import { useState } from "react";
import UploadStepOne from "./UploadStepOne";
import UploadStepTwo from "./UploadStepTwo";

const UploadSteps = () => {
	const [uploadStep, setUploadStep] = useState(1);
	const [selectedStatement, setSelectedStatement] = useState<null | string>(
		null
	);

	return (
		<div className="text-white sm:px-5 my-max z-10 ">
			<div className="flex flex-col sm:flex-row items-center gap-5 py-3">
				<h2 className="text-center text-[25px] sm:text-[35px] py-3 lg:text-text-50 w-full font-medium">
					{uploadStep == 1
						? "Select Your Document Type"
						: uploadStep == 2
						? `Please Upload Your ${selectedStatement}`
						: ""}
				</h2>
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
