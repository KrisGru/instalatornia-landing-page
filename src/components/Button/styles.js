import { styled } from "styled-components";

export const StyledButton = styled.button`
	background: none;
	border: 2px solid;
	font: inherit;
	line-height: 1;
	margin: 0.2em;
	padding: 0.75em 1.5em;
	color: #fff;
	transition: 0.35s;

	&.black {
		color: #000;
	}

	&:hover,
	&:focus {
		border-color: #008000;
		color: #fff;
		box-shadow: inset 9em 0 0 0 #008000;
	}
`;

export const Link = styled.a`
	cursor: pointer;
	margin: 8px 20px;
	padding: 7px 12px;
	background: transparent;
	position: relative;
	text-decoration: none;
	color: #d5d5d5;

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 3px;
		border-radius: 4px;
		background-color: green;
		bottom: 0;
		left: 0;
		transform-origin: right;
		transform: scaleX(0);
		transition: transform 0.3s ease-in-out;
	}

	&:hover::before {
		transform-origin: left;
		transform: scaleX(1);
	}

	&.active {
		&::before {
			content: "";
			position: absolute;
			width: 100%;
			height: 3px;
			border-radius: 4px;
			background-color: green;
			bottom: 0;
			left: 0;
			transform-origin: right;
			transform: scaleX(1);
			transition: transform 0.3s ease-in-out;
		}
	}
`;
