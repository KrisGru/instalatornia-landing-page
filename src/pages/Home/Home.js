import "../test.css";
import {  Flex, Text } from "styles";
import Navigation from "components/Navigation";
import {  useRef } from "react";
import { useOnScreen } from "hooks/useOnScreen";
import { Container, Section } from "../styles/styles";
import { TitleStyled, SubTitle } from "./styles";

// import { Container, Section } from "pages/styles/styles";
// import { Flex, Text } from "styles";
// import CountUp from "react-countup";
// import CountUpBox from "components/CountUpBox";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Test = () => {
  const homeRef = useRef();
  const { isVisible } = useOnScreen(homeRef);
  return (
	<>
		<Section ref={homeRef} id="home_section"  isBackground='home_section'>
		<Navigation />
		<Container>
			<Flex direction='column' alignItems='start' style={{height:'100%'}}>
				<TitleStyled className={isVisible ? "animation" : ""}> Postaw na specjalistów i sprawdzone rozwiązania</TitleStyled>
				<SubTitle className={isVisible ? "animation" : ""}> Rozwiążemy każdy problem. Zapraszamy do zapoznania się z ofertą.</SubTitle> 
			</Flex>
		</Container>
		</Section>
		
	</>
  );
};

export default Test;
