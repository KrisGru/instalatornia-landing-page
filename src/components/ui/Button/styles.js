import { styled, keyframes } from "styled-components";

// export const StyledButton = styled.button`
//   display: flex;
//   justify-content: 'space-between',
//   align-ttems: 'center',
//   font-size: 16px;
//   padding: 13px 26px;
//   border: 2px solid #EFEFEF;
//   border-radius: 4px;
//   letter-spacing: 0.5px;
//   cursor: pointer;

//   background-color: ${({ background }) => {
// 		if (background === "transparent") return "transparent";
// 		else if (background === "white") return "#ffffff";
// 		else return `#EFEFEF`;
//   }};

//   color: ${({ color }) => {
// 		if (color === "black") return "#000";
// 		else if (color === "white") return "#ffffff";
// 		else return `#ffffff`;
//   }};

//   &:active{
//       color: ${({ color }) => {
// 			if (color === "black") return "#000";
// 			else if (color === "white") return "#ffffff";
// 			else return `#EFEFEF`;
// 		}};
//       transform: scale(0.95);
//   }
// }
// `;

// const ripple_effect = keyframes`
//   0% {
//     transform: scale(1);
//     opacity: 1;
//   }
//   50% {
//     transform: scale(10);
//     opacity: 0.375;
//   }
//   100% {
//     transform: scale(35);
//     opacity: 0;
//   }
// `;

// export const StyledButton = styled.button`
// 	border-radius: 4px;
// 	border: none;
// 	margin: 8px;
// 	padding: 14px 24px;
// 	background: #1976d2;
// 	color: #fff;
// 	overflow: hidden;
// 	position: relative;
// 	cursor: pointer;

// 	& > span.riple {
// 		width: 20px;
// 		height: 20px;
// 		position: absolute;
// 		background: #63a4ff;
// 		display: block;
// 		content: "";
// 		border-radius: 9999px;
// 		opacity: 1;
// 		animation: 0.9s ease 1 forwards ripple_effect;
// 	}

// 	& > span.content {
// 		position: relative;
// 		z-index: 2;
// 	}
// `;
