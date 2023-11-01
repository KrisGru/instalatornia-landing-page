import { NavigationContext } from "context";
import { useState, useEffect, useContext } from "react";

export const useOnScreen = (ref, rootMargin = "55%") => {
	const [isVisible, setIsVisible] = useState(false);
	const { setActiveSection, activeSection } = useContext(NavigationContext);
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				setIsVisible(entry.isIntersecting);
				if (entry.isIntersecting) {
					setActiveSection(ref.current.id);
				}
			},
			{
				rootMargin,
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
