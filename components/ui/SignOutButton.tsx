import LoadingSpinner from "./LoadingSpinner";

const SignOutButton = ({
	loading,
	handleSignOut,
}: {
	loading: boolean;
	handleSignOut: () => Promise<void>;
}) => {
	return (
		<button
			type="button"
			disabled={loading}
			className={` ${
				loading
					? "active:scale-100 shadow-md"
					: "shadow-none active:scale-[1.01] hover:bg-mid--yellow"
			} flex items-center !rounded-3xl font-medium gap-3 transition-colors duration-200 text-white bg-brand-green py-3 px-6`}
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
