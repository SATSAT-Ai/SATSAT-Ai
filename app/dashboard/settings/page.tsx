import SettingsSteps from "@/components/SettingsSteps";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "SATSAT-AI settings",
};
const page = () => {
	return (
		<div className="min-h-svh text-white p-5 my-max">
			<SettingsSteps />
		</div>
	);
};

export default page;
