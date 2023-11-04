import { Home, Price, About, Contact, Gallery } from "./pages";
import { NavigationContextProvider } from "context";
import Navigation from "components/Navigation";
import { Container, Section } from "pages/styles/styles";

function App() {

	return (
		<NavigationContextProvider>
			<div className='appContainer'>
				<div id='hide_navigation'>
					<Navigation />
				</div>
				<Home />
				<Price />
				<About />
				<Gallery />
				<Contact />
			</div>
		</NavigationContextProvider>
	);
}

export default App;
