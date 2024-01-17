"use client";

import { useEffect, useState } from "react";
import chatbot from "@/public/chatbot.svg";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import TypeWrite from "./TypeWrite";

// //track history of conversations
// interface ParentChat {
// 	id: string;
// 	timestamp: string;
// 	conversations: IcomingProp[];
// }

interface IcomingProp {
	fontSize?: number;
	typeWrite?: boolean;
	list: { id: string; msg: string }[];
	firstText: string;
	endingText: string;
}

type IcurrentSection = "firstText" | "list" | "endingText";

const IncomingMessage = ({
	list,
	firstText,
	fontSize,
	typeWrite,
	endingText,
}: IcomingProp) => {
	const [currentSection, setCurrentSection] =
		useState<IcurrentSection>("firstText");
	const [isTypeWriterComplete, setIsTypeWriterComplete] = useState(false);

	useEffect(() => {
		const handleNextSection = () => {
			setCurrentSection((prevSection): IcurrentSection => {
				switch (prevSection) {
					case "firstText":
						if (isTypeWriterComplete) {
							setCurrentSection("list");
						}
						return "firstText";
					case "list":
						if (isTypeWriterComplete) {
							setCurrentSection("endingText");
						}
						return "list";
					case "endingText":
						return "endingText";
					default:
						return currentSection;
				}
			});
		};

		handleNextSection();
	}, [currentSection, isTypeWriterComplete]);

	return (
		<>
			{typeWrite ? (
				<div className="flex items-end mr-auto gap-3">
					<Image src={chatbot} height={35} width={35} alt="satsat-ai" />
					<div className=" flex inMessage md:max-w-full w-full shadow-lg flex-col gap-1 p-4 rounded-3xl text-white">
						{currentSection === "firstText" && (
							<TypeWrite
								text={firstText}
								fontSize={fontSize}
								color="white"
								showCaret={false}
								timeToStartNewText={firstText?.length}
								typingSpeed={20}
								setIsTypeWriterComplete={setIsTypeWriterComplete}
								fontWeight="medium"
							/>
						)}
						{list && currentSection === "list" && (
							<>
								<p className="font-medium">{firstText}</p>
								<ul className="unordered-list">
									{list.map((listMessage: { id: string; msg: string }) => {
										return (
											<li
												style={{
													fontSize: `${fontSize ? fontSize : 16}px`,
												}}
												className="list-disc list-inside"
												key={listMessage.id}
											>
												<TypeWrite
													text={listMessage.msg}
													fontSize={fontSize}
													color="white"
													showCaret={false}
													timeToStartNewText={listMessage.msg?.length}
													typingSpeed={20}
													fontWeight="medium"
												/>
											</li>
										);
									})}
								</ul>
							</>
						)}
						{endingText && currentSection === "endingText" && (
							<>
								<p className="font-medium">{firstText}</p>
								<ul className="unordered-list">
									{list.map((listMessage: { id: string; msg: string }) => {
										return (
											<li
												style={{
													fontSize: `${fontSize ? fontSize : 16}px`,
												}}
												className="list-disc list-inside"
												key={listMessage.id}
											>
												<p>{listMessage.msg}</p>
											</li>
										);
									})}
								</ul>
								<TypeWrite
									text={endingText}
									fontSize={fontSize}
									color="white"
									showCaret={false}
									typingSpeed={15}
									timeToStartNewText={10}
									fontWeight="medium"
								/>
							</>
						)}

						<div className="flex items-center gap-3 mt-3">
							<ContentCopyIcon
								fontSize="small"
								className="active:scale-[1.03] cursor-pointer"
								color="inherit"
							/>

							<ThumbUpAltIcon
								fontSize="small"
								className="active:scale-[1.03] cursor-pointer"
								color="inherit"
							/>
							<ThumbDownIcon
								fontSize="small"
								className="active:scale-[1.03] cursor-pointer"
								color="inherit"
							/>
						</div>
					</div>
				</div>
			) : (
				<div className="flex w-full items-end mr-auto gap-3">
					<Image src={chatbot} height={35} width={35} alt="satsat-ai" />
					<div className=" flex inMessage shadow-lg flex-col gap-1 p-4 rounded-3xl text-white">
						{firstText && (
							<p
								style={{
									fontSize: `${fontSize ? fontSize : 16}px`,
								}}
							>
								{firstText}
							</p>
						)}

						{list && (
							<ul className="unordered-list">
								{list.map((listMessage) => {
									return (
										<li
											style={{
												fontSize: `${fontSize ? fontSize : 16}px`,
											}}
											className="list-disc list-inside"
											key={listMessage.id}
										>
											{listMessage.msg}
										</li>
									);
								})}
							</ul>
						)}
						{endingText && (
							<p
								style={{
									fontSize: `${fontSize ? fontSize : 16}px`,
								}}
							>
								{endingText}
							</p>
						)}
						<div className="flex items-center gap-3 mt-3">
							<ContentCopyIcon
								fontSize="small"
								className="active:scale-[1.03] cursor-pointer"
								color="inherit"
							/>
							<ThumbUpAltIcon
								fontSize="small"
								className="active:scale-[1.03] cursor-pointer"
								color="inherit"
							/>
							<ThumbDownIcon
								fontSize="small"
								className="active:scale-[1.03] cursor-pointer"
								color="inherit"
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default IncomingMessage;
