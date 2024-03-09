import { Data } from "@/interface/interface";
import TransactionDetails from "../../(components)/TransactionDetailsPage";

const page = ({ params: { transId } }: { params: { transId: string } }) => {
	// fetch data based on paramId
	const data: Data[] = [
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
			Vendor: "9jijfjkjjk",
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
			Vendor: "9jijf6fjkjjk",
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
			Vendor: "9jijf6f4fjkjjk",
			Details: "Details",
		},
	];

	// const filteredData = data.filter((data) => data.id === transId);

	const filteredData = data
		.map((data) => {
			const { Details, ...rest } = data;
			return rest;
		})
		.filter((data) => data.id === transId);

	return <TransactionDetails transData={filteredData} />;
};

export default page;
