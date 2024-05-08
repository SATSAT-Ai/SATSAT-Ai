import { DefaultUser, DefaultSession } from "next-auth";
import { DefaultJWT, JWT } from "next-auth/jwt";

declare module "next-auth" {
	interface Session {
		user: {
			id: string;
			role: string;
			email: string;
			currentPlan: string;
			name: string;
			access_token: string;
			type: "GOD" | "PARTNER" | "PERSONAL";
		} & DefaultSession;
	}

	interface User extends DefaultUser {
		id: string;
		role: string;
		currentPlan: string;
		access_token: string;
		name: string;
		type: "GOD" | "PARTNER" | "PERSONAL";
	}
}

declare module "next-auth/jwt" {
	interface JWT extends DefaultJWT {
		id: string;
		role: string;
		name: string;
		access_token: string;
		currentPlan: string;
		type: "GOD" | "PARTNER" | "PERSONAL";
	}
}
