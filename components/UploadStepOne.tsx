import Image from "next/image";
import bankStatementimage from "@/public/bank-statement.png";
import { Dispatch, SetStateAction } from "react";
import receiptImage from "@/public/receipt.png";
import invoiceImage from "@/public/invoice.png";
import mobileMoneyImage from "@/public/mobile-money.png";
import CustomGlowButton from "./ui/CustomGlowButton";

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
			name: "Bank statement",
			value: "Bank Statement",
			image: bankStatementimage,
		},
		{
			name: "Mobile Money Statement",
			value: "Mobile Money",
			image: mobileMoneyImage,
		},

		{
			name: "Invoice",
			value: "Invoice",
			image: invoiceImage,
		},
		{
			name: "Receipt",
			value: "Receipt",
			image: receiptImage,
		},
	];

	return (
		<div className="bg-white/20 p-10 w-full mx-auto rounded-xl">
			<div className="w-full">
				<ul className="mt-7 p-5 flex flex-wrap justify-center items-center gap-7">
					{documents.map((document) => {
						return (
							<li
								key={document.name}
								onClick={() => setSelectedStatement(document.name)}
								className={` p-5 ${
									selectedStatement == document.name
										? "bg-brand-green-darker border-[wheat] border hover:bg-brand-green-darker"
										: "bg-transparent border border-white hover:border-[wheat] hover:bg-brand-green-darker/30"
								}  cursor-pointer rounded-lg flex w-44 h-44 p-2 items-center justify-center flex-col max-w-[200px] gap-3`}
							>
								<Image
									src={document.image}
									height={70}
									width={70}
									alt={document.name}
									priority
									quality={90}
								/>
								<p className="font-medium text-[17px] text-center">
									{document.value}
								</p>
							</li>
						);
					})}
				</ul>
				<div className="flex items-center mt-5 gap-5 md:justify-end justify-center">
					<CustomGlowButton
						buttonType="button"
						disabled={!selectedStatement}
						name="Continue"
						handleClick={handleMoveForward}
					/>
				</div>
			</div>
		</div>
	);
};

export default UploadStepOne;
