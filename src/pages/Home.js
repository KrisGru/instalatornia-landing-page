import { useNav } from "../route/customHooks/useNav";
import { navLinks } from "../assets/data/consts";
// import NavLink from "../components/NavLink";
import styled from "styled-components";
import { ReactComponent as HomeIcon } from "../assets/icons/home.svg";
import { ReactComponent as RateIcon } from "../assets/icons/rate.svg";
import { ReactComponent as GalleryIcon } from "../assets/icons/gallery.svg";
import { useContext } from "react";
import { NavigationContext } from "../route/navigationContext";
import Logo from "../components/Logo";
const Navbar = styled.nav`
  height: 90px;
  padding: 10px var(--margin-sides);
  display: flex;
  align-items: center;
`;

const NavLink = styled.a`
  margin: 10px 30px;
`;

const FlexGrow = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;

const CallWrapper = styled.div`
  width: 150px;
`;

const CallButton = styled.button`
  padding: 15px 20px;
  background-color: var(--main-green);
`;

const Home = () => {
  const homeRef = useNav("homeContainer");
  const { activeSection, setActiveSection } = useContext(NavigationContext);

  const scrollToSection = (id) => {
    setActiveSection(id);
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={homeRef} id="homeContainer">
      <Navbar>
        <Logo width="150px" />
        <FlexGrow>
          {navLinks.map(({ title, id }, idx) => (
            <NavLink
              key={idx}
              onClick={() => scrollToSection(id)}
              className={activeSection === title ? "active" : ""}
            >
              {id === "homeContainer" && <HomeIcon />}
              {id === "priceContainer" && <RateIcon />}
              {id === "realizationsContainer" && <GalleryIcon />}
              {title}
            </NavLink>
          ))}
        </FlexGrow>
        <CallWrapper>
          <CallButton>Zadzwoń</CallButton>
        </CallWrapper>
      </Navbar>

      <div className="homeContain">
        {/* <CarouselModal /> */}
        <div>
          <h1>Postaw na specjalistów i sprawdzone rozwiązania</h1>
          <p>
            Rozwiążemy każdy problem. Zapraszamy do zapoznania się z ofertą.
          </p>
          <button className="home-button">Zobacz</button>
        </div>
      </div>
    </section>
  );
};

export default Home;
