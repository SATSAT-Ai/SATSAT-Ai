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
	target?: "_parent" | "_blank";
}

const GetStartedButton = ({
	showIcon = false,
	name = "Get Started",
	className,
	icon = <MdArrowForward color="white" size="24" />,
	iconPosition = "right",
	href = "/choose-your-pricing",
	buttonType,
	target = "_parent",
	...restProps
}: getStartedProps) => {
	return showIcon ? (
		<CustomGlowButton
			target={target}
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
			target={target}
			{...restProps}
			className={className}
			name={name}
			buttonType={buttonType}
			href={href}
		/>
	);
};

export default GetStartedButton;
