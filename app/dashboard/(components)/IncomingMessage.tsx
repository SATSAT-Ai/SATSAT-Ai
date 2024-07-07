"use client";

import { MutableRefObject, useCallback, useEffect, useState } from "react";
import chatbot from "@/public/chatbot.svg";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { toast } from "react-hot-toast";
import TypeWrite from "@/components/TypeWrite";
import { IUser } from "./ChatMain";
// //track history of conversations
// interface ParentChat {
// 	id: string;
// 	timestamp: string;
// 	conversations: IcomingProp[];
// }

interface incomingMessageProp {
	fontSize?: number;
	typeWrite?: boolean;
	list: { id: string; msg: string }[];
	firstText: string;
	endingText: string;
	chatContainerRef: MutableRefObject<HTMLDivElement | null>;
	conversations: IUser[];
}

type currentSectionType = "firstText" | "list" | "endingText";

const IncomingMessage = ({
	list,
	firstText,
	fontSize,
	typeWrite,
	endingText,
	chatContainerRef,
	conversations,
}: incomingMessageProp) => {
	const [currentSection, setCurrentSection] =
		useState<currentSectionType>("firstText");
	const [isTypeWriterComplete, setIsTypeWriterComplete] = useState(false); //purposefully for the rendering of lists and texts
	const [aiResponseCompleted, setAiResponseCompleted] = useState(false); //used to determined if response is completed
	const [showMessageMore, setShowMessageMore] = useState(true);
	const [loading, setLoading] = useState(false);

	const handleCopyText = async () => {
		//!Todo copy text

		toast.dismiss();
		toast.success("Text copied", {
			style: { backgroundColor: "#071f07", color: "white" },
		});
	};

	useEffect(() => {
		const handleNextSection = () => {
			setCurrentSection((prevSection): currentSectionType => {
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

	useEffect(() => {
		// handleScroll();
		// chatContainerRef?.current?.scrollTo({
		// 	top: chatContainerRef.current.scrollHeight,
		// 	behavior: "smooth",
		// });
		// chatContainerRef.current?.addEventListener("scroll", (e) => {
		// console.log(isTypeWriterComplete);
		// console.log(e);
		// console.log("scroll");
		// });
	});
	// ======================= !!Todo
	const handleScroll = useCallback(() => {
		const element = chatContainerRef.current;
		if (!element) return;
		element.scrollTop = element.scrollHeight;
	}, [chatContainerRef]);

	// useEffect(() => {
	// 	const element = chatContainerRef.current;
	// 	if (!element || !typeWrite) return;
	// 	element.addEventListener("scroll", handleScroll);
	// 	element.scrollTop = element.scrollHeight;
	// 	return () => element.removeEventListener("scroll", handleScroll);
	// }, [chatContainerRef, handleScroll, typeWrite]);
	// =======================

	return (
		<>
			{typeWrite ? (
				<div className="flex items-end gap-3">
					<Image src={chatbot} height={35} width={35} alt="satsat-ai" />
					<div
						className={`${
							showMessageMore ? "h-auto" : "h-[256px] overflow-clip"
						} flex inMessage md:max-w-[70%] w-full shadow-lg flex-col gap-1 p-4 rounded-3xl text-white`}
					>
						{currentSection === "firstText" && (
							<TypeWrite
								text={firstText}
								fontSize={fontSize}
								color="white"
								showCaret={false}
								timeToStartNewText={firstText?.length}
								typingSpeed={1}
								setIsTypeWriterComplete={setIsTypeWriterComplete}
								fontWeight="normal"
								textAlign="left"
							/>
						)}
						{list && currentSection === "list" && (
							<>
								<p className="font-normal flex items-center justify-between gap-3">
									{firstText}
								</p>
								<ul className="unordered-list pl-4 my-3">
									{list?.map((listMessage: { id: string; msg: string }) => {
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
													typingSpeed={2}
													fontWeight="normal"
												/>
											</li>
										);
									})}
								</ul>
							</>
						)}
						{endingText && currentSection === "endingText" && (
							<>
								<p className="font-normal flex items-center justify-between gap-3">
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
								{list && (
									<ul className="unordered-list pl-4 my-3">
										{list?.map((listMessage: { id: string; msg: string }) => {
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
								)}
								<TypeWrite
									text={endingText}
									fontSize={fontSize}
									color="white"
									showCaret={false}
									typingSpeed={3}
									timeToStartNewText={10}
									setIsTypeWriterComplete={setAiResponseCompleted}
									fontWeight="normal"
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
								{list?.map((listMessage) => {
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
