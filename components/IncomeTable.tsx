import Table from "@mui/joy/Table";

const IncomeTable = () => {
	function createData(
		date: string,
		name: string,
		number: number,
		amount: number,
		balance_after: number
	) {
		return { date, name, number, amount, balance_after };
	}

	const rows = [
		createData("12-01-2023", "Frozen yoghurt", 6, 24, 4.0),
		createData("12-01-2023", "Ice cream sandwich", 237, 9.0, 37),
		createData("12-01-2023", "Eclair", 262, 16.0, 24),
		createData("12-01-2023", "Cupcake", 305, 3.7, 67),
		createData("12-01-2023", "Gingerbread", 356, 16.0, 49),
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
					<th title="Date">Date</th>
					<th title="Name">Name</th>
					<th title="Number">Number</th>
					<th title="Amount">Amount</th>
					<th title="Balance After">Balance After</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr key={row.date}>
						<td>{row.date}</td>
						<td>{row.name}</td>
						<td>{row.number}</td>
						<td>{row.amount}</td>
						<td>{row.balance_after}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default IncomeTable;
