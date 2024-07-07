import { cn } from "@/lib/utils";
import Pdf from "@/public/pdf.svg";
import csv from "@/public/csv.svg";
import word from "@/public/word.svg";
import txt from "@/public/txt.svg";
import xml from "@/public/xml.svg";
import Image from "next/image";
import Logo from "./Logo";

export default function Circles({
	className,
	children,
	reverse,
	duration = 20,
	delay = 10,
	radius = 50,
	path = true,
}: {
	className?: string;
	children?: React.ReactNode;
	reverse?: boolean;
	duration?: number;
	delay?: number;
	radius?: number;
	path?: boolean;
}) {
	return (
		<>
			{path && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					className="pointer-events-none absolute inset-0 h-full w-full"
				>
					<circle
						className=" stroke-1 stroke-brand-green/10"
						cx="50%"
						cy="50%"
						r={radius}
						fill="none"
						strokeDasharray={"4 4"}
					/>
				</svg>
			)}

			<div
				style={
					{
						"--duration": duration,
						"--radius": radius,
						"--delay": -delay,
					} as React.CSSProperties
				}
				className={cn(
					"absolute flex h-full w-full transform-gpu animate-orbit items-center justify-center rounded-full border [animation-delay:calc(var(--delay)*1000ms)] bg-white/10",
					{ "[animation-direction:reverse]": reverse },
					className
				)}
			>
				{children}
			</div>
		</>
	);
}

export function OrbitingCircles() {
	return (
		<div className="relative lg:scale-150 flex h-[500px] w-full max-w-[32rem] mx-auto items-center justify-center overflow-hidden">
			<Logo type="small" className="hover:bg-white" />
			{/* Inner Circles */}
			<Circles
				className="h-[30px] w-[30px] border-none bg-transparent"
				duration={20}
				delay={20}
				radius={80}
			>
				<Image src={Pdf} alt="pdf" className="h-full w-full" />
			</Circles>
			<Circles
				className="h-[30px] w-[30px] border-none bg-transparent"
				duration={20}
				delay={10}
				radius={80}
			>
				<Image src={csv} alt="csv" className="h-full w-full" />
			</Circles>

			{/* Outer Circles (reverse) */}
			<Circles
				className="h-[50px] w-[50px] border-none bg-transparent"
				radius={190}
				duration={20}
				reverse
			>
				<Image src={word} alt="word" className="h-full w-full" />
			</Circles>
			<Circles
				className="h-[50px] w-[50px] border-none bg-transparent"
				radius={190}
				duration={20}
				delay={20}
				reverse
			>
				<Image src={txt} alt="txt" className="h-full w-full" />
			</Circles>
			<Circles
				className="h-[50px] w-[50px] border-none bg-transparent"
				radius={190}
				duration={20}
				delay={25}
				reverse
			>
				<Image src={xml} alt="xml" className="h-full w-full" />
			</Circles>
		</div>
	);
}
