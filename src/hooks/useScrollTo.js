export const useScrollTo = () => {
	const scrollToSection = sectionId => {
		document
			.getElementById(sectionId)
			.scrollIntoView({ behavior: "smooth" });
	};
	return { scrollToSection };
};
