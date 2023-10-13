import React from "react";
import { useNav } from "../router/customHooks/useNav";
import { services } from "../assets/data/consts";
import logo from "../assets/logo-white.png";
import TableRow from "../components/TableRow";
import Header from "../components/Header";
import { Container, Section } from "./styles/styles";

const Price = () => {
	const priceRef = useNav("priceContainer");

	return (
		<Section ref={priceRef} id='priceContainer'>
			<Container>
				<Header logo={logo} text='USŁUGI ELEKTRYCZNE' />
				<ul className='service-list'>
					<TableRow name='Usługa' price='Cena' />
					{services.map((service, index) => (
						<TableRow
							key={index}
							name={service.name}
							price={service.price}
						/>
					))}
				</ul>
			</Container>
		</Section>
	);
};

export default Price;
