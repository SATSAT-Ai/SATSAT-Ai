import ChatMain from "../../(components)/ChatMain";
import ChatSidebar from "../../(components)/ChatSidebar";
import TopShade from "../../(components)/TopShade";

const page = ({ params: { chatId } }: { params: { chatId: string } }) => {
	return (
		<div className="flex h-full overflow-clip">
			<div className="flex flex-[3] h-full overflow-hidden w-full flex-col">
				<TopShade />
				<ChatMain chatContainerId={chatId} />
			</div>
			<ChatSidebar />
		</div>
	);
};

export default page;
