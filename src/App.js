import { Home, Services, About, Contact, Gallery } from "./pages";
import { NavigationContextProvider } from "context";
import Navigation from "components/Navigation";

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
