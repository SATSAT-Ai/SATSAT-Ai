import { Metadata } from "next";
import SettingsSteps from "../(components)/SettingsSteps";

export const metadata: Metadata = {
	title: "SatSat-Ai settings",
};
const page = () => {
	return (
		<div className="min-h-screen text-white p-5 my-max">
			<SettingsSteps />
		</div>
	);
};

export default page;
