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
	priviledges: string[];
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
export interface IdashboardData {
	icon: JSX.Element;
	name: string;
	path: string;
	subPaths?: { path: string; name: string }[];
}
