import TelegramIcon from "@mui/icons-material/Telegram";
import { UseFormRegister } from "react-hook-form";
import { IdeFault } from "./ChatMain";
import { KeyboardEvent } from "react";

export interface IChatInput {
	loading: boolean;
	handleTextAreaResize: (e: any) => void;
	handleKeyDown: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
	register: UseFormRegister<IdeFault>;
}

const ChatInput = ({
	loading,
	handleKeyDown,
	handleTextAreaResize,
	register,
}: IChatInput) => {
	return (
		<div className="bg-[#071f07] rounded-lg max-w-3xl w-full order-1 mx-auto">
			<div
				tabIndex={0}
				className="flex w-full mt-auto border border-white items-center p-1 justify-between rounded-lg px-2 gap-5"
			>
				<textarea
					disabled={loading}
					rows={1}
					onInput={(e) => handleTextAreaResize(e)}
					autoFocus
					autoCorrect="true"
					onKeyDown={(e) => (handleKeyDown(e), handleTextAreaResize(e))}
					className="w-full focus:ring-transparent border-none outline-non text-text-normal scrollbar-hidden placeholder:text-white/70 placeholder:text-text-normal rounded-lg bg-brand-green h-auto bg-transparent"
					placeholder="Message SatSat AI..."
					{...register("userMessage", {
						required: false,
					})}
				/>
				<button type="submit" disabled={loading}>
					<TelegramIcon
						tabIndex={0}
						fontSize="large"
						className="active:scale-[1.02]"
						color="inherit"
						aria-hidden="false"
					/>
				</button>
			</div>
		</div>
	);
};

export default ChatInput;
