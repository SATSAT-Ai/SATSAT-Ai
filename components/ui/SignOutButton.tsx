import { HTMLAttributes } from "react";
import LoadingSpinner from "./LoadingSpinner";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

type signOutButton = HTMLAttributes<HTMLButtonElement> & {
	loading: boolean;
	handleSignOut: () => Promise<void>;
	className?: ClassValue;
};

const SignOutButton = ({
	loading,
	handleSignOut,
	className,
	...restProps
}: signOutButton) => {
	return (
		<button
			{...restProps}
			type="button"
			disabled={loading}
			className={cn(
				"flex items-center rounded-3xl font-medium gap-3 transition-colors duration-200 text-white bg-brand-green py-3 px-6",
				{ "shadow-md hover:bg-mid--yellow": !loading },
				className
			)}
		>
			<div onClick={handleSignOut} className="flex items-center gap-4">
				{loading ? "Signing out" : "Sign Out"}
				{loading && (
					<LoadingSpinner className=" mx-auto animate-[spin_0.4s_linear_infinite] border-transparent border-t-white h-5 w-5" />
				)}
			</div>
		</button>
	);
};

export default SignOutButton;
