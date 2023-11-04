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
	if (gap === "small") return "10px";
    else return gap;
  }};
`;

export const Text = styled.p`
  position: relative;
  font-weight: 100;

  color: ${({ color }) => {
    if (color === "black") return "#000000";
	else if (color==='gray') return "#5f5f5f";
    else return `#ffffff`;
  }};

  font-size: ${({ size }) => {
    if (size === "h1") return "3em";
    else if (size === "h2") return "2em";
    else if (size === "h3") return "1.15em";
    else return "16px";
  }};

  margin-block: ${({ size }) => {
    if (size === "h1") return "0.67em";
    else if (size === "h2") return "0.5em";
    else if (size === "h3") return "0.4em";
    else return "5px 0";
  }};


`;
