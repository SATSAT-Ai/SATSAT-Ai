import NorthIcon from "@mui/icons-material/North";

const ChatScrolltoBottom = ({ scrolltoTop }: { scrolltoTop: () => void }) => {
	return (
		<button
			type="button"
			aria-label="scroll to top"
			tabIndex={0}
			onClick={scrolltoTop}
			className={`  left-2/3 w-fit ml-auto text-white  cursor-pointer`}
		>
			<div className="h-12 w-12 grid active:scale-[1.03] ml-auto bg-grey-light/70 rounded-full justify-center items-center">
				<NorthIcon fontSize="small" color="inherit" />
			</div>
		</button>
	);
};

export default ChatScrolltoBottom;
