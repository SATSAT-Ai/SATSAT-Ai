import { Data } from "@/interface";

const TransactionDetails = ({ transData }: { transData: Data[] }) => {
	return (
		<main>
			<div className="p-3 flex flex-wrap gap-5 text-white">
				{transData.map((trans) => {
					return <div key={trans.id}>{trans["Bal. After"]}</div>;
				})}
			</div>
		</main>
	);
};

export default TransactionDetails;
