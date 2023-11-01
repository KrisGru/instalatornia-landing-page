import React, { useContext, useRef } from "react";
import Header from "../components/Header";
import SocialMedia from "../components/SocialMedia";
import { Container, Section } from "./styles/styles";
import { NavigationContext } from "context";
import logo from "../assets/logo.png";

import { useOnScreen } from "hooks/useOnScreen";
import { Flex, Text } from "styles";
import Button from "components/Button";

// import { Container, Section } from "pages/styles/styles";
// import { Flex, Text } from "styles";
import CountUp from "react-countup";
import CountUpBox from "components/CountUpBox";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { HeaderText } from "components/Header/styles";

const Contact = () => {
  const contactRef = useRef(null);
  const { isVisible } = useOnScreen(contactRef);

  return (
	<>
		<Section height="noFullHeight" style={{backgroundColor: '#f5fff0'}}>
			<Container padding='noPadding'>
				<Flex justifyContent='space-around'>
					<Flex direction='column'>
						<FontAwesomeIcon icon="fa-solid fa-check" style={{color: "#008000",}} size = '4x' />
						<h1 style={{padding: '15px 0 0'}}>
							<CountUp duration={1} end={1500} redraw={true} />+</h1>
						<p style={{color:'#5f5f5f'}} >Wykonanych usług</p>
					</Flex>
					<Flex direction='column'>
						<FontAwesomeIcon icon="fa-solid fa-clock-rotate-left" style={{color: "#008000",}} size = '4x'  />
						<h1 style={{padding: '15px 0 0'}}><CountUp duration={2} end={10} redraw={true} /></h1>
						<p style={{color:'#5f5f5f'}} >Lat doświadczenia</p>
					</Flex>
					<Flex direction='column'>
						<FontAwesomeIcon icon="fa-solid fa-comments" style={{color: "#008000",}} size = '4x'  />
						<h1 style={{padding: '15px 0 0'}}><CountUp duration={1} end={900} redraw={true}/>+</h1>
						<p style={{color:'#5f5f5f'}} >Rekomendacji klientów</p>
					</Flex>
				</Flex>
			</Container>
		</Section>
		<Section ref={contactRef} id="contact_section" height='noFullHeight' >
			<Container  padding='noPadding'>
				<HeaderText size="h2" color="black">
					Kontakt
				</HeaderText>
				Zapraszamy do telefonicznego kontaktu z nami. Jest to najszybsza metoda uzyskania wstępnej wyceny oraz zamówienia wizyty specjalisty elektryka w przypadku wystąpienia nagłej awarii…
				<Flex
					justifyContent="space-around"
					alignItems
					style={{ padding: "50px 0" }}
				>
				<div>
					<img src={logo} alt="Logo" width="200px" />
					<Text color="black">ARKADIUSZ GRUSZCZYŃSKI</Text>
					<Text color="black"></Text>
					<Text color="black"></Text>
					<Text color="black">Kowala 12A/2, 26-052 Bilcza</Text>
					<Flex>
					<Text color="black" style={{ marginRight: "10px" }}>
						tel. 363 357 141
					</Text>
					<Button size="sm" href="215124531">
						Zadzwoń
					</Button>
					</Flex>
					<Text color="black">
					mail
					<a href="mailto:assfa@as.ca">assfa@as.ca</a>
					</Text>

					<SocialMedia />
				</div>

				<form
					action="https://formsubmit.co/krz1998gru@gmail.com"
					method="POST"
					style={{ width: "300px" }}
				>
					<label htmlFor="imie">Imię:</label>
					<input type="text" id="imie" name="imie" required />
					<br />

					<label htmlFor="email">Adres e-mail:</label>
					<input type="email" id="email" name="email" required />
					<br />

					<label htmlFor="temat">Temat:</label>
					<input type="text" id="temat" name="temat" required />
					<br />

					<label htmlFor="wiadomosc">Wiadomość:</label>
					<textarea
					id="wiadomosc"
					name="wiadomosc"
					rows="5"
					required
					></textarea>
					<br />

					<Button type="submit">Wyślij</Button>
				</form>
				</Flex>

				{/* <div id="footer">
				<img src="../assets/electrician-hand.png" />
				</div> */}
			</Container>
		</Section>
		<Flex style={{backgroundColor: '#0e3f02', textAlign: 'center', padding: '0 50px'}} justifyContent='space-between'>
			<Text>Instalatornia Arkadiusz Gruszczyński</Text>
			<Text>Website by © Krzysztof Gruszczyński - 2023</Text>
		</Flex>
	</>
    
  );
};

export default Contact;
