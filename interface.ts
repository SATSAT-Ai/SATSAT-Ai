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
