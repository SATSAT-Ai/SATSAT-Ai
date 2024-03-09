import { Metadata } from "next";
import UploadSteps from "../(components)/UploadSteps";

export const metadata: Metadata = {
	title: "SATSAT-Ai Upload your financial data",
};

const page = () => {
	return <UploadSteps />;
};

export default page;
