import { useState, useEffect } from "react";

export const useOnScreen = (ref) => {
	const [isOnScreen, setOnScreen] = useState(false);

	const functionObserve = () => {
		return ([entry]) => setOnScreen(entry.isIntersecting);
	};

	const optionsObserve = {
		root: null,
		rootMargin: "0px",
		threshold: [0.1],
	};

	const observer = new IntersectionObserver(functionObserve, optionsObserve);

	useEffect(() => {
		observer.observe(ref.current);
		return () => {
			observer.disconnect();
		};
	});

	return isOnScreen; // now always is false.
};
