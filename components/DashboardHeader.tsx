"use client";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import satsatLogo from "../public/satsat-logo.svg";
import { AppContext } from "@/context/AppContext";
import NotificationLogic from "./NotificationLogic";
import { Inotification } from "@/interface";
import ChatIcon from "@mui/icons-material/Chat";

const DashboardHeader = () => {
	const { hideSidebar, setShowNotification, showNotification } =
		useContext(AppContext);
	const [readTarget, setReadTarget] = useState(0);
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

	const handleShowNotification = () => {
		setShowNotification((prev) => !prev);
	};

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
		<header
			className={`sticky z-40 backdrop-blur-lg h-[82px] top-0 bg-white/10 text-white p-5 flex items-center ${
				hideSidebar ? "justify-between" : "justify-end"
			} gap-5`}
		>
			{hideSidebar && (
				<Link href={"/"}>
					<Image src={satsatLogo} height={100} width={100} alt="SATSAT-Ai" />
				</Link>
			)}

			<ul className="flex gap-5 items-center justify-end">
				<li className="relative" tabIndex={0}>
					<NotificationsIcon
						fontSize="medium"
						color="primary"
						className="cursor-pointer active:scale-[1.01]"
						onClick={handleShowNotification}
					/>

					{notificationCount(unreadNotification) >= 1 && (
						<div
							onClick={handleShowNotification}
							className=" text-text-12 flex items-center cursor-pointer justify-center number-notification rounded-full border border-white absolute bg-brand-green -top-2 -right-1 h-5 text-center w-5"
						>
							{notificationCount(unreadNotification)}
						</div>
					)}
					{/* notification */}
					{showNotification && (
						<div className="bg-grey-light/95 no-select backdrop-blur-3xl border z-40 border-white/10 w-[300px] sm:w-[350px] absolute top-8 p-3 rounded-xl right-[50%] translate-x-[50%] sm:translate-x-0 sm:right-3">
							<div className="flex items-center w-full justify-between gap-5">
								<div className="flex items-center gap-3">
									<h5>Notifications</h5>
									{notificationCount(unreadNotification) >= 1 && (
										<div className=" text-white text-[10px] flex items-center justify-center rounded-full bg-brand-green-darker border -top-2 h-4 text-center w-4">
											{notificationCount(unreadNotification)}
										</div>
									)}
								</div>

								{readTarget === 0 && notificationCount() >= 1 && (
									<span
										onClick={handleMarkAsRead}
										className="cursor-pointer active:scale-[1.01] text-text-12 text-mid--yellow"
									>
										Mark all as read
									</span>
								)}
							</div>
							<div className=" pb-3 border-b border-white/10 mt-3">
								<ul className="flex items-center gap-5 text-text-12">
									<li
										onClick={() => setReadTarget(0)}
										className={`${
											readTarget == 0
												? "text-brand-green relative "
												: notificationCount(unreadNotification) >= 1 &&
												  "before:absolute before:w-1 before:h-1 before:bg-brand-green before:rounded-full before:top-5 before:translate-x-[-50%] before:left-[50%]"
										} cursor-pointer active:scale-[1.01] relative`}
									>
										Unread
									</li>
									<li
										onClick={() => setReadTarget(1)}
										className={`${
											readTarget == 1 && "text-brand-green relative "
										} cursor-pointer active:scale-[1.01]`}
									>
										Read
									</li>
								</ul>
							</div>
							<div className="h-[150px] overflow-y-auto custom-scroll">
								<NotificationLogic
									readTarget={readTarget}
									fakeNotification={fakeNotification}
									setFakeNotification={setFakeNotification}
								/>
							</div>
						</div>
					)}
				</li>
				<li>
					<Link href={"/chat"}>
						<div className="relative">
							<ChatIcon
								fontSize="medium"
								color="primary"
								className="relative"
							/>
							{/* <div className=" text-text-12 flex items-center justify-center number-notification rounded-full border border-white absolute bg-brand-green -top-2 -right-1 h-5 text-center w-5">
								2
							</div> */}
						</div>
					</Link>
				</li>
				<li className="flex items-center gap-3">
					<div className="flex items-center gap-3">
						<Link href={"#"}>
							<PersonPinIcon fontSize="medium" color="primary" />
						</Link>
						<div className="md:flex flex-col hidden">
							<p className="text-text-12 text-grey-lightest">Welcome Back!</p>
							<span>Kamasah Dickson</span>
						</div>
					</div>
					<ExpandMoreIcon fontSize="medium" color="primary" />
				</li>
			</ul>
		</header>
	);
};

export default DashboardHeader;
