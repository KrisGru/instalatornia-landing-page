import styled from "styled-components";
import { Text } from "styles";

export const AnimationText = styled(Text)`
	margin-right: 20px;
	transform: translateX(30px);
	opacity: 0;
	transition: 0.5s;

	&.animation {
		transform: translateX(0);
		opacity: 1;
	}

	@media (min-width: 768px) {
		margin-right: 50px;
		transform: translateX(60px);
	}
`;
