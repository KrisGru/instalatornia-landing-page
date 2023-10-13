import { NavLink } from "react-router-dom";
import { Link } from "./styles";
import { useContext } from "react";
import { NavigationContext } from "router/context/context";
import { useScrollTo } from "router/hooks/useScrollTo";

const navLinks = [
	{ title: "Strona Główna", id: "home_section", path: "#" },
	{ title: "Cennik", id: "priceContainer", path: "cennik" },
	{ title: "O nas", id: "aboutUsContainer", path: "o_nas" },
	{ title: "Kontakt", id: "contactContainer", path: "kontakt" },
];

const Navigation = () => {
	const { activeSection, setActiveSection } = useContext(NavigationContext);
	const { scrollToSection } = useScrollTo();

	return (
		<>
			{navLinks.map(({ title, id, path }, idx) => (
				<Link
					key={idx}
					onClick={() => scrollToSection(id)}
					active={!!(activeSection === id)}>
					{title}
				</Link>
			))}
		</>
	);
};

export default Navigation;
