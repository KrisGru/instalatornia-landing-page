import { Home, About, Contact, Offer, Gallery } from "./pages";
import { NavigationContextProvider } from "./route/navigationContext";
import { navLinks } from "./assets/data/consts";
import CustomNavLink from "./components/CustomNavLink";

function App() {
  return (
    <NavigationContextProvider>
      <div className="appContainer">
        <nav id="hideNav">
          {navLinks.map(({ navLinkId, scrollToId }, idx) => (
            <CustomNavLink
              key={idx}
              navLinkId={navLinkId}
              scrollToId={scrollToId}
            />
          ))}
        </nav>
        <Home />
        <Offer />
        <Gallery />
        <About />
        <Contact />
      </div>
    </NavigationContextProvider>
  );
}

export default App;
