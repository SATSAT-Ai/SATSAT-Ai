import Link from "next/link";

const page = () => {
	return (
		<section>
			<h1>Access Denied</h1>
			<h2>
				You do not have access to this page, please upgrade your plan to have
				access
			</h2>

			<Link href="/">Return to Home Page</Link>
		</section>
	);
};

export default page;
