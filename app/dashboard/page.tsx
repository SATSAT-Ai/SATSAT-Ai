import DashboardClientPage from "./(components)/DashboardClientPage";

// metadata only works in server components
export const metadata = {
	title: "SatSat-Ai Dashboard",
};

const page = () => {
	return <DashboardClientPage />;
};

export default page;
