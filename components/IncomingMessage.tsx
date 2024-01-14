"use client";

import React, { useCallback, useEffect, useState } from "react";
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
	message: {
		id: string;
		firstText: string;
		timeStamp?: string;
		list?: { id: string; title?: string; msg: string }[];
		endingText: string;
	};
}

const IncomingMessage = ({ message, fontSize, typeWrite }: IcomingProp) => {
	return (
		<>
			{typeWrite ? (
				<div className="flex items-end mr-auto gap-3">
					<Image src={chatbot} height={35} width={35} alt="satsat-ai" />
					<div className=" flex inMessage w-full shadow-lg flex-col gap-1 p-4 rounded-3xl text-white">
						<TypeWrite
							text={message.firstText}
							fontSize={fontSize}
							color="white"
							showCaret={true}
							timeToStartNewText={1000}
							typingSpeed={20}
						/>

						{message.list && (
							<ul className="unordered-list">
								{message.list.map((listMessage) => {
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
												showCaret={true}
												timeToStartNewText={1000}
												typingSpeed={20}
											/>
										</li>
									);
								})}
							</ul>
						)}
						{message.endingText && (
							<TypeWrite
								text={message.endingText}
								fontSize={fontSize}
								color="white"
								showCaret={true}
								timeToStartNewText={1000}
								typingSpeed={20}
							/>
						)}
						<div className="flex items-center gap-3 mt-3">
							<ContentCopyIcon
								fontSize="small"
								className="active:scale-[1.03] cursor-pointer"
								color="inherit"
							/>
							{/* <ThumbUpAltIcon
						fontSize="small"
						className="active:scale-[1.03] cursor-pointer"
						color="inherit"
					/>
					<ThumbDownIcon
						fontSize="small"
						className="active:scale-[1.03] cursor-pointer"
						color="inherit"
					/> */}
						</div>
					</div>
				</div>
			) : (
				<div className="flex w-full items-end mr-auto gap-3">
					<Image src={chatbot} height={35} width={35} alt="satsat-ai" />
					<div className=" flex inMessage shadow-lg flex-col gap-1 p-4 rounded-3xl text-white">
						{message.firstText && (
							<p
								style={{
									fontSize: `${fontSize ? fontSize : 16}px`,
								}}
							>
								{message.firstText}
							</p>
						)}

						{message.list && (
							<ul className="unordered-list">
								{message.list.map((listMessage) => {
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
						{message.endingText && (
							<p
								style={{
									fontSize: `${fontSize ? fontSize : 16}px`,
								}}
							>
								{message.endingText}
							</p>
						)}
						<div className="flex items-center gap-3 mt-3">
							<ContentCopyIcon
								fontSize="small"
								className="active:scale-[1.03] cursor-pointer"
								color="inherit"
							/>
							{/* <ThumbUpAltIcon
						fontSize="small"
						className="active:scale-[1.03] cursor-pointer"
						color="inherit"
					/>
					<ThumbDownIcon
						fontSize="small"
						className="active:scale-[1.03] cursor-pointer"
						color="inherit"
					/> */}
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default IncomingMessage;
