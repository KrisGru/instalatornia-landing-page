import { StyledButton } from "./styles";

const Button = ({ children, handleClick, background, color, size }) => {
	return (
		<StyledButton
			onClick={() => {
				handleClick && handleClick();
			}}>
			{children}
		</StyledButton>
	);
};

export default Button;
