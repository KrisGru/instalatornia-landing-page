import "../test.css";
import {  Flex, Text } from "styles";
import Navigation from "components/Navigation";
import {  useEffect, useRef, useState } from "react";
import { useOnScreen } from "hooks/useOnScreen";
import { Container, Section } from "../styles/styles";
import { TitleStyled, SubTitle } from "./styles";

const Home = () => {
  const homeRef = useRef();
  const { isVisible } = useOnScreen(homeRef);

  return (
	<>
		<Section ref={homeRef} id="home_section" >
		<Navigation />
		<Container>
			<Flex direction='column' alignitems='start' style={{height:'100%'}}>
				<TitleStyled className={isVisible ? "animation" : ""}> Postaw na specjalistów i sprawdzone rozwiązania</TitleStyled>
				<Text size='h1'> Postaw na specjalistów i sprawdzone rozwiązania</Text>
				<SubTitle className={isVisible ? "animation" : ""}> Rozwiążemy każdy problem. Zapraszamy do zapoznania się z ofertą.</SubTitle> 
			</Flex>
		</Container>
		</Section>
		
	</>
  );
};

export default Home;
