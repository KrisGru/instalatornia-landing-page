import Carousel from "nuka-carousel";
import styled from "styled-components";
import { Text } from "styles";

export const CarouselImage = styled.img`
	object-fit: cover;
	object-position: center;
	max-width: 100%;
`;

export const CarouselTitle = styled(Text)`
	position: absolute;
	top: -50px;

	left: ${({ left }) => {
		if (left === "far") return "50%";
		else return "20px";
	}};
`;

export const CarouselWrapper = styled(Carousel)`
	& .slide {
		text-align: center;
	}
`;
