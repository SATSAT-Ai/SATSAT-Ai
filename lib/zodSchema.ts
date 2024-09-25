import { z } from "zod";

export const contactSupportSchema = z.object({
	fullName: z
		.string()
		.min(5, { message: "fullName must be at least 5 character(s)" })
		.max(40),
	companyEmail: z.string().email(),
	helpNeeded: z
		.string()
		.min(10, { message: "Message must be at least 10 characters long" }),
});
