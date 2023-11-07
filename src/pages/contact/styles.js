import styled from "styled-components";
import { Flex } from "styles";

export const FormTopContainer = styled.div`
	display: none;
	position: static;
	background: #e6e6e6;
	bottom: 100%;
	right: 30px;
	padding: 10px 40px;
	box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
	border-radius: 8px 8px 0 0;
	width: 450px;

	@media (min-width: 1180px) {
		position: absolute;
		display: block;
	}
`;

export const FormContainer = styled.form`
	position: static;
	background: #ffffff;
	top: 0;
	right: 30px;
	padding: 10px 40px 40px;
	box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
	border-radius: 8px 8px 8px 8px;
	width: 450px;

	@media (min-width: 1180px) {
		position: absolute;
		border-radius: 0 0 8px 8px;
	}
`;

export const InternallySectionContent = styled(Flex)`
	flex-direction: column;

	@media (min-width: 1180px) {
		flex-direction: row;
	}
`;

export const LogoWrapper = styled.div`
	width: "100%";
	position: relative;
	padding-top: 50px;
	padding-bottom: 20px;

	margin-top: 50px;
	text-align: center;

	&:before {
		content: "";
		position: absolute;
		top: 0;
		left: -5%;
		width: 110%;
		border: 3px solid green;
		border-radius: 4px;
	}
`;
