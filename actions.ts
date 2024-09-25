"use server";

import { supportProps } from "@/components/SupportForm";
import { contactSupportSchema } from "@/lib/zodSchema";

const contactSales = async (formData: supportProps) => {
	const formDataValues = contactSupportSchema.safeParse(formData);

	if (formDataValues.error)
		return { success: false, error: formDataValues.error.format() };

	if (formDataValues.success)
		return { success: true, data: formDataValues.data };
};

export default contactSales;
