"use client";

import suggestionImage from "@/public/suggestIcon.svg";
import Image from "next/image";
import TypeWrite from "./TypeWrite";
import { useState } from "react";

interface Isuggestions {
	id: string;
	title_suggestion: string;

	list: {
		id: string;
		suggestion: string;
	}[];
}

interface ITransactionDetailsSuggestion {
	showMoreAiSugestions: number;
	detailsLength: number;
	showMore: number;
	loading: boolean;
	list_suggestions: Isuggestions[];
}

const TransactionDetailsAiSuggestion = ({
	showMoreAiSugestions,
	detailsLength,
	showMore,
	loading,
	list_suggestions,
}: ITransactionDetailsSuggestion) => {
	const [isTypeWriterComplete, setIsTypeWriterComplete] =
		useState<boolean>(false);

	return (
		<div
			className={`
				 before:opacity-0 before:hover:opacity-40 w-full before:z-[-1] after:z-[-1] after:absolute after:top-[-1px] after:left-[-1px] before:rounded-2xl after:rounded-2xl rounded-2xl before:absolute before:top-[-1px] before:left-[-1px] bg-transparent relative bg-gradient-to-tr from-[#050e0b] to-[#000000] justify-between custom-block text-text-normal text-white font-medium flex items-center gap-2 glow4
							`}
		>
			<div className="bg-[#25966b23] flex items-start gap-5 flex-1 rounded-2xl shadow-md p-4">
				<div className="h-10 w-10 rounded-full shadow-md gradient-upgrade aspect-square">
					<Image
						className={`${
							(loading && "ai-spin") || (!isTypeWriterComplete && "ai-spin")
						} rounded-full h-10 w-10 p-2`}
						src={suggestionImage}
						alt="ai suggestion"
						height={25}
						width={25}
					/>
				</div>
				{list_suggestions.map((suggestions) => {
					return (
						<ul key={suggestions.id} className="flex flex-col gap-2">
							<li className="font-medium mb-3">
								<TypeWrite
									fontSize={19}
									text={suggestions.title_suggestion}
									key={suggestions.id}
									showCaret={false}
									color="white"
									typingSpeed={20}
									setIsTypeWriterComplete={setIsTypeWriterComplete}
									timeToStartNewText={20}
								/>
							</li>
							{suggestions.list
								.slice(
									0,
									showMore === detailsLength
										? detailsLength
										: showMoreAiSugestions
								)
								.map((list_suggestions) => {
									return (
										<li
											className={`list-disc list-outside text-[15px] text-[#ffffffe7] font-normal`}
											key={list_suggestions.id}
										>
											<TypeWrite
												fontSize={16}
												text={list_suggestions.suggestion}
												key={list_suggestions.id}
												showCaret={false}
												color="white"
												typingSpeed={20}
												setIsTypeWriterComplete={setIsTypeWriterComplete}
												timeToStartNewText={20}
											/>
										</li>
									);
								})}
						</ul>
					);
				})}
			</div>
		</div>
	);
};

export default TransactionDetailsAiSuggestion;
