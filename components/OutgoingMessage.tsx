import React from "react";
import { MdEditNote } from "react-icons/md";
import PersonPinIcon from "@mui/icons-material/PersonPin";

const OutgoingMessage = ({ message }: { message: string }) => {
	return (
		<div className="flex items-end gap-3">
			<div className="outmessage flex shadow-lg flex-col items-end gap-3 p-4 rounded-3xl text-white">
				<p>{message}</p>
				<MdEditNote color="white" size={25} />
			</div>
			<PersonPinIcon fontSize="large" color="inherit" />
		</div>
	);
};

export default OutgoingMessage;
