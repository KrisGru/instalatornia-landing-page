import { NavLink } from "react-router-dom";
import { Link, Navbar } from "./styles";
import { useContext } from "react";
import { NavigationContext } from "router/context/context";
import { useScrollTo } from "router/hooks/useScrollTo";
import Logo from "../../components/Logo";
import Button from "components/Button";

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
		<Navbar>
			<Logo size={"small"} type={"dark"} />
			<div>
				{navLinks.map(({ title, id, path }, idx) => (
					<Link
						key={idx}
						onClick={() => scrollToSection(id)}
						active={!!(activeSection === id)}>
						{title}
					</Link>
				))}
			</div>
			<Button color={"black"}>Zadzwoń</Button>
		</Navbar>
	);
};

export default Navigation;
