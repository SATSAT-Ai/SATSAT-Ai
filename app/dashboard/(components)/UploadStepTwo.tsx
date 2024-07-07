"use client";

import { Dispatch, SetStateAction, useState } from "react";
import DragNdrop from "./DragNdrop";

const UploadStepTwo = ({
	selectedStatement,
	setUploadStep,
}: {
	selectedStatement: string | null;
	setUploadStep: Dispatch<SetStateAction<number>>;
}) => {
	const [files, setFiles] = useState([]);

	return (
		<div className="bg-brand-green/50 p-4 sm:p-10 mb-2 max-w-3xl mx-auto rounded-xl">
			<div className="max-w-xl mx-auto">
				<DragNdrop files={files} setFiles={setFiles} />

				<div className="flex mt-7 items-center gap-5 justify-end">
					<button
						onClick={() => setUploadStep(1)}
						className="bg-white rounded-md active:scale-[1.02] hover:bg-mid--yellow hover:text-white py-2 px-6 text-grey-light font-medium"
						type="button"
					>
						Back
					</button>
					<button
						disabled={!files}
						className={`disabled:active:scale-100 disabled:bg-grey-lightest disabled:hover:text-white disabled:hover:bg-grey-lightest bg-darker hover:bg-brand-green-darker text-white flex items-center gap-3 rounded-md active:scale-[1.02] hover:text-white py-2 px-5 font-medium`}
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

export default UploadStepTwo;
