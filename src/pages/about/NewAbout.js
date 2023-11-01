import React, { useContext, useRef } from "react";
import { aboutCompany } from "../../assets/data/consts";
import idea from "../../assets/idea.png";
import support1 from "../../assets/support1.png";
import shield from "../../assets/shield.png";
import support from "../../assets/support.png";
import extensionCord from "../../assets/extension-cord.png";
import { Container, Section } from "../styles/styles";
import Header from "components/Header";
import { useOnScreen } from "hooks/useOnScreen";
import { NavigationContext } from "context";
import { HeaderText } from "components/Header/styles";

const About = () => {
  const aboutRef = useRef(null);
  const { isVisible } = useOnScreen(aboutRef);

  return (
    <>
	<Section ref={aboutRef} id="about_section" relative height={"noFullHeight"}>
      <Container >
	  	<HeaderText size="h2" color="black">
			O nas
		</HeaderText>
		Jesteśmy profesjonalną firmą elektryczną specjalizującą się w kompleksowych usługach z zakresu instalacji, naprawy i montażu systemów elektrycznych. Nasza działalność skupia się na świadczeniu wysokiej jakości usług elektrycznych, które obejmują zarówno obszar domowy, jak i komercyjny. 
             Nasi wykwalifikowani elektrycy posiadają bogate doświadczenie w branży i są wyposażeni w niezbędne umiejętności oraz narzędzia, aby skutecznie radzić sobie z wszelkimi problemami związanymi z instalacjami elektrycznymi. Bez względu na to, czy potrzebujesz nowej instalacji elektrycznej w swoim domu, czy naprawy awarii prądu w swojej firmie, możemy zaoferować profesjonalną pomoc. Nasze usługi obejmują kompleksowe instalacje elektryczne, w tym oświetlenie elektryczne. 
             Jesteśmy świadomi znaczenia bezpieczeństwa elektrycznego, dlatego też oferujemy usługi dotyczące kontroli i pomiarów elektrycznych. Nasi elektrycy przeprowadzą dokładne pomiary, aby upewnić się, że Twoje instalacje są zgodne z najnowszymi normami i przepisami. Również zajmujemy się modernizacją istniejących instalacji, dostosowując je do nowoczesnych standardów i wymagań. Jeśli potrzebujesz podłączyć sprzęt AGD lub potrzebujesz profesjonalnej pomocy w zakresie oszczędzania energii, nasi eksperci służą fachową radą i wsparciem. 
             Naszą firmę wyróżniają solidność, profesjonalizm i skupienie na zadowoleniu klienta. Zależy nam na tym, aby nasze usługi były nie tylko fachowe, ale także dostarczały satysfakcję i pewność, że Twoje instalacje elektryczne są w dobrych rękach. 
             Jeśli szukasz niezawodnej firmy elektrycznej, która oferuje usługi instalacyjne, naprawcze i modernizacyjne, zwróć się do nas. Jesteśmy gotowi pomóc w realizacji Twoich potrzeb związanych z elektryką, zapewniając profesjonalne i skuteczne rozwiązania.
        {/* <div className="ikony">
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
                <p>{info.description}</p>
              </div>
            );
          })}
        </div> */}
      </Container>
    </Section>
	</>
  );
};

export default About;
