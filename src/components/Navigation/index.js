import Button from "components/Button";
import { Link } from "components/Button/styles";
import { NavigationContext } from "context";
import { useResolution } from "hooks/useResolution";
import { useScrollTo } from "hooks/useScrollTo";
import { useContext, useState } from "react";
import { Flex } from "styles";
import hamburger from "assets/icons/burger-menu.svg";
import Logo from "components/Logo";
import { MobileMeneWrapper, Navbar, NavbarWrapper } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const navLinks = [
	{ title: "Strona Główna", id: "home_section", path: "#" },
	{ title: "Usługi", id: "service_section", path: "cennik" },
	{ title: "O nas", id: "about_section", path: "o_nas" },
	{ title: "Galeria", id: "gallery_section", path: "galeria" },
	{ title: "Kontakt", id: "contact_section", path: "kontakt" },
];

const Navigation = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);
	const { activeSection } = useContext(NavigationContext);
	const { scrollToSection } = useScrollTo();
	const { isDesktopWidth, isTabletWidth } = useResolution();

	const handleOpenMenu = () => setIsOpenMenu(!isOpenMenu);
	return (
		<NavbarWrapper>
			<Navbar>
				<Logo size={"small"} type={"light"} />
				{isDesktopWidth && (
					<div>
						{navLinks.map(({ title, id, path }, idx) => (
							<Link
								href={`#${path}`}
								key={idx}
								onClick={() => scrollToSection(id)}
								className={`${activeSection === id ? "active" : ""}`}>
								{title}
							</Link>
						))}
					</div>
				)}

				{!isDesktopWidth ? (
					<Flex gap={!isTabletWidth ? "small" : "20px"}>
						<Button color={"black"}>
							<a href='https://www.facebook.com/profile.php?id=100085298913640' target='_blank'>
								<FontAwesomeIcon icon='fa-brands fa-square-facebook' />
							</a>
						</Button>
						<Button color={"black"} onClick={handleOpenMenu}>
							<a href='tel:570741222'>Zadzwoń</a>
						</Button>
						<Button color={"black"} size='small' handleClick={handleOpenMenu}>
							<img src={hamburger} width={"16px"} />
						</Button>
					</Flex>
				) : (
					<Flex gap='small'>
						<div style={{ textAlign: "end" }}>
							<Button color={"black"}>
								<a href='https://www.facebook.com/profile.php?id=100085298913640' target='_blank'>
									<FontAwesomeIcon icon='fa-brands fa-square-facebook' />
								</a>
							</Button>
						</div>
						<div style={{ textAlign: "end" }}>
							<Button color={"black"} onClick={handleOpenMenu}>
								<a href='tel:570741222'>Zadzwoń</a>
							</Button>
						</div>
					</Flex>
				)}

				{isOpenMenu && (
					<MobileMeneWrapper>
						{navLinks.map(({ title, id, path }, idx) => (
							<Link key={idx} onClick={() => scrollToSection(id)} className={`${activeSection === id ? "active" : ""}`}>
								{title}
							</Link>
						))}
					</MobileMeneWrapper>
				)}
			</Navbar>
		</NavbarWrapper>
	);
};

export default Navigation;
