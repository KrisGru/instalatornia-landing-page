import { styled } from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  justify-content: 'space-between',
  align-ttems: 'center',
  font-size: 16px;
  padding: 13px 26px;
  border: 2px solid #EFEFEF;
  border-radius: 4px;
  letter-spacing: 0.5px;
  cursor: pointer;

  background-color: ${({ background }) => {
		if (background === "transparent") return "transparent";
		else if (background === "white") return "#ffffff";
		else return `#EFEFEF`;
  }};

  color: ${({ color }) => {
		if (color === "black") return "#000";
		else if (color === "white") return "#ffffff";
		else return `#ffffff`;
  }};

  &:active{
      color: ${({ color }) => {
			if (color === "black") return "#000";
			else if (color === "white") return "#ffffff";
			else return `#EFEFEF`;
		}};
      transform: scale(0.95);
  }
}
`;
