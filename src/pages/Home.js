import "./test.css";
import { Text } from "styles";
import Navigation from "components/Navigation";
import Button from "components/Button";
import { useContext, useRef } from "react";
import { useOnScreen } from "hooks/useOnScreen";
import { NavigationContext } from "context";
import { Container, Section } from "./styles/styles";

const Test = () => {
	const homeRef = useRef();
	const { isVisible } = useOnScreen(homeRef);
	return (
		<Section ref={homeRef} className='test_background' id='home_section'>
			<div className='navbar'>
				<Navigation />
			</div>
			<Container>
				<Text size='h1'>
					<span className='title'>
						Postaw na specjalistów i sprawdzone rozwiązania
					</span>
					<span
						className={isVisible ? "animation" : ""}
						id='title123'>
						Test postaw na specjalistów i sprawdzone rozwiązania
					</span>
					<p
						className='text_white '
						style={{ padding: "10px 0", fontSize: "24px" }}>
						Rozwiążemy każdy problem. Zapraszamy do zapoznania się z
						ofertą.
					</p>

					<Button size='lg' onClick={(e) => console.log(e)}>
						Zobacz
					</Button>
				</Text>
			</Container>
		</Section>
	);
};

export default Test;
