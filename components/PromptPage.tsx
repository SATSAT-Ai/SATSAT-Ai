import { IUser } from "./ChatMain";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";
import TelegramIcon from "@mui/icons-material/Telegram";

const PromptPage = () => {
	return (
		<div className="grid grid-cols-1 z-0 md:gap-0 p-5 sm:p-10 lg:grid-cols-2 text-grey-lightest">
			<div className="pb-5 lg:pb-0 lg:pr-5">
				<h2 className="text-[30px] silver-text sm:text-[36px] text-center sm:text-left font-semibold text-white">
					Chat With Your Financial Data
				</h2>
				<ul className="flex text-center items-center sm:text-left gap-3 flex-col">
					<li>
						<p className="mb-2 capitalize text-brand-green text-text-20">
							Streamline your finances with smart chatbot analysis
						</p>
						<span className="text-text-normal font-normal">
							Managing your finances has never been this intuitive and
							hassle-free. Our platform empowers you to effortlessly interact
							with your financial data through our advanced AI chatbot. Simply
							upload your bank statement, and within moments, gain access to a
							wealth of insights and trends about your spending habits, income
							sources, and more. No more crunching numbers or deciphering
							complex spreadsheets. Our user-friendly chat interface puts all
							the information you need at your fingertips.
						</span>
					</li>
					<li>
						<p className="mb-2 capitalize text-brand-green text-text-20">
							Gain Valuable insights instantly
						</p>
						<span className="text-text-normal font-normal">
							With our financial statements analyzer, understanding your
							financial health is a breeze. Want to know your monthly spending
							trends? Curious about how much you spent on dining out last month?
							Our chatbot has you covered. It provides concise and clear
							summaries, ensuring you have a complete understanding of your
							financial situation without the headache of navigating complicated
							reports. Take control of your financial future with the insights
							you need, precisely when you need them.
						</span>
					</li>
					<li>
						<p className="mb-2 capitalize text-brand-green text-text-20">
							Secure, Effortless, and Personalized
						</p>
						<span className="text-text-normal font-normal">
							Rest easy knowing your financial data is handled with the
							utmost,security. Our platform employs industry-leading encryption
							protocols to safeguard your sensitive information. Your data is
							for your eyes only.
						</span>
					</li>
				</ul>
			</div>
			<div className="pt-5 mx-auto lg:pt-0 before:absolute before:top-0 before:left-0 before:w-full before:h-[1px] before:bg-silver-gradient2 lg:before:h-full lg:before:w-[1px] lg:before:top-0 lg:before:left-0 before:rounded-lg lg:before:bg-silver-gradient lg:pl-5 relative flex flex-col gap-5">
				<OutgoingMessage
					message={
						"Can you show me my monthly spending trends?" as unknown as IUser
					}
				/>
				<IncomingMessage
					message={{
						id: "lorem",
						firstText: `Of course! Here's a breakdown of your monthly spending trends`,
						list: [
							{ id: "lorem", title: "", msg: "January:GHS 1500" },
							{ id: "loreem", title: "", msg: "Febuary:GHS 1800" },
							{ id: "3loreem", title: "", msg: "March:GHS 1400" },
						],
						endingText: `Is there anything else you'd like to inquire about?`,
					}}
				/>
				<OutgoingMessage
					message={
						"What about my total income for the past quarter?" as unknown as IUser
					}
				/>
				<IncomingMessage
					message={{
						id: "lorem",
						firstText: `Your total income for the past quarter is GHS 10,500.`,
						list: [],
						endingText: `Is there anything else you'd like to inquire about?`,
					}}
				/>
				<div
					tabIndex={0}
					className="flex mt-auto border items-center p-2 justify-between rounded-xl px-2 gap-5"
				>
					<textarea
						rows={1}
						disabled
						className="w-full outline-none bg-brand-green border-none h-auto bg-transparent"
						placeholder="Send your message..."
					/>

					<TelegramIcon fontSize="large" color="inherit" />
				</div>
			</div>
		</div>
	);
};

export default PromptPage;
