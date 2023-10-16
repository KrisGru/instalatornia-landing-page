import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "context";

export const useScrollTo = () => {
	const scrollToSection = (sectionId) => {
		document
			.getElementById(sectionId)
			.scrollIntoView({ behavior: "smooth" });
	};
	return { scrollToSection };
};
