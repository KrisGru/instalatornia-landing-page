import { HeaderWrapper } from "./styles";
import logo from "../../assets/logo.png";
import { ReactComponent as FacebookIcon } from "../../assets/icons/instagram.svg";

import { Flex, HeaderText, Text } from "styles";

const Header = ({ section, text, colorText, isSpan, text2 }) => {
  return (
    <HeaderWrapper >
      {section === "price" && (
        <>
          {/* <img src={logo} alt="Logo" width="350px" /> */}
		  <HeaderText size="h2" color="black">
		  	Oferta usług <span style={{ color: "#008000" }}>elektrycznych</span>
		  </HeaderText>
        </>
      )}
      {section === "about" && <FacebookIcon height="70px" />}
      {section !== "price" && (
        <Text size="h2" color={colorText}>
          {text}
        </Text>
      )}
    </HeaderWrapper>
  );
};

export default Header;
