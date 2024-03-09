import { IncomeStreams } from "@/interface/interface";
import Table from "@mui/joy/Table";

const IncomeTable = ({ incomeData }: { incomeData: IncomeStreams[] }) => {
	function createData(
		date: string,
		name: string,
		number: number,
		amount: number
	) {
		return { date, name, number, amount };
	}

	const rows = incomeData.map((incomeStreams: IncomeStreams) => {
		const { date, name, number, amount } = incomeStreams;
		return createData(date, name, number, amount);
	});

	return (
		<Table
			sx={{
				"& thead th:nth-of-type(1)": {
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
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr key={row.date}>
						<td>{row.date}</td>
						<td>{row.name}</td>
						<td>{row.number}</td>
						<td>{row.amount}</td>
					</tr>
				))}
			</tbody>
		</Table>
	);
};

export default IncomeTable;
