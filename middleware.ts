import { withAuth, NextRequestWithAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
	function middleware(request: NextRequestWithAuth) {
		if (
			request.nextUrl.pathname.startsWith("/dashboard") &&
			request.nextauth.token?.role !== "admin" // replace with (request.nextauth.token?.role !== "GOD" || request.nextauth.token?.role !== "Partner")
		) {
			// return NextResponse.rewrite(new URL("/denied", request.url));
		}

		// if (request.nextUrl.pathname.startsWith("/dashboard")) {
		// 	if (request.nextauth.token?.role === "GOD" || request.nextauth.token?.role === "Partner") {
		// 	  return NextResponse.rewrite(new URL("/dashboard-enterprise", request.url));
		// 	} else {
		// 	  return NextResponse.rewrite(new URL("/dashboard", request.url));
		// 	}
		//   }
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
