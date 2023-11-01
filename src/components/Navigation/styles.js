import { styled, keyframes } from "styled-components";

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

export const NavbarWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	position: absolute;
    top: 0;
`

export const Navbar = styled.div`
	max-width: 1480px;
	width: 100%;
	height: 90px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-left: 10px;
	padding-right: 10px;
`;

export const MobileMeneWrapper = styled.div`
	position: absolute;
	right: 0;
	top: 80px;
	display: flex;
	flex-direction: column;
	background: white;
`;
