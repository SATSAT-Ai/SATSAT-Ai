import { BsFillFileEarmarkBreakFill } from "react-icons/bs";
import { MdDashboard, MdDocumentScanner } from "react-icons/md";
import { PiDetectiveFill, PiWebhooksLogoBold } from "react-icons/pi";
import { GiArtificialIntelligence } from "react-icons/gi";
import { HiDocumentSearch } from "react-icons/hi";
import { FaChartSimple } from "react-icons/fa6";
import { featureData } from "../interface/interface";
import { MdManageAccounts } from "react-icons/md";
import { MdOutlineQueryStats } from "react-icons/md";
import { IoDocumentLockOutline } from "react-icons/io5";

export const featuresData: featureData[] = [
	{
		icon: <BsFillFileEarmarkBreakFill size={40} color="white" />,
		title: "Query OCR, PDF, CSV and More",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "statement-scan",
	},
	{
		icon: <MdDashboard size={40} color="white" />,
		title: "Intuitive Dashboard",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "intuitive-dashboard",
	},
	{
		icon: <PiDetectiveFill size={40} color="white" />,
		title: "Fraud Detection",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "fraud-detection",
	},
	{
		icon: (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="w-10 h-10"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
				/>
			</svg>
		),
		title: "AI chatbot",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "ai-chatbot",
	},
	{
		icon: <IoDocumentLockOutline size={40} color="white" />,
		title: "Smart Document Detection",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "smart-document-detection",
	},
	{
		icon: <MdDocumentScanner size={40} color="white" />,
		title: "Document Scanner",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "document-scanner",
	},
	{
		icon: <GiArtificialIntelligence size={40} color="white" />,
		title: "Artificial Intelligence and Machine Learning",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "artificial-intelligence",
	},
	{
		icon: <HiDocumentSearch size={40} color="white" />,
		title: "Insights to financial documents",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "insights-to-financial-documents",
	},
	{
		icon: <FaChartSimple size={40} color="white" />,
		title: "Charts and Graphs",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "charts-and-graph",
	},
	{
		icon: <MdManageAccounts size={40} color="white" />,
		title: "Client Profile Management",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "client-profile-management",
	},
	{
		icon: <MdOutlineQueryStats size={40} color="white" />,
		title: "Alternative Scoring",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "altenative-scoring",
	},
	{
		icon: <PiWebhooksLogoBold size={40} color="white" />,
		title: "API and Webhooks",
		para: " amet amet pellentesque. Arcu mollis sem aenean aliquam diam enim tortor et. Pharetra neque interdum ac arcu nec morbi placerat in pellentesque. Eget ut adipiscing in ac. Turpis nunc sit in erat tristique facilisi vitae nec morbi.",
		link: "/",
		id: "api-and-webhooks",
	},
];
