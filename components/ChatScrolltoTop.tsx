import NorthIcon from "@mui/icons-material/North";

const ChatScrolltoBottom = ({ scrolltoTop }: { scrolltoTop: () => void }) => {
	return (
		<div
			role="button"
			aria-label="scroll to top"
			tabIndex={0}
			onClick={scrolltoTop}
			className={` fixed left-2/3 top-[80%] w-fit ml-auto text-white   cursor-pointer`}
		>
			<div className="h-12 mr-5 w-12 grid active:scale-[1.03] ml-auto bg-grey-light/70 rounded-full justify-center items-center">
				<NorthIcon fontSize="small" color="inherit" />
			</div>
		</div>
	);
};

export default ChatScrolltoBottom;
