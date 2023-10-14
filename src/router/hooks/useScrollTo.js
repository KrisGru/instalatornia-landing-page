import { useContext, useEffect, useState } from "react";
import { NavigationContext } from "router/context/context";

export const useScrollTo = () => {
	const { activeSection, setActiveSection } = useContext(NavigationContext);

	const listener = (e) => {
		const title = document.querySelector("#title123");

		const observer = new IntersectionObserver(
			(entries) => {
				console.log("wykonuje się ", entries);
				title.classList.toggle("show", entry.isIntersecting);
			},
			{
				threshold: "10px",
			}
		);

		observer.observe(title);
	};

	useEffect(() => {
		window.addEventListener("scroll", listener);
		return () => {
			window.removeEventListener("scroll", listener);
		};
	});

	const scrollToSection = (sectionId) => {
		setActiveSection(sectionId);
		document
			.getElementById(sectionId)
			.scrollIntoView({ behavior: "smooth" });
	};
	return { scrollToSection };
};
