import React from "react";
import { useNav } from "../router/customHooks/useNav";
import { services } from "../assets/data/consts";

import TableRow from "../components/TableRow";

import { Container, Section } from "./styles/styles";
import Header from "../components/Header";
import SectionAnimate from "components/Section";

const Price = () => {
	const priceRef = useNav("price_section");

	return (
		<SectionAnimate>
			<Section ref={priceRef} id='price_section'>
				<Container>
					<Header
						section='price'
						text='CENNIK USŁUG ELEKTRYCZNYCH'
						colorText='white'
					/>
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
		</SectionAnimate>
	);
};

export default Price;
