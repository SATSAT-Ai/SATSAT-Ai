import { AnchorHTMLAttributes } from "react";
import CustomGlowButton from "./CustomGlowButton";
import { MdArrowForward } from "react-icons/md";

interface getStartedProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	showIcon?: boolean;
	iconPosition?: "right" | "left";
	name?: string;
	className?: string;
	icon?: JSX.Element;
	href?: string;
}

const GetStartedButton = ({
	showIcon = false,
	name = "Get Started",
	className,
	icon = <MdArrowForward color="white" size="24" />,
	iconPosition = "right",
	href = "/choose-your-pricing",

	...restProps
}: getStartedProps) => {
	return showIcon ? (
		<CustomGlowButton
			{...restProps}
			href={href}
			name={name}
			icon={icon}
			iconPosition={iconPosition}
			className={className}
		/>
	) : (
		<CustomGlowButton
			{...restProps}
			className={className}
			name={name}
			href={href}
		/>
	);
};

export default GetStartedButton;
