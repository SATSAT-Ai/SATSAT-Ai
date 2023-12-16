import { ReactElement } from "react";

export interface featureData {
	icon: ReactElement;
	title: string;
	para: string;
	link: string;
}

export interface Iprices {
	id: string;
	category: string;
	privileges: string[];
	price: string;
}

export interface Inotification {
	id: string;
	notificationType: string;
	message: string;
	read: boolean;
	time: string;
}

export interface ItransactionsData {
	id: string;
	data: {
		percentage: string;
		color: string;
		name: string;
	}[];
}
export interface IDashboardSidebarData {
	icon: JSX.Element;
	name: string;
	path: string;
	subPaths?: { path: string; name: string; icon: JSX.Element }[];
}

export interface Ichat {
	id: string;
	title: string;
	timestamp: string;
}
export interface Data {
	id: string;
	reconcilable: boolean;
	Provider: string;
	"Trans. Date": string;
	Category: string;
	"From Acc.": number;
	"From Name": string;
	"From No.": number;
	"Trans. Type": string;
	Amount: number;
	Fees: number;
	E_Levy: number;
	"Bal. Before": number;
	"Bal. After": number;
	"To No.": number;
	"To Name": string;
	"To Acc.": number;
	"Trans. ID": string;
	"Ref.": string;
	Ova: string;
	"Img.": string;
	Details: string;
}

export interface ICategory {
	id: string;
	date: string;
	name: string;
	number: number;
	Amount: number;
}
