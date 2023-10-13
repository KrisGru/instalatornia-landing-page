import Test from "pages/Test";
import { Home, Price, About, Contact } from "./pages";
import { NavigationContextProvider } from "router/context/context";

function App() {
	return (
		<NavigationContextProvider>
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
