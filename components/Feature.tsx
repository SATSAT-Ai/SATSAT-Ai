import Link from "next/link";

const Feature = ({
	title,
	icon,
	para,
	link,
}: {
	title: string;
	link: string;
	para: string;
	icon: any;
}) => {
	return (
		<div className="text-white p-4 bg-[#071f07] rounded-2xl">
			{icon}
			<h2 className="text-text-20 font-medium mt-2">{title}</h2>
			<p className="mb-3 mt-1 text-white/80 font-normal text-text-normal">
				{para}
			</p>
			<Link className="text-mid--yellow visited:text-brand-green" href={link}>
				Learn More
			</Link>
		</div>
	);
};

export default Feature;
