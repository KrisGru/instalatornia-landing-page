import logo from "assets/logo.png";
import Button from "components/Button";
import SocialMedia from "components/SocialMedia";
import { useOnScreen } from "hooks/useOnScreen";
import { useRef } from "react";
import { Container, Flex, HeaderText, Section, Text } from "styles";
import { FormContainer, FormTopContainer, InternallySectionContent, LogoWrapper } from "./styles";

const Contact = () => {
	const contactRef = useRef(null);
	const { isVisible } = useOnScreen(contactRef);

	return (
		<>
			<Section
				ref={contactRef}
				id='contact_section'
				relative='true'
				style={{ flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
				<Container padding='noPadding'>
					<HeaderText size='h2'>Kontakt</HeaderText>
				</Container>

				<Section id='internally_contact_section' height='noFullHeight'>
					<Flex alignitems='center' style={{ flexGrow: "1" }}>
						<Container padding='noPadding' style={{ position: "relative" }}>
							<InternallySectionContent alignitems='center' justify_content='start'>
								<div>
									<Text as='h1' size='h2' color='black'>
										Wystarczy, że:
									</Text>
									<Text size='h3' color='black'>
										1. Zadzwonisz lub wypełnisz formularz zgłoszeniowy
									</Text>
									<Text size='h3' color='black'>
										2. Umówisz się na dogodny dla Ciebie termin
									</Text>
									<Text size='h3' color='black'>
										3. To wszystko! Resztę zrobimy za Ciebie
									</Text>
									<LogoWrapper>
										<img src={logo} alt='Logo' width='200px' />
									</LogoWrapper>

									<Flex alignitems='center' gap='5px' direction='column'>
										<Text size='h3' color='black'>
											tel. +48 363 357 141
										</Text>
									</Flex>
								</div>
								<FormTopContainer style={{ textAlign: "center" }}>
									<img src={logo} alt='Logo' width='200px' />
								</FormTopContainer>

								<FormContainer action='https://formsubmit.co/krz1998gru@gmail.com' method='POST' style={{}}>
									<label htmlFor='imie'>Imię:</label>
									<input type='text' id='imie' name='imie' placeholder='Jan' required />
									<br />
									<label htmlFor='email'>Adres e-mail:</label>
									<input type='email' id='email' name='email' placeholder='example@domena.com' required />
									<br />

									<label htmlFor='phone'>Numer telefonu:</label>
									<input
										type='tel'
										id='temat'
										name='phone'
										pattern='[0-9]{3}-[0-9]{3}-[0-9]{4}'
										placeholder='000 000 000'
										required
									/>

									<br />

									<label htmlFor='temat'>Temat:</label>
									<input type='text' id='temat' name='temat' placeholder='remont na ul.sienkiewicza' required />
									<br />

									<label htmlFor='wiadomosc'>Wiadomość:</label>
									<textarea id='wiadomosc' name='wiadomosc' rows='5' required></textarea>
									<br />
									<Flex alignitems='end' justify_content='space-between'>
										<Button type='submit' variant='black'>
											Wyślij formularz
										</Button>
									</Flex>
								</FormContainer>
							</InternallySectionContent>
						</Container>
					</Flex>
				</Section>
				<Container padding='noPadding'>
					<Flex
						style={{
							borderTop: "1px solid #ffffff",
							textAlign: "center",
							padding: "0 50px",
							width: "100%",
							height: "40px",
							zIndex: "2",
						}}
						justify_content='space-between'>
						<Text>Instalatornia Arkadiusz Gruszczyński. All rights reserved.</Text>
						<Text>Website by © Krzysztof Gruszczyński - 2023</Text>
					</Flex>
				</Container>
			</Section>
		</>
	);
};

export default Contact;
