import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		if (
			request.nextUrl.pathname.startsWith("/dashboard") &&
			request.nextauth.token?.role !== "admin"
		) {
			return NextResponse.rewrite(new URL("/denied", request.url));
		}
	},

	{
		callbacks: {
			authorized: ({ token }) => !!token,
		},
	}
);

// Matching Paths
export const config = {
	matcher: ["/dashboard/:path*"],
};
