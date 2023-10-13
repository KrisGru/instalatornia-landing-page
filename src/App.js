import Test from "pages/Test";
import { Home, Price, About, Contact } from "./pages";
import { NavigationContextProvider } from "router/context/context";
import Navigation from "components/Navigation";
import "./pages/test.css";

function App() {
	return (
		<NavigationContextProvider>
			<div id='hide_nav' className='navbar'>
				<Navigation />
			</div>
			<div className='appContainer'>
				<Test />
				<About />
				{/* <Home /> */}
				<Price />
				<Contact />
			</div>
		</NavigationContextProvider>
	);
}

export default App;
