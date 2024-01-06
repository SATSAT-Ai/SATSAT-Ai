import CategoryDetails from "@/components/CategoryDetails";

const page = ({
	params: { categoryId },
}: {
	params: { categoryId: string };
}) => {
	// fetch data based on paramId

	const categoryData = [
		{
			id: "sdf9sf3434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdf93sdf434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdf9334434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdf9ff3434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
		{
			id: "sdfsd93434",
			date: "12-01-2023",
			name: "Frozen yoghurt",
			number: 8,
			Amount: 24,
		},
	];

	const filteredcategoryData = categoryData.filter(
		(data) => data.id === categoryId
	);

	return <CategoryDetails categoryData={categoryData} />;
};

export default page;
