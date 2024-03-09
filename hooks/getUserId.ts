import { useSearchParams } from "next/navigation";
export const useGetUserId = () => {
	const searchParams = useSearchParams();
	const userId = searchParams?.get("userId");

	if (userId) {
		return { userId };
	}
	return { userId: "" };
};
