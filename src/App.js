import { Home, Price, About, Contact } from "./pages";
// import { ReactComponent as HomeIcon } from "./assets/icons/home.svg";
// import { ReactComponent as RateIcon } from "./assets/icons/rate.svg";
// import { ReactComponent as GalleryIcon } from "./assets/icons/gallery.svg";
import {
  // NavigationContext,
  NavigationContextProvider,
} from "./route/navigationContext";
// import { navLinks } from "./assets/data/consts";
// import { useContext } from "react";
// import { styled } from "styled-components";
// import CustomNavLink from "./components/NavLink";

// const NavLink = styled.a`
//   margin: 10px;
// `;

function App() {
  // const { activeSection, setActiveSection } = useContext(NavigationContext);

  // const scrollToSection = (id) => {
  //   setActiveSection(id);
  //   document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  // };
  return (
    <NavigationContextProvider>
      <div className="appContainer">
        {/* <nav id="hideNav">
          <ul>
            {navLinks.map(({ title, id }, idx) => (
              <>
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
              </>
            ))}
          </ul>
        </nav> */}
        <Home />
        <Price />
        {/* <Realizations /> */}
        <About />
        <Contact />
      </div>
    </NavigationContextProvider>
  );
}

export default App;
