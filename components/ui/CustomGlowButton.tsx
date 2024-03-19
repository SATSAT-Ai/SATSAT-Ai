import { cn } from "@/lib/utils";
import Link from "next/link";

interface IGlow {
	name: string;
	icon?: JSX.Element;
	href?: string;
	iconPosition?: "left" | "right";
	buttonType?: "button" | "Link";
	handleClick?: () => void;
	disabled?: boolean;
	disabledGlowButton?: boolean;
	className?: string;
}

const CustomGlowButton = ({
	name,
	icon,
	href,
	iconPosition,
	buttonType = "Link",
	handleClick,
	disabled,
	disabledGlowButton,
	className,
	...restProps
}: IGlow) => {
	const handleButtonClick = () => {
		if (handleClick) {
			handleClick();
		}
	};

	return buttonType === "Link" ? (
		<Link
			{...restProps}
			href={href!}
			className={cn(
				`px-7 before:opacity-0 hover:before:opacity-100 before:z-[-1] after:z-[-1]  before:rounded-3xl after:absolute after:rounded-3xl after:top-[-1px] after:left-[-1px]  before:absolute before:top-[-1px] before:left-[-1px] bg-transparent relative rounded-3xl bg-gradient-to-tr from-[#050e0b] to-[#000000] justify-between py-3 custom-block glow text-text-normal text-white font-medium flex items-center gap-2`,
				className
			)}
		>
			<div style={{ order: `${iconPosition === "right" ? 2 : 0}` }}>
				{icon && icon}
			</div>
			{name}
		</Link>
	) : disabled ? (
		<button type="button"></button>
	) : (
		<button
			disabled={disabledGlowButton}
			onClick={handleButtonClick}
			type="button"
			className={cn(
				`${
					disabledGlowButton ? "" : "glow"
				} px-7 before:opacity-0 hover:before:opacity-100 before:z-[-1] after:z-[-1]  before:rounded-3xl after:absolute after:rounded-3xl after:top-[-1px] after:left-[-1px]  before:absolute before:top-[-1px] before:left-[-1px] bg-transparent relative rounded-3xl bg-gradient-to-tr from-[#050e0b] to-[#000000] justify-between py-3 custom-block text-text-normal text-white font-medium flex items-center gap-2`,
				className
			)}
		>
			<div style={{ order: `${iconPosition === "right" ? 2 : 0}` }}>
				{icon && icon}
			</div>
			{name}
		</button>
	);
};

export default CustomGlowButton;
