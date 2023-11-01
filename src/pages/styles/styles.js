import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	justify-content: center;
	min-height: 100vh;

	min-height: ${ ({height}) => {
		if (height==='noFullHeight') return 'auto;'
		else return '100vh;'
	}}

	position: ${ ({relative}) => {
		if (relative) return 'relative'
	}}

`;

export const Container = styled.div`
	max-width: 1080px;
	width: 100%;
	padding-top:${({padding}) => padding==='noPadding' ? '30px' : padding==='bigPadding' ? '220px' : '96px'};
	padding-bottom: ${({padding}) => padding==='noPadding' ? '30px' : padding==='bigPadding' ? '220px' : '96px'};
	padding-left: 10px;
	padding-right: 10px;

	position: ${ ({absolute}) => {
		if (absolute) return 'absolute;'
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
