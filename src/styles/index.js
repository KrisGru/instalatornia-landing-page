import styled from "styled-components";

export const Flex = styled.div`
//   height: 100%;
  display: flex;

  flex-direction: ${({ direction }) => {
    if (direction === "column") return "column";
    else return "row";
  }};

  justify-content: ${({ justify_content }) => {
    if (justify_content === "space-around") return "space-around";
    else if (justify_content === "space-between") return "space-between";
    else if (justify_content === "start") return "start";
    else return "center";
  }};

  align-items: ${({ alignitems }) => {
    if (alignitems === "start") return "start";
    else if (alignitems === "end") return "end";
    else return "center";
  }};

  gap: ${({ gap }) => {
    return gap;
  }};
`;

export const Text = styled.p`
  position: relative;
  font-weight: 100;
  letter-spacing: 2px;
//   text-align: center;

  color: ${({ color }) => {
    if (color === "black") return "#000000";
	else if (color==='gray') return "#5f5f5f";
    else return `#ffffff`;
  }};

  font-size: ${({ size }) => {
    if (size === "h1") return "48px";
    else if (size === "h2") return "38px";
    else if (size === "h3") return "26px";
    else return "16px";
  }};

  padding: ${({ size }) => {
    if (size === "h1") return "40px 0";
    else if (size === "h2") return "30px 0";
    else if (size === "h3") return "20px 0";
    else return "5px 0";
  }};

  letter-spacing: ${({ size }) => {
    if (size === "h1") return "2px;";
    else if (size === "h2") return "2px;";
    else if (size === "h3") return "2px;";
    else return "1px";
  }};
`;
