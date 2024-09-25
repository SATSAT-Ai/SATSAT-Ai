import NorthIcon from "@mui/icons-material/North";

const ChatScrollToTop = ({ scrollToTop }: { scrollToTop: () => void }) => {
	return (
		<button
			type="button"
			aria-label="scroll to top"
			tabIndex={0}
			onClick={scrollToTop}
			className={`  left-2/3 w-fit ml-auto text-white  cursor-pointer`}
		>
			<div className="h-12 w-12 grid bg-brand-green-darker border ml-auto rounded-full justify-center items-center">
				<NorthIcon fontSize="small" color="inherit" />
			</div>
		</button>
	);
};

export default ChatScrollToTop;
