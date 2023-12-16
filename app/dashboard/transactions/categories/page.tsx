import CategoryClientPage from "@/components/CategoryClientPage";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SATSAT-Ai Categories",
};

const page = () => {
	return <CategoryClientPage />;
};

export default page;
