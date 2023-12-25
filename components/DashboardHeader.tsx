"use client";

import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import Image from "next/image";
import { useState, useContext, useEffect, useRef } from "react";
import satsatLogo from "../public/satsat-logo.svg";
import { AppContext } from "@/context/AppContext";
import NotificationLogic from "./NotificationLogic";
import { Inotification } from "@/interface";
import { usePathname } from "next/navigation";
import { RiMenu4Fill } from "react-icons/ri";

const DashboardHeader = () => {
	const pathname = usePathname();
	const notificationRef = useRef<null | HTMLLIElement>(null);
	const optionsRef = useRef<null | HTMLDivElement>(null);

	const { hideSidebar, setHideSidebar } = useContext(AppContext);
	const [showNotification, setShowNotification] = useState(false);
	const [showMoreOptions, setShowMoreOptions] = useState(false);

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

	useEffect(() => {
		const hideOptions = (event: MouseEvent) => {
			if (!optionsRef?.current?.contains(event.target as Node)) {
				setShowMoreOptions(false);
			}
			if (!notificationRef?.current?.contains(event.target as Node)) {
				setShowNotification(false);
			}
		};

		window.addEventListener("mousedown", hideOptions);

		return () => {
			window.removeEventListener("mousedown", hideOptions);
		};
	}, [optionsRef, notificationRef]);

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

	const handleLogout = () => {
		//logout
	};

	return (
		<header
			className={`sticky z-40 backdrop-blur-lg md:h-20 h-16 top-0 bg-white/10 text-white px-3 md:px-5 flex items-center ${
				hideSidebar ? "justify-between" : "justify-end"
			} gap-5 ${pathname.includes("/dashboard/chat") && "hidden"}`}
		>
			{hideSidebar && (
				<div
					tabIndex={0}
					className={`md:hidden sm:top-[unset] top-24 left-5 cursor-pointer w-fit p-1 rounded-md`}
					onClick={() => setHideSidebar(false)}
				>
					<RiMenu4Fill size={25} color="white" />
				</div>
			)}
			<Link href={"/"} className="mx-auto md:mr-auto md:ml-0">
				<Image
					src={satsatLogo}
					height={100}
					width={100}
					alt="SATSAT-Ai"
					className={`md:${hideSidebar ? "flex" : "hidden"} h-auto w-auto`}
				/>
			</Link>

			<ul className="flex gap-2 sm:gap-5 items-center justify-end">
				<li ref={notificationRef} className="relative" tabIndex={0}>
					<NotificationsIcon
						fontSize="medium"
						color="primary"
						className="cursor-pointer active:scale-[1.02]"
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
					{/* notification */}
					{showNotification && (
						<div className="bg-grey-light no-select border z-40 border-white/10 w-[300px] sm:w-[350px] absolute top-12 p-3 rounded-xl right-full md:right-1/2 md:translate-x-1/3 translate-x-[27%] sm:translate-x-0 sm:-right-2">
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

				<li className="flex items-center gap-3">
					<div className="flex items-center gap-3">
						<div className="sm:flex flex-col hidden">
							<p className="text-text-12 text-grey-lightest">Welcome!</p>
							<span className="text-[14px]">Kamasah Dickson</span>
						</div>
					</div>
				</li>
				<li className="relative">
					<div ref={optionsRef}>
						<button
							onClick={() => setShowMoreOptions((prev) => !prev)}
							type="button"
							aria-label="options"
							className="bg-grey-light hover:bg-brand-green transition-colors duration-150 p-2 rounded-lg shadow-sm active:scale-[1.02]"
						>
							<ExpandMoreIcon fontSize="medium" color="primary" />
						</button>
					</div>

					{showMoreOptions && (
						<div className="bg-grey-light no-select border z-40 border-white/10 absolute top-12 right-0 p-3 rounded-xl">
							<div className="flex items-center w-full justify-between gap-5">
								<ul className="flex flex-col">
									<li className=" text-text-normal hover:bg-[#071f07] hover:text-[wheat] transition-color cursor-pointer active:scale-[1.02] text-white rounded-md py-2 px-7">
										<Link href={"/profilt"} className="flex items-center gap-2">
											<PersonPinIcon fontSize="medium" color="inherit" />{" "}
											Profile
										</Link>
									</li>

									<div className=" my-2 w-full h-[1px] bg-white/10"></div>
									<li className=" cursor-pointer active:scale-[1.02] text-white hover:text-white transition-opacity bg-brand-green rounded-md py-2 text-center hover:opacity-80 px-4">
										<button
											type="button"
											className="text-text-normal"
											onClick={handleLogout}
										>
											Logout
										</button>
									</li>
								</ul>
							</div>
						</div>
					)}
				</li>
			</ul>
		</header>
	);
};

export default DashboardHeader;
