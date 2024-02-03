"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TypeWrite from "./TypeWrite";

const TypeWriteInview = ({ text }: { text: string }) => {
	const [ref, inView] = useInView({
		triggerOnce: true,
	});

	return (
		<motion.p
			ref={ref}
			initial={{ opacity: 0 }}
			animate={inView ? { opacity: 1 } : { opacity: 0 }}
			transition={{ duration: 0.3, ease: "linear" }}
		>
			{inView && (
				<TypeWrite
					text={text}
					showCaret={true}
					loop={false}
					typingSpeed={35}
					showCaretOnComplete={false}
					timeToStartNewText={0}
				/>
			)}
		</motion.p>
	);
};

export default TypeWriteInview;
