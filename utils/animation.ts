export const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			delayChildren: 0.4,
			staggerChildren: 0.2,
			duration: 2,
		},
	},
};

export const item = {
	hidden: { opacity: 0 },
	show: { opacity: 1, transition: { duration: 2 } },
};
