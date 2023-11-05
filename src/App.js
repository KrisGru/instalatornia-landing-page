import Navigation from "components/Navigation";
import { NavigationContextProvider } from "context";
import { About, Contact, Gallery, Home, Services } from "./pages";

function App() {
	return (
		<NavigationContextProvider>
			<div className='appContainer'>
				<div id='hide_navigation'>
					<Navigation />
				</div>
				<Home />
				<Services />
				<About />
				<Gallery />
				<Contact />
			</div>
		</NavigationContextProvider>
	);
}

export default App;
