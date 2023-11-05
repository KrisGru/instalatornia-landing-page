import styled from "styled-components";
import { Text } from "styles";

export const AnimationText = styled(Text)`
	transform: translateX(100px);
	opacity: 0;
	transition: 0.5s;

	&.animation {
		transform: translateX(0);
		opacity: 1;
	}
`;
