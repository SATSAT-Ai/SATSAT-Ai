import axios from "axios";

export const getCountryId = async () => {
	try {
		const response = await axios.get(
			`${process.env.NEXT_PUBLIC_SATSATAI_MS_USER}/countries/index`
		);
		return response.data ?? "";
	} catch (error) {
		console.log(error);
	}
};
