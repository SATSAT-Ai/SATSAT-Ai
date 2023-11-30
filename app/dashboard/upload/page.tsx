import UploadSteps from "@/components/UploadSteps";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SATSAT-Ai Upload your financial data",
};

const page = () => {
	return <UploadSteps />;
};

export default page;
