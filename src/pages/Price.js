import React, { useContext, useRef } from "react";
import { services } from "../assets/data/consts";

import TableRow from "../components/TableRow";

import { Container, Section } from "./styles/styles";
import Header from "../components/Header";
import { useOnScreen } from "hooks/useOnScreen";
import { NavigationContext } from "context";

const Price = () => {
  const priceRef = useRef(null);
  const { isVisible } = useOnScreen(priceRef);

  return (
    <Section ref={priceRef} id="price_section">
      <Container padding={"bigPadding"}>
        <Header section="price" colorText="white" />
        <ul className="service-list">
          <TableRow name="Usługa" price="Cena" />
          {services.map((service, index) => (
            <TableRow key={index} name={service.name} price={service.price} />
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Price;
