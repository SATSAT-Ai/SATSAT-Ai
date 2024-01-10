import { DefaultUser, DefaultSession } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			role: string;
			email: string;
			isVerified: boolean;
		} & DefaultSession;
	}

	interface User extends DefaultUser {
		role: string;
		isVerified: boolean;
	}
}

declare module "next-auth/jwt" {
	interface JWT extends DefaultJWT {
		role: string;
		isVerified: boolean;
	}
}
