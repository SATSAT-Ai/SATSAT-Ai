import SouthIcon from "@mui/icons-material/South";

const ChatScrolltoTop = ({
	scrollToBottom,
}: {
	scrollToBottom: () => void;
}) => {
	return (
		<div
			tabIndex={0}
			role="button"
			aria-label="scroll to bottom"
			onClick={scrollToBottom}
			className={` sticky top-[80%] translate-y-1/2 mx-auto  text-white active:scale-[1.03] h-14 w-14 grid aspect-square justify-center items-center rounded-full cursor-pointer`}
		>
			<div className="bg-grey-light/70 h-12 w-12 rounded-full grid items-center justify-center">
				<SouthIcon fontSize="small" color="inherit" />
			</div>
		</div>
	);
};

export default ChatScrolltoTop;
