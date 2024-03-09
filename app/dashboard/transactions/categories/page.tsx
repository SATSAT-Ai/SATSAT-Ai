import { Metadata } from "next";
import CategoryClientPage from "../../(components)/CategoryClientPage";

export const metadata: Metadata = {
	title: "SATSAT-Ai Categories",
};

const page = () => {
	return <CategoryClientPage />;
};

export default page;
