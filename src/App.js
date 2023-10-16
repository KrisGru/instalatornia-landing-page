import { Home, Price, About, Contact } from "./pages";
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
				<About />
				<Price />
				<Contact />
			</div>
		</NavigationContextProvider>
	);
}

export default App;
