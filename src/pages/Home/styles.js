import styled from "styled-components";

export const TitleStyled = styled.h1`
	transform: translateX(100px);
	opacity: 0;
	transition: 1s;
	font-size: 48px;

	&.animation {
		color: green;
		transform: translateX(0);
		opacity: 1;
	}
`

export const SubTitle = styled.h1`
	transform: translateX(100px);
	opacity: 0;
	transition: 1.5s;
	font-size: 30px;
	position: relative;

	&.animation {
		transform: translateX(0);
		opacity: 1;
	}
`