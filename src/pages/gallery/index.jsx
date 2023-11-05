import { useRef } from "react";

import { useOnScreen } from "hooks/useOnScreen";
import { useResolution } from "hooks/useResolution";

import oswietlenie1 from "assets/image/oswietlenie/1 (1).jpg";
import oswietlenie2 from "assets/image/oswietlenie/1 (2).jpg";
import oswietlenie3 from "assets/image/oswietlenie/1 (3).jpg";
import oswietlenie4 from "assets/image/oswietlenie/1 (4).jpg";
import oswietlenie5 from "assets/image/oswietlenie/1 (5).jpg";
import oswietlenie6 from "assets/image/oswietlenie/1 (6).jpg";
import oswietlenie7 from "assets/image/oswietlenie/1 (7).jpg";
import oswietlenie8 from "assets/image/oswietlenie/1 (8).jpg";
import oswietlenie9 from "assets/image/oswietlenie/1 (9).jpg";

import rozdzielnia1 from "assets/image/rozdzielnie/rozdzielnia1.jpg";
import rozdzielnia2 from "assets/image/rozdzielnie/rozdzielnia2.jpg";
import rozdzielnia3 from "assets/image/rozdzielnie/rozdzielnia3.jpg";

import sieci1 from "assets/image/sieci/1.jpg";
import sieci2 from "assets/image/sieci/2.jpg";
import sieci3 from "assets/image/sieci/3.jpg";
import sieci4 from "assets/image/sieci/4.jpg";

import modernizacje1 from "assets/image/modernizacje/1.jpg";
import modernizacje10 from "assets/image/modernizacje/10.jpg";
import modernizacje11 from "assets/image/modernizacje/11.jpg";
import modernizacje2 from "assets/image/modernizacje/2.jpg";
import modernizacje3 from "assets/image/modernizacje/3.jpg";
import modernizacje4 from "assets/image/modernizacje/4.jpg";
import modernizacje5 from "assets/image/modernizacje/5.jpg";
import modernizacje6 from "assets/image/modernizacje/6.jpg";
import modernizacje7 from "assets/image/modernizacje/7.jpg";
import modernizacje8 from "assets/image/modernizacje/8.jpg";
import modernizacje9 from "assets/image/modernizacje/9.jpg";

import roboty_ziemne1 from "assets/image/roboty_ziemne/1.jpg";
import roboty_ziemne10 from "assets/image/roboty_ziemne/10.jpg";
import roboty_ziemne11 from "assets/image/roboty_ziemne/11.jpg";
import roboty_ziemne12 from "assets/image/roboty_ziemne/12.jpg";
import roboty_ziemne13 from "assets/image/roboty_ziemne/13.jpg";
import roboty_ziemne14 from "assets/image/roboty_ziemne/14.jpg";
import roboty_ziemne15 from "assets/image/roboty_ziemne/15.jpg";
import roboty_ziemne16 from "assets/image/roboty_ziemne/16.jpg";
import roboty_ziemne17 from "assets/image/roboty_ziemne/17.jpg";
import roboty_ziemne2 from "assets/image/roboty_ziemne/2.jpg";
import roboty_ziemne3 from "assets/image/roboty_ziemne/3.jpg";
import roboty_ziemne4 from "assets/image/roboty_ziemne/4.jpg";
import roboty_ziemne5 from "assets/image/roboty_ziemne/5.jpg";
import roboty_ziemne6 from "assets/image/roboty_ziemne/6.jpg";
import roboty_ziemne7 from "assets/image/roboty_ziemne/7.jpg";
import roboty_ziemne8 from "assets/image/roboty_ziemne/8.jpg";
import roboty_ziemne9 from "assets/image/roboty_ziemne/9.jpg";

import nowe_instalacje1 from "assets/image/nowe_instalacje/1.jpg";
import nowe_instalacje10 from "assets/image/nowe_instalacje/10.jpg";
import nowe_instalacje11 from "assets/image/nowe_instalacje/11.jpg";
import nowe_instalacje12 from "assets/image/nowe_instalacje/12.jpg";
import nowe_instalacje13 from "assets/image/nowe_instalacje/13.jpg";
import nowe_instalacje14 from "assets/image/nowe_instalacje/14.jpg";
import nowe_instalacje2 from "assets/image/nowe_instalacje/2.jpg";
import nowe_instalacje3 from "assets/image/nowe_instalacje/3.jpg";
import nowe_instalacje4 from "assets/image/nowe_instalacje/4.jpg";
import nowe_instalacje5 from "assets/image/nowe_instalacje/5.jpg";
import nowe_instalacje6 from "assets/image/nowe_instalacje/6.jpg";
import nowe_instalacje7 from "assets/image/nowe_instalacje/7.jpg";
import nowe_instalacje8 from "assets/image/nowe_instalacje/8.jpg";
import nowe_instalacje9 from "assets/image/nowe_instalacje/9.jpg";

import remont_instalacji1 from "assets/image/remont_instalacji/1.jpg";
import remont_instalacji10 from "assets/image/remont_instalacji/10.jpg";
import remont_instalacji11 from "assets/image/remont_instalacji/11.jpg";
import remont_instalacji2 from "assets/image/remont_instalacji/2.jpg";
import remont_instalacji3 from "assets/image/remont_instalacji/3.jpg";
import remont_instalacji4 from "assets/image/remont_instalacji/4.jpg";
import remont_instalacji5 from "assets/image/remont_instalacji/5.jpg";
import remont_instalacji6 from "assets/image/remont_instalacji/6.jpg";
import remont_instalacji7 from "assets/image/remont_instalacji/7.jpg";
import remont_instalacji8 from "assets/image/remont_instalacji/8.jpg";
import remont_instalacji9 from "assets/image/remont_instalacji/9.jpg";

import { Container, HeaderText, Section } from "styles";
import { CarouselImage, CarouselTitle, CarouselWrapper } from "./styles";

const About = () => {
	const galleryRef = useRef(null);
	const { isTabletWidth, isSmallDesktopWidth } = useResolution();
	const { isVisible } = useOnScreen(galleryRef);

	const params = {
		wrapAround: true,
		cellAlign: "center",
		cellSpacing: !isTabletWidth ? 0 : 2,
		style: { margin: "80px 0" },
		slidesToShow: !isTabletWidth ? 1 : isSmallDesktopWidth ? 3 : 2,
		renderTopCenterControls: ({ currentSlide, slideCount }) => (
			<CarouselTitle as='h3' size='h3' color='black' left='far'>
				{currentSlide + 1}/{slideCount}
			</CarouselTitle>
		),
		defaultControlsConfig: {
			prevButtonText: "Poprzednie",
			nextButtonText: "Następne",
			pagingDotsStyle: {
				fill: "green",
				padding: "0 10px",
			},
		},
	};

	return (
		<Section ref={galleryRef} id='gallery_section'>
			<Container>
				<HeaderText size='h2' color='black'>
					Galeria
				</HeaderText>
				{/* oświetlenie */}
				<CarouselWrapper
					{...params}
					frameAriaLabel='Zdjęcia przedstawiające wykonane oświetlenie'
					renderTopLeftControls={() => (
						<CarouselTitle as='h3' size='h3' color='black'>
							Oświetlenie
						</CarouselTitle>
					)}>
					<CarouselImage
						src={oswietlenie1}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={oswietlenie2}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={oswietlenie3}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={oswietlenie4}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={oswietlenie5}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={oswietlenie6}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={oswietlenie7}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={oswietlenie8}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={oswietlenie9}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
				</CarouselWrapper>
				{/* Sieć */}
				<CarouselWrapper
					{...params}
					frameAriaLabel='Zdjęcia przedstawiające wykonane oświetlenie'
					renderTopLeftControls={() => (
						<CarouselTitle as='h3' size='h3' color='black'>
							Sieć
						</CarouselTitle>
					)}>
					<CarouselImage
						src={sieci1}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={sieci2}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={sieci3}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={sieci4}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
				</CarouselWrapper>
				{/* Modernizacje */}
				<CarouselWrapper
					{...params}
					frameAriaLabel='Zdjęcia przedstawiające wykonane oświetlenie'
					renderTopLeftControls={() => (
						<CarouselTitle as='h3' size='h3' color='black'>
							Modernizacje
						</CarouselTitle>
					)}>
					<CarouselImage
						src={modernizacje1}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={modernizacje2}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={modernizacje3}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={modernizacje4}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={modernizacje5}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={modernizacje6}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={modernizacje7}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={modernizacje8}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={modernizacje9}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={modernizacje10}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={modernizacje11}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
				</CarouselWrapper>
				{/* Roboty ziemne */}
				<CarouselWrapper
					{...params}
					frameAriaLabel='Zdjęcia przedstawiające wykonane oświetlenie'
					renderTopLeftControls={() => (
						<CarouselTitle as='h3' size='h3' color='black'>
							Roboty ziemne
						</CarouselTitle>
					)}>
					<CarouselImage
						src={roboty_ziemne1}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne2}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne3}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne4}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne5}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne6}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne7}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne8}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne9}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne10}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne11}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne12}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne13}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne14}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne15}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne16}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={roboty_ziemne17}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
				</CarouselWrapper>
				{/* Nowe instalacje */}
				<CarouselWrapper
					{...params}
					frameAriaLabel='Zdjęcia przedstawiające wykonane oświetlenie'
					renderTopLeftControls={() => (
						<CarouselTitle as='h3' size='h3' color='black'>
							Nowe instalacje
						</CarouselTitle>
					)}>
					<CarouselImage
						src={nowe_instalacje1}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje2}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje3}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje4}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje5}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje6}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje7}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje8}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje9}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje10}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje11}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje12}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje13}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={nowe_instalacje14}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
				</CarouselWrapper>
				{/* Remont instalacji */}
				<CarouselWrapper
					{...params}
					frameAriaLabel='Zdjęcia przedstawiające wykonane oświetlenie'
					renderTopLeftControls={() => (
						<CarouselTitle as='h3' size='h3' color='black'>
							Remont instalacji
						</CarouselTitle>
					)}>
					<CarouselImage
						src={remont_instalacji1}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={remont_instalacji2}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={remont_instalacji3}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={remont_instalacji4}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={remont_instalacji5}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={remont_instalacji6}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={remont_instalacji7}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={remont_instalacji8}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 420}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={remont_instalacji9}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={remont_instalacji10}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
					<CarouselImage
						src={remont_instalacji11}
						width={!isTabletWidth ? 400 : isSmallDesktopWidth ? 400 : 370}
						height={!isTabletWidth ? 420 : 450}
					/>
				</CarouselWrapper>

				{/* Rozdzielnie */}
				<CarouselWrapper
					{...params}
					frameAriaLabel='Zdjęcia przedstawiające wykonane rozdzielnie'
					renderTopLeftControls={() => (
						<CarouselTitle as='h3' size='h3' color='black'>
							Rozdzielnia
						</CarouselTitle>
					)}>
					<CarouselImage src={rozdzielnia1} width={!isTabletWidth ? 200 : 270} height={!isTabletWidth ? 320 : 450} />
					<CarouselImage src={rozdzielnia2} width={!isTabletWidth ? 200 : 270} height={!isTabletWidth ? 320 : 450} />
					<CarouselImage src={rozdzielnia3} width={!isTabletWidth ? 200 : 270} height={!isTabletWidth ? 320 : 450} />
				</CarouselWrapper>
			</Container>
		</Section>
	);
};

export default About;
