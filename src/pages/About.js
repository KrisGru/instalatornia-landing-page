import React from "react";
import { useNav } from "../route/customHooks/useNav";
import { services } from "../assets/data/consts";
import { ReactComponent as FacebookIcon } from "../assets/icons/facebook.svg";
import TableRow from "../components/TableRow";
import "./Page.css";

const About = () => {
  const aboutRef = useNav("About");
  return (
    <section ref={aboutRef} id="aboutContainer">
      <div>
        <div className="aboutHeader">
          <FacebookIcon />
          <h1>USŁUGI ELEKTRYCZNE</h1>
        </div>
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

export default About;
