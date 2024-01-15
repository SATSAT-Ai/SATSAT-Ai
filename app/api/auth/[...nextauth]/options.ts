import type { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import axios from "axios";

export const options: NextAuthOptions = {
	providers: [
		CredentialProvider({
			credentials: {},
			async authorize(credentials) {
				const { email } = credentials as {
					email: string;
				};

				const user = {
					id: "1",
					name: "dickson",
					email,
					role: "admin",
					currentPlan: "Pro",
				};

				if (email !== "demo@gmail.com") {
					throw new Error("testing error");
				}

				return user;
			},
		}),
	],

	session: {
		strategy: "jwt",
		maxAge: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24 * 3, //  inactive for 3 days, sign in and verify
		// maxAge: 60 * 60 * 24, //24hrs
	},

	jwt: {
		maxAge: 60 * 60 * 24 * 7, // 7 days
	},

	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.role = user.role;
				token.currentPlan = user.currentPlan;
			}
			return token;
		},

		async session({ session, token }) {
			if (session?.user) {
				session.user.role = token.role;
				session.user.currentPlan = token.currentPlan;
			}
			return session;
		},
	},

	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/signin",
		signOut: "/signout",
	},
};
