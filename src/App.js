import { Home, Price, About, Contact, Gallery } from "./pages";
import { NavigationContextProvider } from "context";
import Navigation from "components/Navigation";
import "./pages/test.css";


function App() {

	return (
		<NavigationContextProvider>
			<div id='hide_nav' className='navbar'>
				<Navigation />
			</div>
			<div className='appContainer'>
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
