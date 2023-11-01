import { NavLink } from "react-router-dom";
import { Link, MobileMeneWrapper, Navbar, NavbarWrapper } from "./styles";
import { useContext, useState } from "react";
import { NavigationContext } from "context";
import { useScrollTo } from "hooks/useScrollTo";
import Logo from "../../components/Logo";
import hamburger from "../../assets/icons/burger-menu.svg";
import Button from "components/Button";
import { useResolution } from "hooks/useResolution";

const navLinks = [
  { title: "Strona Główna", id: "home_section", path: "#" },
  { title: "Usługi", id: "price_section", path: "cennik" },
    { title: "O nas", id: "about_section", path: "o_nas" },
  { title: "Kontakt", id: "contact_section", path: "kontakt" },
];

const Navigation = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { activeSection } = useContext(NavigationContext);
  const { scrollToSection } = useScrollTo();
  const { isSmallDesktopWidth } = useResolution();

  const handleOpenMenu = () => setIsOpenMenu(!isOpenMenu);
  return (
    <NavbarWrapper>
      <Navbar>
        <Logo size={"small"} type={"dark"} />
        {isSmallDesktopWidth && (
          <div>
            {navLinks.map(({ title, id, path }, idx) => (
              <Link
                key={idx}
                onClick={() => scrollToSection(id)}
                className={`${activeSection === id ? "active" : ""}`}
              >
                {title}
              </Link>
            ))}
          </div>
        )}
        <div style={{ width: "140px" }}>
          <Button color={"black"} onClick={handleOpenMenu}>
            <a href="tel:6177787312">Zadzwoń</a>
          </Button>
        </div>

        {!isSmallDesktopWidth && (
          <Button color={"black"} size="small" handleClick={handleOpenMenu}>
            <img src={hamburger} width={"16px"} />
          </Button>
        )}
        {isOpenMenu && (
          <MobileMeneWrapper>
            {navLinks.map(({ title, id, path }, idx) => (
              <Link
                key={idx}
                onClick={() => scrollToSection(id)}
                className={`${activeSection === id ? "active" : ""}`}
              >
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
