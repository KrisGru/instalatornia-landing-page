import { Home, Price, Realizations, About, Contact } from "./pages";
import { NavigationContextProvider } from "./route/navigationContext";
import { navLinks } from "./assets/data/consts";
import CustomNavLink from "./components/CustomNavLink";

function App() {
  return (
    <NavigationContextProvider>
      <div className="appContainer">
        <nav id="hideNav">
          {navLinks.map(({ title, scrollToId }, idx) => (
            <CustomNavLink
              key={idx}
              navLinkId={title}
              scrollToId={scrollToId}
              destination={true}
            />
          ))}
        </nav>
        <Home />
        <Price />
        <Realizations />
        <About />
        <Contact />
      </div>
    </NavigationContextProvider>
  );
}

export default App;
