"use client";

import { MutableRefObject, useEffect, useState } from "react";
// import chatbot from "@/public/chatbot.svg";
// import Image from "next/image";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import { toast } from "react-hot-toast";
import TypeWrite from "@/components/TypeWrite";
import { IAi } from "./ChatMain";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";

interface incomingMessageProp {
	fontSize?: number;
	typeWrite?: boolean;
	chatContainerRef: MutableRefObject<HTMLDivElement | null>;
	response: IAi;
}

const IncomingMessage = ({
	fontSize,
	typeWrite,
	response,
	chatContainerRef,
}: incomingMessageProp) => {
	const [responseIndex, setResponseIndex] = useState<null | number>(null);

	const [completedTypedAiResponses, setCompletedTypedAiResponses] = useState<
		string[]
	>([]);

	const [isTypeWriterComplete, setIsTypeWriterComplete] = useState(false);
	const [showMessageMore, setShowMessageMore] = useState(true);
	const [showResponseOptions, setShowResponseOptions] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleCopyText = () => {
		//!Todo copy text
		// toast.dismiss();
		// toast.success("Text copied", {
		// 	style: { backgroundColor: "#071f07", color: "white" },
		// });
	};

	useEffect(() => {
		let interval: NodeJS.Timeout;
		const chatContainer = chatContainerRef?.current!;
		const { scrollHeight, scrollTop } = chatContainer;

		if (!isTypeWriterComplete) {
			interval = setInterval(() => {
				chatContainer.scrollTo({
					top: scrollHeight + scrollTop,
				});
			}, 200);
		}
		chatContainer.scrollTo({
			top: scrollHeight + scrollTop,
		});
		return () => {
			clearInterval(interval);
		};
	}, [chatContainerRef, isTypeWriterComplete]);

	useEffect(() => {
		if (responseIndex != null)
			if (responseIndex < response.response.length) {
				setCompletedTypedAiResponses((prev) => [
					...prev,
					response.response[responseIndex],
				]);
			}
	}, [responseIndex, response.response]);

	return (
		<>
			{typeWrite ? (
				<div
					className="flex items-end gap-3"
					onMouseEnter={() => setShowResponseOptions(true)}
					onMouseLeave={() => setShowResponseOptions(false)}
				>
					<div
						className={`${
							showMessageMore ? "h-auto" : "h-[256px] overflow-clip"
						} flex bg-[#000a00] border relative border-white/10 w-full shadow-lg flex-col gap-1 p-4 rounded-2xl text-white`}
					>
						{[...new Set(completedTypedAiResponses)].map(
							(typedResponse, index) => (
								<p
									style={{
										overflowWrap: "anywhere",
									}}
									className="text-[15px] font-normal my-2"
									key={index}
								>
									{typedResponse}
								</p>
							)
						)}

						<TypeWrite
							text={response.response}
							color="white"
							showCaret={false}
							timeToStartNewText={null}
							onComplete={setIsTypeWriterComplete}
							onWordIndexChange={setResponseIndex}
							typingSpeed={1}
							textAlign="left"
							className={cn(
								{
									hidden: responseIndex === response.response.length - 1,
								},
								"text-[15px] md:text-[15px]"
							)}
						/>
						<div
							className={cn(
								"group opacity-0 transition-all z-20 duration-150 ease-in scale-90 text-text-14 absolute -bottom-3 right-3 w-16 rounded-lg bg-[#000a00] border border-white/20 p-1",

								{ "opacity-100 scale-100": showResponseOptions }
							)}
						>
							<button
								type="button"
								className="flex items-center gap-1 py-px px-1 rounded-md group-hover:bg-green-900 w-full"
							>
								<Copy className="" size={12} />
								<p className="text-text-12">Copy</p>
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className="flex w-full items-end mr-auto gap-3"></div>
			)}
		</>
	);
};

export default IncomingMessage;
