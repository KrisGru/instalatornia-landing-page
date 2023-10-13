import { useContext } from "react";
import { NavigationContext } from "router/context/context";

export const useScrollTo = () => {
	const { setActiveSection } = useContext(NavigationContext);

	const scrollToSection = (sectionId) => {
		setActiveSection(sectionId);
		document
			.getElementById(sectionId)
			.scrollIntoView({ behavior: "smooth" });
	};
	return { scrollToSection };
};
