import { Inotification } from "@/interface/interface";
import { Dispatch, SetStateAction } from "react";
import NotificationLogic from "./NotificationLogic";

interface notificationProps {
	notificationCount: (notification?: Inotification[]) => number;
	unreadNotification: Inotification[];
	readTarget: number;
	handleMarkAsRead: () => void;
	setReadTarget: Dispatch<SetStateAction<number>>;
	fakeNotification: Inotification[];
	setFakeNotification: Dispatch<SetStateAction<Inotification[]>>;
}

const DashboardNotification = ({
	notificationCount,
	unreadNotification,
	readTarget,
	handleMarkAsRead,
	setReadTarget,
	fakeNotification,
	setFakeNotification,
}: notificationProps) => {
	return (
		<div className="bg-[#071f07] border-grey-light rey-light no-select border z-40 border-white/10 w-[300px] sm:w-[350px] absolute top-12 p-3 rounded-xl right-[-100px] md:right-0">
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
			<div className="h-[150px] overflow-y-auto overscroll-none custom-scroll">
				<NotificationLogic
					readTarget={readTarget}
					fakeNotification={fakeNotification}
					setFakeNotification={setFakeNotification}
				/>
			</div>
		</div>
	);
};

export default DashboardNotification;
