const Feature = ({
	title,
	icon,
	para,
}: {
	title: string;
	para: string;
	icon: any;
}) => {
	return (
		<div className=" relative text-white p-2 bg-[#071f07] rounded-2xl">
			{icon}
			<h2 className="text-text-20 font-medium mt-2">{title}</h2>
			<p className="mb-3 mt-1 text-white/80 font-normal text-text-normal">
				{para}
			</p>
		</div>
	);
};

export default Feature;
