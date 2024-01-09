import { Data } from "@/interface/interface";

const ToTransDetails = ({ transData }: { transData: Data[] }) => {
	return (
		<ul>
			{Object.entries(transData).map(([key, value]) => {
				return (
					<div key={key} className="bg-[#2aa27438] rounded-3xl shadow-md p-4">
						<div className="flex flex-col gap-5 justify-between pt-5">
							{Object.entries(value).map(([keys, values]) => {
								if (keys.startsWith("To")) {
									return (
										<div
											key={values}
											className="flex w-full items-center justify-between gap-5"
										>
											<p className="capitalize text-[#ffffffd3] ">
												{keys.split(" ")[1]}
											</p>
											<p className="capitalize">{values}</p>
										</div>
									);
								}
								return;
							})}
						</div>
					</div>
				);
			})}
		</ul>
	);
};

export default ToTransDetails;
