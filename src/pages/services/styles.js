import styled from "styled-components";

export const IconImage = styled.img`
	filter: invert(1);
	padding-block: 15px;
	max-width: 25%;
`
export const InfoWrapper = styled.div`
	position: relative;
	max-width: 48%;
	padding: 15px;
	text-align: center;

	&:before {
		content: "";
		position: absolute;
		width: 100%;
		height: 4px;
		border-radius: 4px;
		background-color: green;
		bottom: 0px;
		left: 0px;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform 0.3s ease-in-out;
	}
	
	&:hover:before {
		transform-origin: left;
		transform: scaleX(1);
	}

	@media (min-width: 768px) {
		max-width: 23%;
	}
`