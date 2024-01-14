import { Data } from "@/interface/interface";

const FromTransDetails = ({ transData }: { transData: Data[] }) => {
	return (
		<ul>
			{Object.entries(transData).map(([key, value]) => {
				return (
					<div
						key={key}
						className="border bg-[#1ece8b23]  border-[#2aa2747a] rounded-3xl shadow-md p-4"
					>
						<div className="flex flex-col gap-5 justify-between pt-5">
							{Object.entries(value).map(([keys, values]) => {
								if (keys.startsWith("From")) {
									return (
										<div
											key={values}
											className="flex w-full font-medium items-center justify-between gap-5"
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

export default FromTransDetails;
