import { createContext, useState } from "react";
import PropTypes from "prop-types";

const NavigationContext = createContext();

NavigationContextProvider.propTypes = {
  children: PropTypes.any,
};

function NavigationContextProvider(props) {
  const [activeSection, setActiveSection] = useState("");

  const setActiveSectionHandler = (section) => {
    setActiveSection(section);
  };

  return (
    <NavigationContext.Provider
      value={{
        activeSection,
        setActiveSection: setActiveSectionHandler,
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  );
}

export { NavigationContext, NavigationContextProvider };
