import logo from "assets/logo.png";
import Button from "components/Button";
import SocialMedia from "components/SocialMedia";
import { useOnScreen } from "hooks/useOnScreen";
import { useRef } from "react";
import { Container, Flex, HeaderText, Section, Text } from "styles";
import { FormContainer, FormTopContainer } from "./styles";

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
						<Container className='aaaaa' padding='noPadding' style={{ position: "relative" }}>
							<Flex alignitems='center' justify_content='start'>
								<div>
									<Text as='h1' size='h2' color='black'>
										Co wystarczy zrobić?
									</Text>
									<Text size='h3' color='black'>
										1. Zadzwonić lu wypełnić formularz
									</Text>
									<Text size='h3' color='black'>
										2. Umówić się na dogodny dla Państwa termin
									</Text>
									<Text size='h3' color='black'>
										3. To wszystko! Resztę już zrobimy
									</Text>
									<Text color='black'>ARKADIUSZ GRUSZCZYŃSKI</Text>
									<Text color='black'></Text>
									<Text color='black'></Text>
									<Text color='black'>Kowala 12A/2, 26-052 Bilcza</Text>
									<Flex>
										<Text color='black' style={{ marginRight: "10px" }}>
											tel. 363 357 141
										</Text>
										<Button variant='black' href='215124531'>
											Zadzwoń
										</Button>
									</Flex>
									<Text color='black'>
										mail
										<a href='mailto:assfa@as.ca'>assfa@as.ca</a>
									</Text>

									<SocialMedia />
								</div>
								<>
									<FormTopContainer style={{ textAlign: "center" }}>
										{/* <Logo type='dark' size='small' alt='Logo' width='100px' /> */}
										<img src={logo} alt='Logo' width='200px' />
										{/* <Text color='black' size='h3'>
											Formularz
										</Text>
										<Text color='black'>
											Napisz do nas jeśli masz jakieś pytania. LOrem opism. LOrem opism nas jeśli masz jakieś pytania
										</Text> */}
									</FormTopContainer>
									<FormContainer action='https://formsubmit.co/krz1998gru@gmail.com' method='POST' style={{}}>
										<label htmlFor='imie'>Imię:</label>
										<input type='text' id='imie' name='imie' required />
										<br />
										<label htmlFor='email'>Adres e-mail:</label>
										<input type='email' id='email' name='email' required />
										<br />

										<label htmlFor='temat'>Temat:</label>
										<input type='text' id='temat' name='temat' required />
										<br />

										<label htmlFor='wiadomosc'>Wiadomość:</label>
										<textarea id='wiadomosc' name='wiadomosc' rows='5' required></textarea>
										<br />
										<Flex alignitems='end' justify_content='space-between'>
											<Button type='submit' variant='black'>
												Wyślij
											</Button>
											<Text color='black' style={{ paddingBottom: "12px" }}>
												LUB
											</Text>
											<Button variant='black' href='215124531'>
												Zadzwoń
											</Button>
										</Flex>
									</FormContainer>
								</>
							</Flex>
						</Container>
					</Flex>
				</Section>
				<Container padding='noPadding'>
					<Flex
						style={{
							// backgroundColor: "#0e3f02",
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
