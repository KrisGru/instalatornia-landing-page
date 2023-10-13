import { HeaderWrapper, HeaderText } from "./styles";
import logo from "../../assets/logo-white.png";
import { motion } from "framer-motion";

import { Text } from "styles";

const Header = ({ section, text, colorText }) => {
	return (
		<HeaderWrapper className='header'>
			{section === "price" && <img src={logo} alt='Logo' width='350px' />}
			{section === "contact" && (
				<img src={logo} alt='Logo' width='350px' />
			)}
			{/* <Text size='h2' color={colorText}>
				{text}
			</Text> */}
			<motion.div>
				<HeaderText animate={{ y: 10 }}>
					<span>{text}</span>
				</HeaderText>
			</motion.div>
		</HeaderWrapper>
	);
};

export default Header;
