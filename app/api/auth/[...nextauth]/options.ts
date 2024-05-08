import type { NextAuthOptions } from "next-auth";
import CredentialProvider from "next-auth/providers/credentials";
import axios from "axios";

export const options: NextAuthOptions = {
	providers: [
		CredentialProvider({
			credentials: {},
			async authorize(credentials) {
				const { email, password } = credentials as {
					email: string;
					password: string;
				};

				if (!process.env.NEXT_PUBLIC_WAITLIST_MODE) {
					try {
						const response = await axios.post(
							`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/api/auth/login`,
							{
								email,
								password,
							}
						);
						if (response.status === 200) {
							return {
								...response.data.user,
								access_token: response.data.access_token,
							};
						}
					} catch (error: any) {
						throw new Error(error?.response?.data?.error);
					}
				} else {
					const user = {
						id: "1",
						name: "Demo",
						email,
						role: "admin",
						currentPlan: "free",
					};

					return user;
				}
			},
		}),
	],

	session: {
		strategy: "jwt",
		maxAge: 60 * 60 * 24 * 7, // 7 days
		updateAge: 60 * 60 * 24 * 3, //  inactive for 3 days, sign in and verify
	},

	jwt: {
		maxAge: 60 * 60 * 24 * 7, // 7 days
	},

	callbacks: {
		async jwt({ token, user }) {
			if (user) {
				token.role = user.role;
				token.currentPlan = user.currentPlan;
				token.id = user.id;
				token.type = user.type;
				token.name = user.name;
				token.access_token = user.access_token;
			}
			return token;
		},

		async session({ session, token }) {
			if (session?.user) {
				session.user.role = token.role;
				session.user.currentPlan = token.currentPlan;
				session.user.id = token.id;
				session.user.type = token.type;
				session.user.name = token.name;
				session.user.access_token = token.access_token;
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
