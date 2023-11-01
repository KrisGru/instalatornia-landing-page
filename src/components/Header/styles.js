import { styled, keyframes } from "styled-components";
import { Text } from "styles";
export const HeaderWrapper = styled.header`
	// display: flex;
	// flex-direction: column;
	// align-items: center;
`;

export const HeaderText = styled(Text)`
	&:before {
		content: "";
		position: absolute;
		width: 20%;
		height: 4px;
		border-radius: 4px;
		background-color: green;
		bottom: 20px;
		left: -20px;
		// transform-origin: right;
		// transform: scaleX(0);
		// transition: transform 0.3s ease-in-out;
	}

	&:hover:before {
		transform-origin: left;
		transform: scaleX(1);
	}
`;
