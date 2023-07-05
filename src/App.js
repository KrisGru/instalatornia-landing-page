import { Home, About, Contact, Offer, Gallery } from "./components/pages/index";
// import NavProvider from "./route/navigationContext";
import { NavigationContextProvider } from "./route/navigationContext";
import { navLinks } from "./assets/data/consts";
import NavLink from "./components/NavLink";

function App() {
  return (
    <NavigationContextProvider>
      <div className="appContainer">
        <nav id="topNav">
          {navLinks.map(({ navLinkId, scrollToId }, idx) => (
            <NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
          ))}
        </nav>
        <Home />
        <About />
        <Offer />
        <Gallery />
        <Contact />
      </div>
    </NavigationContextProvider>
  );
}

export default App;
