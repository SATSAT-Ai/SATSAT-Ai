import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ForumIcon from "@mui/icons-material/Forum";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Link from "next/link";

const DashboardHeader = () => {
	return (
		<div className="sticky top-0 bg-white/10 text-white p-5">
			<ul className="flex gap-5 items-center justify-end">
				<li>
					<Link href={"#"}>
						<NotificationsIcon fontSize="large" color="primary" />
					</Link>
				</li>
				<li>
					<Link href={"#"}>
						<div className="relative">
							<ForumIcon
								fontSize="large"
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
							<PersonPinIcon fontSize="large" color="primary" />
						</Link>
						<div>
							<p className="text-text-12 text-grey-lightest">Welcome Back!</p>
							<span>Kamasah Dickson</span>
						</div>
					</div>
					<ExpandMoreIcon fontSize="large" color="primary" />
				</li>
			</ul>
		</div>
	);
};

export default DashboardHeader;
