import { createContext, useState } from "react";

const NavigationContext = createContext();

function NavigationContextProvider(props) {
	const [activeSection, setActiveSection] = useState("home_section");

	const setActiveSectionHandler = (section) => {
		setActiveSection(section);
	};

	return (
		<NavigationContext.Provider
			value={{
				activeSection,
				setActiveSection: setActiveSectionHandler,
			}}>
			{props.children}
		</NavigationContext.Provider>
	);
}

export { NavigationContext, NavigationContextProvider };
