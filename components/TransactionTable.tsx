import * as React from "react";
import Box from "@mui/joy/Box";
import Table from "@mui/joy/Table";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Tooltip from "@mui/joy/Tooltip";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import DeleteIcon from "@mui/icons-material/Delete";
import FilterListIcon from "@mui/icons-material/FilterList";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { visuallyHidden } from "@mui/utils";

interface Data {
	F_ID: string;
	TRANS_DATE: string;
	FROM_NAME: string;
	TO_NAME: string;
	AMOUNT: number;
	TRANS_TYPE: string;
	TO_NO: string;
	E_LEVY: number;
}

function createData(
	F_ID: string,
	TRANS_DATE: string,
	FROM_NAME: string,
	TO_NAME: string,
	AMOUNT: number,
	TRANS_TYPE: string,
	TO_NO: string,
	E_LEVY: number
): Data {
	return {
		F_ID,
		TRANS_DATE,
		FROM_NAME,
		TO_NAME,
		AMOUNT,
		TRANS_TYPE,
		TO_NO,
		E_LEVY,
	};
}

const rows = [
	createData(
		"3423423432445",
		"25-May-2023 08:53:39 PM",
		"Dickson",
		"Samuel",
		500,
		"payment",
		"234324233",
		0.2
	),
	createData(
		"34239874234f445",
		"25-May-2023 08:53:39 PM",
		"Dickson",
		"Samuel",
		500,
		"payment",
		"234324233",
		0.2
	),
	createData(
		"3423443452445",
		"25-May-2023 08:53:39 PM",
		"Dickson",
		"Samuel",
		500,
		"payment",
		"234324233",
		0.2
	),
	createData(
		"342343432445",
		"25-May-2023 08:53:39 PM",
		"Dickson",
		"Samuel",
		500,
		"payment",
		"234324233",
		0.2
	),
	createData(
		"3423432445",
		"25-May-2023 08:53:39 PM",
		"Dickson",
		"Samuel",
		500,
		"payment",
		"234324233",
		0.2
	),
	createData(
		"34234232445",
		"25-May-2023 08:53:39 PM",
		"Dickson",
		"Samuel",
		500,
		"payment",
		"234324233",
		0.2
	),
	createData(
		"342342445",
		"25-May-2023 08:53:39 PM",
		"Dickson",
		"Samuel",
		500,
		"payment",
		"234324233",
		0.2
	),
	createData(
		"342342345",
		"25-May-2023 08:53:39 PM",
		"Dickson",
		"Samuel",
		500,
		"payment",
		"234324233",
		0.2
	),
	createData(
		"3423432445",
		"25-May-2023 08:53:39 PM",
		"Dickson",
		"Samuel",
		500,
		"payment",
		"234324233",
		0.2
	),
	createData(
		"342342445",
		"25-May-2023 08:53:39 PM",
		"Dickson",
		"Samuel",
		500,
		"payment",
		"234324233",
		0.2
	),
];

function labelDisplayedRows({
	from,
	to,
	count,
}: {
	from: number;
	to: number;
	count: number;
}) {
	return `${from}–${to} of ${count !== -1 ? count : `more than ${to}`}`;
}

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

type Order = "asc" | "desc";

function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key
): (
	a: { [key in Key]: number | string },
	b: { [key in Key]: number | string }
) => number {
	return order === "desc"
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(
	array: readonly T[],
	comparator: (a: T, b: T) => number
) {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
	disablePadding: boolean;
	F_ID: keyof Data;
	label?: string;
	numeric: boolean;
}

const headCells: readonly HeadCell[] = [
	{
		F_ID: "F_ID",
		numeric: false,
		disablePadding: true,
		label: "F_ID",
	},

	{
		F_ID: "TRANS_DATE",
		numeric: false,
		disablePadding: false,
		label: "TRANS_DATE",
	},
	{
		F_ID: "FROM_NAME",
		numeric: false,
		disablePadding: false,
		label: "TO_NAME",
	},
	{
		F_ID: "TO_NAME",
		numeric: false,
		disablePadding: false,
		label: "TO_NAME",
	},

	{
		F_ID: "AMOUNT",
		numeric: true,
		disablePadding: false,
		label: "AMOUNT",
	},
	{
		F_ID: "TRANS_TYPE",
		numeric: true,
		disablePadding: false,
		label: "TRANS_TYPE",
	},
	{
		F_ID: "TO_NO",
		numeric: true,
		disablePadding: false,
		label: "TO_NO.",
	},
	{
		F_ID: "E_LEVY",
		numeric: true,
		disablePadding: false,
		label: "E_LEVY",
	},
];

interface EnhancedTableProps {
	numSelected: number;
	onRequestSort: (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => void;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	order: Order;
	orderBy: keyof Data;
	rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const {
		onSelectAllClick,
		order,
		orderBy,
		numSelected,
		rowCount,
		onRequestSort,
	} = props;
	const createSortHandler =
		(property: keyof Data) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property);
		};

	return (
		<thead>
			<tr>
				<th>
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						slotProps={{
							input: {
								"aria-label": "select all desserts",
							},
						}}
						sx={{ verticalAlign: "sub" }}
					/>
				</th>
				{headCells.map((headCell) => {
					const active = orderBy === headCell.F_ID;
					return (
						<th
							key={headCell.F_ID}
							aria-sort={
								active
									? ({ asc: "ascending", desc: "descending" } as const)[order]
									: undefined
							}
						>
							{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
							<Link
								underline="none"
								color="neutral"
								textColor={active ? "primary.plainColor" : undefined}
								component="button"
								onClick={createSortHandler(headCell.F_ID)}
								fontWeight="lg"
								startDecorator={
									headCell.numeric ? (
										<ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
									) : null
								}
								endDecorator={
									!headCell.numeric ? (
										<ArrowDownwardIcon sx={{ opacity: active ? 1 : 0 }} />
									) : null
								}
								sx={{
									"& svg": {
										transition: "0.2s",
										transform:
											active && order === "desc"
												? "rotate(0deg)"
												: "rotate(180deg)",
									},
									"&:hover": { "& svg": { opacity: 1 } },
								}}
							>
								{headCell.label}
								{active ? (
									<Box component="span" sx={visuallyHidden}>
										{order === "desc"
											? "sorted descending"
											: "sorted ascending"}
									</Box>
								) : null}
							</Link>
						</th>
					);
				})}
			</tr>
		</thead>
	);
}

interface EnhancedTableToolbarProps {
	numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
	const { numSelected } = props;

	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				py: 1,
				pl: { sm: 2 },
				pr: { xs: 1, sm: 1 },
				...(numSelected > 0 && {
					bgcolor: "background.level1",
				}),
				borderTopLeftRadius: "var(--unstable_actionRadius)",
				borderTopRightRadius: "var(--unstable_actionRadius)",
			}}
		>
			{numSelected > 0 ? (
				<Typography sx={{ flex: "1 1 100%" }} component="div">
					{numSelected} selected
				</Typography>
			) : (
				<Typography
					level="body-lg"
					sx={{ flex: "1 1 100%" }}
					id="tableTitle"
					component="div"
				>
					Nutrition
				</Typography>
			)}

			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton size="sm" color="danger" variant="solid">
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title="Filter list">
					<IconButton size="sm" variant="outlined" color="neutral">
						<FilterListIcon />
					</IconButton>
				</Tooltip>
			)}
		</Box>
	);
}

export default function TableSortAndSelection() {
	const [order, setOrder] = React.useState<Order>("asc");
	const [orderBy, setOrderBy] = React.useState<keyof Data>("AMOUNT");
	const [selected, setSelected] = React.useState<readonly string[]>([]);
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleRequestSort = (
		event: React.MouseEvent<unknown>,
		property: keyof Data
	) => {
		const isAsc = orderBy === property && order === "asc";
		setOrder(isAsc ? "desc" : "asc");
		setOrderBy(property);
	};

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelected = rows.map((n) => n.F_ID); //name
			setSelected(newSelected);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event: React.MouseEvent<unknown>, id: string) => {
		const selectedIndex = selected.indexOf(id);
		let newSelected: readonly string[] = [];

		if (selectedIndex === -1) {
			newSelected = [...selected, id];
		} else {
			newSelected = selected.filter((item) => item !== id);
		}

		setSelected(newSelected);
	};

	const handleChangePage = (newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: any, newValue: number | null) => {
		setRowsPerPage(parseInt(newValue!.toString(), 10));
		setPage(0);
	};

	const getLabelDisplayedRowsTo = () => {
		if (rows.length === -1) {
			return (page + 1) * rowsPerPage;
		}
		return rowsPerPage === -1
			? rows.length
			: Math.min(rows.length, (page + 1) * rowsPerPage);
	};

	const isSelected = (id: string) => selected.indexOf(id) !== -1;

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				flexWrap: "wrap",
				gap: 1,
				mb: 2,
				ml: 1,
			}}
		>
			<Sheet
				variant="outlined"
				sx={{
					width: "100%",
					boxShadow: "sm",
					borderRadius: "sm",
					p: 2,
					overflow: "auto",
					backgroundColor: "#ffffff1",
				}}
			>
				<EnhancedTableToolbar numSelected={selected.length} />
				<Table
					size="md"
					aria-labelledby="tableTitle"
					hoverRow
					sx={{
						"--TableCell-headBackground": "transparent",
						"--TableCell-selectedBackground": (theme) =>
							theme.vars.palette.success.softBg,
						overflowX: "auto", // Add this line for horizontal scrolling

						"& thead th:nth-child(1)": {
							width: "10%",
						},
						"& thead th:nth-child(2)": {
							width: "10%",
						},
						"& thead th": {
							width: "100%",
						},
						backgroundColor: "transparent",
						color: "white",
						"& tbody tr:hover": {
							backgroundColor: "#ffffff20 !important",
							color: "white",
						},

						// "& tr > *:nth-child(n+3)": { textAlign: "right" },
					}}
				>
					<caption className="uppercase !text-white text-text-24 font-semibold">
						Transaction History
					</caption>
					<EnhancedTableHead
						numSelected={selected.length}
						order={order}
						orderBy={orderBy}
						onSelectAllClick={handleSelectAllClick}
						onRequestSort={handleRequestSort}
						rowCount={rows.length}
					/>
					<tbody>
						{stableSort(rows, getComparator(order, orderBy))
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row, index) => {
								const isItemSelected = isSelected(row.F_ID); //name
								const labelId = `enhanced-table-checkbox-${index}`;

								return (
									<tr
										onClick={(event) => handleClick(event, row.F_ID)} //name
										role="checkbox"
										aria-checked={isItemSelected}
										tabIndex={-1}
										key={row.F_ID} //name
										// selected={isItemSelected}
										style={
											isItemSelected
												? ({
														"--TableCell-dataBackground":
															"var(--TableCell-selectedBackground)",
														"--TableCell-headBackground":
															"var(--TableCell-selectedBackground)",
												  } as React.CSSProperties)
												: {}
										}
									>
										<th scope="row">
											<Checkbox
												checked={isItemSelected}
												slotProps={{
													input: {
														"aria-labelledby": labelId,
													},
												}}
												sx={{ verticalAlign: "top" }}
											/>
										</th>
										<th id={labelId} scope="row">
											{row.F_ID}
										</th>
										<td>{row.F_ID}</td>
										<td>{row.TRANS_DATE}</td>
										<td>{row.FROM_NAME}</td>
										<td>{row.TO_NAME}</td>
										<td>{row.AMOUNT}</td>
										<td>{row.TRANS_TYPE}</td>
										<td>{row.TO_NO}</td>
										<td>{row.E_LEVY}</td>
									</tr>
								);
							})}
						{emptyRows > 0 && (
							<tr
								style={
									{
										height: `calc(${emptyRows} * 40px)`,
										"--TableRow-hoverBackground": "transparent",
									} as React.CSSProperties
								}
							>
								<td colSpan={6} aria-hidden />
							</tr>
						)}
					</tbody>
					<tfoot>
						<tr>
							<td colSpan={6}>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
										gap: 2,
										justifyContent: "flex-end",
									}}
								>
									<FormControl orientation="horizontal" size="sm">
										<FormLabel>Rows per page:</FormLabel>
										<Select
											onChange={handleChangeRowsPerPage}
											value={rowsPerPage}
										>
											<Option value={5}>5</Option>
											<Option value={10}>10</Option>
											<Option value={25}>25</Option>
										</Select>
									</FormControl>
									<Typography textAlign="center" sx={{ minWidth: 80 }}>
										{labelDisplayedRows({
											from: rows.length === 0 ? 0 : page * rowsPerPage + 1,
											to: getLabelDisplayedRowsTo(),
											count: rows.length === -1 ? -1 : rows.length,
										})}
									</Typography>
									<Box sx={{ display: "flex", gap: 1 }}>
										<IconButton
											size="sm"
											color="neutral"
											variant="outlined"
											disabled={page === 0}
											onClick={() => handleChangePage(page - 1)}
											sx={{ bgcolor: "background.surface" }}
										>
											<KeyboardArrowLeftIcon />
										</IconButton>
										<IconButton
											size="sm"
											color="neutral"
											variant="outlined"
											disabled={
												rows.length !== -1
													? page >= Math.ceil(rows.length / rowsPerPage) - 1
													: false
											}
											onClick={() => handleChangePage(page + 1)}
											sx={{ bgcolor: "background.surface" }}
										>
											<KeyboardArrowRightIcon />
										</IconButton>
									</Box>
								</Box>
							</td>
						</tr>
					</tfoot>
				</Table>
			</Sheet>
		</Box>
	);
}
