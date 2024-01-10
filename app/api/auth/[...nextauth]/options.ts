import type { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import axios from "axios";

export const options: NextAuthOptions = {
	providers: [
		CredentialProvider({
			credentials: {},
			async authorize(credentials) {
				const { email } = credentials as { email: string };
				// console.log({ credentials });
				const user = {
					id: "1",
					name: "dickson",
					email,
					role: "admin",
					isVerified: false,
				};

				if (email !== "kamasahdickson19@gmail.com") {
					throw new Error("testing error");
				}

				return user;
			},
		}),
	],

	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				(token.role = user.role), (token.isVerified = user.isVerified);
			}
			return token;
		},

		async session({ session, token }) {
			if (session?.user) {
				(session.user.role = token.role),
					(session.user.isVerified = token.isVerified);
			}
			return session;
		},
	},

	pages: {
		signIn: "/signin",
		signOut: "/signout",
	},
};
