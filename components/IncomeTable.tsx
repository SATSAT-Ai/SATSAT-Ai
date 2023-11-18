import Table from "@mui/joy/Table";

const IncomeTable = () => {
	function createData(
		name: string,
		calories: number,
		fat: number,
		carbs: number,
		protein: number
	) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
		createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
		createData("Eclair", 262, 16.0, 24, 6.0),
		createData("Cupcake", 305, 3.7, 67, 4.3),
		createData("Gingerbread", 356, 16.0, 49, 3.9),
	];
	return (
		<Table
			sx={{
				"& thead th:nth-of-type(1)": {
					// width: "40%",
					borderTopLeftRadius: "7px",
					borderBottomLeftRadius: "7px",
				},
				"& thead th:last-child": {
					borderTopRightRadius: "7px",
					borderBottomRightRadius: "7px",
				},
				"& thead th": {
					color: "white",
					backgroundColor: "#ffffff20",
				},
				width: "100%",
				padding: "10px",
				backgroundColor: "#ffffff20",
				color: "white",
				borderRadius: "8px",
			}}
			aria-label="basic table"
			variant="soft"
			size="md"
			borderAxis="bothBetween"
		>
			<thead>
				<tr>
					<th>Column width (40%)</th>
					<th>Calories</th>
					<th>Fat&nbsp;(g)</th>
					<th>Carbs&nbsp;(g)</th>
					<th>Protein&nbsp;(g)</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr key={row.name}>
						<td>{row.name}</td>
						<td>{row.calories}</td>
						<td>{row.fat}</td>
						<td>{row.carbs}</td>
						<td>{row.protein}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default IncomeTable;
