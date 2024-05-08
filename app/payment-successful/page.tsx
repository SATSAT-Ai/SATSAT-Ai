import PaymentSuccess from "@/components/PaymentSuccess";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SatSat-Ai Payment-successful",
};
const page = () => {
	return <PaymentSuccess />;
};

export default page;
