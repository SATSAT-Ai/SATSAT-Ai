import ChatSidebar from "@/components/ChatSidebar";
import ToggleSidebars from "@/components/ToggleSidebars";

const page = ({ params: { chatid } }: { params: { chatid: string } }) => {
	return (
		<>
			<div className=" sticky overflow-y-auto  top-10 w-full h-screen gap-5">
				<div className="flex justify-between">
					<div className="flex flex-1 w-full  flex-col">
						<ToggleSidebars />
						<div className="p-5 mt-16">
							<h1 className="text-white m-0">{chatid}</h1>
						</div>
					</div>
					<ChatSidebar />
				</div>
			</div>
		</>
	);
};

export default page;
