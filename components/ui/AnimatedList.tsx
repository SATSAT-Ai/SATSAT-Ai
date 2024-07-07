"use client";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LuFileBox } from "react-icons/lu";
import { MdUploadFile, MdInsights } from "react-icons/md";
import { TbFileReport } from "react-icons/tb";

interface Item {
	name: string;
	description: string;
	icon: JSX.Element;
	time: string;
	// color: string;
}

import React, { ReactElement, useEffect, useMemo, useState } from "react";

export const ListAnimated = React.memo(
	({
		className,
		children,
		delay = 1000,
	}: {
		className?: string;
		children: React.ReactNode;
		delay?: number;
	}) => {
		const [index, setIndex] = useState(0);
		const childrenArray = React.Children.toArray(children);

		useEffect(() => {
			const interval = setInterval(() => {
				setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
			}, delay);

			return () => clearInterval(interval);
		}, [childrenArray.length, delay]);

		const itemsToShow = useMemo(
			() => childrenArray.slice(0, index + 1).reverse(),
			[index, childrenArray]
		);

		return (
			<div className={cn("flex flex-col items-center gap-4 py-5", className)}>
				<AnimatePresence>
					{itemsToShow.map((item) => (
						<AnimatedListItem key={(item as ReactElement).key}>
							{item}
						</AnimatedListItem>
					))}
				</AnimatePresence>
			</div>
		);
	}
);

ListAnimated.displayName = "ListAnimated";

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
	const animations = {
		initial: { scale: 0, opacity: 0 },
		animate: { scale: 1, opacity: 1, originY: 0 },
		exit: { scale: 0, opacity: 0 },
		transition: { type: "spring", stiffness: 350, damping: 40 },
	};

	return (
		<motion.div {...animations} layout className="mx-auto w-full">
			{children}
		</motion.div>
	);
}

let notifications = [
	{
		name: "Invoice Processed",
		description: "Your invoice has been successfully processed,",
		time: "15m ago",

		icon: <LuFileBox size={20} color="#29a173" />,
	},
	{
		name: "Document Uploaded",
		description: "A new document has been uploaded.",
		time: "10m ago",
		icon: <MdUploadFile size={20} color="#29a173" />,
	},
	{
		name: "Insights Available",
		description: "A new financial insight has been generated.",
		time: "5m ago",
		icon: <MdInsights size={20} color="#29a173" />,
	},
	{
		name: "Expense Report Ready",
		description: "Your expense report is ready for review.",
		time: "2m ago",
		icon: <TbFileReport size={20} color="#29a173" />,
	},
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, time }: Item) => {
	return (
		<figure
			className={cn(
				"relative mx-auto min-h-fit w-full max-w-[400px] transform cursor-pointer overflow-hidden rounded-2xl p-4",
				// animation styles
				"transition-all duration-200 ease-in-out hover:scale-[103%]",
				// dark styles
				"transform-gpu bg-transparent backdrop-blur-md [border:1px_solid_rgba(41,161,115,.1)] [box-shadow:0_-20px_80px_-20px_#29a1731a_inset]"
			)}
		>
			<div className="flex flex-row items-center gap-3">
				<div
					className="flex h-10 w-10 items-center justify-center rounded-full aspect-square bg-transparent [border:1px_solid_rgba(41,161,115,.1)] [box-shadow:0_-20px_80px_-20px_#29a1731a_inset]"
					// style={{
					// 	backgroundColor: color,
					// }}
				>
					{icon}
					{/* <span className="text-text-20">{icon}</span> */}
				</div>
				<div className="flex flex-col overflow-hidden">
					<figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white ">
						<span className="text-sm sm:text-lg">{name}</span>
						<span className="mx-1">·</span>
						<span className="text-xs text-gray-500">{time}</span>
					</figcaption>
					<p className="text-text-12 font-normal text-white/60">
						{description}
					</p>
				</div>
			</div>
		</figure>
	);
};

export function AnimatedList() {
	return (
		<div className="relative flex max-h-[400px] min-h-[400px] w-full max-w-[32rem] mx-auto flex-col overflow-hidden p-6 ">
			<ListAnimated>
				{notifications.map((item, idx) => (
					<Notification {...item} key={idx} />
				))}
			</ListAnimated>
		</div>
	);
}
