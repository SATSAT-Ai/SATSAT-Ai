import LoadingSpinner from "@/components/ui/LoadingSpinner";

const Loading = () => {
	return (
		<div className="min-h-screen w-full bg-darker text-white flex gap-5 flex-col items-center justify-center">
			<LoadingSpinner className="mx-auto animate-[spin_0.4s_linear_infinite] border-transparent rounded-full border-2 border-t-brand-green h-14 w-14" />
		</div>
	);
};

export default Loading;
