"use client";

import { useState, KeyboardEvent } from "react";
import EditIcon from "@mui/icons-material/Edit";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import { IUser } from "./ChatMain";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const OutgoingMessage = ({
	message,
	fontSize,
}: {
	message: IUser;
	fontSize?: number;
}) => {
	const handleTextAreaInput = (e: any) => {
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
	const [theOutGoingMessage, setTheOutGoingMessage] = useState<IUser>(message);
	const WatchMessage = watch();

	const onSubmit = ({ updatedMessage }: { updatedMessage: string }) => {
		//find  message with id and update
		if (errors.updatedMessage?.message) {
			toast.error(errors.updatedMessage.message, {
				duration: 1500,
			});
		} else if (updatedMessage.trim()) {
			setTheOutGoingMessage((prev) => ({ ...prev, message: updatedMessage }));
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
				<div className="flex items-end gap-3 ml-auto w-fit">
					<div className="outmessage flex shadow-lg flex-col items-end gap-3 p-4 rounded-3xl text-white">
						<div
							style={{
								overflowWrap: "anywhere",
							}}
						>
							{(theOutGoingMessage.message as string)
								?.split("\n")
								.map((message, index) => (
									<p
										key={index}
										style={{
											fontSize: `${fontSize ? fontSize : 16}px`,
										}}
									>
										{message}
										<br />
									</p>
								))}
						</div>

						<EditIcon
							className="text-text-20 active:scale-[1.03] cursor-pointer"
							onClick={() => setEditChat(true)}
						/>
					</div>
					<PersonPinIcon
						className="text-text-24 hidden sm:flex sm:text-[30px]"
						color="inherit"
					/>
				</div>
			) : (
				<div className="flex  min-h-[40%] items-end gap-3 w-full ml-auto">
					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex h-full w-full outmessage rounded-3xl p-4 shadow-lg flex-col items-end gap-4"
					>
						<textarea
							onInput={(e) => handleTextAreaInput(e)}
							onKeyDown={(e) => handleKeydown(e)}
							autoFocus
							autoCorrect="true"
							style={{ fontSize }}
							className={` text-white w-full flex-1 bg-transparent custom-scroll2 border-none outline-none`}
							{...register("updatedMessage", {
								required: { value: true, message: "Message cannot be empty" },
							})}
						/>
						<div className="flex gap-5 items-center">
							<button
								type="submit"
								className="text-white text-[13px] active:scale-[1.02] bg-brand-green-darker py-2 px-3 rounded-lg shadow-md"
							>
								Save & Submit
							</button>
							<button
								onClick={() => setEditChat(false)}
								type="button"
								className="border rounded-lg py-2 px-3 text-white text-text-12 md:text-[13px]"
							>
								Cancel
							</button>
						</div>
					</form>
					<PersonPinIcon
						className="text-text-24 hidden sm:flex sm:text-[30px]"
						color="inherit"
					/>
				</div>
			)}
		</>
	);
};

export default OutgoingMessage;
