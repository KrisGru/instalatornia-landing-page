import React from "react";
import { useNav } from "../route/customHooks/useNav";
import { services } from "../assets/data/consts";
import logo from "../assets/logo-test-2.png";
import TableRow from "../components/TableRow";
import Header from "../components/Header";
// import "./Page.css";

const Price = () => {
  const priceRef = useNav("priceContainer");
  return (
    <section ref={priceRef} id="priceContainer">
      <div>
        <Header logo={logo} text="USŁUGI ELEKTRYCZNE" />
        <ul className="service-list">
          <TableRow name="Usługa" price="Cena" />
          {services.map((service, index) => (
            <TableRow key={index} name={service.name} price={service.price} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Price;
