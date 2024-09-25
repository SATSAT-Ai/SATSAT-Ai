import SouthIcon from "@mui/icons-material/South";

const ChatScrollToBottom = ({
	scrollToBottom,
}: {
	scrollToBottom: () => void;
}) => {
	return (
		<button
			type="button"
			tabIndex={0}
			aria-label="scroll to bottom"
			onClick={scrollToBottom}
			className={`w-fit ml-auto text-white cursor-pointer`}
		>
			<div className="bg-brand-green-darker border border-white/10 h-12 w-12 rounded-full grid items-center justify-center">
				<SouthIcon fontSize="small" color="inherit" />
			</div>
		</button>
	);
};

export default ChatScrollToBottom;
