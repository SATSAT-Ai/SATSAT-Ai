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
	buttonType?: "button" | "Link";
}

const GetStartedButton = ({
	showIcon = false,
	name = "Get Started",
	className,
	icon = <MdArrowForward color="white" size="24" />,
	iconPosition = "right",
	href = "/choose-your-pricing",
	buttonType,
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
			buttonType={buttonType}
		/>
	) : (
		<CustomGlowButton
			{...restProps}
			className={className}
			name={name}
			buttonType={buttonType}
			href={href}
		/>
	);
};

export default GetStartedButton;
