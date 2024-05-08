import { ReactElement } from "react";

export interface featureData {
	icon: ReactElement;
	title: string;
	para: string;
	link?: string;
	id: string;
}

export interface IPrices {
	id: "free" | "pro" | "plus" | "enterprise";
	category: "free" | "pro" | "plus" | "enterprise";
	privileges: string[];
	price: string;
	annualPrice?: string;
}

export interface Inotification {
	id: string;
	notificationType: string;
	message: string;
	read: boolean;
	time: string;
}

export interface ITransactionsData {
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
	Vendor: string;
	Details?: string;
}

export interface ICategory {
	id: string;
	date: string;
	name: string;
	number: number;
	Amount: number;
}

export interface IncomeStreams {
	date: string;
	name: string;
	number: number;
	amount: number;
}

export type billingPeriodType = "forever" | "annual" | "monthly";
export type planType = "pro" | "plus" | "free";
export type databasePlanName =
	| "pro-monthly"
	| "pro-annual"
	| "plus-monthly"
	| "plus-annual"
	| "free-monthly"
	| "free-annual";
export interface finishingUpDataInterface {
	"starting plan": planType;
	"billing period": billingPeriodType;
	price: string | null | undefined;
}
export interface databasePlanInterface {
	name: databasePlanName;
	title: "string";
	id: "string";
	quantity: number;
}
