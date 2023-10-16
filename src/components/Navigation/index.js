import { NavLink } from "react-router-dom";
import { Link, Navbar } from "./styles";
import { useContext } from "react";
import { NavigationContext } from "context";
import { useScrollTo } from "hooks/useScrollTo";
import Logo from "../../components/Logo";
import Button from "components/Button";

const navLinks = [
	{ title: "Strona Główna", id: "home_section", path: "#" },
	{ title: "O nas", id: "about_section", path: "o_nas" },
	{ title: "Cennik", id: "price_section", path: "cennik" },
	{ title: "Kontakt", id: "contact_section", path: "kontakt" },
];

const Navigation = () => {
	const { activeSection } = useContext(NavigationContext);
	const { scrollToSection } = useScrollTo();

	return (
		<Navbar>
			<Logo size={"small"} type={"dark"} />
			<div>
				{navLinks.map(({ title, id, path }, idx) => (
					<Link
						key={idx}
						onClick={() => scrollToSection(id)}
						className={`${activeSection === id ? "active" : ""}`}>
						{title}
					</Link>
				))}
			</div>
			<Button color={"black"}>Zadzwoń</Button>
		</Navbar>
	);
};

export default Navigation;
