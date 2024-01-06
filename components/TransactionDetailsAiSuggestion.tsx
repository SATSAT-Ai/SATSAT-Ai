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
}

const TransactionDetailsAiSuggestion = ({
	showMoreAiSugestions,
	detailsLength,
	showMore,
	loading,
}: ITransactionDetailsSuggestion) => {
	const [typeWriterComplete, setTypeWriterComplete] = useState<boolean>(false);

	const list_suggestions: Isuggestions[] = [
		{
			id: "kdjf8uif",
			title_suggestion:
				"ipsum dolor sit amet consectetur adipisicing elit. Voluptates, est ullam enim debitis dolorem tempora cum deserunt voluptatum sunt quibusdam?",
			list: [
				{
					id: "skdjfksdjfksj",
					suggestion:
						"ipsum dolor sit amet consectetur adipisicing elit. Voluptates, est ullam enim debitis dolorem tempora cum deserunt voluptatum sunt quibusdam?",
				},
				{
					id: "skdjfksdfdfdjfksj",
					suggestion:
						"dolor sit amet consectetur adipisicing elit. Voluptates, est ullam enim debitis dolorem tempora",
				},
				{
					id: "skdjfksd23fdfdjfksj",
					suggestion:
						"dolor sit amet consectetur adipisicing elit. Voluptates, est ullam enim debitis dolorem tempora",
				},
			],
		},
	];

	return (
		<div className="border bg-[#25966b23] flex items-start gap-5  border-[#2aa2747a] flex-1 rounded-2xl shadow-md p-4">
			<div className="h-10 w-10 rounded-full shadow-md gradient-upgrade aspect-square">
				<Image
					className={`${
						(loading && "ai-spin") || (!typeWriterComplete && "ai-spin")
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
						<li className="mb-4 font-medium">
							<TypeWrite
								text={suggestions.title_suggestion}
								key={suggestions.id}
								showCaret={false}
								color="white"
								interval={20}
								setTypeWriterComplete={setTypeWriterComplete}
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
											text={list_suggestions.suggestion}
											key={list_suggestions.id}
											showCaret={false}
											color="white"
											interval={20}
											setTypeWriterComplete={setTypeWriterComplete}
											timeToStartNewText={20}
										/>
									</li>
								);
							})}
					</ul>
				);
			})}
		</div>
	);
};

export default TransactionDetailsAiSuggestion;
