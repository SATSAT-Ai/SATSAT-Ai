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

				if (
					email !== process.env.CYPRESS_TEST_EMAIL &&
					password !== process.env.CYPRESS_TEST_PASSWORD
				) {
					//get user
					try {
						const response = await axios.post(
							`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/auth/login`,
							{
								email,
								password,
							}
						);
						if (response.status === 200) {
							return response.data.user;
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
						currentPlan: "Pro",
					};

					if (email !== process.env.CYPRESS_TEST_EMAIL) {
						throw new Error("User is not found");
					}

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
