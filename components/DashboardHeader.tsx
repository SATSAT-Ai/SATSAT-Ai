"use client";

import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";
import NotificationIcon from "@/public/notificationIcon.svg";
import Image from "next/image";
import { useState, useRef, useContext, useEffect } from "react";
import satsatLogo from "../public/satsat-logo.svg";
import { AppContext } from "@/context/AppContext";

const DashboardHeader = () => {
	const [showNotification, setShowNotification] = useState(false);
	const { hideSidebar } = useContext(AppContext);

	const notificationRef = useRef(null);

	const handleShowNotification = () => {
		setShowNotification((prev) => !prev);
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				notificationRef.current &&
				!(notificationRef.current as any).contains(event.target)
			) {
				setShowNotification(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<div
			className={`sticky z-50 backdrop-blur-lg top-0 bg-white/10 text-white p-5 flex items-center ${
				hideSidebar ? "justify-between" : "justify-end"
			} gap-5`}
		>
			{hideSidebar && (
				<Link href={"/"}>
					<Image src={satsatLogo} height={110} width={110} alt="SATSAT-Ai" />
				</Link>
			)}
			<ul className="flex gap-5 items-center justify-end">
				<li className="relative">
					<NotificationsIcon
						fontSize="medium"
						color="primary"
						className="cursor-pointer active:scale-[1.01]"
						ref={notificationRef}
						onClick={handleShowNotification}
					/>
					{/* notification */}
					{showNotification && (
						<div className="bg-grey-light/95 backdrop-blur-3xl border z-40 border-white/10 w-[300px] absolute top-8 p-3 rounded-xl right-3">
							<div className="flex items-center w-full justify-between gap-5">
								<h5>Notifications</h5>
								<span className="cursor-pointer active:scale-[1.01] text-text-12 text-mid--yellow">
									Mark all as read
								</span>
							</div>
							<div className="mt-5 flex items-center gap-3">
								<Image
									src={NotificationIcon}
									width={35}
									height={35}
									alt="notification"
								/>
								<div>
									<h5 className="text-[17px]">Data.csv uploaded</h5>
									<span className="text-text-12">2hrs ago</span>
								</div>
							</div>
							<div className=" my-3 w-full h-[1px] bg-white/20"></div>

							<div className="mt-2 flex items-center gap-3">
								<Image
									src={NotificationIcon}
									width={35}
									height={35}
									alt="notification"
								/>
								<div>
									<h5 className="text-[17px]">Data.csv uploaded</h5>
									<span className="text-text-12">2hrs ago</span>
								</div>
							</div>
						</div>
					)}
				</li>
				<li>
					<Link href={"#"}>
						<div className="relative">
							<ForumIcon
								fontSize="medium"
								color="primary"
								className="relative"
							/>
							{/* <div className=" text-text-12 flex items-center justify-center number-notification rounded-full border border-white absolute bg-brand-green -top-2 -right-1 h-6 text-center w-6">
								1
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
		</div>
	);
};

export default DashboardHeader;
