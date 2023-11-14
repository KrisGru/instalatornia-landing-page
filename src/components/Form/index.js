import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FormContainer, FormTopContainer } from "pages/contact/styles";
import { Flex } from "styles";
import Button from "components/Button";
import logo from "assets/logo.png";

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = e => {
		e.preventDefault();
		console.log("fomr", form.current);
		emailjs.sendForm("service_nobnirg", "template_iyg0sbw", form.current, "dK-Zz4YMxr0bjVL0Z").then(
			result => {
				console.log(result.text);
				if (result.text === "OK") alert("Wiadomość została wysłana");
			},
			error => {
				alert("Coś poszło nie tak");
				console.log(error.text);
			}
		);
	};

	return (
		<>
			<FormTopContainer style={{ textAlign: "center" }}>
				<img src={logo} alt='Logo' width='200px' />
			</FormTopContainer>

			<FormContainer ref={form} onSubmit={sendEmail}>
				<label htmlFor='imie'>Imię:</label>
				<input type='text' id='imie' name='imie' placeholder='Jan' required />
				<br />
				<label htmlFor='email'>Adres e-mail:</label>
				<input type='email' id='email' name='email' placeholder='example@domena.com' required />
				<br />

				<label htmlFor='phone'>Numer telefonu:</label>
				<input type='tel' id='temat' name='phone' pattern='[456789][0-9]{8}' placeholder='123456789' required />

				<br />

				<label htmlFor='temat'>Temat:</label>
				<input type='text' id='temat' name='temat' placeholder='remont na ul.sienkiewicza' required />
				<br />

				<label htmlFor='wiadomosc'>Wiadomość:</label>
				<textarea id='wiadomosc' name='wiadomosc' rows='5' required></textarea>
				<br />
				{/* <Flex alignitems='end' justify_content='space-between'>
					<Button type='submit' variant='black'>
						Wyślij formularz
					</Button>
				</Flex> */}
				<Button type='submit' value='send' variant='black'>
					Wyślij formularz
				</Button>
			</FormContainer>
		</>
	);
};

// <form ref={form} onSubmit={sendEmail}>
// 	<label>Name</label>
// 	<input type='text' name='user_name' />
// 	<label>Email</label>
// 	<input type='email' name='user_email' />
// 	<label>Message</label>
// 	<textarea name='message' />
// 	<input type='submit' value='Send' />
// </form>
