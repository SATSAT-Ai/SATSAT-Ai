"use client";

import NotificationsIcon from "@mui/icons-material/Notifications";
import Link from "next/link";
import Image from "next/image";
import { useState, useContext, useEffect, useRef } from "react";
import satsatLogo from "../public/satsat-logo.svg";
import { AppContext } from "@/context/AppContext";
import { Inotification } from "@/interface/interface";
import { usePathname } from "next/navigation";
import { RiMenu4Fill } from "react-icons/ri";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import DashboardNotification from "./DashboardNotification";
import DashboardOptions from "./DashboardOptions";

const DashboardHeader = () => {
	const pathname = usePathname();
	const notificationRef = useRef<null | HTMLLIElement>(null);
	const optionsRef = useRef<null | HTMLLIElement>(null);
	const [loading, setLoading] = useState(false);
	const session = useSession();
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

	const handleLogout = async () => {
		//logout
		setLoading(true);
		try {
			await signOut();
		} catch (e) {
			setLoading(false);
			console.log(e);
		}
	};

	return (
		<header
			className={`sticky z-40 backdrop-blur-lg md:h-20 h-16 top-0 bg-white/10 text-white px-3 md:px-5 flex items-center ${
				hideSidebar ? "justify-between" : "justify-end"
			} gap-5 ${pathname?.includes("/dashboard/chat") && "hidden"}`}
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
					priority
				/>
			</Link>

			<ul className="flex gap-4 sm:gap-6 items-center justify-end">
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
						<DashboardNotification
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

				<li className="flex items-center gap-3">
					<div className="flex items-center gap-2">
						<Link href={"/profile"}>
							{session.data?.user.user?.image ? (
								<Image
									src={session.data.user.user.image}
									height={50}
									width={50}
									alt={session.data.user.user?.name!}
									className="border border-[wheat] rounded-full"
								/>
							) : (
								<AccountCircleOutlinedIcon fontSize="large" color="inherit" />
							)}
						</Link>

						<div className="sm:flex flex-col hidden">
							<p className="text-text-12 text-grey-lightest">Welcome!</p>
							<span className="text-[14px]">
								{session.data?.user.email.split("@")[0]}
							</span>
						</div>
					</div>
				</li>
				<DashboardOptions
					handleLogout={handleLogout}
					loading={loading}
					optionsRef={optionsRef}
					setShowMoreOptions={setShowMoreOptions}
					showMoreOptions={showMoreOptions}
				/>
			</ul>
		</header>
	);
};

export default DashboardHeader;
