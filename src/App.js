import { Home, Price, About, Contact } from "./pages";

import { NavigationContextProvider } from "router/context/context";

function App() {
	return (
		<NavigationContextProvider>
			<div className='appContainer'>
				<Home />
				<Price />
				<About />
				<Contact />
			</div>
		</NavigationContextProvider>
	);
}

export default App;
