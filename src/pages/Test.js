import "./test.css";
import { Text } from "styles";
import Navigation from "components/Navigation";
import Button from "components/Button";
import { useContext, useRef } from "react";
import { useOnScreen } from "hooks/useOnScreen";
import { NavigationContext } from "context";

const Test = () => {
	const homeRef = useRef();
	const { isVisible } = useOnScreen(homeRef);

	return (
		<div ref={homeRef} className='test_background' id='home_section'>
			<div className='navbar'>
				<Navigation />
			</div>

			<div>
				<div className='number_1'></div>
				<Text size='h1'>
					<span className='title'>
						Postaw na specjalistów i sprawdzone rozwiązania
					</span>
					<span
						className={isVisible ? "animation" : ""}
						id='title123'>
						Test postaw na specjalistów i sprawdzone rozwiązania
					</span>
				</Text>
				<p
					className='text_white '
					style={{ padding: "10px 0", fontSize: "24px" }}>
					Rozwiążemy każdy problem. Zapraszamy do zapoznania się z
					ofertą.
				</p>

				<Button size='lg' onClick={(e) => console.log(e)}>
					Zobacz
				</Button>
			</div>
		</div>
	);
};

export default Test;
