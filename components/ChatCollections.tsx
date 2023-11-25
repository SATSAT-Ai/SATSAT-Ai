import { Ichat } from "@/interface";
import { PiChatCircleTextFill } from "react-icons/pi";

interface IChatCollections {
	showFiles: boolean;
	chatCollections: Ichat[];
}

const ChatCollections = ({ chatCollections, showFiles }: IChatCollections) => {
	return (
		<div
			className={`flex flex-col px-3 py-2 w-full ${
				showFiles ? "h-[380px]" : "h-52"
			} custom-scroll px-1 overflow-y-auto gap-3 mt-3`}
		>
			{chatCollections.map((collection) => {
				return (
					<p
						key={collection.id}
						className="flex items-center gap-2 text-text-normal font-medium"
					>
						<PiChatCircleTextFill size={25} />
						{collection.title}
					</p>
				);
			})}
		</div>
	);
};

export default ChatCollections;
