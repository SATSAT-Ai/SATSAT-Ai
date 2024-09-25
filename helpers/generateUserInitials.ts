export const generateInitials = (
	userName: string,
	userEmail: string
): string => {
	if (userName) {
		return userName
			.trim()
			.split(" ")
			.slice(0, 2)
			.map((word) => word[0]?.toUpperCase())
			.join("");
	}
	if (userEmail) {
		return userEmail
			.trim()
			.split(" ")
			.slice(0, 2)
			.map((word) => word[0]?.toUpperCase())
			.join("");
	}

	return "";
};
