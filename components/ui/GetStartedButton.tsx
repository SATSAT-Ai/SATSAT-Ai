import CustomGlowButton from "./CustomGlowButton";
import { MdArrowForward } from "react-icons/md";

const GetStartedButton = ({
	showIcon = false,
	name = "Get Started",
	className,
	icon = <MdArrowForward color="white" size="24" />,
	iconPosition = "right",
}: {
	showIcon?: boolean;
	iconPosition?: "right" | "left";
	name?: string;
	className?: string;
	icon?: JSX.Element;
}) => {
	return showIcon ? (
		<CustomGlowButton
			href="/choose-your-pricing"
			name={name}
			icon={icon}
			iconPosition={iconPosition}
			className={className}
		/>
	) : (
		<CustomGlowButton
			href="/choose-your-pricing"
			className={className}
			name={name}
		/>
	);
};

export default GetStartedButton;
