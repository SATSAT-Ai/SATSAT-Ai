import { IdeFault, IUser } from "./ChatMain";
import { Dispatch, KeyboardEvent, SetStateAction, useContext } from "react";
import { useForm } from "react-hook-form";
import { ChatContext } from "@/context/ChatContext";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import { IoMdArrowRoundUp } from "react-icons/io";
// import { FaStop } from "react-icons/fa";
import { IoArrowUp } from "react-icons/io5";
export interface IChatInput {
	loading: boolean;
	chatContainerId: string | undefined;
	setConversations: Dispatch<SetStateAction<IUser[]>>;
	className?: ClassValue;
}

const ChatInput = ({
	loading,
	chatContainerId,
	setConversations,
	className,
}: IChatInput) => {
	const { watch, reset, setFocus, handleSubmit, register } =
		useForm<IdeFault>();
	const { isOldConversation, setIsOldConversation } = useContext(ChatContext);

	const handleTextAreaResize = (e: any) => {
		e.target.style.height = "auto";
		e.target.style.height = `${e.target.scrollHeight}px`;
	};

	const getRandomHumorResponse = () => {
		const humorResponses = [
			"Don't let the beta label fool you! SatSat AI is constantly learning and evolving. While we're still under development, we can already provide valuable insights and guidance to help you manage your finances more effectively.  Think of it as having your own personal financial guru in training!",
			"We understand the importance of financial security. That's why SatSat AI is built on a foundation of cutting-edge technology and data analysis. While we're still in beta, we're confident in our ability to empower you to make informed financial decisions.  Consider us your financial co-pilot, navigating the complexities of money with you!",
			// Beta limitations with humor:
			"Shhh, it's a secret, but my financial knowledge is still under wraps! SatSat AI is in beta, so my responses might be a bit limited for now. But hey, think of it as a surprise gift – you never know what financial wisdom I might unlock next! (Just don't expect me to predict winning lottery numbers...yet!)",
			"I'm like a financial apprentice, eager to learn but still mastering the craft! SatSat AI is in beta, so my responses might be a bit restricted for now. But with your help and feedback, I'll become a financial guru in no time! (Maybe then I can help you decipher those mind-boggling bank statements!)",
			"Imagine a financial expert with a temporary case of laryngitis – that's kind of where I'm at! SatSat AI is in beta, so my responses might be shorter than usual. But fear not, I'm constantly learning and expanding my voice! (Just be patient, and who knows, maybe I'll even sing you a financial lullaby someday!)",
			// Beta limitations with user benefit:
			"Don't let the beta label fool you! While my responses might be limited for now, SatSat AI is constantly learning and evolving. With your help, I'll become a powerful tool to help you manage your finances with confidence. (Think of it as having a financial mentor in training, eager to impress!)",
			"Even a baby can take its first steps! SatSat AI is in beta, so my responses might be a bit restricted at times. But just like a growing child, I'm constantly learning and expanding my abilities.  (Think of it as having a financial sidekick who's always getting smarter!)",

			// Beta limitations with user action:
			"I'm like a library with a few missing books – still valuable, but not quite complete! SatSat AI is in beta, so my responses might be limited at times. But don't worry, with your help and feedback, I'll fill those knowledge gaps and become your one-stop financial resource! (Think of us as financial detectives, working together to unlock all the financial mysteries!)",
			"The future of finance is here, and you have a front-row seat! SatSat AI, though in beta, offers a glimpse into a world of personalized financial management. We're constantly learning and growing, and with your help, we'll become an indispensable tool for anyone looking to take control of their financial well-being.  Think of us as your financial fitness coach, still perfecting the workout plan, but ready to get you in financial shape!",
			"I'm still under development, so I can't answer everything. But hey, SatSat AI is about to move from beta, and with your help, we'll become your ultimate financial sidekick! (Think of it as having a financial trainee eager to impress!)",
			"As an AI language model, I can help you understand your finances better. SatSat AI might be in beta, but we're already analyzing data like a champ! (Just don't expect us to explain every economic theory in existence...yet!)",
			"My financial knowledge is like a delicious pizza - still in the oven, but the base is strong! SatSat AI is in beta, but we're constantly in beta and evolving to become your one-stop financial shop. (Maybe future versions can even recommend the best pizza toppings for your budget!)",
			"Financial security is our top priority. SatSat AI (currently in beta) leverages cutting-edge technology to analyze your finances and empower informed decisions.  (Consider us your financial co-pilot, navigating the complexities of money with you!)",
		];

		const randomIndex = Math.floor(Math.random() * humorResponses.length);
		return humorResponses[randomIndex];
	};

	const getRandomEndingText = () => {
		const endingTexts = [
			"Is there anything else I can help you with today?",
			"Let me know if you have any other financial questions!",
			"Feeling curious about your finances? Feel free to ask!",
			"Ready to unlock your financial potential? We're here to help!",
			"Together, let's navigate the world of finance with confidence!",
		];
		return endingTexts[Math.floor(Math.random() * endingTexts.length)];
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
		const WatchedUserMessage = watch("userMessage");
		if (e.key === "Enter" && !e.shiftKey) {
			if (chatContainerId && isOldConversation) {
				//remove scroll to top if old conversation is continued
				setIsOldConversation(false);
			}
			e.preventDefault();
			//sendMessage
			if (WatchedUserMessage?.trim()) {
				setConversations((prev) => [
					...prev,
					{
						id: Math.floor(Math.random() * 1000).toString(),
						message: WatchedUserMessage,
						from: "User",
					},
					{
						id: Math.floor(Math.random() * 1000).toString(),
						from: "Ai",
						firstText: getRandomHumorResponse(),
						endingText: getRandomEndingText(),
					},
				]);

				reset();
			}
		}
	};

	const onSubmit = (data: IdeFault) => {
		//if there is no chatContainerId create one or add up to existing;
		if (data.userMessage.trim()) {
			//sendMessage;
			setConversations((prev) => [
				...prev,
				{
					id: "skdfksdjf",
					message: data.userMessage,
					from: "User",
				},

				{
					from: "Ai",
					id: "lore34m",
					firstText: "Here is a demo response from SatSat AI.",
					list: [],
					endingText: `Is there anything else you'd like to inquire about?`,
				},
			]);
			setFocus("userMessage", { shouldSelect: true });
			reset();
		}
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			className={cn("text-white sticky bottom-0 w-full px-5", className)}
		>
			<div className="bg-[#071f07] max-w-3xl w-full order-1 mx-auto rounded-[26px]">
				<div
					tabIndex={0}
					className="flex w-full border border-white items-end justify-between h-full px-2 rounded-[26px] gap-5"
				>
					<textarea
						disabled={loading}
						rows={1}
						onInput={(e) => handleTextAreaResize(e)}
						autoFocus
						autoCorrect="true"
						onKeyDown={(e) => (handleKeyDown(e), handleTextAreaResize(e))}
						className="w-full max-h-52 overflow-y-auto focus:ring-transparent border-none outline-non text-text-normal placeholder:text-white/70 pb-3 placeholder:text-text-normal rounded-lg bg-brand-green h-auto bg-transparent"
						placeholder="Message SatSat AI..."
						{...register("userMessage", {
							required: false,
						})}
					/>
					<div className="h-full grid place-content-center py-2">
						<button
							type="submit"
							disabled={loading}
							tabIndex={0}
							className="bg-brand-green-darker shadow-md hover:opacity-75 p-2 rounded-[26px]"
						>
							<IoArrowUp fontSize={20} color="white" />
						</button>
						{/* <button
							type="submit"
							disabled={loading}
							tabIndex={0}
							className="bg-brand-green-darker shadow-md hover:opacity-75 p-3 rounded-[26px]"
						>
							
							<FaStop fontSize={15} color="white" />
						</button>  */}
					</div>
				</div>
			</div>
			<p className="text-center py-3 text-text-14 font-normal text-white/50">
				SatSat Ai can make mistakes, so check its responses.
			</p>
		</form>
	);
};

export default ChatInput;
