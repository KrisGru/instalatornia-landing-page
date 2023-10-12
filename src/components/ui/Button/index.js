import { StyledButton } from "./styles";

const Button = ({ children, background, color }) => {
	// console.log("transparent", background);
	return (
		<StyledButton background={background} color={color}>
			{children}
		</StyledButton>
	);
};

export default Button;
