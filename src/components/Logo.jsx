import lightLogo from "assets/logo-white.png";
import logo from "assets/logo.png";

const Logo = ({ type, size }) => {
	return (
		<>
			{type === "dark" && size === "small" && (
				<a href='#home-section' style={{ width: "140px" }}>
					<img src={logo} alt='Logo' width='100%' />
				</a>
			)}
			{type === "light" && size === "small" && (
				<a href='#home-section' style={{ width: "140px" }}>
					<img src={lightLogo} alt='Logo' width='100%' />
				</a>
			)}
		</>
	);
};

export default Logo;
