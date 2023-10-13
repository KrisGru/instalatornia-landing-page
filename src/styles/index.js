import styled from "styled-components";

export const Flex = styled.div`
	display: flex;
`;

export const Text = styled.div`
	padding: 50px 0;
	font-weight: 100;
	letter-spacing: 2px;
	text-align: center;

	color: ${({ color }) => {
		if (color === "black") return "#000000";
		else return `#ffffff`;
	}};

	font-size: ${({ size }) => {
		if (size === "h1") return "48px";
		else if (size === "h2") return "38px";
		else if (size === "h3") return "26px";
		else return "16px";
	}};
`;
