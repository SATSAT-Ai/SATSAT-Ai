import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/Accordion";

interface FaqProps {
	faqs: { title: string; content: string }[];
	type?: "single" | "multiple";
	collapsible?: boolean;
}
const Faq = ({ faqs, type = "single", collapsible = true }: FaqProps) => {
	return (
		<Accordion
			type={type}
			collapsible={collapsible}
			className="w-full flex flex-col gap-4"
		>
			{faqs.map((faq, idx) => {
				return (
					<AccordionItem
						className="bg-brand-green/10 border border-white/10 px-3 rounded-md"
						key={faq.title}
						value={`item-${idx}`}
						color="white"
					>
						<AccordionTrigger>{faq.title}</AccordionTrigger>
						<AccordionContent>{faq.content}</AccordionContent>
					</AccordionItem>
				);
			})}
		</Accordion>
	);
};

export default Faq;
