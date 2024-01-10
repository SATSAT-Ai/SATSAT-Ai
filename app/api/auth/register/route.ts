import { NextResponse } from "next/server";
import axios from "axios";

export const POST = async (request: Request) => {
	try {
		const { fullName, email, country } = await request.json();

		if (fullName && email && country) {
			// const response  = await axios.post('url',{
			//     fullName,
			//     email,
			//     country
			// })
		} else {
			throw new Error("An error occurred");
		}

		console.log({ fullName, email, country });
	} catch (e) {
		console.log({ e });
	}

	return NextResponse.json({ message: "success" });
};
