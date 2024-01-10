import MTNimage from "@/public/mtn.svg";
import VodafoneImage from "@/public/vodaphone.svg";
import atImage from "@/public/airteltigo.svg";

interface IproviderImage {
	[key: string]: string;
}

const providerImage: IproviderImage = {};

providerImage["MTN"] = MTNimage;
providerImage["Vodafone"] = VodafoneImage;
providerImage["Tigo"] = atImage;

export const getProviderImage = (provider: string): string => {
	return providerImage[provider] || "";
};
