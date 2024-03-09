import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { getServerSession } from "next-auth";
import { options } from "../[...nextauth]/options";

export const POST = async (req: NextRequest) => {
	try {
		const session = await getServerSession(options);
		const { country_id, fullName, email, phone, starting_plan } =
			await req.json();

		//if user already exist
		if (session && session.user.email === email) {
			return NextResponse.json(
				{ message: "You are already logged in" },
				{ status: 400 }
			);
		} else if (session && session.user) {
			return NextResponse.json(
				{
					message: "Cannot signup when you are logged in",
				},
				{ status: 400 }
			);
		}

		const response = await axios.post(
			`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/users`,
			{
				name: fullName,
				email,
				country_id,
				phone,
				starting_plan: starting_plan.toUpperCase(),
			}
		);
		if (response.status === 201) {
			return NextResponse.json({
				message: " Account has been created",
				userId: response.data.user.id,
				success: true,
			});
		}
	} catch (error: any) {
		return NextResponse.json(
			{
				message: error?.response?.data?.error,
			},
			{
				status: error?.response?.status,
			}
		);
	}
};
