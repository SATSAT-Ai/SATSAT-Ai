import React from "react";
import chatbot from "@/public/chatbot.svg";
import Image from "next/image";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";

// //track history of conversations
// interface ParentChat {
// 	id: string;
// 	timestamp: string;
// 	conversations: IcomingProp[];
// }

interface IcomingProp {
	message: {
		id: string;
		firstText: string;
		timeStamp?: string;
		list?: { id: string; title?: string; msg: string }[];
		endingText: string;
	};
}

const IncomingMessage = ({ message }: IcomingProp) => {
	return (
		<div className="flex items-end mr-auto gap-3">
			<Image src={chatbot} height={35} width={35} alt="satsat-ai" />
			<div className=" flex inMessage shadow-lg flex-col gap-3 p-4 rounded-3xl text-white">
				{message.firstText && (
					<div>
						<p>{message.firstText}</p>
					</div>
				)}

				{message.list && (
					<ul className="unordered-list">
						{message.list.map((listMessage) => {
							return (
								<li className="list-disc list-inside" key={listMessage.id}>
									{listMessage.msg}
								</li>
							);
						})}
					</ul>
				)}
				{message.endingText && (
					<div>
						<p>{message.endingText}</p>
					</div>
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
	);
};

export default IncomingMessage;
