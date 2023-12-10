import {
	DataGrid,
	GridRowParams,
	GridToolbar,
	GridColDef,
} from "@mui/x-data-grid";
import Image from "next/image";

import { getProviderImage } from "@/providerImages";
import Link from "next/link";
import { Data } from "@/interface";

export default function TransTable() {
	const rows: Data[] = [
		{
			id: "sdjfksdjf",
			reconcilable: true,
			Provider: "MTN",
			"Trans. Date": "02-20-2023",
			Category: "ECG",
			"From Acc.": 342343,
			"From Name": "Kamasah",
			"From No.": 231312323,
			"Trans. Type": "Transfer",
			Amount: 20,
			Fees: 0.32,
			E_Levy: 0.2,
			"Bal. Before": 64.5,
			"Bal. After": 30.5,
			"To No.": 243743334,
			"To Name": "Felicia",
			"To Acc.": 4234342,
			"Trans. ID": "234f435f",
			"Ref.": "Ice cream",
			Ova: "iriej343",
			"Img.": "9jijfjkjjk",
			Details: "Details",
		},
		{
			id: "sdjfksdjdf34f",
			reconcilable: true,
			Provider: "Vodafone",
			"Trans. Date": "22-20-2023",
			Category: "Water",
			"From Acc.": 3423343,
			"From Name": "Felicia",
			"From No.": 23131522323,
			"Trans. Type": "Transfer",
			Amount: 230,
			Fees: 0.323,
			E_Levy: 0.22,
			"Bal. Before": 634.5,
			"Bal. After": 320.5,
			"To No.": 2433743334,
			"To Name": "Dickson",
			"To Acc.": 42343342,
			"Trans. ID": "232fg4f435f",
			"Ref.": "Ice cream",
			Ova: "irie34j343",
			"Img.": "9jijf6fjkjjk",
			Details: "Details",
		},
		{
			id: "sdjfksdj453df34f",
			Provider: "Tigo",
			reconcilable: false,
			"Trans. Date": "22-21-2023",
			Category: "Airtime",
			"From Acc.": 342334343,
			"From Name": "Edith",
			"From No.": 231315223323,
			"Trans. Type": "Transfer",
			Amount: 230,
			Fees: 0.3,
			E_Levy: 0.2,
			"Bal. Before": 34.5,
			"Bal. After": 30.5,
			"To No.": 24337243334,
			"To Name": "Dickson",
			"To Acc.": 4234563342,
			"Trans. ID": "232f23g4f435f",
			"Ref.": "Ice cream",
			Ova: "irie3e4j343",
			"Img.": "9jijf6f4fjkjjk",
			Details: "Details",
		},
	];

	const headCells: GridColDef[] = [
		{
			field: "Provider",
		},
		{
			field: "Trans. Date",
		},
		{
			field: "Category",
		},
		{
			field: "From Acc.",
		},
		{
			field: "From Name",
		},
		{
			field: "From No.",
		},
		{
			field: "Trans. Type",
		},
		{
			field: "Amount",
		},
		{
			field: "Fees",
		},
		{
			field: "E_Levy",
		},
		{
			field: "Bal. Before",
		},
		{
			field: "Bal. After",
		},
		{
			field: "To No.",
		},
		{
			field: "To Name",
		},
		{
			field: "To Acc.",
		},
		{
			field: "Trans. ID",
		},
		{
			field: "Ref.",
		},
		{
			field: "Ova",
		},
		{
			field: "Img.",
			renderCell: (params) => {
				const imageSrc = getProviderImage(params.row.Provider);
				return (
					<Image
						src={imageSrc}
						alt="Provider logo"
						style={{ width: "35px", height: "35px", borderRadius: "100%" }}
					/>
				);
			},
		},
		{
			field: "Details",

			renderCell: (params) => {
				return (
					<Link
						className="py-2 px-3 hover:bg-brand-green text-text-12 text-white bg-darker shadow-md active:scale-[1.02] rounded-lg "
						href={`/dashboard/transactions/${params.id}`}
					>
						Details
					</Link>
				);
			},
		},
	];
	const getRowId = (row: Data) => row.id;

	const getRowClassName = (params: GridRowParams<Data>) => {
		return params.row.reconcilable ? "" : "not-reconcilable-row";
	};

	const defaultHiddenColumns = {
		"From Acc.": false,
		"To No.": false,
		"From No.": false,
		"Ref.": false,
		Ova: false,
		Fees: false,
		E_Levy: false,
		"To Acc.": false,
	};

	return (
		<div style={{ width: "100%" }}>
			<div style={{ height: 350, width: "100%" }}>
				<DataGrid
					sx={{
						backgroundColor: "#174634",
						color: "white",
						borderColor: "aquamarine",
					}}
					autoHeight
					columns={headCells}
					rows={rows}
					getRowId={getRowId}
					getRowClassName={getRowClassName}
					slots={{ toolbar: GridToolbar }}
					columnVisibilityModel={defaultHiddenColumns}

					// loading
				/>
			</div>
		</div>
	);
}

// {
//     field: 'username',
//     headerName: 'Username',
//     description:
//       'The identification used by the person with access to the online service.',
//   },
