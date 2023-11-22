import Image from "next/image";
import NotificationIcon from "@/public/notificationIcon.svg";
import { Inotification } from "@/interface";
import { Dispatch, SetStateAction } from "react";

const NotificationLogic = ({
	readTarget,
	fakeNotification,
	setFakeNotification,
}: {
	readTarget: number;
	setFakeNotification: Dispatch<SetStateAction<Inotification[]>>;
	fakeNotification: Inotification[];
}) => {
	const handleMarkTargetRead = (id: string) => {
		setFakeNotification((prev) =>
			prev.map((notification) => {
				if (notification.id === id) {
					return { ...notification, read: true };
				}
				return { ...notification };
			})
		);
	};
	const handleMarkTargetUnRead = (id: string) => {
		setFakeNotification((prev) =>
			prev.map((notification) => {
				if (notification.id === id) {
					return { ...notification, read: false };
				}
				return { ...notification };
			})
		);
	};

	return (
		<>
			{readTarget === 0
				? fakeNotification
						.filter((notification) => notification.read === false)
						.map((notification, index) => {
							return (
								<>
									<div
										key={notification.id}
										className="my-5 flex px-2 items-center gap-3"
									>
										<div className="flex items-center justify-between w-full">
											<div className="flex items-center gap-5">
												<Image
													src={NotificationIcon}
													width={35}
													height={35}
													alt="notification"
												/>
												<div>
													<h5 className="text-[14px]">
														{notification.message}
													</h5>
													<span className="text-text-12">
														{notification.time}
													</span>
												</div>
											</div>
											<span
												onClick={() => handleMarkTargetRead(notification.id)}
												className="active:scale-[1.01] cursor-pointer text-mid--yellow text-[10px]"
											>
												Mark as read
											</span>
										</div>
									</div>
									{index !== fakeNotification.length - 1 && (
										<div className=" my-3 w-full h-[1px] bg-white/20"></div>
									)}
								</>
							);
						})
				: fakeNotification
						.filter((notification) => notification.read === true)
						.map((notification, index) => {
							return (
								<>
									<div
										key={notification.id}
										className="mt-5 flex  items-center gap-3"
									>
										<div className="flex items-center justify-between w-full">
											<div className="flex opacity-50 items-center gap-5">
												<Image
													src={NotificationIcon}
													width={35}
													height={35}
													alt="notification"
												/>
												<div>
													<h5 className="text-[14px]">
														{notification.message}
													</h5>
													<span className="text-text-12">
														{notification.time}
													</span>
												</div>
											</div>
											<span
												onClick={() => handleMarkTargetUnRead(notification.id)}
												className="active:scale-[1.01] cursor-pointer text-mid--yellow text-[10px]"
											>
												Mark as Unread
											</span>
										</div>
									</div>
									{index !== fakeNotification.length - 1 && (
										<div className=" my-3 w-full h-[1px] bg-white/20"></div>
									)}
								</>
							);
						})}
			{readTarget == 0 &&
				fakeNotification.filter((notification) => notification.read === true)
					.length > 1 && (
					<span className="text-center text-text-12 mt-5 text-white/50 block">
						You have no new notifications
					</span>
				)}
		</>
	);
};

export default NotificationLogic;
