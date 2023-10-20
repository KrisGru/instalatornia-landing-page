import "./test.css";
import { Flex, Text } from "styles";
import Navigation from "components/Navigation";
import Button from "components/Button";
import { useContext, useRef } from "react";
import { useOnScreen } from "hooks/useOnScreen";
import { NavigationContext } from "context";
import { Container, Section } from "./styles/styles";
import electricianHome from "../assets/electrician-home.png";
const Test = () => {
  const homeRef = useRef();
  const { isVisible } = useOnScreen(homeRef);
  return (
    <Section ref={homeRef} id="home_section" height="noFullHeight">
      <div className="navbar">
        <Navigation />
      </div>
      <Container>
        <Text size="h1">
          <span className={isVisible ? "animation" : ""} id="title123">
            Postaw na specjalistów i sprawdzone rozwiązania
          </span>
          <Text size="h3" color="black">
            Rozwiążemy każdy problem. Zapraszamy do zapoznania się z ofertą.
          </Text>
        </Text>
      </Container>
    </Section>
  );
};

export default Test;
