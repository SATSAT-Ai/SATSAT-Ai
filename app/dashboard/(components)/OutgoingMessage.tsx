"use client";

import { useState, KeyboardEvent } from "react";
import { IUser } from "./ChatMain";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";
import { Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { generateInitials } from "@/helpers/generateUserInitials";

const OutgoingMessage = ({
	message,
	fontSize,
}: {
	message: IUser;
	fontSize?: number;
}) => {
	const handleTextAreaResize = (e: any) => {
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	const {
		watch,
		handleSubmit,
		formState: { errors },
		register,
	} = useForm<{ updatedMessage: string }>({
		defaultValues: { updatedMessage: message.message as string },
	});

	const [editChat, setEditChat] = useState(false);
	const [showEditOption, setShowEditOption] = useState(false);
	const [theOutGoingMessage, setTheOutGoingMessage] = useState<IUser>(message);
	const WatchMessage = watch();
	const session = useSession();
	const userName = session.data?.user.name;
	const userEmail = session.data?.user.email;

	const onSubmit = ({ updatedMessage }: { updatedMessage: string }) => {
		//find  message with id and update
		if (errors.updatedMessage?.message) {
			toast.error(errors.updatedMessage.message, {
				duration: 1500,
			});
		} else if (updatedMessage.trim()) {
			setTheOutGoingMessage((prev) => ({ ...prev, message: updatedMessage }));
			setShowEditOption(false);
			setEditChat(false);
		}
	};

	const saveUpdatedMessage = () => {
		if (errors.updatedMessage?.message) {
			toast.error(errors.updatedMessage.message, {
				duration: 1500,
			});
		} else if (WatchMessage.updatedMessage.trim()) {
			//find  message with id and update

			setTheOutGoingMessage((prev) => ({
				...prev,
				message: WatchMessage.updatedMessage,
			}));

			setEditChat(false);
		}
	};

	const handleKeydown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		if (e.key === "Enter" && !e.shiftKey) {
			e.preventDefault();
			saveUpdatedMessage();
		}
	};

	return (
		<>
			{!editChat ? (
				<div
					onMouseEnter={() => setShowEditOption(true)}
					onMouseLeave={() => setShowEditOption(false)}
					className="flex leading-6 gap-2 w-full p-3 rounded-xl bg-[#001f00] shadow-lg border border-white/20"
					// className="flex leading-6 gap-2 w-full p-3 rounded-xl bg-[#001f00] shadow-lg border border-white/20"
				>
					<p className="bg-white shrink-0 text-darker rounded-full text-text-14 aspect-square h-7 grid place-content-center font-extrabold">
						{generateInitials(userName!, userEmail!)}
					</p>

					<p
						style={{
							fontSize: `${fontSize ? fontSize : 16}px`,
							overflowWrap: "anywhere",
						}}
						className="break-words whitespace-pre-wrap text-white relative"
					>
						{theOutGoingMessage.message}
						<div
							className={cn(
								"group z-10 opacity-0 transition-all duration-150 ease-in scale-90 text-text-14 absolute w-16 grid place-content-center rounded-lg bg-brand-green-darker border border-white/20 p-1",

								{ "opacity-100 scale-100": showEditOption }
							)}
						>
							<button
								onClick={() => setEditChat(true)}
								type="button"
								className="flex items-center gap-1 py-px px-1 rounded-md group-hover:bg-green-700 w-full"
							>
								<Pencil size={14} />
								<p className="text-text-14">Edit</p>
							</button>
						</div>
					</p>
				</div>
			) : (
				<div className="flex items-center leading-6 gap-2 w-full p-3 rounded-xl bg-[#001f00] border border-white/10 shadow-lg">
					<p className="bg-white shrink-0 text-darker rounded-full text-text-14 aspect-square h-7 grid place-content-center font-extrabold">
						{generateInitials(userName!, userEmail!)}
					</p>
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="w-full flex flex-col gap-5"
					>
						<textarea
							rows={1}
							onInput={(e) => handleTextAreaResize(e)}
							autoFocus
							autoCorrect="true"
							onKeyDown={(e) => handleTextAreaResize(e)}
							className={` text-text-normal focus:border-white/30 hover:border-white/30 transition-colors duration-150 focus:ring-offset-0  text-white w-full focus:ring-0 bg-[#000a00] rounded-xl p-3 border border-white/20 scrollbar-hidden`}
							{...register("updatedMessage", {
								required: { value: true, message: "Message cannot be empty" },
							})}
						/>
						<div className="flex gap-5 items-end w-fit ml-auto z-10 relative">
							<button
								onClick={() => (setEditChat(false), setShowEditOption(false))}
								type="button"
								className="rounded-lg py-2 px-5 text-white hover:border-transparent text-[17px] border-white/15 bg-brand-green-darker/30 transition-all duration-200 border hover:bg-brand-green-darker font-bold"
							>
								Cancel
							</button>
							<button
								type="submit"
								className="text-white w-24 font-bold text-[17px] bg-yellow-600 hover:bg-yellow-700 text-center py-2 px-3 rounded-lg shadow-md"
							>
								Save
							</button>
						</div>
					</form>
				</div>
			)}
		</>
	);
};

export default OutgoingMessage;
