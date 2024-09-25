import {
	Roboto,
	Inter,
	Open_Sans,
	Space_Grotesk,
	IBM_Plex_Sans,
} from "next/font/google";

export const roboto = Roboto({
	subsets: ["latin", "greek"],
	weight: ["300", "400", "500", "700", "900"],
});

export const inter = Inter({ subsets: ["latin"] });
export const openSans = Open_Sans({ subsets: ["latin"] });
export const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
export const ibmPlexSans = IBM_Plex_Sans({
	weight: ["400", "600"],
	subsets: ["latin"],
});
