import { StyledButton } from "./styles";

const Button = ({ children, handleClick, variant }) => {
	return (
		<StyledButton
			className={`${variant}`}
			onClick={() => {
				handleClick && handleClick();
			}}>
			{children}
		</StyledButton>
	);
};

export default Button;
