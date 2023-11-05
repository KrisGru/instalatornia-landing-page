import rozdzielnia1 from "assets/image/rozdzielnie/rozdzielnia1.jpg";
import rozdzielnia2 from "assets/image/rozdzielnie/rozdzielnia2.jpg";
import rozdzielnia3 from "assets/image/rozdzielnie/rozdzielnia3.jpg";
import { useOnScreen } from "hooks/useOnScreen";
import Carousel from "nuka-carousel";
import { useRef } from "react";
import { Container, HeaderText, Section } from "styles";

const About = () => {
	const galleryRef = useRef(null);
	const { isVisible } = useOnScreen(galleryRef);

	return (
		<Section ref={galleryRef} id='gallery_section'>
			<Container>
				<HeaderText size='h2' color='black'>
					Galeria
				</HeaderText>

				<Carousel
					wrapAround={true}
					slidesToShow={3}
					disableEdgeSwiping={true}
					pagingDotsClassName='paddingClassName'
					scrollMode='page'
					cellSpacing={80}
					style={{ height: "500px", margin: "40px 0" }}
					renderTopCenterControls={({ currentSlide }) => (
						<p
							style={{
								position: "absolute",
								top: "-30px",
								left: "20px",
							}}>
							Rozdzielnia - {currentSlide}/5
						</p>
					)}
					defaultControlsConfig={{
						nextButtonText: "Nastepne",
						prevButtonText: "Poprzednie",
						pagingDotsStyle: {
							fill: "green",
							padding: "0 10px",
						},
					}}>
					<img
						src={rozdzielnia1}
						style={{
							objectFit: "cover",
							objectPosition: "center",
							width: "100%",
						}}
					/>
					<img
						src={rozdzielnia2}
						style={{
							objectFit: "cover",
							objectPosition: "center",
							width: "100%",
						}}
					/>
					<img
						src={rozdzielnia3}
						style={{
							objectFit: "cover",
							objectPosition: "center",
							width: "100%",
						}}
					/>
					<img
						src={rozdzielnia1}
						style={{
							objectFit: "cover",
							objectPosition: "center",
							width: "100%",
						}}
					/>
					<img
						src={rozdzielnia2}
						style={{
							objectFit: "cover",
							objectPosition: "center",
							width: "100%",
						}}
					/>
				</Carousel>

				<Carousel
					wrapAround={true}
					slidesToShow={3}
					disableEdgeSwiping={true}
					pagingDotsClassName='paddingClassName'
					scrollMode='page'
					cellSpacing={80}
					style={{ height: "500px", margin: "40px 0" }}
					renderTopCenterControls={({ currentSlide }) => (
						<p
							style={{
								position: "absolute",
								top: "-30px",
								left: "20px",
							}}>
							Modernizacje - {currentSlide}/3
						</p>
					)}
					defaultControlsConfig={{
						nextButtonText: "Nastepne",
						prevButtonText: "Poprzednie",
						pagingDotsStyle: {
							fill: "green",
							padding: "0 10px",
						},
					}}>
					<img
						src={rozdzielnia1}
						style={{
							objectFit: "cover",
							objectPosition: "center",
							width: "100%",
						}}
					/>
					<img
						src={rozdzielnia2}
						style={{
							objectFit: "cover",
							objectPosition: "center",
							width: "100%",
						}}
					/>
					<img
						src={rozdzielnia3}
						style={{
							objectFit: "cover",
							objectPosition: "center",
							width: "100%",
						}}
					/>
				</Carousel>
			</Container>
		</Section>
	);
};

export default About;
