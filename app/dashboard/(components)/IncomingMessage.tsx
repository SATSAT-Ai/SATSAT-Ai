"use client";

import { useEffect, useState } from "react";
import chatbot from "@/public/chatbot.svg";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { toast } from "react-hot-toast";
import TypeWrite from "@/components/TypeWrite";
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
	const [showMessageMore, setShowMessageMore] = useState(true);
	const [loading, setLoading] = useState(false);

	const handleCopyText = async () => {
		//copy text

		toast.dismiss();
		toast.success("Text copied", {
			style: { backgroundColor: "#071f07", color: "white" },
		});
	};

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
					<div
						className={`${
							showMessageMore ? "h-auto" : "h-[256px] overflow-clip"
						} flex inMessage md:max-w-full w-full shadow-lg flex-col gap-1 p-4 rounded-3xl text-white`}
					>
						{currentSection === "firstText" && (
							<TypeWrite
								text={firstText}
								fontSize={fontSize}
								color="white"
								showCaret={false}
								timeToStartNewText={firstText?.length}
								typingSpeed={15}
								setIsTypeWriterComplete={setIsTypeWriterComplete}
								fontWeight="medium"
							/>
						)}
						{list && currentSection === "list" && (
							<>
								<p className="font-medium flex items-center justify-between gap-3">
									{firstText}
								</p>
								<ul className="unordered-list pl-4 my-3">
									{list.map((listMessage: { id: string; msg: string }) => {
										return (
											<li
												style={{
													fontSize: `${fontSize ? fontSize : 16}px`,
												}}
												className="list-decimal list-outside"
												key={listMessage.id}
											>
												<TypeWrite
													text={listMessage.msg}
													fontSize={fontSize}
													color="white"
													showCaret={false}
													timeToStartNewText={listMessage.msg?.length}
													typingSpeed={15}
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
								<p className="font-medium flex items-center justify-between gap-3">
									{firstText}
									{currentSection === "endingText" && (
										<button
											type="button"
											aria-label="toggle more Ai text"
											aria-expanded={showMessageMore}
										>
											{showMessageMore ? (
												<KeyboardArrowUpIcon
													fontSize="large"
													onClick={() => setShowMessageMore(false)}
												/>
											) : (
												<KeyboardArrowDownIcon
													onClick={() => setShowMessageMore(true)}
													fontSize="large"
												/>
											)}
										</button>
									)}
								</p>
								<ul className="unordered-list pl-4 my-3">
									{list.map((listMessage: { id: string; msg: string }) => {
										return (
											<li
												style={{
													fontSize: `${fontSize ? fontSize : 16}px`,
												}}
												className="list-decimal list-outside"
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

						<div
							className="flex items-center gap-3 mt-3"
							onClick={handleCopyText}
						>
							<ContentCopyIcon
								fontSize="small"
								className="active:scale-[1.03] cursor-pointer"
								color="inherit"
							/>
						</div>
					</div>
				</div>
			) : (
				<div className="flex w-full items-end mr-auto gap-3">
					<Image
						className={`${loading ? "hidden md:flex" : "hidden sm:flex"}`}
						src={chatbot}
						height={30}
						width={30}
						alt="satsat-ai"
					/>
					<div className=" flex inMessage shadow-lg flex-col p-4 rounded-3xl text-white">
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
							<ul className="unordered-list pl-4 my-3">
								{list.map((listMessage) => {
									return (
										<li
											style={{
												fontSize: `${fontSize ? fontSize : 16}px`,
											}}
											className="list-decimal list-outside"
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
								className="text-text-20 active:scale-[1.03] cursor-pointer"
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
