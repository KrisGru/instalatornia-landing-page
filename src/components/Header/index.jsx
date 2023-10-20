import { HeaderWrapper, HeaderText } from "./styles";
import logo from "../../assets/logo.png";
import { ReactComponent as FacebookIcon } from "../../assets/icons/instagram.svg";

import { Flex, Text } from "styles";

const Header = ({ section, text, colorText, isSpan, text2 }) => {
  return (
    <HeaderWrapper className="header">
      {section === "price" && (
        <>
          <img src={logo} alt="Logo" width="350px" />
          <Text size="h2" color="black">
            OFERTA USŁUG <span style={{ color: "#d3d600" }}>ELEKTRYCZNYCH</span>
          </Text>
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
