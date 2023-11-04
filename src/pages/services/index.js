import React, { useContext, useRef } from "react";
import { aboutCompany, services } from "../../assets/data/consts";
import { Container, Section } from "../styles/styles";
import { useOnScreen } from "hooks/useOnScreen";
import idea from "assets/idea.png";
import support1 from "assets/support1.png";
import shield from "assets/shield.png";
import support from "assets/support.png";
import extensionCord from "assets/extension-cord.png";
import { Flex, Text, HeaderText } from "styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconImage, InfoWrapper } from "./styles";


const Services = () => {
  const servicesRef = useRef(null);
  const { isVisible } = useOnScreen(servicesRef);

  return (
	<div id="service_section" ref={servicesRef}>
		<Section height='noFullHeight'>
			<Container >
				<HeaderText as="h1" size="h2" color="black">
					Oferta usług <span style={{ color: "#008000" }}>elektrycznych</span>
				</HeaderText>
				<Text color='black'>
					W naszej firmie zajmujemy się montażem, konserwacją oraz naprawą instalacji elektrycznych. Instalacje elektryczne – montaż wewnętrznej instalacji elektrycznych obejmuje całe okablowanie doprowadzające prąd elektryczny do punktów świetlnych, gniazd wtykowych oraz odbiorników energii elektrycznej podłączonych na stałe do danej instalacji. Bardzo istotne jest przeprowadzanie regularnych pomiarów elektrycznych instalacji i urządzeń, aby mieć pewność że działają one poprawnie. Oferujemy również usługi w zakresie konserwacji oraz naprawy instalacji elektrycznych. 
				</Text>
				
				<ul style={{margin: "40px 20px 0"}}>
					{services.map((service, index) => (
						<Flex justify_content='start' alignitems='center' gap='7px' key={index}>
							<FontAwesomeIcon icon="fa-solid fa-check" style={{color: "#008000",}} size='1x' />
							<Text color='gray'>{service.name}</Text>
						</Flex>
					))}
				</ul>
			</Container>
		</Section>
		<Section height='noFullHeight' style={{backgroundColor: '#f5fff0'}}>
			<Container style={{paddingTop: '0', paddingBottom:'0'}}>
				<Flex gap='10px' alignItems='stretch' style={{flexWrap: 'wrap'}}>
					{aboutCompany.map((info, index) => {
						let imgSrc;
						switch (info.id) {
							case 3:
								imgSrc = <IconImage src={shield} alt={info.id}></IconImage>;
								break;
							case 4:
								imgSrc = <IconImage src={support} alt={info.id}></IconImage>;
								break;
							case 5:
								imgSrc = <IconImage src={extensionCord} alt={info.id}></IconImage>;
								break;
							default:
								imgSrc = <IconImage src={support1} alt={info.id}></IconImage>;
						}

						return (
						<InfoWrapper key={index}>
							{imgSrc}
							<Text color='gray'>{info.description}</Text>
						</InfoWrapper>
						);
					})}
				</Flex>
			</Container>
		</Section>
	</div>
  );
};

export default Services;
