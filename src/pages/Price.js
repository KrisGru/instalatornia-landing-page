import React, { useContext, useRef } from "react";
import { aboutCompany, services } from "../assets/data/consts";

import TableRow from "../components/TableRow";

import { Container, Section } from "./styles/styles";
import Header from "../components/Header";
import { useOnScreen } from "hooks/useOnScreen";
import { NavigationContext } from "context";

import idea from "assets/idea.png";
import support1 from "assets/support1.png";
import shield from "assets/shield.png";
import support from "assets/support.png";
import extensionCord from "assets/extension-cord.png";
import { Flex, Text } from "styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Price = () => {
  const priceRef = useRef(null);
  const { isVisible } = useOnScreen(priceRef);

  return (
	<>
		<Section ref={priceRef} id="price_section" height='noFullHeight'>
		<Container >
			<Header section="price" colorText="white" />
			W naszej firmie zajmujemy się montażem, konserwacją oraz naprawą instalacji elektrycznych. Instalacje elektryczne – montaż wewnętrznej instalacji elektrycznych obejmuje całe okablowanie doprowadzające prąd elektryczny do punktów świetlnych, gniazd wtykowych oraz odbiorników energii elektrycznej podłączonych na stałe do danej instalacji. Bardzo istotne jest przeprowadzanie regularnych pomiarów elektrycznych instalacji i urządzeń, aby mieć pewność że działają one poprawnie. Oferujemy również usługi w zakresie konserwacji oraz naprawy instalacji elektrycznych. 
			<ul style={{margin: "20px"}}>
				{services.map((service, index) => (
					<Flex justifyContent='start' gap='5px'>
						<FontAwesomeIcon icon="fa-solid fa-check" style={{color: "#008000",}} size = '1x' />
						<Text color='gray'>{service.name}</Text>
					</Flex>
				))}
			</ul>
		</Container>
		
		</Section>
		<Section height='noFullHeight' style={{backgroundColor: '#f5fff0'}}>
			<Container padding='noPadding' style={{paddingTop: '0', paddingBottom:'0'}}>
				<div className="ikony" >
					{aboutCompany.map((info, index) => {
						let imgSrc;
						switch (info.id) {
						case 1:
							imgSrc = <img src={idea} alt={info.id}></img>;
							break;
						case 2:
							imgSrc = <img src={support1} alt={info.id}></img>;
							break;
						case 3:
							imgSrc = <img src={shield} alt={info.id}></img>;
							break;
						case 4:
							imgSrc = <img src={support} alt={info.id}></img>;
							break;
						case 5:
							imgSrc = <img src={extensionCord} alt={info.id}></img>;
							break;
						default:
							imgSrc = <img src={support1} alt={info.id}></img>;
						}

						return (
						<div key={index} className={isVisible ? "xyz animation" : "xyz"}>
							{imgSrc}
							<p style={{color:'#5f5f5f'}}>{info.description}</p>
						</div>
						);
					})}
				</div>
			</Container>
			
		</Section>
	</>
  );
};

export default Price;
