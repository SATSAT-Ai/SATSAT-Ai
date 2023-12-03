import Image from "next/image";
import bankStatementimage from "@/public/bank-statement.png";
import { Dispatch, SetStateAction } from "react";
import receiptImage from "@/public/receipt.png";
import invoiceImage from "@/public/invoice.png";
import mobileMoneyImage from "@/public/mobile-money.png";

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

	const documents = [
		{
			name: "bank-statement",
			value: "Bank Statement",
			image: bankStatementimage,
		},
		{
			name: "mobile-money-statement",
			value: "Mobile Money",
			image: mobileMoneyImage,
		},

		{
			name: "invoice",
			value: "Invoice",
			image: invoiceImage,
		},
		{
			name: "receipt",
			value: "Receipt",
			image: receiptImage,
		},
	];

	return (
		<div className="bg-white/20 p-10 w-full mx-auto rounded-xl">
			<div className="w-full">
				<h2 className="text-center text-[25px] w-full">
					Select Document Type To Upload
				</h2>

				<ul className="mt-7 p-5 flex-col flex-wrap sm:flex-row flex items-center gap-7 justify-center">
					{documents.map((document) => {
						return (
							<li
								key={document.name}
								onClick={() => setSelectedStatement(document.name)}
								className={`border border-white p-5 ${
									selectedStatement == document.name
										? "bg-brand-green-darker hover:bg-brand-green-darker"
										: "bg-transparent hover:bg-brand-green-darker/30"
								}  cursor-pointer rounded-lg flex w-44 h-44 p-2 items-center justify-center flex-col max-w-[200px] gap-3`}
							>
								<Image
									src={document.image}
									height={70}
									width={70}
									alt={document.name}
									priority
								/>
								<p className="font-medium text-[17px] text-center">
									{document.value}
								</p>
							</li>
						);
					})}
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

export default UploadStepOne;
