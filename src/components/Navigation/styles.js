import { styled, keyframes } from "styled-components";

export const Link = styled.a`
	cursor: pointer;
	margin: 8px 20px;
	padding: 7px 12px;
	background: transparent;
	position: relative;
	text-decoration: none;

	&::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 4px;
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

  }
`;

export const Navbar = styled.div`
	max-width: 1480px;
	width: 100%;
	height: 80px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 10px;
	padding-right: 10px;

	@media (min-width: 600px) {
		padding-left: 15px;
		padding-right: 15px;
	}
	@media (min-width: 768px) {
		padding-left: 50px;
		padding-right: 50px;
	}
`;
