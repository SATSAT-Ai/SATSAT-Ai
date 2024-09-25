import LoadingSpinner from "@/components/ui/LoadingSpinner";
import { cn } from "@/lib/utils";
import { ClassValue } from "clsx";

const Loading = ({ className }: { className?: ClassValue }) => {
	return (
		<div
			className={cn(
				"min-h-full fixed w-full bg-darker text-white flex gap-5 flex-col items-center justify-center",
				className
			)}
		>
			{/* circle-loader */}
			{/* <div className="w-[70px] circle-smooth animate-spin p-3 aspect-square rounded-full bg-brand-green [-webkit-mask-composite:source-out] [mask-composite:_subtract] [--m:conic-gradient(#0000_10%,#000),linear-gradient(#000_0_0)_content-box] [-webkit-mask:var(--m)]"></div> */}

			{/* default-eye*/}
			{/* <div className="inline-flex gap-3 before:animate-default-blink after:animate-default-blink before:h-5 before:aspect-square before:rounded-full before:[background:linear-gradient(#222_0_0)_top/100%_40%_no-repeat,radial-gradient(farthest-side,_#000_95%,_#0000)_50%/8px_8px_no-repeat_#fff] after:[background:linear-gradient(#222_0_0)_top/100%_40%_no-repeat,radial-gradient(farthest-side,_#000_95%,_#0000)_50%/8px_8px_no-repeat_#fff] after:h-5 after:aspect-square after:rounded-full"></div> */}

			{/* squared-circle */}
			{/* <div className="loader w-16 aspect-square relative before:absolute before:rounded-full before:[box-shadow:_0_0_0_3px_inset_#29a173] after:absolute after:rounded-full after:[box-shadow:_0_0_0_3px_inset_#29a173] after:[animation-delay:_-1.25s] before:animate-shape-shift after:animate-shape-shift"></div> */}

			{/* pie-shift */}
			{/* <div className=" w-[70px] aspect-square text-brand-green rounded-full [background:conic-gradient(currentColor_0_270deg,_#0000_0)] before:block before:h-1/2 before:w-1/2 before:[border-top-left-radius:_100px] before:bg-[currentColor] before:animate-pie-shift animate-pie-shift-origin"></div> */}

			{/* blink-normal */}
			{/* <div className="animate-blink aspect-[2] h-[30px] !bg-repeat-x [-webkit-mask:radial-gradient(50%_100%,#000_95%,#0000)_0_100%/50%_0%repeat-x] [background:radial-gradient(farthest-side,#000_15%,#0000_18%)_0_0/50%_100%,radial-gradient(50%_100%_at_50%_160%,#fff_95%,#0000)_0_0_/50%_50%,radial-gradient(50%_100%_at_50%_-60%,#fff_95%,#0000)_0_100%/50%_50%]"></div> */}

			{/* blink-angry */}

			{/* <div className="loader inline-flex gap-3 before:h-5 before:aspect-square before:rounded-full before:[background:radial-gradient(farthest-side,#000_95%,#0000)_50%/8px_8px_no-repeat_#fff] after:h-5 after:aspect-square after:rounded-full after:[background:radial-gradient(farthest-side,#000_95%,#0000)_50%/8px_8px_no-repeat_#fff] after:[--s:-1] after:animate-angry-blink before:animate-angry-blink"></div> */}

			<LoadingSpinner className="mx-auto z-20 animate-[spin_0.4s_linear_infinite] border-transparent rounded-full border-2 border-t-brand-green h-14 w-14" />
		</div>
	);
};

export default Loading;
