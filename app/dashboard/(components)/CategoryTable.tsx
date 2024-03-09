import { ICategory } from "@/interface/interface";
import Table from "@mui/joy/Table";
import Link from "next/link";

const CategoryTable = ({ categoryData }: { categoryData: ICategory[] }) => {
	function createData(
		id: string,
		date: string,
		name: string,
		number: number,
		amount: number
	) {
		return {
			id,
			date,
			name,
			number,
			amount,
		};
	}

	const rows = categoryData.map((categoryRow) => {
		const { date, name, number, Amount, id } = categoryRow;
		return createData(id, date, name, number, Amount);
	});

	return (
		<div className="h-full -z-10 flex-[2] pt-3 lg:overscroll-y-none lg:rounded-none rounded-lg overflow-y-auto bg-[#ffffff20] custom-scroll2">
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
						backgroundColor: "#ffffff30",
						backdropFilter: "blur(4px)",
					},
					width: "100%",
					padding: "10px",
					backgroundColor: "transparent",
					color: "white",
					height: "100%",
				}}
				aria-label="Category table"
				variant="soft"
				size="lg"
				borderAxis="bothBetween"
				stickyHeader
			>
				<thead>
					<tr>
						<th title="Date">Date</th>
						<th title="Name">Name</th>
						<th title="Number">Number</th>
						<th title="Amount">Amount</th>
						<th title="Amount">Trans. Details</th>
					</tr>
				</thead>
				<tbody>
					{rows.map((row) => (
						<tr key={row.date}>
							<td>{row.date}</td>
							<td>{row.name}</td>
							<td>{row.number}</td>
							<td>{row.amount}</td>
							<td className="active:scale-[1.02]">
								<Link
									className="py-2 text-text-12 px-3 transition-colors duration-75 rounded-lg color-white bg-darker hover:bg-white hover:text-darker shadow"
									href={`/dashboard/transactions/categories/${row.id}`}
								>
									Details
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

export default CategoryTable;
