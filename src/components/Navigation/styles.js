import { styled } from "styled-components";

export const NavbarWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	position: absolute;
	top: 0;
`;

export const Navbar = styled.div`
	max-width: 1480px;
	width: 100%;
	height: 90px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-inline: 10px;

	@media (min-width: 768px) {
		padding-inline: 40px;
	}
`;

export const MobileMeneWrapper = styled.div`
	position: absolute;
	right: 10px;
	top: 80px;
	display: flex;
	flex-direction: column;
	background: rgb(14 14 14 / 80%);

	@media (min-width: 768px) {
		right: 40px;
	}
`;
