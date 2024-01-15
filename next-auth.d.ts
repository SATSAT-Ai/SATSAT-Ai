import { DefaultUser, DefaultSession } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			role: string;
			email: string;
			currentPlan: string;
		} & DefaultSession;
	}

	interface User extends DefaultUser {
		role: string;
		currentPlan: string;
	}
}

declare module "next-auth/jwt" {
	interface JWT extends DefaultJWT {
		role: string;
		currentPlan: string;
	}
}
