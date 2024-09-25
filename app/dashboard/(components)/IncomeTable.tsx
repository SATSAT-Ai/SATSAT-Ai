import { IncomeStreams } from "@/interface/interface";
import Table from "@mui/joy/Table";

const IncomeTable = ({ incomeData }: { incomeData: IncomeStreams[] }) => {
	function createData(
		date: string,
		name: string,
		number: number,
		amount: number,
		streamNo?: number
	) {
		return { date, name, number, amount, streamNo };
	}

	const rows = incomeData.map((incomeStreams: IncomeStreams) => {
		const { date, name, number, amount, streamNo } = incomeStreams;
		return createData(date, name, number, amount, streamNo);
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
					backgroundColor: " rgb(41 161 115 / 0.1)",
				},
				width: "100%",
				padding: "10px",
				backgroundColor: "rgb(41 161 115 / 0.1)",
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
					<th className="w-[17%]" title="streamNo.">
						streamNo.
					</th>
					<th className="w-[20%]" title="Date">
						Date
					</th>
					<th title="Name">Name</th>
					<th className="w-[15%]" title="Number">
						Number
					</th>
					<th className="w-[15%]" title="Amount">
						Amount
					</th>
				</tr>
			</thead>
			<tbody>
				{rows.map((row) => (
					<tr key={`${row.date}-${row.number}`}>
						<td>{row.streamNo}</td>
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
