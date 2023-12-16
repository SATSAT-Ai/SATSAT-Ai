import ChatMain from "@/components/ChatMain";
import ChatSidebar from "@/components/ChatSidebar";
import ToggleSidebars from "@/components/ToggleSidebars";

const page = ({ params: { chatid } }: { params: { chatid: string } }) => {
	return (
		<>
			<div className=" sticky overflow-y-auto overflow-x-clip  top-10 w-full h-screen gap-5">
				<div className="flex justify-between">
					<div className="flex flex-[3] h-screen overflow-hidden w-full flex-col">
						<ToggleSidebars />
						{<ChatMain chatContainerId={chatid} />}
					</div>
					<ChatSidebar />
				</div>
			</div>
		</>
	);
};

export default page;
