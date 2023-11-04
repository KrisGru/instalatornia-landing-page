import React, {useRef } from "react";
import { Container, Section } from "../styles/styles";
import Header from "components/Header";
import { useOnScreen } from "hooks/useOnScreen";
import { HeaderText } from "components/Header/styles";
import Carousel from "nuka-carousel"
import rozdzielnia1 from 'assets/carouselImage/rozdzielnie/rozdzielnia1.jpg'
import rozdzielnia2 from 'assets/carouselImage/rozdzielnie/rozdzielnia2.jpg'
import rozdzielnia3 from 'assets/carouselImage/rozdzielnie/rozdzielnia3.jpg'
import { Text } from "styles";



const About = () => {
  const aboutRef = useRef(null);
  const { isVisible } = useOnScreen(aboutRef);

  return (
    <Section ref={aboutRef} id="about_section">
      <Container>
	  	<HeaderText size="h2" color="black">
			Galeria
		</HeaderText>
		
        <Carousel  wrapAround={true} slidesToShow={3} disableEdgeSwiping={true} pagingDotsClassName="paddingClassName" scrollMode='page' cellSpacing={80} style={{height: '500px', margin: '40px 0'}}  renderTopCenterControls={({ currentSlide }) => (<p style={{position: 'absolute', top:'-30px', left: '20px' }}>Rozdzielnia - {currentSlide}/5</p>
		)} defaultControlsConfig={{
			nextButtonText: 'Nastepne',
			prevButtonText: 'Poprzednie',
			pagingDotsStyle: {
			  fill: 'green',
			  padding: '0 10px'
			}
		  }}>
			<img src={rozdzielnia1} style={{objectFit: 'cover', objectPosition: 'center', width:'100%'}} />
			<img src={rozdzielnia2} style={{objectFit: 'cover', objectPosition: 'center', width:'100%'}} />
			<img src={rozdzielnia3} style={{objectFit: 'cover', objectPosition: 'center', width:'100%'}} />
			<img src={rozdzielnia1} style={{objectFit: 'cover', objectPosition: 'center', width:'100%'}} />
			<img src={rozdzielnia2} style={{objectFit: 'cover', objectPosition: 'center', width:'100%'}} />
		</Carousel>

		<Carousel  wrapAround={true} slidesToShow={3} disableEdgeSwiping={true} pagingDotsClassName="paddingClassName" scrollMode='page' cellSpacing={80} style={{height: '500px', margin: '40px 0'}}  renderTopCenterControls={({ currentSlide }) => (<p style={{position: 'absolute', top:'-30px', left: '20px' }}>Modernizacje - {currentSlide}/3</p>
		)} defaultControlsConfig={{
			nextButtonText: 'Nastepne',
			prevButtonText: 'Poprzednie',
			pagingDotsStyle: {
			  fill: 'green',
			  padding: '0 10px'
			}
		  }}>
			<img src={rozdzielnia1} style={{objectFit: 'cover', objectPosition: 'center', width:'100%'}} />
			<img src={rozdzielnia2} style={{objectFit: 'cover', objectPosition: 'center', width:'100%'}} />
			<img src={rozdzielnia3} style={{objectFit: 'cover', objectPosition: 'center', width:'100%'}} />
		</Carousel>

      </Container>
    </Section>
  );
};

export default About;
