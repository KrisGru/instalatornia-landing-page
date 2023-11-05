import { NavigationContext } from "context";
import { useContext, useEffect, useState } from "react";

export const useOnScreen = (ref, threshold = "0.85") => {
	const [isVisible, setIsVisible] = useState(false);
	const { setActiveSection, activeSection } = useContext(NavigationContext);

	useEffect(() => {
		const currentHash = window.location.hash;
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
				if (entry.isIntersecting) {
					setActiveSection(ref.current.id);
				}
			},
			{
				threshold,
			}
		);

		const currentElement = ref?.current;

		if (currentElement) {
			observer.observe(currentElement);
		}

		return () => {
			observer.unobserve(currentElement);
		};
	}, [ref]);

	return { isVisible };
};
