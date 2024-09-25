"use client";

import NotificationOptions from "@/app/dashboard/(components)/NotificationOptions";
import { Inotification } from "@/interface/interface";
import { Bell } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

interface NotificationProps {
	setShowNotification: Dispatch<SetStateAction<boolean>>;
	showNotification: boolean;
}

const DashboardNotification = ({
	setShowNotification,
	showNotification,
}: NotificationProps) => {
	const [readTarget, setReadTarget] = useState(0);
	const notificationRef = useRef<null | HTMLLIElement>(null);

	const [fakeNotification, setFakeNotification] = useState<Inotification[]>([
		{
			id: "4234",
			notificationType: "upload",
			message: "Data.csv uploaded",
			read: false,
			time: "2hrs ago",
		},
		{
			id: "dfj3434",
			notificationType: "upload",
			message: "Data.csv uploaded",
			read: false,
			time: "30mins ago",
		},
	]);

	useEffect(() => {
		const hideOptions = (event: MouseEvent) => {
			if (!notificationRef?.current?.contains(event.target as Node)) {
				setShowNotification(false);
			}
		};

		window.addEventListener("mousedown", hideOptions);

		return () => {
			window.removeEventListener("mousedown", hideOptions);
		};
	}, [setShowNotification]);

	const handleMarkAsRead = () => {
		setFakeNotification(
			fakeNotification.map((notification) => ({ ...notification, read: true }))
		);
	};

	const notificationCount = (notification = fakeNotification) => {
		notification.filter((notification) => {
			return notification.read === false;
		});

		return notification.length;
	};

	const unreadNotification = fakeNotification.filter(
		(notification) => notification.read === false
	);

	return (
		<li ref={notificationRef} className="relative" tabIndex={0}>
			<Bell
				className="cursor-pointer active:scale-[1.02] text-text-20 md:text-text-24"
				onClick={() => setShowNotification((prev) => !prev)}
			/>

			{notificationCount(unreadNotification) >= 1 && (
				<div
					onClick={() => setShowNotification((prev) => !prev)}
					className=" text-text-12 flex items-center cursor-pointer justify-center number-notification rounded-full border border-white absolute bg-brand-green -top-2 -right-1 h-5 text-center w-5"
				>
					{notificationCount(unreadNotification)}
				</div>
			)}
			{showNotification && (
				<NotificationOptions
					fakeNotification={fakeNotification}
					handleMarkAsRead={handleMarkAsRead}
					notificationCount={notificationCount}
					readTarget={readTarget}
					setFakeNotification={setFakeNotification}
					setReadTarget={setReadTarget}
					unreadNotification={unreadNotification}
				/>
			)}
		</li>
	);
};

export default DashboardNotification;
