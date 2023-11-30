"use client";
import { useRouter } from "next/navigation";

type button = "contact-sales" | "signup";

const SubscribeButton = ({ name, type }: { name: string; type: button }) => {
	const router = useRouter();

	enum buttonType {
		contact_sales = "contact-sales",
	}

	const handlePlan = () => {
		if (type === buttonType.contact_sales) {
			//!redirect to contact sales page
		} else {
			//!if user already has an account, upgrade plan or redirect to signup
			// router.push("/signup");
		}
	};

	return (
		<button
			onClick={handlePlan}
			type="button"
			className="w-full shadow-md button block text-center font-normal hover:bg-mid--yellow transition-colors duration-200 active:scale-[1.01] text-white bg-brand-green button"
		>
			{name}
		</button>
	);
};

export default SubscribeButton;
