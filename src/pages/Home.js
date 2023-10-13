import { useNav } from "../router/customHooks/useNav";

import Logo from "../components/Logo";
import { Navbar, Container, Section } from "./styles/styles";
import Button from "components/Button";
import Navigation from "components/Navigation";
import { Text } from "styles";
import SectionAnimate from "components/Section";

const Home = () => {
	const homeRef = useNav("home_section");

	return (
		<>
			<Section ref={homeRef} id='home_section'>
				<Navbar>
					<Logo size={"small"} type={"dark"} />
					<Navigation />
					<Button color={"black"}>Zadzwoń</Button>
				</Navbar>
			</Section>
			<Section id='homeBackground' background={"home_background"}>
				<Container>
					<Text size='h1'>
						Postaw na specjalistów i sprawdzone rozwiązania
					</Text>

					<p className='text_white' style={{ padding: "10px 0" }}>
						Rozwiążemy każdy problem. Zapraszamy do zapoznania się z
						ofertą.
					</p>
					{/* <Button background={"transparent"}>Zobacz</Button> */}
					<Button onClick={(e) => console.log(e)}>Zobacz</Button>
				</Container>
			</Section>
		</>
	);
};

export default Home;
