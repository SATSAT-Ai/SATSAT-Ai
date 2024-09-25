"use client";

import Image from "next/image";
import { generateInitials } from "@/helpers/generateUserInitials";
import { useSession } from "next-auth/react";

const Profile = () => {
	const session = useSession();

	return (
		<li className="flex items-center gap-3">
			<div className="flex items-center gap-3">
				{session.data?.user.user?.image ? (
					<Image
						src={session.data.user.user.image}
						height={50}
						width={50}
						alt={session.data.user.user?.name!}
						className="bg-brand-green-darker border border-[wheat]/50 text-white shrink-0 rounded-full text-text-12 aspect-square h-11 grid place-content-center font-medium"
					/>
				) : (
					<p className="bg-brand-green-darker border border-[wheat]/50 text-white shrink-0 rounded-full text-text-12 aspect-square h-9 p-2 grid place-content-center font-medium">
						{generateInitials(
							session?.data?.user?.name!,
							session?.data?.user.email!
						)}
					</p>
				)}

				<div className="sm:flex flex-col hidden">
					<span className="text-[14px]">
						{session.data?.user.email.split("@")[0]}
					</span>
				</div>
			</div>
		</li>
	);
};

export default Profile;
