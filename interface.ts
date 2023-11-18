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
