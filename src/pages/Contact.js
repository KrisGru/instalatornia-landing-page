import React from "react";
import { useNav } from "../router/customHooks/useNav";
import Header from "../components/Header";
import SocialMedia from "../components/SocialMedia";
import { Container, Section } from "./styles/styles";

const Contact = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement
	const contactRef = useNav("Contact");
	return (
		<div className='test_background'>
			<Section ref={contactRef}>
				<Container>
					<SocialMedia className='socialMedia-contact' />
					<Header section='contact' text={"KONTAKT"} />
					<div className='contactContent'>
						<div>
							<h1>Arkadiusz Gruszczyński</h1>
							<ul>
								<li>ikona 352 636 234</li>
								<li>mail kontakt@instaslatornia.pl</li>
							</ul>
						</div>
						<form
							className='contact-form'
							action='/wyslij_wiadomosc'
							method='post'>
							<label htmlFor='imie'>Imię:</label>
							<input type='text' id='imie' name='imie' required />
							<br />

							<label htmlFor='email'>Adres e-mail:</label>
							<input
								type='email'
								id='email'
								name='email'
								required
							/>
							<br />

							<label htmlFor='temat'>Temat:</label>
							<input
								type='text'
								id='temat'
								name='temat'
								required
							/>
							<br />

							<label htmlFor='wiadomosc'>Wiadomość:</label>
							<br />
							<textarea
								id='wiadomosc'
								name='wiadomosc'
								rows='5'
								required></textarea>
							<br />

							<input type='submit' value='Wyślij' />
						</form>
					</div>
					<div id='footer'>
						Copyright by ©Instalaornia Arkadiusz GruszczyńskiSgdas
						adfds lore,m ipsum. ©Instalaornia
					</div>
				</Container>
			</Section>
		</div>
	);
};

export default Contact;
