import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	justify-content: center;
	min-height: 100vh;
`;

export const Container = styled.div`
	max-width: 880px;
	width: 100%;
	padding-top: 96px;
	padding-bottom: 96px;
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
