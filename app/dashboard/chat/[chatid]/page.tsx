import ChatSidebar from "@/components/ChatSidebar";
import ToggleSidebars from "@/components/ToggleSidebars";

const page = ({ params: { chatid } }: { params: { chatid: string } }) => {
	return (
		<>
			<div className=" sticky overflow-y-auto  top-10 w-full my-min-h gap-5">
				<div className="flex justify-between">
					<div className="flex flex-1 w-full  flex-col">
						<ToggleSidebars />
						<div>
							<h1 className="text-white">{chatid}</h1> main
						</div>
					</div>
					<ChatSidebar />
				</div>
			</div>
		</>
	);
};

export default page;
