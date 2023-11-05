import homeBackground from "assets/image/b-home-min.jpg";
import styled from "styled-components";

export const Flex = styled.div`
	display: flex;

	flex-direction: ${({ direction }) => {
		if (direction === "column") return "column";
		else return "row";
	}};

	justify-content: ${({ justify_content }) => {
		if (justify_content === "space-around") return "space-around";
		else if (justify_content === "space-between") return "space-between";
		else if (justify_content === "start") return "start";
		else return "center";
	}};

	align-items: ${({ alignitems }) => {
		if (alignitems === "start") return "start";
		else if (alignitems === "end") return "end";
		else if (alignitems == "stretch") return "stretch";
		else if (alignitems == "center") return "center";
	}};

	gap: ${({ gap }) => {
		if (gap === "small") return "10px";
		else if (gap) return gap;
	}};
`;

export const Text = styled.p`
	position: relative;
	font-weight: 100;

	color: ${({ color }) => {
		if (color === "black") return "#000000";
		else if (color === "gray") return "#5f5f5f";
		else return `#ffffff`;
	}};

	font-size: ${({ size }) => {
		if (size === "h1") return "3em";
		else if (size === "h2") return "2em";
		else if (size === "h3") return "1.5em";
		else return "16px";
	}};

	margin-block: ${({ size }) => {
		if (size === "h1") return "0.67em";
		else if (size === "h2") return "0.5em";
		else if (size === "h3") return "0.4em";
		else return "5px 0";
	}};
`;

export const HeaderText = styled(Text)`
	&:before {
		content: "";
		position: absolute;
		width: 20%;
		height: 4px;
		border-radius: 4px;
		background-color: green;
		bottom: -1px;
		left: 0px;
	}

	&:hover:before {
		transform-origin: left;
		transform: scaleX(1);
	}

	@media (min-width: 1180px) {
		&:before {
			left: -20px;
		}
	}
`;

export const Section = styled.section`
	display: flex;
	justify-content: center;
	background-repeat: no-repeat;
	background-size: cover;

	min-height: ${({ height }) => {
		if (height === "noFullHeight") return "auto;";
		else return "100vh;";
	}}

	position: ${({ relative }) => {
		if (relative == "true") return "relative;";
		else return "static;";
	}}

	background-image: ${({ id }) => {
		if (id == "home_section") return `url(${homeBackground});`;
	}} 
`;

export const Container = styled.div`
	max-width: 1080px;
	width: 100%;
	padding-top: ${({ padding }) => (padding === "noPadding" ? "30px" : padding === "bigPadding" ? "220px" : "96px")};
	padding-bottom: ${({ padding }) => (padding === "noPadding" ? "30px" : padding === "bigPadding" ? "220px" : "96px")};
	padding-left: 10px;
	padding-right: 10px;

	position: ${({ absolute }) => {
			if (absolute) return "absolute;";
		}}
		@media (min-width: 600px) {
		padding-left: 15px;
		padding-right: 15px;
	}
	@media (min-width: 768px) {
		padding-left: 20px;
		padding-right: 20px;
	}
`;
