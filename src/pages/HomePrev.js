import { Container, Section } from "./styles/styles";
import Button from "components/Button";
import Navigation from "components/Navigation";
import { Text } from "styles";
import SectionAnimate from "components/Section";
import { useRef } from "react";

const Home = () => {
	const homeRef = useRef(null);

	return (
		<>
			<Section ref={homeRef} id='home_section'>
				<Navigation />
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
