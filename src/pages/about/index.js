import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useOnScreen } from "hooks/useOnScreen";
import { useRef } from "react";
import CountUp from "react-countup";
import { Container, Flex, HeaderText, Section, Text } from "styles";

const About = () => {
	const aboutRef = useRef(null);
	const { isVisible } = useOnScreen(aboutRef, "0.9");

	return (
		<>
			<Section
				ref={aboutRef}
				id='about_section'
				relative='true'
				height={"noFullHeight"}>
				<Container>
					<HeaderText size='h2' color='black'>
						O nas
					</HeaderText>
					<Text color='black'>
						Jesteśmy profesjonalną firmą elektryczną specjalizującą
						się w kompleksowych usługach z zakresu instalacji,
						naprawy i montażu systemów elektrycznych. Nasza
						działalność skupia się na świadczeniu wysokiej jakości
						usług elektrycznych, które obejmują zarówno obszar
						domowy, jak i komercyjny. Nasi wykwalifikowani elektrycy
						posiadają bogate doświadczenie w branży i są wyposażeni
						w niezbędne umiejętności oraz narzędzia, aby skutecznie
						radzić sobie z wszelkimi problemami związanymi z
						instalacjami elektrycznymi. Bez względu na to, czy
						potrzebujesz nowej instalacji elektrycznej w swoim domu,
						czy naprawy awarii prądu w swojej firmie, możemy
						zaoferować profesjonalną pomoc. Nasze usługi obejmują
						kompleksowe instalacje elektryczne, w tym oświetlenie
						elektryczne. Jesteśmy świadomi znaczenia bezpieczeństwa
						elektrycznego, dlatego też oferujemy usługi dotyczące
						kontroli i pomiarów elektrycznych. Nasi elektrycy
						przeprowadzą dokładne pomiary, aby upewnić się, że Twoje
						instalacje są zgodne z najnowszymi normami i przepisami.
						Również zajmujemy się modernizacją istniejących
						instalacji, dostosowując je do nowoczesnych standardów i
						wymagań. Jeśli potrzebujesz podłączyć sprzęt AGD lub
						potrzebujesz profesjonalnej pomocy w zakresie
						oszczędzania energii, nasi eksperci służą fachową radą i
						wsparciem. Naszą firmę wyróżniają solidność,
						profesjonalizm i skupienie na zadowoleniu klienta.
						Zależy nam na tym, aby nasze usługi były nie tylko
						fachowe, ale także dostarczały satysfakcję i pewność, że
						Twoje instalacje elektryczne są w dobrych rękach. Jeśli
						szukasz niezawodnej firmy elektrycznej, która oferuje
						usługi instalacyjne, naprawcze i modernizacyjne, zwróć
						się do nas. Jesteśmy gotowi pomóc w realizacji Twoich
						potrzeb związanych z elektryką, zapewniając
						profesjonalne i skuteczne rozwiązania.
					</Text>
				</Container>
			</Section>
			<Section
				height='noFullHeight'
				style={{ backgroundColor: "#f5fff0" }}>
				<Container padding='noPadding'>
					<Flex justify_content='space-around'>
						<Flex direction='column'>
							<FontAwesomeIcon
								icon='fa-solid fa-check'
								style={{ color: "#008000" }}
								size='4x'
							/>
							<h1 style={{ padding: "15px 0 0" }}>
								<CountUp
									duration={1}
									end={1500}
									redraw={true}
								/>
								+
							</h1>
							<p style={{ color: "#5f5f5f" }}>Wykonanych usług</p>
						</Flex>
						<Flex direction='column'>
							<FontAwesomeIcon
								icon='fa-solid fa-clock-rotate-left'
								style={{ color: "#008000" }}
								size='4x'
							/>
							<h1 style={{ padding: "15px 0 0" }}>
								<CountUp duration={2} end={10} redraw={true} />
							</h1>
							<p style={{ color: "#5f5f5f" }}>
								Lat doświadczenia
							</p>
						</Flex>
						<Flex direction='column'>
							<FontAwesomeIcon
								icon='fa-solid fa-comments'
								style={{ color: "#008000" }}
								size='4x'
							/>
							<h1 style={{ padding: "15px 0 0" }}>
								<CountUp duration={1} end={900} redraw={true} />
								+
							</h1>
							<p style={{ color: "#5f5f5f" }}>
								Rekomendacji klientów
							</p>
						</Flex>
					</Flex>
				</Container>
			</Section>
		</>
	);
};

export default About;
