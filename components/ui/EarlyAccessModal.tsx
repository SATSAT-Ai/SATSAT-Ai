"use client";

import boldLogo from "@/public/bold-logo.svg";
import Image from "next/image";
import { useEffect, useState } from "react";
import EarlyBirdImage from "@/public/EarlyBird.svg";
import { MdClose } from "react-icons/md";
import GetStartedButton from "./GetStartedButton";

const EarlyAccessModal = () => {
	const [showEarlyAccessModal, setShowEarlyAccessModal] = useState<
		boolean | null
	>(null);

	useEffect(() => {
		const handleLoadAndDelay = () => {
			if (document.readyState === "complete") {
				const timer = setTimeout(() => {
					setShowEarlyAccessModal(true);
				}, 8000);

				return () => clearTimeout(timer);
			}
		};

		window.addEventListener("load", handleLoadAndDelay);

		return () => window.removeEventListener("load", handleLoadAndDelay);
	}, []);

	useEffect(() => {
		//show closed banner every 3hrs
		// if hasExpired is not true banner will never be shown

		const expirationDuration = 3 * 60 * 60 * 1000; // 3hours
		const hasExpired = new Date().getTime() - expirationDuration > 0; // Check if 3 hrs passed

		const modalInLocalStorage = JSON.parse(
			localStorage.getItem("showEarlyAccessModal") as unknown as string
		);

		//show modal if storage is cleared or show on users first time
		if (modalInLocalStorage !== false && hasExpired) {
			setShowEarlyAccessModal(true);
			localStorage.setItem("showEarlyAccessModal", JSON.stringify(true));
		} else {
			setShowEarlyAccessModal(false);
			localStorage.setItem("showEarlyAccessModal", JSON.stringify(false));
		}
	}, []);

	const handleShowBanner = () => {
		localStorage.setItem("showEarlyAccessModal", JSON.stringify(false));
		setShowEarlyAccessModal(false);
	};

	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === "Escape") {
				setShowEarlyAccessModal(false);
			}
		};
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [setShowEarlyAccessModal]);

	return (
		showEarlyAccessModal && (
			<section className="overscroll-none overflow-y-auto select-none h-screen fixed top-0 left-0 right-0 p-3 grid grid-cols-1 lg:grid-cols-2 w-full z-30 bg-darker/95 items-center justify-between gap-10">
				<MdClose
					onClick={handleShowBanner}
					size={25}
					color="white"
					className="fixed top-5 right-7 cursor-pointer active:scale-[1.02]"
				/>
				<div className="flex flex-col gap-5 justify-between">
					<div>
						<Image
							src={boldLogo}
							alt="coming-soon"
							height={700}
							width={700}
							className="w-full h-12 md:h-[70px]"
							priority
						/>
						<p className="silver-text text-text-40 leading-normal text-center font-bold md:text-text-60 lg:text-[70px]">
							Coming Soon
						</p>
					</div>
					<div className="flex flex-col md:flex-row items-center gap-5 justify-center">
						<p className="silver-text text-center md:text-left text-text-normal md:text-text-20 md:max-w-xs">
							Join the waitlist to be one of the first to be notified.
						</p>
						<div className="flex flex-col sm:flex-row items-center gap-3">
							<GetStartedButton
								data-test="waitlist-button"
								name="Join Waitlist"
								href="https://forms.gle/CbDpLjhDCdx1NugU8"
								className="font-medium"
								target="_blank"
							/>
						</div>
					</div>
				</div>
				<div className="rounded-[40px] w-fit hidden lg:flex  mx-auto overflow-clip">
					<Image
						className="object-cover rounded-[40px]"
						src={EarlyBirdImage}
						height={550}
						width={550}
						alt="earlyBird"
						quality={30}
						priority
					/>
				</div>
			</section>
		)
	);
};

export default EarlyAccessModal;
