import Navigation from "components/Navigation";
import { useOnScreen } from "hooks/useOnScreen";
import { useRef } from "react";
import { Container, Flex, Section } from "styles";
import { AnimationText } from "./styles";

const Home = () => {
	const homeRef = useRef();
	const { isVisible } = useOnScreen(homeRef);

	return (
		<Section ref={homeRef} id='home_section'>
			<Navigation />
			<Container>
				<Flex
					direction='column'
					alignitems='start'
					style={{ height: "100%" }}>
					<AnimationText
						as='h2'
						size='h1'
						className={isVisible ? "animation" : ""}>
						Postaw na specjalistów i sprawdzone rozwiązania
					</AnimationText>
					<AnimationText
						as='h3'
						size='h2'
						className={isVisible ? "animation" : ""}>
						Rozwiążemy każdy problem. Zapraszamy do zapoznania się z
						ofertą.
					</AnimationText>
				</Flex>
			</Container>
		</Section>
	);
};

export default Home;
