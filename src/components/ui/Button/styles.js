import { styled } from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    justify-content: 'space-between',
    align-ttems: 'center',
    font-size: 16px;
    padding: 13px 26px;
    color: '#000',
    border-radius: 4px;
    letter-spacing: 0.5px;


    color: ${({ color }) => {
      if ((color = "black")) return "#000";
      else if ((color = "white")) return "#ffffff";
      else return `#000`;
    }};
	// padding: 10px 20px;
	// color: #ffffff;
	// border: 2px solid #ffffff;
	// border-radius: 4px;
	// box-sizing: content-box;
}
`;
